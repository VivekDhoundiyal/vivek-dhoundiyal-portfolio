import staticSiteContent from '../data/siteContent.json'

let fsModule = null
let pathModule = null

if (typeof window === 'undefined') {
  try {
    fsModule = require('fs')
    pathModule = require('path')
  } catch (e) {
    // browser or worker environment
  }
}

function getDataFilePath(filename = 'siteContent.json') {
  if (pathModule) {
    return pathModule.join(process.cwd(), 'data', filename)
  }
  return null
}

/**
 * Universal Content Retriever.
 * Works seamlessly across:
 * 1. Cloudflare Pages Functions / Worker (via D1 binding `env.DB`)
 * 2. Next.js Node runtime (via local JSON files / SQLite)
 * 3. Static build fallback (bundled static JSON)
 *
 * @param {Object} options
 * @param {'published' | 'draft'} options.mode
 * @param {Object} options.env - Cloudflare worker env if available
 */
export async function getUniversalContent({ mode = 'published', env = null } = {}) {
  // 1. Cloudflare D1 Native Binding
  const db = env?.DB || globalThis.__CF_D1_DB__
  if (db && typeof db.prepare === 'function') {
    try {
      const stmt = db.prepare('SELECT published_content, draft_content FROM site_content WHERE id = ?').bind('active')
      const row = await stmt.first()
      if (row) {
        const raw = mode === 'draft' ? (row.draft_content || row.published_content) : row.published_content
        return JSON.parse(raw)
      }
    } catch (err) {
      console.error('[Cloudflare D1] Error reading site content:', err)
    }
  }

  // 2. Node.js Local File Storage (Draft vs Published)
  if (typeof window === 'undefined' && fsModule) {
    try {
      if (mode === 'draft') {
        const draftPath = getDataFilePath('siteContent.draft.json')
        if (draftPath && fsModule.existsSync(draftPath)) {
          const rawDraft = fsModule.readFileSync(draftPath, 'utf8')
          return JSON.parse(rawDraft)
        }
      }

      const filePath = getDataFilePath('siteContent.json')
      if (filePath && fsModule.existsSync(filePath)) {
        const raw = fsModule.readFileSync(filePath, 'utf8')
        return JSON.parse(raw)
      }
    } catch (err) {
      console.error('[Node Storage] Error reading local JSON content:', err)
    }
  }

  // 3. Static fallback bundle
  return staticSiteContent
}

/**
 * Save Working Draft.
 */
