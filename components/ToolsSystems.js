import React, { useState, useMemo } from 'react'
import { getToolBrandLogo } from './BrandLogos'

export default function ToolsSystems({ tools = [] }) {
  const categories = [
    'All Tools',
    'AI',
    'Research',
    'CRM',
    'Automation',
    'Productivity',
    'Development',
    'Analytics',
    'Communication',
  ]

  const [activeCategory, setActiveCategory] = useState('All Tools')
  const [activeHoverId, setActiveHoverId] = useState(null)

  // Deterministic category matching with robust multi-category support
  const filteredTools = useMemo(() => {
    if (!tools || tools.length === 0) return []
    if (activeCategory === 'All Tools') return tools

    const target = activeCategory.trim().toLowerCase()
    return tools.filter((t) => {
      const cat = (t.category || '').trim().toLowerCase()
      const tid = (t.id || '').toLowerCase()
      if (cat === target) return true

      // Category semantic normalization according to user specification
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
    })
  }, [tools, activeCategory])

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">09 · Tools & Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              Tools I Actually Use
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            The actual software platforms, AI intelligence tooling, and development engines I use across commercial execution, research, and product building.
          </p>
        </div>

        {/* Category Filter Chips (Horizontally scrollable with no scrollbar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-normal whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111318] text-white shadow-xs ring-1 ring-[#111318]'
                    : 'bg-white text-[#555B66] hover:text-[#111318] hover:bg-slate-50 border border-[#E5E7EB] shadow-2xs'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Interactive Tool Cards Grid (No reveal-on-scroll on dynamic cards to prevent empty opacity states) */}
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
                    isHovered ? 'border-[#2563EB]/40' : 'border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Brand SVG with subtle scale on hover */}
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-slate-800 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-2xs">
                      {getToolBrandLogo(tool.id, 'w-6 h-6')}
                    </div>

                    {/* Tool Identity */}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#111318] tracking-tight truncate group-hover:text-[#2563EB] transition-colors">
                        {tool.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#2563EB] font-semibold uppercase tracking-wider">
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
