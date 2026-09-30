import {
  ADMIN_EMAIL,
  COOKIE_NAME,
  checkRateLimit,
  recordFailedAttempt,
  resetRateLimit,
  timingSafeCompare,
  createSessionToken,
  generateCsrfToken,
  authenticateRequest
} from '../../lib/auth'

export default function handler(req, res) {
  // Extract client IP address for rate limiting
  const forwarded = req.headers['x-forwarded-for']
  const clientIp = typeof forwarded === 'string'
    ? forwarded.split(',')[0].trim()
    : req.socket.remoteAddress || '127.0.0.1'

  // GET: Check current authentication status (fails closed unconditionally)
  if (req.method === 'GET') {
    return res.status(200).json({ authenticated: false })
  }

  // POST: Login or Logout
  if (req.method === 'POST') {
    const { action } = req.query

    // LOGOUT
    if (action === 'logout') {
      const isProd = process.env.NODE_ENV === 'production'
      res.setHeader('Set-Cookie', [
        `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${isProd ? '; Secure' : ''}`
      ])
      return res.status(200).json({ success: true, message: 'Logged out successfully' })
    }

    // LOGIN: Check Rate Limit first
    const rateCheck = checkRateLimit(clientIp)
    if (!rateCheck.allowed) {
      res.setHeader('Retry-After', String(rateCheck.retryAfterSec || 60))
      return res.status(429).json({
        error: `Too many failed attempts. Account locked temporarily for ${rateCheck.retryAfterSec}s to prevent brute-force attacks.`
      })
    }

    const { email, password } = req.body || {}
    const expectedSecret = process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET || ''

    const emailValid = email && typeof email === 'string' && email.toLowerCase().trim() === ADMIN_EMAIL
    const passwordValid = password && typeof password === 'string' && expectedSecret && (
      timingSafeCompare(password.trim(), expectedSecret.trim())
    )

    if (!emailValid || !passwordValid) {
      recordFailedAttempt(clientIp)
      const remaining = checkRateLimit(clientIp).remaining
      return res.status(401).json({
        error: `Invalid email or administrator passphrase. ${remaining} attempt(s) remaining.`
      })
    }

    // Success: Reset rate limit counter
    resetRateLimit(clientIp)

    // Issue cryptographically signed session token
    const sessionToken = createSessionToken(ADMIN_EMAIL)
    const csrfToken = generateCsrfToken(sessionToken)
    const isProd = process.env.NODE_ENV === 'production'

    // Set HttpOnly, SameSite=Strict cookie
    res.setHeader('Set-Cookie', [
      `${COOKIE_NAME}=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=14400${isProd ? '; Secure' : ''}`
    ])

    return res.status(200).json({
      success: true,
      user: ADMIN_EMAIL,
      csrfToken,
      message: 'Authenticated successfully'
    })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
