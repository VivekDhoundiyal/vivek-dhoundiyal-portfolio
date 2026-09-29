/**
 * Cloudflare Pages Function: /api/publish
 * Edge Runtime - Publishes draft content to live website & records revision
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

export async function onRequestPost(context) {
  const { request, env } = context
  const db = env.DB

  // Authenticate Admin
  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key'
  const verified = sessionToken ? await verifyToken(sessionToken, secret) : null

  if (!verified || verified.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Admin authentication required to publish' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  let body = {}
  try {
    body = await request.json()
  } catch {}

  const note = body.note || 'Site content published via Admin CMS'
  const now = Date.now()
  const revisionId = `rev_${now}_${Math.random().toString(36).substring(2, 7)}`

  if (!db) {
    return new Response(JSON.stringify({ error: 'Database uninitialized' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const active = await db.prepare('SELECT draft_content FROM site_content WHERE id = ?').bind('active').first()
    const draftStr = active?.draft_content
    if (!draftStr) {
      return new Response(JSON.stringify({ error: 'No draft content found to publish' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const lastRev = await db.prepare('SELECT MAX(version_number) as max_v FROM revisions').first()
    const nextVersion = (lastRev?.max_v || 0) + 1

    await db.batch([
      db.prepare(`
        UPDATE site_content
        SET published_content = draft_content,
            published_at = ?1,
            published_by = ?2
        WHERE id = 'active'
      `).bind(now, ADMIN_EMAIL),
      db.prepare(`
        INSERT INTO revisions (id, version_number, content, note, created_at, created_by)
        VALUES (?1, ?2, ?3, ?4, ?5, ?6)
      `).bind(revisionId, nextVersion, draftStr, note, now, ADMIN_EMAIL)
    ])

    return new Response(JSON.stringify({
      success: true,
      message: 'Published successfully to Cloudflare D1 and Edge Network',
      version: nextVersion,
      revisionId,
      published_at: now
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
