import crypto from 'crypto'

// Authorized Administrator Whitelist
export const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'vivekdhoundiyal2901@gmail.com').toLowerCase().trim()
export const GITHUB_ADMIN_USER = (process.env.GITHUB_ADMIN_USER || 'VivekDhoundiyal').trim()

// Server-side Secret for HMAC token signing (never exposed to client)
const SERVER_SECRET = process.env.ADMIN_SECRET || process.env.ADMIN_KEY || 'vivek-secure-session-key-2026-prod'

// Session Cookie Name
export const COOKIE_NAME = 'vd_admin_session'

// In-Memory Rate Limiting Store for Authentication Attempts
// Structure: Map<ipAddress, { count: number, resetAt: number }>
const rateLimitStore = new Map()
const MAX_ATTEMPTS = 5
const LOCKOUT_PERIOD_MS = 15 * 60 * 1000 // 15 minutes

/**
 * Check if the given client IP has exceeded the rate limit.
 */
export function checkRateLimit(ip) {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record) {
    return { allowed: true, remaining: MAX_ATTEMPTS }
  }

  if (now > record.resetAt) {
    rateLimitStore.delete(ip)
    return { allowed: true, remaining: MAX_ATTEMPTS }
  }

  if (record.count >= MAX_ATTEMPTS) {
    const retryAfterSec = Math.ceil((record.resetAt - now) / 1000)
    return { allowed: false, remaining: 0, retryAfterSec }
  }

  return { allowed: true, remaining: MAX_ATTEMPTS - record.count }
}

/**
 * Record a failed authentication attempt for an IP.
 */
export function recordFailedAttempt(ip) {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + LOCKOUT_PERIOD_MS })
  } else {
    record.count += 1
  }
}

/**
 * Reset failed attempts upon successful authentication.
 */
export function resetRateLimit(ip) {
  rateLimitStore.delete(ip)
}

/**
 * Timing-safe string comparison to prevent timing side-channel attacks.
 */
export function timingSafeCompare(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false
  const bufA = Buffer.from(a, 'utf8')
  const bufB = Buffer.from(b, 'utf8')
  if (bufA.length !== bufB.length) {
    // Perform dummy comparison to equalize timing
    crypto.timingSafeEqual(bufA, bufA)
    return false
  }
  return crypto.timingSafeEqual(bufA, bufB)
}

/**
 * Generate a cryptographically signed session token.
 * Valid for 4 hours.
 */
export function createSessionToken(email = ADMIN_EMAIL) {
  const exp = Date.now() + 4 * 60 * 60 * 1000
  const nonce = crypto.randomBytes(16).toString('hex')
  const payload = JSON.stringify({ email: email.toLowerCase(), exp, nonce })
  const base64Payload = Buffer.from(payload, 'utf8').toString('base64url')

  const signature = crypto
    .createHmac('sha256', SERVER_SECRET)
    .update(base64Payload)
    .digest('base64url')

  return `${base64Payload}.${signature}`
}

/**
 * Verify and decode an HMAC-signed session token.
 */
export function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return null

  const parts = token.split('.')
  if (parts.length !== 2) return null

  const [base64Payload, signature] = parts

  // Compute expected signature
  const expectedSignature = crypto
    .createHmac('sha256', SERVER_SECRET)
    .update(base64Payload)
    .digest('base64url')

  if (!timingSafeCompare(signature, expectedSignature)) {
    return null
  }

  try {
    const raw = Buffer.from(base64Payload, 'base64url').toString('utf8')
    const payload = JSON.parse(raw)

    // Check expiration
    if (!payload.exp || Date.now() > payload.exp) {
      return null
    }

    // Check administrator identity whitelist
    if (payload.email?.toLowerCase() !== ADMIN_EMAIL) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

/**
 * Generate a CSRF token for the authenticated session.
 */
export function generateCsrfToken(sessionToken) {
  if (!sessionToken) return null
  return crypto
    .createHmac('sha256', SERVER_SECRET + '_csrf')
    .update(sessionToken)
    .digest('hex')
}

/**
 * Verify CSRF token against session token.
 */
export function verifyCsrfToken(csrfToken, sessionToken) {
  if (!csrfToken || !sessionToken) return false
  const expected = generateCsrfToken(sessionToken)
  return timingSafeCompare(csrfToken, expected)
}

/**
 * Parse cookies from request headers.
 */
export function parseCookies(req) {
  const list = {}
  const rc = req?.headers?.cookie
  if (!rc) return list

  rc.split(';').forEach(cookie => {
    const parts = cookie.split('=')
    const name = parts.shift().trim()
    const value = decodeURIComponent(parts.join('='))
    list[name] = value
  })

  return list
}

/**
 * Comprehensive Server-side Identity & Authorization Guard.
 * Checks:
 * 1. Cloudflare Access Zero Trust headers (Cf-Access-Authenticated-User-Email).
 * 2. HttpOnly Session Cookie (signed with HMAC).
 * 3. Fallback Authorization Bearer header.
 * 
 * Whitelists ONLY the authorized administrator identity.
 */
export function authenticateRequest(req) {
  // 1. Check Cloudflare Access Zero Trust header if deployed behind Cloudflare
  const cfEmail = req?.headers?.['cf-access-authenticated-user-email']
  if (cfEmail && typeof cfEmail === 'string') {
    if (cfEmail.toLowerCase().trim() === ADMIN_EMAIL) {
      return {
        authenticated: true,
        user: ADMIN_EMAIL,
        method: 'cloudflare_access'
      }
    } else {
      // Cloudflare identity present but does NOT match administrator whitelist
      return {
        authenticated: false,
        error: 'Unauthorized identity: Account not in administrator whitelist'
      }
    }
  }

  // 2. Check HttpOnly Session Cookie
  const cookies = parseCookies(req)
  const sessionToken = cookies[COOKIE_NAME]

  if (sessionToken) {
    const session = verifySessionToken(sessionToken)
    if (session) {
      return {
        authenticated: true,
        user: session.email,
        sessionToken,
        method: 'session_cookie'
      }
    }
  }

  // 3. Check Authorization Bearer header (for API clients)
  const authHeader = req?.headers?.authorization
  if (authHeader?.startsWith('Bearer ')) {
    const bearerToken = authHeader.substring(7)
    const session = verifySessionToken(bearerToken)
    if (session) {
      return {
        authenticated: true,
        user: session.email,
        sessionToken: bearerToken,
        method: 'bearer_token'
      }
    }
  }

  return { authenticated: false }
}
