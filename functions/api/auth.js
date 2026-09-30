/**
 * Cloudflare Pages Function: /api/auth
 * Edge Runtime - Robust Authentication with D1 Database Session Integration
 */

const DEFAULT_ADMIN_EMAIL = 'vivekdhoundiyal2901@gmail.com'
const DEFAULT_ADMIN_PASSWORD = 'Sweta@0201'
const DEFAULT_SESSION_SECRET = 'cf_pages_edge_session_signing_key'
const COOKIE_NAME = 'vd_admin_session'
const MAX_ATTEMPTS = 5
const LOCKOUT_SECONDS = 60

function parseCookies(cookieHeader) {
  const list = {}
  if (!cookieHeader) return list
  cookieHeader.split(';').forEach(cookie => {
    let [name, ...rest] = cookie.split('=')
    name = name?.trim()
    if (!name) return
    const value = rest.join('=').trim()
    list[name] = decodeURIComponent(value)
  })
  return list
}

async function timingSafeEqualStr(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false
  const encoder = new TextEncoder()
  const aBuf = encoder.encode(a)
  const bBuf = encoder.encode(b)
  if (aBuf.byteLength !== bBuf.byteLength) return false
  let mismatch = 0
  for (let i = 0; i < aBuf.byteLength; i++) {
    mismatch |= aBuf[i] ^ bBuf[i]
  }
  return mismatch === 0
}

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function verifyToken(token, secret) {
  try {
    const [payloadB64, signatureB64] = token.split('.')
    if (!payloadB64 || !signatureB64) return null
    const payloadJson = atob(payloadB64)
    const payload = JSON.parse(payloadJson)
    if (!payload.exp || Date.now() > payload.exp) return null

    // Verify HMAC-SHA256 signature
    const enc = new TextEncoder()
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    )
    const sigBytes = Uint8Array.from(atob(signatureB64), c => c.charCodeAt(0))
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(payloadB64))
    return valid ? payload : null
  } catch {
    return null
  }
}

async function signToken(payload, secret) {
  const enc = new TextEncoder()
  const payloadB64 = btoa(JSON.stringify(payload))
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(payloadB64))
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sigBuffer)))
  return `${payloadB64}.${sigB64}`
}

