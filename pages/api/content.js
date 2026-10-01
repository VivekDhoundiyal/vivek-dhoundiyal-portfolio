import { getUniversalContent, saveUniversalDraft } from '../../lib/db'
import { authenticateRequest, verifyCsrfToken } from '../../lib/auth'

export default async function handler(req, res) {
  // Public or Draft GET
  if (req.method === 'GET') {
    const { mode, preview } = req.query
    const isDraft = mode === 'draft' || preview === 'true'

    if (isDraft) {
      const auth = authenticateRequest(req)
      if (!auth.authenticated) {
        return res.status(401).json({ error: 'Unauthorized to view draft content' })
      }
      const draftData = await getUniversalContent({ mode: 'draft' })
      res.setHeader('Cache-Control', 'no-store, must-revalidate')
      return res.status(200).json(draftData)
    }

    const data = await getUniversalContent({ mode: 'published' })
    if (!data) {
      return res.status(500).json({ error: 'Failed retrieving site content' })
    }

    // Set cache headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    return res.status(200).json(data)
  }

  // Mutating requests: Save working draft
  if (req.method === 'POST' || req.method === 'PUT') {
    const auth = authenticateRequest(req)
    if (!auth.authenticated) {
      return res.status(401).json({
        error: auth.error || 'Unauthorized: Administrator authentication required.'
      })
    }

    if (auth.method === 'session_cookie') {
      const csrfToken = req.headers['x-csrf-token']
      if (!csrfToken || !verifyCsrfToken(csrfToken, auth.sessionToken)) {
        return res.status(403).json({ error: 'Forbidden: Invalid or missing CSRF token' })
      }
    }

    const newContent = req.body
    if (!newContent || typeof newContent !== 'object') {
      return res.status(400).json({ error: 'Bad request: Invalid payload structure' })
    }

    const result = await saveUniversalDraft(newContent, { adminEmail: auth.user })
    if (!result.success) {
      return res.status(500).json({ success: false, error: result.error })
    }

    return res.status(200).json({
      success: true,
      message: 'Draft saved successfully',
      updated_at: result.updated_at
    })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
