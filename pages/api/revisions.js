import { getUniversalRevisions, restoreUniversalRevision } from '../../lib/db'
import { authenticateRequest, verifyCsrfToken } from '../../lib/auth'

export default async function handler(req, res) {
  const auth = authenticateRequest(req)
  if (!auth.authenticated) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // GET: List revisions
  if (req.method === 'GET') {
    const revisions = await getUniversalRevisions()
    return res.status(200).json(revisions)
  }

  // POST: Restore revision to draft
  if (req.method === 'POST') {
    if (auth.method === 'session_cookie') {
      const csrfToken = req.headers['x-csrf-token']
      if (!csrfToken || !verifyCsrfToken(csrfToken, auth.sessionToken)) {
        return res.status(403).json({ error: 'Forbidden: Invalid or missing CSRF token' })
      }
    }

    const { revisionId } = req.body || {}
    if (!revisionId) {
      return res.status(400).json({ error: 'Missing revisionId' })
    }

    const result = await restoreUniversalRevision(revisionId, { adminEmail: auth.user })
    if (!result.success) {
      return res.status(500).json({ error: result.error || 'Failed restoring revision' })
    }

    return res.status(200).json({
      success: true,
      message: `Restored Version ${result.restoredVersion} to Draft mode`,
      restoredVersion: result.restoredVersion,
      content: result.content
    })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