export async function saveUniversalDraft(content, { env = null, adminEmail = 'vivekdhoundiyal2901@gmail.com' } = {}) {
  const now = Date.now()
  const contentStr = JSON.stringify(content, null, 2)

  // 1. Cloudflare D1 Binding
  const db = env?.DB || globalThis.__CF_D1_DB__
  if (db && typeof db.prepare === 'function') {
    try {
      await db.prepare(`
        INSERT INTO site_content (id, published_content, draft_content, updated_at, published_by)
        VALUES ('active', ?1, ?1, ?2, ?3)
        ON CONFLICT(id) DO UPDATE SET
          draft_content = ?1,
          updated_at = ?2
      `).bind(contentStr, now, adminEmail).run()

      return { success: true, updated_at: now }
    } catch (err) {
      console.error('[Cloudflare D1] Error saving draft:', err)
      return { success: false, error: err.message }
    }
  }

  // 2. Node.js Local File Storage
  if (typeof window === 'undefined' && fsModule) {
    try {
      const draftPath = getDataFilePath('siteContent.draft.json')
      if (draftPath) {
        fsModule.writeFileSync(draftPath, contentStr, 'utf8')
        return { success: true, updated_at: now }
      }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { success: true, updated_at: now, fallback: true }
}

/**
 * Publish Working Draft to Live Production & create an immutable revision record.
 */
export async function publishUniversalDraft(note = 'Site content update', { env = null, adminEmail = 'vivekdhoundiyal2901@gmail.com' } = {}) {
  const now = Date.now()
  const revisionId = `rev_${now}_${Math.random().toString(36).substring(2, 7)}`

  // 1. Cloudflare D1 Binding
  const db = env?.DB || globalThis.__CF_D1_DB__
  if (db && typeof db.prepare === 'function') {
    try {
      // Get current draft and latest version number
      const current = await db.prepare('SELECT draft_content FROM site_content WHERE id = ?').bind('active').first()
      const draftStr = current?.draft_content
      if (!draftStr) {
        return { success: false, error: 'No draft content found to publish' }
      }

      const lastRev = await db.prepare('SELECT MAX(version_number) as max_v FROM revisions').first()
      const nextVersion = (lastRev?.max_v || 0) + 1

      // Atomic batch: Update live site content + insert revision
      await db.batch([
        db.prepare(`
          UPDATE site_content
          SET published_content = draft_content,
              published_at = ?1,
              published_by = ?2
          WHERE id = 'active'
        `).bind(now, adminEmail),
        db.prepare(`
          INSERT INTO revisions (id, version_number, content, note, created_at, created_by)
          VALUES (?1, ?2, ?3, ?4, ?5, ?6)
        `).bind(revisionId, nextVersion, draftStr, note, now, adminEmail)
      ])

      return {
        success: true,
        version: nextVersion,
        revisionId,
        published_at: now
      }
    } catch (err) {
      console.error('[Cloudflare D1] Error publishing draft:', err)
      return { success: false, error: err.message }
    }
  }

  // 2. Node.js Local File Storage
  if (typeof window === 'undefined' && fsModule) {
    try {
      const draftPath = getDataFilePath('siteContent.draft.json')
      const pubPath = getDataFilePath('siteContent.json')
      const revDir = getDataFilePath('revisions')

      let draftContentStr = ''
      if (draftPath && fsModule.existsSync(draftPath)) {
        draftContentStr = fsModule.readFileSync(draftPath, 'utf8')
      } else if (pubPath && fsModule.existsSync(pubPath)) {
        draftContentStr = fsModule.readFileSync(pubPath, 'utf8')
      }

      if (pubPath && draftContentStr) {
        fsModule.writeFileSync(pubPath, draftContentStr, 'utf8')
      }

      // Save revision locally
      if (pathModule && fsModule) {
        const revPath = getDataFilePath('revisions.json')
        let revs = []
        if (revPath && fsModule.existsSync(revPath)) {
          try {
            revs = JSON.parse(fsModule.readFileSync(revPath, 'utf8'))
          } catch {}
        }
        const nextVersion = (revs[0]?.version_number || 0) + 1
        const newRev = {
          id: revisionId,
          version_number: nextVersion,
          note,
          created_at: now,
          created_by: adminEmail,
          content: JSON.parse(draftContentStr)
        }
        revs.unshift(newRev)
        // Keep last 30 revisions
        fsModule.writeFileSync(revPath, JSON.stringify(revs.slice(0, 30), null, 2), 'utf8')

        return {
          success: true,
          version: nextVersion,
          revisionId,
          published_at: now
        }
      }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { success: true, published_at: now, fallback: true }
}

/**
 * Retrieve revision history log.
 */
export async function getUniversalRevisions({ env = null } = {}) {
  // 1. Cloudflare D1
  const db = env?.DB || globalThis.__CF_D1_DB__
  if (db && typeof db.prepare === 'function') {
    try {
      const stmt = db.prepare(`
        SELECT id, version_number, note, created_at, created_by
        FROM revisions
        ORDER BY created_at DESC
        LIMIT 50
      `)
      const result = await stmt.all()
      return result.results || []
    } catch (err) {
      console.error('[Cloudflare D1] Error reading revisions:', err)
      return []
    }
  }

  // 2. Node.js Local File Storage
  if (typeof window === 'undefined' && fsModule) {
    try {
      const revPath = getDataFilePath('revisions.json')
      if (revPath && fsModule.existsSync(revPath)) {
        const raw = fsModule.readFileSync(revPath, 'utf8')
        const parsed = JSON.parse(raw)
        return parsed.map(({ content, ...meta }) => meta)
      }
    } catch (err) {
      console.error('[Node Storage] Error reading revisions.json:', err)
    }
  }

  return []
}

/**
 * Restore a previous revision into draft mode.
 */
export async function restoreUniversalRevision(revisionId, { env = null, adminEmail = 'vivekdhoundiyal2901@gmail.com' } = {}) {
  // 1. Cloudflare D1
  const db = env?.DB || globalThis.__CF_D1_DB__
  if (db && typeof db.prepare === 'function') {
    try {
      const stmt = db.prepare('SELECT content, version_number FROM revisions WHERE id = ?').bind(revisionId)
      const rev = await stmt.first()
      if (!rev || !rev.content) {
        return { success: false, error: 'Revision not found' }
      }

      await db.prepare(`
        UPDATE site_content
        SET draft_content = ?1,
            updated_at = ?2
        WHERE id = 'active'
      `).bind(rev.content, Date.now()).run()

      return {
        success: true,
        restoredVersion: rev.version_number,
        content: JSON.parse(rev.content)
      }
    } catch (err) {
      console.error('[Cloudflare D1] Error restoring revision:', err)
      return { success: false, error: err.message }
    }
  }

  // 2. Node.js Local File Storage
  if (typeof window === 'undefined' && fsModule) {
    try {
      const revPath = getDataFilePath('revisions.json')
      if (revPath && fsModule.existsSync(revPath)) {
        const raw = fsModule.readFileSync(revPath, 'utf8')
        const revs = JSON.parse(raw)
        const target = revs.find(r => r.id === revisionId)
        if (!target) {
          return { success: false, error: 'Revision not found' }
        }

        const draftPath = getDataFilePath('siteContent.draft.json')
        if (draftPath) {
          fsModule.writeFileSync(draftPath, JSON.stringify(target.content, null, 2), 'utf8')
          return {
            success: true,
            restoredVersion: target.version_number,
            content: target.content
          }
        }
      }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { success: false, error: 'Revision storage inaccessible' }
}
