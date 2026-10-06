import React, { useState, useMemo } from 'react'
import { getToolBrandLogo } from './BrandLogos'

export default function ToolsSystems({ tools = [] }) {
  const categories = [
    'All Tools',
    'AI',
    'Development',
    'Automation',
    'CRM',
    'Productivity',
    'Analytics',
    'Communication',
  ]

  const [activeCategory, setActiveCategory] = useState('All Tools')
  const [activeHoverId, setActiveHoverId] = useState(null)

  // Default core stack if tools array is empty
  const defaultTools = [
    { id: 'chatgpt', name: 'ChatGPT', category: 'AI' },
    { id: 'claude', name: 'Claude', category: 'AI' },
    { id: 'gemini', name: 'Gemini', category: 'AI' },
    { id: 'perplexity', name: 'Perplexity', category: 'Research' },
    { id: 'openai-codex', name: 'OpenAI Codex', category: 'Development' },
    { id: 'claude-code', name: 'Claude Code', category: 'Development' },
    { id: 'antigravity', name: 'Antigravity', category: 'Development' },
    { id: 'stitch', name: 'Stitch', category: 'Development' },
    { id: 'python', name: 'Python', category: 'Development' },
    { id: 'n8n', name: 'n8n', category: 'Automation' },
    { id: 'make', name: 'Make', category: 'Automation' },
    { id: 'zapier', name: 'Zapier', category: 'Automation' },
    { id: 'zoho-crm', name: 'Zoho CRM', category: 'CRM' },
    { id: 'hubspot', name: 'HubSpot', category: 'CRM' },
    { id: 'notion', name: 'Notion', category: 'Productivity' },
    { id: 'clickup', name: 'ClickUp', category: 'Productivity' },
    { id: 'google-workspace', name: 'Google Workspace', category: 'Productivity' },
    { id: 'microsoft-excel', name: 'Microsoft Excel', category: 'Analytics' },
    { id: 'slack', name: 'Slack', category: 'Communication' }
  ]

  const toolList = (tools && tools.length > 0) ? tools : defaultTools

  // Category matching
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
    if (target === 'development') {
      const devToolIds = ['openai-codex', 'claude-code', 'antigravity', 'stitch', 'python']
      return cat.includes('dev') || cat.includes('code') || devToolIds.includes(tid)
    }
    if (target === 'automation') {
      return cat.includes('auto') || cat.includes('workflow') || tid === 'zapier' || tid === 'make' || tid === 'n8n'
    }
    if (target === 'crm') {
      return cat.includes('crm') || cat.includes('sales') || tid === 'zoho-crm' || tid === 'hubspot'
    }
    if (target === 'productivity') {
      const prodToolIds = ['clickup', 'notion', 'google-workspace', 'microsoft-word', 'microsoft-powerpoint', 'microsoft-excel']
      return cat.includes('productiv') || cat.includes('ops') || prodToolIds.includes(tid)
    }
    if (target === 'analytics') {
      return cat.includes('analytic') || cat.includes('data') || tid === 'microsoft-excel'
    }
    if (target === 'communication') {
      return cat.includes('commun') || tid === 'slack'
    }

    return false
  }

  // Filter tools for current active category
  const filteredTools = useMemo(() => {
    return toolList.filter(t => matchesCategory(t, activeCategory))
  }, [toolList, activeCategory])

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">09 · Tools &amp; Operating Systems</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Tools I Actually Use
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            Everyday software platforms, AI intelligence tooling, automation engines, and development environments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

        {/* PURE VISUAL TOOL CARDS GRID (ICON + NAME + CATEGORY) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 transition-all duration-300">
          {filteredTools.map((tool) => {
            const isHovered = activeHoverId === tool.id
            return (
              <div
                key={tool.id}
                onMouseEnter={() => setActiveHoverId(tool.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`p-4 rounded-2xl bg-white border transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2.5 cursor-default relative shadow-2xs hover:shadow-md hover:-translate-y-1 ${
                  isHovered ? 'border-[#2563EB] ring-2 ring-[#2563EB]/15' : 'border-[#E5E7EB]'
                }`}
              >
                {/* Recognized Brand Logo SVG with hover animation */}
                <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-slate-800 transition-transform duration-300 group-hover:scale-110 shadow-2xs">
                  {getToolBrandLogo(tool.id, 'w-6 h-6')}
                </div>

                {/* Tool Name */}
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-[#111318] tracking-tight truncate max-w-[120px]">
                    {tool.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#2563EB] font-semibold uppercase tracking-wider truncate">
                    {tool.category}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
