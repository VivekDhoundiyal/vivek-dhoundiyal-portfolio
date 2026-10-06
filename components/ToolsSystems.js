import React, { useState, useMemo } from 'react'
import { getToolBrandLogo } from './BrandLogos'

export default function ToolsSystems({ tools = [] }) {
  const categories = [
    'All Tools',
    'AI',
    'Development',
    'Research',
    'CRM',
    'Automation',
    'Productivity',
    'Analytics',
    'Communication',
  ]

  const [activeCategory, setActiveCategory] = useState('All Tools')
  const [activeHoverId, setActiveHoverId] = useState(null)

  // Helper to match category semantics
  const matchesCategory = (tool, targetCategory) => {
    if (targetCategory === 'All Tools') return true
    const target = targetCategory.trim().toLowerCase()
    const cat = (tool.category || '').trim().toLowerCase()
    const tid = (tool.id || '').toLowerCase()

    if (cat === target) return true

    if (target === 'ai') {
      const aiToolIds = ['chatgpt', 'claude', 'gemini', 'perplexity', 'openai-codex', 'claude-code', 'antigravity', 'stitch']
      return cat.includes('ai') || cat.includes('intelligence') || aiToolIds.includes(tid)
    }
    if (target === 'research') {
      return cat.includes('research') || cat.includes('intel') || cat.includes('discovery') || tid === 'perplexity'
    }
    if (target === 'development') {
      const devToolIds = ['openai-codex', 'claude-code', 'antigravity', 'stitch', 'python']
      return cat.includes('dev') || cat.includes('code') || cat.includes('engineering') || devToolIds.includes(tid)
    }
    if (target === 'productivity') {
      const prodToolIds = ['clickup', 'notion', 'google-workspace', 'microsoft-word', 'microsoft-powerpoint', 'microsoft-excel']
      return cat.includes('productiv') || cat.includes('ops') || cat.includes('operations') || prodToolIds.includes(tid)
    }
    if (target === 'analytics') {
      return cat.includes('analytic') || cat.includes('data') || cat.includes('spread') || tid === 'microsoft-excel'
    }
    if (target === 'crm') {
      return cat.includes('crm') || cat.includes('sales') || cat.includes('pipeline') || tid === 'zoho-crm' || tid === 'hubspot'
    }
    if (target === 'automation') {
      return cat.includes('auto') || cat.includes('workflow') || tid === 'zapier' || tid === 'make'
    }
    if (target === 'communication') {
      return cat.includes('commun') || cat.includes('collab') || tid === 'slack'
    }

    return false
  }

  // Pre-calculate count for each category pill
  const categoryCounts = useMemo(() => {
    const counts = {}
    categories.forEach(cat => {
      counts[cat] = tools.filter(t => matchesCategory(t, cat)).length
    })
    return counts
  }, [tools])

  // Filter tools for current active category
  const filteredTools = useMemo(() => {
    if (!tools || tools.length === 0) return []
    return tools.filter(t => matchesCategory(t, activeCategory))
  }, [tools, activeCategory])

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">09 · Tools &amp; Operating Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              Tools I Actually Use
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            The software platforms, AI engines, automation infrastructure, and development environments I use across commercial execution and software building.
          </p>
        </div>

        {/* Category Filter Pills with Item Counts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            const count = categoryCounts[cat] || 0

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-normal whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#111318] text-white shadow-xs ring-1 ring-[#111318]'
                    : 'bg-white text-[#555B66] hover:text-[#111318] hover:bg-slate-50 border border-[#E5E7EB] shadow-2xs'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Interactive Tool Cards Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 transition-all duration-300">
            {filteredTools.map((tool) => {
              const isHovered = activeHoverId === tool.id
              return (
                <div
                  key={tool.id}
                  onMouseEnter={() => setActiveHoverId(tool.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between group cursor-default relative shadow-xs hover-card-elevate ${
                    isHovered ? 'border-[#2563EB]/50' : 'border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Brand SVG Monogram */}
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-slate-800 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-2xs">
                      {getToolBrandLogo(tool.id, 'w-6 h-6')}
                    </div>

                    {/* Tool Identity */}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#111318] tracking-tight truncate group-hover:text-[#2563EB] transition-colors">
                        {tool.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#2563EB] font-semibold uppercase tracking-wider truncate">
                        {tool.category}
                      </div>
                    </div>
                  </div>

                  {/* Usage Context */}
                  {tool.desc && (
                    <p className="text-xs text-[#555B66] leading-relaxed pt-3 border-t border-slate-100 mt-3 line-clamp-2">
                      {tool.desc}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#E5E7EB] text-[#737984] text-xs font-mono">
            No tools found for "{activeCategory}". Click "All Tools" to view complete stack.
          </div>
        )}

      </div>
    </section>
  )
}
