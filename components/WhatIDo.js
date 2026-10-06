import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function WhatIDo({ capabilities = [] }) {
  const [activeTab, setActiveTab] = useState({}) // { [idx]: 'problems' | 'outcomes' }

  const cardThemes = [
    {
      domain: '01 · COMMERCIAL ENGINE',
      accentColor: '#2563EB',
      badgeBg: 'bg-blue-50 text-[#2563EB] border-blue-200/80',
      iconBg: 'bg-blue-500/10 text-[#2563EB]',
      borderHover: 'hover:border-[#2563EB]/50',
      titleHover: 'group-hover:text-[#2563EB]',
      metrics: ['High-Ticket Deal Velocity', 'Predictable Outbound Pipeline', 'CXO Stakeholder Closing']
    },
    {
      domain: '02 · STRATEGIC ALLIANCES',
      accentColor: '#7C3AED',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200/80',
      iconBg: 'bg-purple-500/10 text-purple-700',
      borderHover: 'hover:border-purple-500/50',
      titleHover: 'group-hover:text-purple-700',
      metrics: ['Distribution Channel Scale', 'Strategic Partner Ecosystems', 'CAC Optimization']
    },
    {
      domain: '03 · OPERATING RIGOR',
      accentColor: '#059669',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconBg: 'bg-emerald-500/10 text-emerald-700',
      borderHover: 'hover:border-emerald-500/50',
      titleHover: 'group-hover:text-emerald-700',
      metrics: ['Deterministic SOP Playbooks', 'Zero-Stockout Fulfillment', 'Unit Economics Governance']
    }
  ]

  const list = capabilities.length > 0 ? capabilities : [
    {
      id: 'revenue-bd',
      slug: 'revenue-business-development',
      title: 'Revenue & Business Development',
      tag: 'Commercial Execution',
      headline: 'End-to-end commercial pipeline development, consultative enterprise closing, and account growth.',
      summary: 'Revenue generation, pipeline development, enterprise sales, account management and deal execution.',
      problemsSolved: [
        'Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles.',
        'Stalled enterprise deals caused by unmapped procurement and executive decision-makers.'
      ],
      outcomesDelivered: [
        'Structured outbound cadences with ICP qualification and verified stakeholder mapping.',
        'Multi-million enterprise deal negotiations closed with sustainable contract margins.'
      ],
      toolsUsed: ['Zoho CRM', 'Apollo', 'HubSpot', 'LinkedIn Sales Nav']
    },
    {
      id: 'partnerships-growth',
      slug: 'partnerships-growth',
      title: 'Partnerships & Strategic Growth',
      tag: 'Market Expansion',
      headline: 'Strategic partnerships, co-distribution channels, commercial negotiation, and market expansion.',
      summary: 'Strategic partnerships, GTM strategy, market expansion, distribution and commercial growth.',
      problemsSolved: [
        'Escalating customer acquisition costs (CAC) in saturated direct marketing channels.',
        'Fragmented supply partners with erratic service quality and zero long-term retention.'
      ],
      outcomesDelivered: [
        'Co-distribution channel structures unlocking organic partner audience access.',
        'Partner performance SLAs and standardized onboarding frameworks ensuring 90%+ retention.'
      ],
      toolsUsed: ['Slack', 'Notion', 'ClickUp', 'Zapier']
    },
    {
      id: 'business-operations',
      slug: 'business-operations',
      title: 'Business Systems & Operations',
      tag: 'Operations & Scale',
      headline: 'Operating playbooks, process improvement, exception routing, and repeatable execution architectures.',
      summary: 'Business operations, process improvement, execution, scaling and building repeatable business systems.',
      problemsSolved: [
        'Volatile supplier quality and erratic early-morning logistics delivery failures.',
        'Working capital depletion caused by loose credit terms and uncollected receivables.'
      ],
      outcomesDelivered: [
        'Zero-stockout JIT supply pipelines with daily predictive demand replenishment.',
        'Tight credit-governance systems and automated invoicing cadences securing positive cashflow.'
      ],
      toolsUsed: ['n8n', 'Make', 'Monday.com', 'Python']
    }
  ]

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] relative">
      <div id="capabilities" className="sr-only" tabIndex={-1} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end reveal-on-scroll">
          
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                01 · CORE CAPABILITIES &amp; EXECUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-[1.12]">
              From commercial opportunity to <span className="text-[#2563EB]">verifiable outcome.</span>
            </h2>
          </div>

          {/* Right Column: Editorial Overview */}
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              I operate across business development, strategic partnerships, revenue systems, and ground execution. With 8+ years of hands-on experience, I focus on building high-trust commercial relationships, accelerating pipeline velocity, and engineering repeatable operational systems.
            </p>
          </div>

        </div>

        {/* 3 Structured Capability Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length]
            const viewMode = activeTab[idx] || 'problems'

            return (
              <div
                key={item.id || idx}
                className={`p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] ${theme.borderHover} hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar: Domain Eyebrow + External Link Icon */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                    <span className={`text-[10.5px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                      {theme.domain}
                    </span>
                    <Link
                      href={`/capabilities/${item.slug}`}
                      className="p-1 rounded-lg text-slate-400 hover:text-[#111318] transition-colors"
                      title="Inspect detailed capability dossier"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight text-[#111318] ${theme.titleHover} transition-colors leading-snug`}>
                      <Link href={`/capabilities/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                      {item.headline || item.summary}
                    </p>
                  </div>

                  {/* Highlight Metrics Strip */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                      Execution Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {theme.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#FAFAF8] border border-[#E5E7EB] text-[#111318]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Toggle: Problems Solved vs Outcomes Delivered */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] mb-3">
                      <button
                        type="button"
                        onClick={() => setActiveTab({ ...activeTab, [idx]: 'problems' })}
                        className={`flex-1 py-1 text-[11px] font-mono font-semibold rounded-lg transition-all ${
                          viewMode === 'problems'
                            ? 'bg-white text-[#111318] shadow-2xs border border-[#E5E7EB]'
                            : 'text-[#737984] hover:text-[#111318]'
                        }`}
                      >
                        Bottlenecks Solved
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab({ ...activeTab, [idx]: 'outcomes' })}
                        className={`flex-1 py-1 text-[11px] font-mono font-semibold rounded-lg transition-all ${
                          viewMode === 'outcomes'
                            ? 'bg-white text-[#111318] shadow-2xs border border-[#E5E7EB]'
                            : 'text-[#737984] hover:text-[#111318]'
                        }`}
                      >
                        Outcomes Delivered
                      </button>
                    </div>

                    <ul className="space-y-2 min-h-[72px]">
                      {viewMode === 'problems' ? (
                        (item.problemsSolved || []).map((prob, pIdx) => (
                          <li key={pIdx} className="text-xs text-[#555B66] flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-600 font-bold mt-0.5">✕</span>
                            <span>{prob}</span>
                          </li>
                        ))
                      ) : (
                        (item.outcomesDelivered || item.problemsSolved || []).map((outc, oIdx) => (
                          <li key={oIdx} className="text-xs text-[#555B66] flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                            <span>{outc}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                  {/* Tool Stack */}
                  {item.toolsUsed && item.toolsUsed.length > 0 && (
                    <div className="pt-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold mb-1.5">
                        Tool Stack
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.toolsUsed.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={`/capabilities/${item.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>Inspect Case Study &amp; Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10.5px] font-mono text-[#737984]">
                    Evidence →
                  </span>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
