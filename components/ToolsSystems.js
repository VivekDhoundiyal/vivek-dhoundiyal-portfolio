import React, { useState } from 'react'
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

  const filteredTools = React.useMemo(() => {
    if (activeCategory === 'All Tools') return tools
    return tools.filter(t => t.category === activeCategory)
  }, [tools, activeCategory])

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">09 · Tools & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              Tools & Capabilities
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            The actual software platforms, automation engines, and intelligence tooling I use across commercial execution, outbound research, and product engineering.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none reveal-on-scroll">
          {categories.map((cat) => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-normal whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111318] text-white shadow-sm ring-1 ring-[#111318]'
                    : 'bg-white text-[#555B66] hover:text-[#111318] hover:bg-slate-50 border border-[#E5E7EB] shadow-xs'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Interactive Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTools.map((tool, idx) => {
            const isHovered = activeHoverId === tool.id
            return (
              <div
                key={tool.id}
                onMouseEnter={() => setActiveHoverId(tool.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover-card-elevate transition-all duration-200 flex flex-col justify-between group cursor-default relative reveal-on-scroll delay-${(idx % 4) * 100}`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Brand SVG with subtle scale on hover */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-slate-800 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-2xs">
                    {getToolBrandLogo(tool.id, "w-6 h-6")}
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

      </div>
    </section>
  )
}
