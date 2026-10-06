import React, { useState } from 'react'

export default function SkillsSection() {
  const categories = [
    {
      id: 'sales',
      title: 'SALES',
      desc: 'High-ticket enterprise consultative deal closing & executive consensus.',
      nodes: [
        { name: 'Enterprise Sales', detail: 'Multi-stakeholder consultative enterprise deal closing.' },
        { name: 'Deal Strategy', detail: 'Structuring commercial contracts & margin governance.' },
        { name: 'Executive Pitching', detail: 'C-level and university leadership stakeholder alignment.' },
        { name: 'Contract Closing', detail: 'Navigating procurement legalities and closing cycles.' }
      ]
    },
    {
      id: 'growth',
      title: 'GROWTH',
      desc: 'Predictable outbound prospecting architectures & pipeline velocity.',
      nodes: [
        { name: 'Revenue Operations', detail: 'CRM pipeline stage hygiene and conversion telemetry.' },
        { name: 'Outbound Sourcing', detail: 'Targeted ICP list building and qualification cadences.' },
        { name: 'Pipeline Velocity', detail: 'Compressing sales cycle duration from lead to contract.' },
        { name: 'GTM Strategy', detail: 'Go-to-market commercial positioning and launch playbooks.' }
      ]
    },
    {
      id: 'partnerships',
      title: 'PARTNERSHIPS',
      desc: 'Co-distribution ecosystems & strategic partner monetization.',
      nodes: [
        { name: 'Strategic Alliances', detail: 'Designing win-win commercial partnerships.' },
        { name: 'Co-Distribution', detail: 'Tapping partner audience channels for distribution.' },
        { name: 'Channel Scaling', detail: 'Standardizing partner onboarding and retention SLAs.' },
        { name: 'Media Sponsorships', detail: 'Monetizing digital attention into brand sponsorships.' }
      ]
    },
    {
      id: 'operations',
      title: 'OPERATIONS',
      desc: 'Repeatable business operating systems & unit economics accountability.',
      nodes: [
        { name: 'SOP Playbooks', detail: 'Deterministic standard operating procedures.' },
        { name: 'Unit Economics', detail: 'Contribution margin governance and cashflow discipline.' },
        { name: 'SLA Governance', detail: 'Zero-stockout delivery fulfillment and vendor SLAs.' },
        { name: 'Exception Routing', detail: 'Automated escalation paths for fulfillment bottlenecks.' }
      ]
    },
    {
      id: 'product',
      title: 'PRODUCT',
      desc: 'Translating ground commercial insight into intuitive software products.',
      nodes: [
        { name: 'Systems Architecture', detail: 'Closed-loop data pipelines and deterministic state.' },
        { name: 'Problem Discovery', detail: 'Extracting genuine operator bottlenecks before code.' },
        { name: 'Specification Design', detail: 'Scoping functional PRDs and wireframe flows.' },
        { name: 'CareerOS Platform', detail: 'AI career operating system developed from scratch.' }
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI & AUTOMATION',
      desc: 'Leverage multiplication through webhook workflows & LLM pipelines.',
      nodes: [
        { name: 'Prompt Engineering', detail: 'Structured JSON schemas and system prompt design.' },
        { name: 'Webhook Pipelines', detail: 'Event-driven multi-platform sync via REST hooks.' },
        { name: 'n8n Orchestration', detail: 'Automating administrative drag without software bloat.' },
        { name: 'Vector Embeddings', detail: 'Semantic similarity matching and candidate scoring.' }
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState('sales')
  const [hoveredNode, setHoveredNode] = useState(null)

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0]

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">09.1 · Interactive Capability Map</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Capability &amp; Systems Map
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            An interactive node network connecting commercial deal strategy, revenue growth, operating systems, and AI product building.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id)
                  setHoveredNode(null)
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111318] text-white shadow-xs ring-1 ring-[#111318]'
                    : 'bg-[#FAFAF8] text-[#555B66] hover:text-[#111318] hover:bg-slate-100 border border-[#E5E7EB]'
                }`}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* INTERACTIVE CAPABILITY NODE MAP DISPLAY */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-xs relative overflow-hidden bg-blueprint-grid">
          
          {/* Active Category Header */}
          <div className="max-w-xl space-y-1.5 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              Domain Cluster · {currentCategory.title}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111318]">
              {currentCategory.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#555B66]">
              {currentCategory.desc}
            </p>
          </div>

          {/* Visual Connected Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {currentCategory.nodes.map((node, nIdx) => {
              const isHovered = hoveredNode === node.name
              return (
                <div
                  key={node.name}
                  onMouseEnter={() => setHoveredNode(node.name)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between space-y-3 cursor-default shadow-2xs ${
                    isHovered
                      ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20 -translate-y-1 shadow-md'
                      : 'border-[#E5E7EB] hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span className="text-[10px] font-mono text-[#737984]">
                        Node 0{nIdx + 1}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#111318] tracking-tight">
                      {node.name}
                    </h4>
                  </div>

                  <p className="text-xs text-[#555B66] leading-relaxed pt-2 border-t border-slate-100">
                    {node.detail}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Live Node Telemetry Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#737984]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hover any competency node to inspect operational application</span>
            </div>

            <div className="text-[#2563EB] font-bold">
              {hoveredNode ? `Active: ${hoveredNode}` : `Cluster: ${currentCategory.title}`}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
