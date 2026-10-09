import React from 'react'
import Image from 'next/image'
import { getToolBrandLogo } from './BrandLogos'

const TOOL_CATEGORIES = [
  {
    id: 'ai-reasoning',
    title: 'AI & Reasoning',
    subtitle: 'LLMs, Reasoning & Code',
    iconSrc: '/images/illustrations/icon-ai-chip.png',
    tools: [
      { id: 'chatgpt', name: 'ChatGPT' },
      { id: 'claude', name: 'Claude' },
      { id: 'gemini', name: 'Gemini' },
      { id: 'perplexity', name: 'Perplexity' },
      { id: 'cursor', name: 'Cursor' }
    ]
  },
  {
    id: 'sales-crm',
    title: 'Sales & CRM',
    subtitle: 'Outreach, Pipelines & ICP',
    iconSrc: '/images/illustrations/icon-handshake.png',
    tools: [
      { id: 'hubspot', name: 'HubSpot' },
      { id: 'zoho-crm', name: 'Zoho CRM' },
      { id: 'apollo', name: 'Apollo.io' },
      { id: 'sales-navigator', name: 'Sales Navigator' }
    ]
  },
  {
    id: 'automation-ops',
    title: 'Automation & Ops',
    subtitle: 'Triggers, APIs & Loops',
    iconSrc: '/images/illustrations/icon-automation-gears.png',
    tools: [
      { id: 'make', name: 'Make.com' },
      { id: 'zapier', name: 'Zapier' },
      { id: 'n8n', name: 'n8n' },
      { id: 'python', name: 'Python' }
    ]
  },
  {
    id: 'productivity-design',
    title: 'Productivity & Design',
    subtitle: 'Workspaces, Docs & UI',
    iconSrc: '/images/illustrations/icon-apps-grid.png',
    tools: [
      { id: 'notion', name: 'Notion' },
      { id: 'clickup', name: 'ClickUp' },
      { id: 'figma', name: 'Figma' },
      { id: 'slack', name: 'Slack' },
      { id: 'google-workspace', name: 'Google Workspace' }
    ]
  },
  {
    id: 'systems-analytics',
    title: 'Systems & Analytics',
    subtitle: 'Data, Metrics & Infra',
    iconSrc: '/images/illustrations/icon-database-cloud.png',
    tools: [
      { id: 'microsoft-excel', name: 'Excel' },
      { id: 'cloudflare', name: 'Cloudflare' },
      { id: 'stripe', name: 'Stripe' },
      { id: 'linear', name: 'Linear' }
    ]
  }
]

export default function ToolsSystems() {
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

        <span className="text-[11px] font-mono text-slate-400 self-start sm:self-auto">
          5 Core Categories · 22 Applied Platforms
        </span>
      </div>

      {/* 5-Category Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
        {TOOL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-3.5"
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

            {/* Individual Tools List */}
            <ul className="space-y-1.5 flex-1">
              {cat.tools.map((tool) => (
                <li
                  key={tool.id}
                  className="flex items-center gap-2 py-1 px-1.5 rounded-lg hover:bg-slate-50 text-xs text-slate-700 transition-colors group"
                >
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
                    {getToolBrandLogo(tool.id, 'w-3.5 h-3.5')}
                  </span>
                  <span className="truncate font-medium text-[11.5px] text-[#111318]">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Category Card Footer Count */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Verified stack</span>
              <span>{cat.tools.length} tools</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
