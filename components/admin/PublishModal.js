import React, { useState } from 'react'
import { CheckIcon } from '../Icons'

export default function PublishModal({ isOpen, onClose, onConfirm, isPublishing }) {
  const [note, setNote] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onConfirm(note.trim() || 'Site content published via Admin CMS')
    setNote('')
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-md w-full bg-ink-900 border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Publish to Live Website</h3>
            <p className="text-xs text-slate-400 font-mono">Cloudflare D1 & Edge CDN</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Publishing will update the live public site immediately, purge the Edge cache, and record an immutable revision snapshot for 1-click rollback.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5 font-semibold">
              Revision Note / Changelog Summary (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Updated Hero copy and reordered sections"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-3 rounded-xl bg-ink-950 border border-white/15 text-white text-sm focus:border-signal-blue focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              disabled={isPublishing}
              className="px-4 py-2.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPublishing}
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg flex items-center gap-2 disabled:opacity-50"
            >
              <span>{isPublishing ? 'Publishing...' : 'Confirm & Publish Live'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
