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
  } catch {
    // Silent in production
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

async function isSessionActive(db, token, targetEmail, secret) {
  if (!token) return false
  const verified = await verifyToken(token, secret)
  if (!verified || verified.email !== targetEmail) return false

  if (db) {
    try {
      const tokenHash = await sha256Hex(token)
      const sessionRow = await db.prepare('SELECT email, expires_at FROM admin_sessions WHERE token_hash = ?').bind(tokenHash).first()
      if (!sessionRow || sessionRow.expires_at < Date.now()) {
        return false
      }
    } catch {
      // In case admin_sessions is missing/uninitialized, rely on verified token
    }
  }
  return true
}

export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const isPreview = url.searchParams.get('preview') === 'true'
  const isDraftRequest = url.searchParams.get('mode') === 'draft'
  const db = env?.DB

  // 1. If draft or preview mode is requested, FAIL CLOSED: require valid admin authentication
  if (isPreview || isDraftRequest) {
    const cookies = parseCookies(request.headers.get('Cookie'))
    const sessionToken = cookies[COOKIE_NAME]
    const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
    const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
    const active = await isSessionActive(db, sessionToken, targetEmail, secret)

    if (!active) {
      return new Response(JSON.stringify({ error: 'Unauthorized: Admin authentication required' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      })
    }

    // Authenticated admin: serve draft content
    if (db) {
      try {
        const stmt = db.prepare('SELECT published_content, draft_content FROM site_content WHERE id = ?').bind('active')
        const row = await stmt.first()
        if (row && (row.draft_content || row.published_content)) {
          return new Response(row.draft_content || row.published_content, {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store, must-revalidate',
              'X-Content-Mode': 'draft'
            }
          })
        }
      } catch {
        // Fall back to default content for draft
      }
    }

    return new Response(JSON.stringify(defaultSiteContent), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, must-revalidate',
        'X-Content-Mode': 'draft'
      }
    })
  }

  // 2. Public Published Content: Standard visitor (no draft/preview query)
  if (db) {
    try {
      const stmt = db.prepare('SELECT published_content FROM site_content WHERE id = ?').bind('active')
      const row = await stmt.first()

      if (row && row.published_content) {
        return new Response(row.published_content, {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
            'X-Content-Mode': 'published'
          }
        })
      } else {
        await ensureTableAndSeed(db, JSON.stringify(defaultSiteContent, null, 2), (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim())
      }
    } catch {
      await ensureTableAndSeed(db, JSON.stringify(defaultSiteContent, null, 2), (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim())
    }
  }

  // Graceful fallback to default site content for public requests
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
  const db = env?.DB

  // Authenticate Admin
  const cookies = parseCookies(request.headers.get('Cookie'))
  const sessionToken = cookies[COOKIE_NAME]
  const secret = (env?.SESSION_SECRET || env?.ADMIN_SECRET || 'cf_pages_edge_session_signing_key').replace(/^["']|["']$/g, '').trim()
  const targetEmail = (env?.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase().trim()
  const active = await isSessionActive(db, sessionToken, targetEmail, secret)

  if (!active) {
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
      `).bind(contentStr, now, targetEmail).run()

      return new Response(JSON.stringify({
        success: true,
        message: 'Draft saved successfully to Cloudflare D1',
        updated_at: now
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    } catch {
      return new Response(JSON.stringify({ error: 'Failed to save draft' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  return new Response(JSON.stringify({ success: true, message: 'Saved (fallback mode)' }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
