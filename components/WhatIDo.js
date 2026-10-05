import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function WhatIDo({ capabilities = [] }) {
  const cardAccents = [
    {
      accentText: 'text-[#2563EB]',
      accentBg: 'bg-blue-50 border-blue-100 text-[#2563EB]',
      hoverBorder: 'hover:border-[#2563EB]/40',
      hoverText: 'group-hover:text-[#2563EB]',
      bulletText: 'text-[#2563EB]',
      linkText: 'text-[#2563EB]'
    },
    {
      accentText: 'text-purple-600',
      accentBg: 'bg-purple-50 border-purple-100 text-purple-700',
      hoverBorder: 'hover:border-purple-400/40',
      hoverText: 'group-hover:text-purple-600',
      bulletText: 'text-purple-600',
      linkText: 'text-purple-600'
    },
    {
      accentText: 'text-emerald-600',
      accentBg: 'bg-emerald-50 border-emerald-100 text-emerald-700',
      hoverBorder: 'hover:border-emerald-400/40',
      hoverText: 'group-hover:text-emerald-600',
      bulletText: 'text-emerald-600',
      linkText: 'text-emerald-600'
    }
  ]

  const list = capabilities.length > 0 ? capabilities : [
    {
      id: 'revenue-bd',
      slug: 'revenue-business-development',
      title: 'Revenue & Business Development',
      tag: 'Commercial Execution',
      headline: 'Revenue generation, pipeline development, enterprise sales, account management and deal execution.',
      summary: 'Revenue generation, pipeline development, enterprise sales, account management and deal execution.',
      problemsSolved: [
        'Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles',
        'Stalled enterprise deals caused by unmapped procurement and executive stakeholders'
      ],
      toolsUsed: ['Zoho CRM', 'Apollo', 'Lusha', 'HubSpot']
    },
    {
      id: 'partnerships-growth',
      slug: 'partnerships-growth',
      title: 'Partnerships & Growth',
      tag: 'Market Expansion',
      headline: 'Strategic partnerships, GTM strategy, market expansion, distribution and commercial growth.',
      summary: 'Strategic partnerships, GTM strategy, market expansion, distribution and commercial growth.',
      problemsSolved: [
        'High customer acquisition costs (CAC) in saturated direct marketing channels',
        'Fragmented supply partners with inconsistent service quality and low retention'
      ],
      toolsUsed: ['Slack', 'Notion', 'ClickUp', 'Zapier']
    },
    {
      id: 'business-operations',
      slug: 'business-operations',
      title: 'Business & Operations',
      tag: 'Operations & Scale',
      headline: 'Business operations, process improvement, execution, scaling and building repeatable business systems.',
      summary: 'Business operations, process improvement, execution, scaling and building repeatable business systems.',
      problemsSolved: [
        'Volatile supplier quality and erratic early-morning logistics delivery failures',
        'Working capital depletion caused by loose credit terms and uncollected receivables'
      ],
      toolsUsed: ['n8n', 'Make', 'Monday.com', 'Python']
    }
  ]

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] relative">
      <div id="capabilities" className="sr-only" tabIndex={-1} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Two-column Split matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-18 reveal-on-scroll">
          
          {/* Left Column: Eyebrow + Big Headline (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                01 · WHAT I DO
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-[1.12]">
              From opportunities to <span className="text-[#2563EB]">real outcomes.</span>
            </h2>
          </div>

          {/* Right Column: Editorial Overview Paragraph (6 cols) */}
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              I work on business development, partnerships, revenue generation and operations — from finding commercial opportunities to executing them on the ground. With 8+ years of hands-on sales and entrepreneurial experience, I focus on building high-trust relationships, driving predictable revenue, and scaling repeatable business systems.
            </p>
          </div>

        </div>

        {/* 3 Clickable Capability Cards with Distinct Accent Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item, idx) => {
            const accent = cardAccents[idx % cardAccents.length]
            return (
              <Link
                key={item.id || idx}
                href={`/capabilities/${item.slug}`}
                className={`p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] ${accent.hoverBorder} hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${accent.accentBg}`}>
                      0{idx + 1} · {item.tag === 'System Design' ? 'Operations & Scale' : item.tag}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 text-slate-400 ${accent.hoverText} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight text-[#111318] ${accent.hoverText} transition-colors`}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {item.headline || item.summary}
                  </p>

                  {/* Problems Solved Preview */}
                  {item.problemsSolved && item.problemsSolved.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
                        Key Problems Solved:
                      </span>
                      <ul className="space-y-1.5">
                        {item.problemsSolved.slice(0, 2).map((prob, pIdx) => (
                          <li key={pIdx} className="text-xs text-[#555B66] flex items-start gap-2">
                            <span className={`${accent.bulletText} font-bold`}>›</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className={`text-xs font-semibold ${accent.linkText} group-hover:underline flex items-center gap-1.5`}>
                    <span>Explore Methodology & Evidence</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
