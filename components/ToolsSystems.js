import React from 'react'
import Image from 'next/image'
import { getToolBrandLogo } from './BrandLogos'

const TOOL_CATEGORIES = [
  {
    id: 'ai-research',
    title: 'AI & Research',
    subtitle: 'LLMs, synthesis & deep research',
    iconSrc: '/images/illustrations/icon-ai-chip.png',
    tools: [
      { id: 'chatgpt', name: 'ChatGPT' },
      { id: 'claude', name: 'Claude' },
      { id: 'google-gemini', name: 'Google Gemini' },
      { id: 'perplexity', name: 'Perplexity' },
      { id: 'grok', name: 'Grok' }
    ]
  },
  {
    id: 'ai-product-design',
    title: 'AI Product Building & Design',
    subtitle: 'Agentic workflows, UI & rapid prototypes',
    iconSrc: '/images/illustrations/icon-rocket-launch.png',
    tools: [
      { id: 'google-antigravity', name: 'Google Antigravity' },
      { id: 'google-opal', name: 'Google Opal' },
      { id: 'google-stitch', name: 'Google Stitch' }
    ]
  },
  {
    id: 'sales-prospecting-crm',
    title: 'Sales, Prospecting & CRM',
    subtitle: 'Outreach, ICP discovery & pipeline tracking',
    iconSrc: '/images/illustrations/icon-handshake.png',
    tools: [
      { id: 'lusha', name: 'Lusha' },
      { id: 'apollo-io', name: 'Apollo.io' },
      { id: 'linkedin-sales-navigator', name: 'LinkedIn Sales Navigator' },
      { id: 'hubspot', name: 'HubSpot' },
      { id: 'zoho-crm', name: 'Zoho CRM' }
    ]
  },
  {
    id: 'project-work-management',
    title: 'Project & Work Management',
    subtitle: 'Sprint cadences, roadmaps & deliverables',
    iconSrc: '/images/illustrations/icon-briefcase.png',
    tools: [
      { id: 'clickup', name: 'ClickUp' },
      { id: 'notion', name: 'Notion' },
      { id: 'monday', name: 'Monday.com' }
    ]
  },
  {
    id: 'communication-collaboration',
    title: 'Communication & Collaboration',
    subtitle: 'Async channels, team comms & alignment',
    iconSrc: '/images/illustrations/icon-call-handset.png',
    tools: [
      { id: 'slack', name: 'Slack' },
      { id: 'discord', name: 'Discord' },
      { id: 'microsoft-teams', name: 'Microsoft Teams' }
    ]
  },
  {
    id: 'productivity-business',
    title: 'Productivity & Business',
    subtitle: 'Documents, cloud drives & spreadsheets',
    iconSrc: '/images/illustrations/icon-apps-grid.png',
    tools: [
      { id: 'microsoft-365', name: 'Microsoft 365 / Office' },
      { id: 'google-workspace', name: 'Google Workspace' }
    ]
  },
  {
    id: 'automation-technical',
    title: 'Automation & Technical Tools',
    subtitle: 'Triggers, APIs, scripts & data loops',
    iconSrc: '/images/illustrations/icon-automation-gears.png',
    tools: [
      { id: 'n8n', name: 'n8n' },
      { id: 'make', name: 'Make' },
      { id: 'zapier', name: 'Zapier' },
      { id: 'python', name: 'Python' }
    ]
  }
]

export default function ToolsSystems() {
  const totalTools = TOOL_CATEGORIES.reduce((acc, cat) => acc + cat.tools.length, 0)

  return (
    <div className="pt-8 sm:pt-10 border-t border-[#E5E7EB] space-y-6">
      {/* Section Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10.5px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>APPLIED TOOLS &amp; OPERATING SYSTEMS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]">
            Tools I Use
          </h3>
          <p className="text-xs sm:text-sm text-[#555B66] max-w-xl leading-relaxed">
            Everyday software systems, AI reasoning models, CRM platforms, and automation engines operated with commercial discipline.
          </p>
        </div>

        <span className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg self-start sm:self-auto font-medium">
          {TOOL_CATEGORIES.length} Categories · {totalTools} Applied Platforms
        </span>
      </div>

      {/* 7-Category Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {TOOL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-3.5"
          >
            {/* Category Header with Authentic 3D Illustration */}
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
              <div className="w-7 h-7 relative flex-shrink-0">
                <Image
                  src={cat.iconSrc}
                  alt={cat.title}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-[#111318] truncate">
                  {cat.title}
                </h4>
                <p className="text-[10px] text-[#737984] font-mono truncate">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            {/* Individual Tools List with Official Brand Logos */}
            <ul className="space-y-1.5 flex-1" aria-label={`${cat.title} tools`}>
              {cat.tools.map((tool) => (
                <li
                  key={tool.id}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/60 text-xs text-slate-700 transition-colors group"
                >
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform" aria-hidden="true">
                    {getToolBrandLogo(tool.id, 'w-4 h-4')}
                  </span>
                  <span className="font-medium text-[12px] text-[#111318] truncate">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Category Card Footer Count */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Verified stack</span>
              <span className="font-semibold text-slate-600">{cat.tools.length} {cat.tools.length === 1 ? 'tool' : 'tools'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
