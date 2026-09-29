/**
 * Cloudflare Pages Function: /api/auth
 * Edge Runtime - Operates at ₹0 / $0 Free Tier
 */

const ADMIN_EMAIL = 'vivekdhoundiyal2901@gmail.com'
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
  const secret = env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key'

  if (sessionToken) {
    const verified = await verifyToken(sessionToken, secret)
    if (verified && verified.email === ADMIN_EMAIL) {
      return new Response(JSON.stringify({
        authenticated: true,
        user: ADMIN_EMAIL,
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
  const secret = env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key'
  const expectedPassword = env?.ADMIN_PASSWORD || (typeof process !== 'undefined' ? process.env?.ADMIN_PASSWORD : '')

  // Handle Logout
  if (url.searchParams.get('action') === 'logout') {
    return new Response(JSON.stringify({ success: true, message: 'Logged out successfully' }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Secure`
      }
    })
  }

  // Handle Login
  const clientIp = request.headers.get('CF-Connecting-IP') || '127.0.0.1'
  let body = {}
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const { email, password } = body
  const isEmailValid = email && typeof email === 'string' && email.toLowerCase().trim() === ADMIN_EMAIL
  const isPasswordValid = password && typeof password === 'string' && expectedPassword && (
    await timingSafeEqualStr(password.trim(), expectedPassword.trim())
  )

  if (!isEmailValid || !isPasswordValid) {
    return new Response(JSON.stringify({
      error: 'Invalid email or administrator passphrase.'
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Issue session token valid for 4 hours
  const payload = {
    email: ADMIN_EMAIL,
    exp: Date.now() + 4 * 60 * 60 * 1000
  }
  const sessionToken = await signToken(payload, secret)

  return new Response(JSON.stringify({
    success: true,
    user: ADMIN_EMAIL,
    csrfToken: 'cf_edge_valid',
    message: 'Authenticated successfully'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `${COOKIE_NAME}=${sessionToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=14400; Secure`
    }
  })
}