export async function onRequestGet(context) {
  const { request, env } = context
  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || DEFAULT_SESSION_SECRET).replace(/^["']|["']$/g, '').trim()
  const targetEmail = (env?.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL).toLowerCase().trim()
  const db = env?.DB

  if (sessionToken) {
    const verified = await verifyToken(sessionToken, secret)
    if (verified && verified.email === targetEmail) {
      // If D1 is available, verify session is still active in admin_sessions table
      if (db) {
        try {
          const tokenHash = await sha256Hex(sessionToken)
          const sessionRow = await db.prepare('SELECT email, expires_at FROM admin_sessions WHERE token_hash = ?').bind(tokenHash).first()
          if (!sessionRow || sessionRow.expires_at < Date.now()) {
            return new Response(JSON.stringify({ authenticated: false }), {
              headers: { 'Content-Type': 'application/json' }
            })
          }
        } catch (err) {
          console.error('[D1 Session Verify]:', err.message)
        }
      }

      return new Response(JSON.stringify({
        authenticated: true,
        user: targetEmail,
        csrfToken: 'cf_edge_valid'
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  return new Response(JSON.stringify({ authenticated: false }), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function onRequestPost(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const db = env?.DB

  const targetEmail = (env?.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL).toLowerCase().trim()
  const rawExpectedPassword = env?.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD
  const cleanExpectedPassword = (typeof rawExpectedPassword === 'string' ? rawExpectedPassword : '')
    .replace(/^["']|["']$/g, '')
    .trim()
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || DEFAULT_SESSION_SECRET)
    .replace(/^["']|["']$/g, '')
    .trim()

  // Handle Logout
  if (url.searchParams.get('action') === 'logout') {
    const cookies = parseCookies(request.headers.get('Cookie'))
    const sessionToken = cookies[COOKIE_NAME]
    if (db && sessionToken) {
      try {
        const tokenHash = await sha256Hex(sessionToken)
        await db.prepare('DELETE FROM admin_sessions WHERE token_hash = ?').bind(tokenHash).run()
      } catch (err) {
        console.error('[D1 Logout Error]:', err.message)
      }
    }
    return new Response(JSON.stringify({ success: true, message: 'Logged out successfully' }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Secure`
      }
    })
  }

  // Handle Login
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1'

  // 1. D1 Rate Limiting Check
  if (db) {
    try {
      const rateRow = await db.prepare('SELECT attempts, locked_until FROM rate_limits WHERE ip_key = ?').bind(clientIp).first()
      const now = Date.now()
      if (rateRow && rateRow.locked_until > now) {
        const retryAfterSec = Math.ceil((rateRow.locked_until - now) / 1000)
        return new Response(JSON.stringify({
          error: `Too many failed attempts. Account locked temporarily for ${retryAfterSec}s to prevent brute-force attacks.`
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retryAfterSec)
          }
        })
      }
    } catch (err) {
      console.error('[D1 RateLimit Read]:', err.message)
    }
  }

  let body = {}
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const { email, password } = body || {}
  const receivedEmail = (email && typeof email === 'string') ? email.toLowerCase().trim() : ''
  const receivedPassword = (password && typeof password === 'string') ? password.trim() : ''

  const isEmailValid = receivedEmail.length > 0 && receivedEmail === targetEmail
  const isPasswordValid = receivedPassword.length > 0 && cleanExpectedPassword.length > 0 && (
    await timingSafeEqualStr(receivedPassword, cleanExpectedPassword)
  )

  // Safe server-side diagnostic logging (NEVER logs passwords or secrets)
  console.log('[Auth Login Attempt]', JSON.stringify({
    hasAdminEmailEnv: Boolean(env?.ADMIN_EMAIL),
    hasAdminPasswordEnv: Boolean(env?.ADMIN_PASSWORD),
    hasSessionSecretEnv: Boolean(env?.SESSION_SECRET),
    hasDbBinding: Boolean(env?.DB),
    receivedEmail,
    emailMatch: isEmailValid,
    passwordMatch: isPasswordValid
  }))

  if (!isEmailValid || !isPasswordValid) {
    // Record failed attempt in D1 rate_limits
    if (db) {
      try {
        const now = Date.now()
        const lockoutTime = now + (LOCKOUT_SECONDS * 1000)
        await db.prepare(`
          INSERT INTO rate_limits (ip_key, attempts, last_attempt_at, locked_until)
          VALUES (?1, 1, ?2, 0)
          ON CONFLICT(ip_key) DO UPDATE SET
            attempts = attempts + 1,
            last_attempt_at = ?2,
            locked_until = CASE WHEN attempts >= ?3 THEN ?4 ELSE 0 END
        `).bind(clientIp, now, MAX_ATTEMPTS, lockoutTime).run()
      } catch (err) {
        console.error('[D1 RateLimit Record]:', err.message)
      }
    }

    return new Response(JSON.stringify({
      error: 'Invalid email or administrator passphrase.',
      _diag: {
        hasAdminPasswordEnv: Boolean(env?.ADMIN_PASSWORD),
        hasDbBinding: Boolean(env?.DB),
        emailMatch: isEmailValid,
        passwordMatch: isPasswordValid
      }
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Success: Clear D1 rate limits
  if (db) {
    try {
      await db.prepare('DELETE FROM rate_limits WHERE ip_key = ?').bind(clientIp).run()
    } catch (err) {
      console.error('[D1 RateLimit Clear]:', err.message)
    }
  }

  // Issue session token valid for 4 hours
  const now = Date.now()
  const exp = now + 4 * 60 * 60 * 1000
  const payload = {
    email: targetEmail,
    exp
  }
  const sessionToken = await signToken(payload, secret)

  // Store session in D1 admin_sessions table
  let sessionStoredInD1 = false
  if (db) {
    try {
      const tokenHash = await sha256Hex(sessionToken)
      await db.prepare(`
        INSERT INTO admin_sessions (token_hash, email, created_at, expires_at)
        VALUES (?1, ?2, ?3, ?4)
      `).bind(tokenHash, targetEmail, now, exp).run()
      sessionStoredInD1 = true
    } catch (err) {
      console.error('[D1 Session Insert]:', err.message)
    }
  }

  return new Response(JSON.stringify({
    success: true,
    user: targetEmail,
    csrfToken: 'cf_edge_valid',
    message: 'Authenticated successfully',
    _diag: {
      hasDbBinding: Boolean(env?.DB),
      sessionStored: sessionStoredInD1
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `${COOKIE_NAME}=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=14400; Secure`
    }
  })
}
