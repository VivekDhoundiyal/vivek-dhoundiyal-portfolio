import { publishUniversalDraft } from '../../lib/db'
import { authenticateRequest, verifyCsrfToken } from '../../lib/auth'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const auth = authenticateRequest(req)
  if (!auth.authenticated) {
    return res.status(401).json({ error: 'Unauthorized: Administrator authentication required to publish.' })
  }

  if (auth.method === 'session_cookie') {
    const csrfToken = req.headers['x-csrf-token']
    if (!csrfToken || !verifyCsrfToken(csrfToken, auth.sessionToken)) {
      return res.status(403).json({ error: 'Forbidden: Invalid or missing CSRF token' })
    }
  }

  const { note } = req.body || {}
  const result = await publishUniversalDraft(note || 'Site content update published via Admin CMS', {
    adminEmail: auth.user
  })

  if (!result.success) {
    return res.status(500).json({ error: result.error || 'Failed publishing content' })
  }

  return res.status(200).json({
    success: true,
    message: 'Published successfully to live site and created revision record',
    version: result.version,
    revisionId: result.revisionId,
    published_at: result.published_at
  })
}
