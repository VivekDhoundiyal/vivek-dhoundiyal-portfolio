import React, { useState } from 'react'

const AVAILABLE_TYPES = [
  { type: 'hero', name: 'Hero Section', description: 'Executive headline, 4-pillar matrix, direct CTAs & portrait' },
  { type: 'capabilities', name: 'What I Do', description: 'Core capabilities: Enterprise Sales, 0→1 Ventures, GTM Systems' },
  { type: 'entrepreneurial', name: 'Entrepreneurial Experience', description: 'Founder track record: SettleMyCar, Dark Kitchen, Fixins' },
  { type: 'corporate', name: 'Corporate Experience', description: 'Enterprise sales: CollegeDunia & KreedOn' },
  { type: 'timeline', name: 'Professional Experience Summary', description: 'Chronological timeline and detail narrative' },
  { type: 'education-certifications', name: 'Education & Certifications', description: 'Manav Rachna degree and Google PM certificate' },
  { type: 'building', name: 'Where I Am Building', description: 'Digital Products, AI & Automation, Business Systems' },
  { type: 'thinking', name: 'Thinking & Writing', description: 'Perspectives on operatorship, AI, and systems' },
  { type: 'tools', name: 'Tools & Capabilities', description: 'Categorized commercial and technical tool stack' },
  { type: 'about-contact', name: 'About & Direct Contact', description: 'Personal narrative, professional values, and contact channels' },
  { type: 'custom', name: 'Custom Section', description: 'Add a new custom section block with custom title' }
]

