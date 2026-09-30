import defaultSiteContent from '../../data/siteContent.json'

const ADMIN_EMAIL = 'vivekdhoundiyal2901@gmail.com'
const COOKIE_NAME = 'vd_admin_session'

async function ensureTableAndSeed(db, contentJsonStr, adminEmail) {
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS site_content (
        id TEXT PRIMARY KEY DEFAULT 'active',
        published_content TEXT NOT NULL,
        draft_content TEXT NOT NULL,
        published_at INTEGER,
        updated_at INTEGER NOT NULL,
        published_by TEXT
      )
    `).run()

    const now = Date.now()
    await db.prepare(`
      INSERT INTO site_content (id, published_content, draft_content, updated_at, published_by)
      VALUES ('active', ?1, ?1, ?2, ?3)
      ON CONFLICT(id) DO NOTHING
    `).bind(contentJsonStr, now, adminEmail).run()
  } catch (err) {
    console.error('[D1 Auto-seed error]:', err)
  }
}

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

export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const isPreview = url.searchParams.get('preview') === 'true'
  const isDraftRequest = url.searchParams.get('mode') === 'draft'

  const db = env.DB

  // 1. Query Cloudflare D1
  if (db) {
    try {
      const stmt = db.prepare('SELECT published_content, draft_content FROM site_content WHERE id = ?').bind('active')
      const row = await stmt.first()

      if (row) {
        let contentJson = row.published_content

        // If preview or draft requested, check admin authentication
        if (isPreview || isDraftRequest) {
          const cookies = parseCookies(request.headers.get('Cookie'))
          const sessionToken = cookies[COOKIE_NAME]
          const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
          const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
          const verified = sessionToken ? await verifyToken(sessionToken, secret) : null

          if (verified && verified.email === targetEmail) {
            contentJson = row.draft_content || row.published_content
            return new Response(contentJson, {
              headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, must-revalidate',
                'X-Content-Mode': 'draft'
              }
            })
          }
        }

        // Public Published Content: High-performance edge cache
        return new Response(contentJson, {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
            'X-Content-Mode': 'published'
          }
        })
      } else {
        // Table exists or is empty, seed baseline content
        await ensureTableAndSeed(db, JSON.stringify(defaultSiteContent, null, 2), (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim())
      }
    } catch (err) {
      console.error('[Cloudflare D1 Error]:', err)
      await ensureTableAndSeed(db, JSON.stringify(defaultSiteContent, null, 2), (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim())
    }
  }

  // Graceful fallback to default site content
  return new Response(JSON.stringify(defaultSiteContent), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'X-Content-Mode': 'fallback-seeded'
    }
  })
}

export async function onRequestPost(context) {
  const { request, env } = context
  const db = env.DB

  // Authenticate Admin
  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
  const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
  const verified = sessionToken ? await verifyToken(sessionToken, secret) : null

  if (!verified || verified.email !== targetEmail) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Admin login required' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  let newDraft = {}
  try {
    newDraft = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const now = Date.now()
  const contentStr = JSON.stringify(newDraft, null, 2)

  if (db) {
    try {
      await db.prepare(`
        INSERT INTO site_content (id, published_content, draft_content, updated_at, published_by)
        VALUES ('active', ?1, ?1, ?2, ?3)
        ON CONFLICT(id) DO UPDATE SET
          draft_content = ?1,
          updated_at = ?2
      `).bind(contentStr, now, ADMIN_EMAIL).run()

      return new Response(JSON.stringify({
        success: true,
        message: 'Draft saved successfully to Cloudflare D1',
        updated_at: now
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

  return new Response(JSON.stringify({ success: true, message: 'Saved (fallback mode)' }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
