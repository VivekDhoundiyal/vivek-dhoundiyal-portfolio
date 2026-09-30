/**
 * Cloudflare Pages Function: /api/revisions
 * Edge Runtime - Revision History and 1-Click Rollback
 */

const ADMIN_EMAIL = 'vivekdhoundiyal2901@gmail.com'
const COOKIE_NAME = 'vd_admin_session'

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

async function verifyToken(token, secret) {
  try {
    const [payloadB64, signatureB64] = token.split('.')
    if (!payloadB64 || !signatureB64) return null
    const payloadJson = atob(payloadB64)
    const payload = JSON.parse(payloadJson)
    if (!payload.exp || Date.now() > payload.exp) return null

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

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function isSessionActive(db, token, targetEmail, secret) {
  if (!token || !db) return false
  const verified = await verifyToken(token, secret)
  if (!verified || verified.email !== targetEmail) return false

  try {
    const tokenHash = await sha256Hex(token)
    const sessionRow = await db.prepare('SELECT email, expires_at FROM admin_sessions WHERE token_hash = ?').bind(tokenHash).first()
    if (sessionRow && sessionRow.expires_at >= Date.now()) {
      return true
    }
  } catch {
    return false
  }
  return false
}

export async function onRequestGet(context) {
  const { request, env } = context
  const db = env?.DB

  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
  const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
  const active = await isSessionActive(db, sessionToken, targetEmail, secret)

  if (!active) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Admin authentication required' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  if (!db) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const stmt = db.prepare(`
      SELECT id, version_number, note, created_at, created_by
      FROM revisions
      ORDER BY created_at DESC
      LIMIT 50
    `)
    const result = await stmt.all()
    return new Response(JSON.stringify(result.results || []), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function onRequestPost(context) {
  const { request, env } = context
  const db = env?.DB

  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
  const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
  const active = await isSessionActive(db, sessionToken, targetEmail, secret)

  if (!active) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Admin authentication required' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  let body = {}
  try {
    body = await request.json()
  } catch {}

  const { revisionId } = body
  if (!revisionId) {
    return new Response(JSON.stringify({ error: 'Missing revisionId' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  if (!db) {
    return new Response(JSON.stringify({ error: 'Database uninitialized' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const row = await db.prepare('SELECT content, version_number FROM revisions WHERE id = ?').bind(revisionId).first()
    if (!row || !row.content) {
      return new Response(JSON.stringify({ error: 'Revision not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const now = Date.now()
    await db.prepare(`
      UPDATE site_content
      SET draft_content = ?1,
          updated_at = ?2
      WHERE id = 'active'
    `).bind(row.content, now).run()

    return new Response(JSON.stringify({
      success: true,
      message: `Restored Version ${row.version_number} to Draft mode`,
      restoredVersion: row.version_number,
      content: JSON.parse(row.content)
    }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
