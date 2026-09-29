import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SearchIcon, CloseIcon, ArrowRight } from './Icons'

export default function SearchModal({ isOpen, onClose, siteData }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Build searchable items
  const items = React.useMemo(() => {
    if (!siteData) return []
    const results = []

    // Projects
    siteData.projects?.forEach(p => {
      results.push({
        id: `project-${p.slug}`,
        title: p.title,
        type: 'Project',
        badge: 'Work',
        category: p.category || 'Venture',
        description: p.summary || p.tagline || '',
        url: `/work/${p.slug}`,
      })
    })

    // Resumes
    siteData.resumes?.forEach(r => {
      results.push({
        id: `resume-${r.id}`,
        title: r.title,
        type: 'Resume',
        badge: 'CV',
        category: 'Verified Document',
        description: r.description || '',
        url: `/resume`,
      })
    })

    // Thinking
    siteData.thinking?.forEach(t => {
      results.push({
        id: `thinking-${t.slug}`,
        title: t.title,
        type: 'Essay',
        badge: 'Thinking',
        category: t.category || 'Editorial',
        description: t.excerpt || '',
        url: `/thinking/${t.slug}`,
      })
    })

    // Framework
    siteData.howIThink?.forEach(h => {
      results.push({
        id: `framework-${h.stage || h.id}`,
        title: `${h.stage || ''} ${h.title || ''}: "${h.question || ''}"`,
        type: 'Methodology',
        badge: 'How I Think',
        category: 'Operating System',
        description: h.lookFor || h.tagline || '',
        url: `/#thinking-framework`,
      })
    })

    // Tools
    siteData.tools?.forEach(t => {
      results.push({
        id: `tool-${t.id}`,
        title: t.name,
        type: 'Tool',
        badge: 'Systems',
        category: t.category,
        description: t.desc || '',
        url: `/#tools`,
      })
    })

    // Experience
    siteData.experience?.nodes?.forEach(e => {
      results.push({
        id: `exp-${e.id}`,
        title: `${e.role} — ${e.company}`,
        type: 'Experience',
        badge: 'History',
        category: e.badge || 'Career',
        description: e.summary || e.takeaway || '',
        url: `/experience`,
      })
    })

    return results
  }, [siteData])

  const filteredItems = React.useMemo(() => {
    if (!query.trim()) return items.slice(0, 8)
    const q = query.toLowerCase()
    return items.filter(item => 
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.type && item.type.toLowerCase().includes(q))
    ).slice(0, 10)
  }, [items, query])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1))
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault()
        const selected = filteredItems[selectedIndex]
        onClose()
        router.push(selected.url)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, onClose, router])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10 text-slate-900">
        
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200">
          <SearchIcon className="w-5 h-5 text-signal-blue flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            placeholder="Search projects, thinking, tools, experience, resumes..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs font-mono text-slate-400 hover:text-slate-900"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-xs font-mono text-slate-500">
                No matching systems found for "{query}"
              </p>
              <p className="text-[11px] text-slate-400">
                Try searching for SettleMyCar, Dark Kitchen, B2B sales, n8n, or Apollo
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onClose()
                    router.push(item.url)
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-start justify-between gap-3 ${
                    isSelected 
                      ? 'bg-signal-blue text-white shadow-xs' 
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 border border-slate-200 text-signal-blue'
                      }`}>
                        {item.badge}
                      </span>
                      <span className="text-xs font-bold truncate">
                        {item.title}
                      </span>
                    </div>
                    {item.description && (
                      <p className={`text-[11px] truncate ${
                        isSelected ? 'text-white/80' : 'text-slate-500'
                      }`}>
                        {item.description}
                      </p>
                    )}
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 mt-1 ${
                    isSelected ? 'text-white' : 'text-slate-400'
                  }`} />
                </button>
              )
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 bg-slate-50">
          <span>Navigate with ↑ ↓ · Press Enter to inspect</span>
          <span>{filteredItems.length} result(s)</span>
        </div>

      </div>
    </div>
  )
}
