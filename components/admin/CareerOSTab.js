import React, { useState } from 'react'
import { CheckIcon, ArrowRight, ArrowUpRight } from '../Icons'

export default function CareerOSTab({ careeros = {}, onChange }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [openPageIdx, setOpenPageIdx] = useState(0)

  const hero = careeros.hero || {}
  const infographic = careeros.infographic || {}
  const transition = careeros.transition || {}
  const architecturePages = careeros.architecturePages || []
  const systemSummary = careeros.systemSummary || {}
  const productThinking = careeros.productThinking || {}
  const currentState = careeros.currentState || {}
  const whyIBuilt = careeros.whyIBuilt || {}

  const updateCareerOS = (partial) => {
    onChange({
      ...careeros,
      ...partial
    })
  }

  const updatePage = (idx, field, val) => {
    const updated = [...architecturePages]
    updated[idx] = {
      ...updated[idx],
      [field]: val
    }
    updateCareerOS({ architecturePages: updated })
  }

  const subNav = [
    { id: 'hero', label: '01 · Hero & Thesis' },
    { id: 'infographic', label: '02 · Infographic' },
    { id: 'transition', label: '03 · Transition' },
    { id: 'architecture', label: `04–09 · Architecture Slides (${architecturePages.length})` },
    { id: 'summary', label: '10 · System Summary' },
    { id: 'thinking', label: '11 · Product Thinking' },
    { id: 'state', label: '12 · Current State' },
    { id: 'why', label: '13 · Why I Built & CTAs' }
  ]

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6 animate-fadeIn text-slate-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-white">CareerOS Product Case Study Editor</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-signal-blue/20 text-signal-cyan border border-signal-blue/30 font-bold">
              15 SLIDES + INFOGRAPHIC
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage the complete content, architectural slides, editorial breakdowns, and system principles for /work/careeros and /careeros.
          </p>
        </div>

        <a
          href="/work/careeros"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold text-white transition-colors"
        >
          <span>View Live Page</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Sub-navigation tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
        {subNav.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveSection(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeSection === tab.id
                ? 'bg-signal-blue text-white shadow-xs'
                : 'bg-black/30 text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ==============================================================================
          SUBTAB 01: HERO & THESIS
          ============================================================================== */}
      {activeSection === 'hero' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Hero & Foundational Thesis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Eyebrow Badge</label>
              <input
                type="text"
                value={hero.eyebrow || ''}
                onChange={e => updateCareerOS({ hero: { ...hero, eyebrow: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Product Status</label>
              <input
                type="text"
                value={hero.status || ''}
                onChange={e => updateCareerOS({ hero: { ...hero, status: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Main Headline</label>
            <input
              type="text"
              value={hero.title || ''}
              onChange={e => updateCareerOS({ hero: { ...hero, title: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Subtitle / System Definition</label>
            <textarea
              rows={2}
              value={hero.subtitle || ''}
              onChange={e => updateCareerOS({ hero: { ...hero, subtitle: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Foundational Product Thesis Quote</label>
            <textarea
              rows={3}
              value={hero.thesis || ''}
              onChange={e => updateCareerOS({ hero: { ...hero, thesis: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white italic leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 02: OPERATING SYSTEM INFOGRAPHIC
          ============================================================================== */}
      {activeSection === 'infographic' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Operating System Infographic Configuration
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Eyebrow</label>
              <input
                type="text"
                value={infographic.eyebrow || ''}
                onChange={e => updateCareerOS({ infographic: { ...infographic, eyebrow: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Section Heading</label>
              <input
                type="text"
                value={infographic.heading || ''}
                onChange={e => updateCareerOS({ infographic: { ...infographic, heading: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Introductory Paragraph</label>
            <textarea
              rows={2}
              value={infographic.intro || ''}
              onChange={e => updateCareerOS({ infographic: { ...infographic, intro: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">WebP Image Path</label>
              <input
                type="text"
                value={infographic.imageWebp || ''}
                onChange={e => updateCareerOS({ infographic: { ...infographic, imageWebp: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">PNG Fallback Path</label>
              <input
                type="text"
                value={infographic.imagePng || ''}
                onChange={e => updateCareerOS({ infographic: { ...infographic, imagePng: e.target.value } })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Underneath Narrative Caption</label>
            <textarea
              rows={3}
              value={infographic.caption || ''}
              onChange={e => updateCareerOS({ infographic: { ...infographic, caption: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 03: TRANSITION
          ============================================================================== */}
      {activeSection === 'transition' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Inside CareerOS Transition Copy
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Section Title</label>
            <input
              type="text"
              value={transition.heading || ''}
              onChange={e => updateCareerOS({ transition: { ...transition, heading: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Lead Thesis Statement</label>
            <textarea
              rows={2}
              value={transition.lead || ''}
              onChange={e => updateCareerOS({ transition: { ...transition, lead: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white italic leading-relaxed"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Exploratory Body Paragraph</label>
            <textarea
              rows={3}
              value={transition.body || ''}
              onChange={e => updateCareerOS({ transition: { ...transition, body: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 04–09: ARCHITECTURE PAGES (15 SLIDES ACCORDION)
          ============================================================================== */}
      {activeSection === 'architecture' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                15 Architecture Chapters (Inspectable Artifacts)
              </h3>
              <p className="text-xs text-slate-400">
                Click any chapter to expand and edit its slide titles, narrative transitions, and 3-part case-study breakdown.
              </p>
            </div>
            <span className="text-xs font-mono text-signal-cyan">
              {architecturePages.length} Slides Loaded
            </span>
          </div>

          <div className="space-y-3">
            {architecturePages.map((pg, pIdx) => {
              const isOpen = openPageIdx === pIdx

              return (
                <div
                  key={pg.pageNumber || pIdx}
                  className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden"
                >
                  {/* Header row */}
                  <div
                    onClick={() => setOpenPageIdx(isOpen ? null : pIdx)}
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors select-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-signal-blue/20 text-signal-cyan font-mono text-xs font-bold flex items-center justify-center border border-signal-blue/30">
                        {String(pg.pageNumber).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {pg.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {pg.chapter} · {pg.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-500">
                        {isOpen ? '▲ Hide' : '▼ Expand'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded form */}
                  {isOpen && (
                    <div className="p-5 border-t border-white/10 space-y-4 bg-ink-950/60 animate-fadeIn">
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1">Chapter Label</label>
                          <input
                            type="text"
                            value={pg.chapter || ''}
                            onChange={e => updatePage(pIdx, 'chapter', e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1">Badge</label>
                          <input
                            type="text"
                            value={pg.badge || ''}
                            onChange={e => updatePage(pIdx, 'badge', e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1">Slide Title</label>
                          <input
                            type="text"
                            value={pg.title || ''}
                            onChange={e => updatePage(pIdx, 'title', e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1">Image WebP Path</label>
                          <input
                            type="text"
                            value={pg.imageWebp || ''}
                            onChange={e => updatePage(pIdx, 'imageWebp', e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-400 block mb-1">Image PNG Fallback Path</label>
                          <input
                            type="text"
                            value={pg.imagePng || ''}
                            onChange={e => updatePage(pIdx, 'imagePng', e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Narrative Transition From Previous Chapter</label>
                        <input
                          type="text"
                          value={pg.transition || ''}
                          onChange={e => updatePage(pIdx, 'transition', e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-[#2563EB] font-bold block mb-1">
                          ### What This Layer Represents
                        </label>
                        <textarea
                          rows={3}
                          value={pg.whatThisLayerRepresents || ''}
                          onChange={e => updatePage(pIdx, 'whatThisLayerRepresents', e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-emerald-400 font-bold block mb-1">
                          ### Why It Matters
                        </label>
                        <textarea
                          rows={3}
                          value={pg.whyItMatters || ''}
                          onChange={e => updatePage(pIdx, 'whyItMatters', e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-purple-400 font-bold block mb-1">
                          ### Product Thinking
                        </label>
                        <textarea
                          rows={3}
                          value={pg.productThinking || ''}
                          onChange={e => updatePage(pIdx, 'productThinking', e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                        />
                      </div>

                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 10: SYSTEM SUMMARY
          ============================================================================== */}
      {activeSection === 'summary' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            System Summary (10-Stage Pipeline)
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Heading</label>
            <input
              type="text"
              value={systemSummary.heading || ''}
              onChange={e => updateCareerOS({ systemSummary: { ...systemSummary, heading: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Introductory Concept</label>
            <textarea
              rows={2}
              value={systemSummary.intro || ''}
              onChange={e => updateCareerOS({ systemSummary: { ...systemSummary, intro: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 11: PRODUCT THINKING
          ============================================================================== */}
      {activeSection === 'thinking' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Product Thinking Principles
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Section Heading</label>
            <input
              type="text"
              value={productThinking.heading || ''}
              onChange={e => updateCareerOS({ productThinking: { ...productThinking, heading: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Section Introduction</label>
            <textarea
              rows={2}
              value={productThinking.intro || ''}
              onChange={e => updateCareerOS({ productThinking: { ...productThinking, intro: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 12: CURRENT STATE
          ============================================================================== */}
      {activeSection === 'state' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Current Product State & Honest Inventory
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Section Heading</label>
            <input
              type="text"
              value={currentState.heading || ''}
              onChange={e => updateCareerOS({ currentState: { ...currentState, heading: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Transparency Statement</label>
            <textarea
              rows={3}
              value={currentState.intro || ''}
              onChange={e => updateCareerOS({ currentState: { ...currentState, intro: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ==============================================================================
          SUBTAB 13: WHY I BUILT & CTAS
          ============================================================================== */}
      {activeSection === 'why' && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Why I Built CareerOS & Final Actions
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Heading</label>
            <input
              type="text"
              value={whyIBuilt.heading || ''}
              onChange={e => updateCareerOS({ whyIBuilt: { ...whyIBuilt, heading: e.target.value } })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Founder Reflection Paragraphs (JSON array)</label>
            <textarea
              rows={5}
              value={JSON.stringify(whyIBuilt.narrative || [], null, 2)}
              onChange={e => {
                try {
                  const parsed = JSON.parse(e.target.value)
                  updateCareerOS({ whyIBuilt: { ...whyIBuilt, narrative: parsed } })
                } catch(err) {}
              }}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono leading-relaxed"
            />
          </div>
        </div>
      )}

    </div>
  )
}