export default function SectionManager({ sections = [], onUpdate, onEditSection }) {
  const [draggedIdx, setDraggedIdx] = useState(null)
  const [dragOverIdx, setDragOverIdx] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newSectionType, setNewSectionType] = useState('custom')
  const [newSectionName, setNewSectionName] = useState('')

  // Drag and drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIdx(index)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    if (dragOverIdx !== index) {
      setDragOverIdx(index)
    }
  }

  const handleDrop = (e, index) => {
    e.preventDefault()
    if (draggedIdx === null || draggedIdx === index) {
      setDraggedIdx(null)
      setDragOverIdx(null)
      return
    }

    const updated = [...sections]
    const [moved] = updated.splice(draggedIdx, 1)
    updated.splice(index, 0, moved)

    // Re-index order
    const reordered = updated.map((sec, idx) => ({ ...sec, order: idx }))
    onUpdate(reordered)
    setDraggedIdx(null)
    setDragOverIdx(null)
  }

  const handleDragEnd = () => {
    setDraggedIdx(null)
    setDragOverIdx(null)
  }

  // Move up/down
  const handleMove = (index, delta) => {
    const target = index + delta
    if (target < 0 || target >= sections.length) return
    const updated = [...sections]
    const temp = updated[index]
    updated[index] = updated[target]
    updated[target] = temp
    const reordered = updated.map((sec, idx) => ({ ...sec, order: idx }))
    onUpdate(reordered)
  }

  // Toggle Visibility (Hide / Show)
  const handleToggleVisibility = (index) => {
    const updated = [...sections]
    updated[index] = { ...updated[index], enabled: !updated[index].enabled }
    onUpdate(updated)
  }

  // Duplicate Section
  const handleDuplicate = (index) => {
    const original = sections[index]
    const clone = {
      ...original,
      id: `${original.id}-clone-${Date.now().toString().slice(-4)}`,
      name: `${original.name} (Copy)`,
      order: index + 1
    }
    const updated = [...sections]
    updated.splice(index + 1, 0, clone)
    const reordered = updated.map((sec, idx) => ({ ...sec, order: idx }))
    onUpdate(reordered)
  }

  // Delete Section
  const handleDelete = (index) => {
    const sec = sections[index]
    if (confirm(`Are you sure you want to remove "${sec.name}" from the homepage layout? (Content data is preserved)`)) {
      const updated = sections.filter((_, idx) => idx !== index)
      const reordered = updated.map((s, idx) => ({ ...s, order: idx }))
      onUpdate(reordered)
    }
  }

  // Add Section
  const handleAddSubmit = (e) => {
    e.preventDefault()
    const def = AVAILABLE_TYPES.find(t => t.type === newSectionType)
    const name = newSectionName.trim() || def?.name || 'New Section'
    const newSec = {
      id: `${newSectionType}-${Date.now()}`,
      type: newSectionType,
      name,
      enabled: true,
      order: sections.length
    }
    onUpdate([...sections, newSec])
    setShowAddModal(false)
    setNewSectionName('')
    setNewSectionType('custom')
  }

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="p-6 rounded-3xl bg-ink-900 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-blue animate-pulse" />
            <h2 className="text-lg font-bold text-white tracking-tight">Homepage Section Architecture</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Drag and drop to reorder the public sequence. Toggle visibility to hide/show sections without deleting data.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-signal-blue hover:bg-blue-600 text-white text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>+ Add New Section</span>
        </button>
      </div>

      {/* Sections List */}
      <div className="space-y-3">
        {sections.map((sec, idx) => {
          const isDragging = draggedIdx === idx
          const isOver = dragOverIdx === idx

          return (
            <div
              key={sec.id || idx}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDrop={(e) => handleDrop(e, idx)}
              onDragEnd={handleDragEnd}
              className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-grab active:cursor-grabbing ${
                isDragging
                  ? 'opacity-40 border-signal-blue bg-signal-blue/10 scale-98'
                  : isOver
                  ? 'border-signal-blue bg-white/10 ring-2 ring-signal-blue/40'
                  : sec.enabled
                  ? 'bg-ink-900/90 border-white/10 hover:border-white/20'
                  : 'bg-ink-950/60 border-white/5 opacity-60'
              }`}
            >
              {/* Left: Drag Handle, Number, Title & Type */}
              <div className="flex items-center gap-3">
                {/* Drag Grip Icon */}
                <div className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Drag to reorder">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="9" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="9" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="18" r="1.5" fill="currentColor" />
                  </svg>
                </div>

                {/* Index badge */}
                <span className="font-mono text-xs font-bold text-slate-500 w-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Section Info */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      {sec.name}
                    </span>
                    {!sec.enabled && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-red-500/20 text-red-300 border border-red-500/30 font-semibold">
                        Hidden
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mt-0.5">
                    <span className="text-signal-cyan font-semibold">type: {sec.type}</span>
                    <span>•</span>
                    <span>id: #{sec.id}</span>
                  </div>
                </div>
              </div>

              {/* Right: Actions (Move, Toggle, Duplicate, Delete, Edit) */}
              <div className="flex items-center gap-2 flex-wrap self-end md:self-auto">
                {/* Reorder Arrows */}
                <div className="flex items-center bg-white/5 rounded-xl border border-white/10 p-0.5">
                  <button
                    disabled={idx === 0}
                    onClick={() => handleMove(idx, -1)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                    title="Move up"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </button>
                  <button
                    disabled={idx === sections.length - 1}
                    onClick={() => handleMove(idx, 1)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                    title="Move down"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>

                {/* Hide / Show Toggle */}
                <button
                  onClick={() => handleToggleVisibility(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border transition-colors flex items-center gap-1.5 ${
                    sec.enabled
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                  }`}
                  title={sec.enabled ? 'Click to hide section' : 'Click to show section'}
                >
                  <span>{sec.enabled ? 'Visible' : 'Hidden'}</span>
                </button>

                {/* Duplicate */}
                <button
                  onClick={() => handleDuplicate(idx)}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                  title="Duplicate this section"
                >
                  Clone
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(idx)}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-mono bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors"
                  title="Remove from layout"
                >
                  Delete
                </button>

                {/* Direct Edit Content Link */}
                {onEditSection && (
                  <button
                    onClick={() => onEditSection(sec.type)}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-signal-blue/20 hover:bg-signal-blue/30 text-signal-cyan border border-signal-blue/40 font-semibold transition-colors"
                  >
                    Edit Content →
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Add Section Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-ink-900 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold">Add Section to Layout</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                  Section Type
                </label>
                <select
                  value={newSectionType}
                  onChange={(e) => setNewSectionType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-ink-950 border border-white/15 text-white text-sm focus:border-signal-blue focus:outline-none"
                >
                  {AVAILABLE_TYPES.map(t => (
                    <option key={t.type} value={t.type}>
                      {t.name} ({t.type})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {AVAILABLE_TYPES.find(t => t.type === newSectionType)?.description}
                </p>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                  Section Display Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Strategic Advisory & Consulting"
                  value={newSectionName}
                  onChange={(e) => setNewSectionName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-ink-950 border border-white/15 text-white text-sm focus:border-signal-blue focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-signal-blue hover:bg-blue-600 text-white shadow-md"
                >
                  Add Section
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
