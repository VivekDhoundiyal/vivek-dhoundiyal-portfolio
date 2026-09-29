import React from 'react'
import Link from 'next/link'
import {
  ChatGPTLogo,
  NotionLogo,
  GoogleWorkspaceLogo,
  ClickUpLogo,
  SlackLogo,
  ZohoLogo,
  HubSpotLogo,
  ApolloLogo,
  N8nLogo,
  MakeLogo
} from './BrandLogos'
import { ArrowRight } from './Icons'

export default function ToolsBar() {
  const primaryTools = [
    { id: 'chatgpt', name: 'ChatGPT', icon: ChatGPTLogo, color: 'text-emerald-500' },
    { id: 'notion', name: 'Notion', icon: NotionLogo, color: 'text-slate-900 dark:text-white' },
    { id: 'google-workspace', name: 'Google Workspace', icon: GoogleWorkspaceLogo, color: 'text-blue-500' },
    { id: 'clickup', name: 'ClickUp', icon: ClickUpLogo, color: 'text-purple-500' },
    { id: 'slack', name: 'Slack', icon: SlackLogo, color: 'text-amber-400' },
    { id: 'zoho', name: 'Zoho', icon: ZohoLogo, color: 'text-red-500' },
    { id: 'hubspot', name: 'HubSpot', icon: HubSpotLogo, color: 'text-orange-500' },
    { id: 'apollo', name: 'Apollo', icon: ApolloLogo, color: 'text-amber-500' },
    { id: 'n8n', name: 'n8n', icon: N8nLogo, color: 'text-rose-500' },
    { id: 'make', name: 'Make', icon: MakeLogo, color: 'text-indigo-400' },
  ]

  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-white/80 dark:bg-ink-900/90 border border-slate-200/80 dark:border-white/10 shadow-elevated backdrop-blur-xl transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          
          {/* Label Title */}
          <div className="flex items-center gap-3 pr-4 lg:border-r border-slate-200 dark:border-white/10 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            <div>
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 dark:text-white">
                Tools I Use
              </div>
              <div className="text-[11px] font-sans text-slate-500 dark:text-slate-400">
                To build, grow and operate efficiently
              </div>
            </div>
          </div>

          {/* Tools Horizontal Strip */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-1 flex-1">
            {primaryTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <div
                  key={tool.id}
                  className="flex items-center gap-2 flex-shrink-0 group cursor-default"
                  title={tool.name}
                >
                  <div className={`w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110 ${tool.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Action to full tools directory */}
          <div className="flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-white/5">
            <a
              href="#tools"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-signal-blue hover:text-signal-cyan transition-colors"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
