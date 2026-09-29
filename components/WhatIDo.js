import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function WhatIDo({ capabilities = [] }) {
  const list = capabilities.length > 0 ? capabilities : [
    {
      id: 'revenue-bd',
      slug: 'revenue-business-development',
      title: 'Revenue & Business Development',
      tag: 'Commercial Execution',
      headline: 'Consultative pipeline architecture, enterprise deal closing and recurring revenue systems.',
      summary: 'B2B sales, consultative pipeline development, deal closing, account expansion and commercial execution.',
      problemsSolved: [
        'Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles',
        'Stalled enterprise deals caused by unmapped procurement stakeholders'
      ],
      toolsUsed: ['Zoho CRM', 'Apollo', 'Lusha', 'HubSpot']
    },
    {
      id: 'partnerships-growth',
      slug: 'partnerships-growth',
      title: 'Partnerships & Growth',
      tag: 'Market Expansion',
      headline: 'Strategic alliances, distribution channels, and high-trust commercial ecosystems.',
      summary: 'Strategic partnerships, business development, distribution channels, and mutual-upside commercial agreements.',
      problemsSolved: [
        'High customer acquisition costs (CAC) in saturated direct marketing channels',
        'Fragmented supply partners with inconsistent service quality'
      ],
      toolsUsed: ['Slack', 'Notion', 'ClickUp', 'Zapier']
    },
    {
      id: 'business-operations',
      slug: 'business-operations',
      title: 'Business & Operations',
      tag: 'System Design',
      headline: 'Unit economics, ground-level logistics, working capital governance, and repeatable operating machines.',
      summary: 'Entrepreneurship, process design, operational logistics execution, working capital discipline and building repeatable systems.',
      problemsSolved: [
        'Volatile supplier quality and erratic early-morning logistics delivery failures',
        'Working capital depletion caused by loose credit terms'
      ],
      toolsUsed: ['n8n', 'Make', 'Monday.com', 'Python']
    }
  ]

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] relative">
      <div id="capabilities" className="sr-only" tabIndex={-1} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>02 · CORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              What I Do
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Three disciplined areas of commercial execution — turning market opportunities into repeatable, measurable business outcomes.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984]">
            [ Select a capability to inspect methodology & evidence ]
          </div>
        </div>

        {/* 3 Clickable Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item, idx) => (
            <Link
              key={item.id || idx}
              href={`/capabilities/${item.slug}`}
              className={`p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#2563EB]">
                    0{idx + 1} · {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
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
                          <span className="text-[#2563EB] font-bold">›</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5">
                  <span>Explore Methodology & Evidence</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
