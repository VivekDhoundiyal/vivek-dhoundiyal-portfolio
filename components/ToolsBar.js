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
    <div className="relative z-20 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl sm:rounded-full px-5 py-3.5 sm:py-4 bg-white/95 border border-[#E5E7EB] shadow-xs backdrop-blur-md transition-all">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          
          {/* Label Title */}
          <div className="flex items-center gap-3 pr-4 lg:border-r border-[#E5E7EB] flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse flex-shrink-0" />
            <div>
              <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#111318]">
                Tools I Use
              </div>
              <div className="text-[11px] font-sans text-[#737984]">
                To build, grow and operate efficiently
              </div>
            </div>
          </div>

          {/* Tools Horizontal Strip */}
          <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto scrollbar-none py-1 flex-1">
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
                  <span className="text-xs font-semibold text-[#555B66] group-hover:text-[#111318] transition-colors">
                    {tool.name}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Action to full tools directory / Next indicator */}
          <div className="flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#E5E7EB]">
            <a
              href="#tools"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 hover:bg-blue-50 border border-[#E5E7EB] hover:border-blue-200 text-[#737984] hover:text-[#2563EB] transition-colors"
              title="Explore all tools"
              aria-label="Explore all tools"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
