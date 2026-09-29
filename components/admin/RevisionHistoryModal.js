import React, { useState, useEffect } from 'react'

export default function RevisionHistoryModal({ isOpen, onClose, onRestoreSuccess }) {
  const [revisions, setRevisions] = useState([])
  const [loading, setLoading] = useState(false)
  const [restoringId, setRestoringId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      fetchRevisions()
    }
  }, [isOpen])

  const fetchRevisions = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/revisions', { credentials: 'include' })
      const data = await res.json()
      if (res.ok && Array.isArray(data)) {
        setRevisions(data)
      } else {
        setError(data.error || 'Failed to load revisions')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleRestore = async (rev) => {
    if (!confirm(`Are you sure you want to restore Version ${rev.version_number} (${rev.note || 'Snapshot'}) to your working draft?`)) {
      return
    }

    setRestoringId(rev.id)
    try {
      const res = await fetch('/api/revisions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ revisionId: rev.id })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        onRestoreSuccess(data.content, data.restoredVersion)
        onClose()
      } else {
        alert(`Failed to restore: ${data.error || 'Unknown error'}`)
      }
    } catch (err) {
      alert(`Error restoring revision: ${err.message}`)
    } finally {
      setRestoringId(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-3xl w-full bg-ink-900 border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-white max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold tracking-tight">Revision History & Rollback Engine</h3>
            <p className="text-xs text-slate-400 font-mono">Immutable audit snapshots in Cloudflare D1</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1"
          >
            ✕ Close
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {loading && (
            <div className="py-12 text-center text-slate-400 text-xs font-mono animate-pulse">
              Loading revision timeline from D1...
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
              {error}
            </div>
          )}

          {!loading && revisions.length === 0 && (
            <div className="py-12 text-center text-slate-400 text-xs font-mono">
              No previous revisions recorded yet. Revisions are created automatically each time you publish.
            </div>
          )}

          {revisions.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-ink-950 border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-signal-blue/20 text-signal-cyan border border-signal-blue/40">
                    Version {rev.version_number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {new Date(rev.created_at).toLocaleString()}
                  </span>
                </div>

                <div className="text-sm font-semibold text-white">
                  {rev.note || 'Site content published'}
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  Published by: {rev.created_by}
                </div>
              </div>

              <button
                disabled={restoringId === rev.id}
                onClick={() => handleRestore(rev)}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all self-start sm:self-auto cursor-pointer disabled:opacity-50"
              >
                {restoringId === rev.id ? 'Restoring...' : 'Restore to Draft ↺'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
