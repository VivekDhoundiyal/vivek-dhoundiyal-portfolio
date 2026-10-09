import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function WhatIDo() {
  const capabilities = [
    {
      number: '01',
      title: 'PRODUCT STRATEGY',
      subtitle: '0→1 Roadmapping & User Experience',
      description: 'Translating fuzzy user problems into crisp product specifications, visual wireframes, and prioritized feature backlogs.',
      flow: ['Discovery', 'Scoping', 'Delivery'],
      tags: ['0→1 Roadmapping', 'User Research', 'PRD Specs', 'Wireframing'],
      metric: 'Zero-Bloat Scope',
      slug: 'revenue-business-development',
      accent: 'blue',
      illustration: '/illustrations/innovation-illustration.png',
      illustrationAlt: 'Product Strategy & Innovation Illustration'
    },
    {
      number: '02',
      title: 'BUSINESS GROWTH',
      subtitle: 'Commercial Pipeline & Enterprise Deals',
      description: 'Building predictable outbound pipelines, ICP targeting, consultative solution pitching, and high-ticket enterprise contracts.',
      flow: ['Pipeline', 'Deals', 'Growth'],
      tags: ['Enterprise Sales', 'Pipeline Velocity', 'Consultative Selling', 'Deal Closing'],
      metric: 'Predictable Revenue',
      slug: 'revenue-business-development',
      accent: 'indigo',
      illustration: '/illustrations/analytics-illustration.png',
      illustrationAlt: 'Analytics & Revenue Dashboard Illustration'
    },
    {
      number: '03',
      title: 'AI WORKFLOWS',
      subtitle: 'Automation & Productivity Engines',
      description: 'Designing autonomous multi-modal AI pipelines, custom agent prompts, and event-driven automation to eliminate operational drag.',
      flow: ['Trigger', 'AI Logic', 'Outcome'],
      tags: ['Applied AI', 'Automation Workflows', 'Prompt Design', 'Event Triggers'],
      metric: '10x Speed Multiplier',
      slug: 'business-operations',
      accent: 'purple',
      illustration: '/illustrations/ai-illustration.png',
      illustrationAlt: 'AI & Workflow Automation Illustration'
    },
    {
      number: '04',
      title: 'OPERATIONS',
      subtitle: 'SOPs, SLAs & Unit Economics',
      description: 'Engineering disciplined standard operating procedures, vendor accountability, SLA governance, and unit margin rigor.',
      flow: ['Process', 'Systems', 'Repeatability'],
      tags: ['SOP Playbooks', 'Unit Economics', 'SLA Governance', 'Vendor Audits'],
      metric: 'Zero-Decay Systems',
      slug: 'business-operations',
      accent: 'emerald',
      illustration: '/illustrations/operations-illustration.png',
      illustrationAlt: 'Systems & Operations Illustration'
    }
  ]

  const accentStyles = {
    blue: {
      text: 'text-[#2563EB]',
      badge: 'bg-blue-50 text-[#2563EB] border-blue-200',
      borderHover: 'hover:border-[#2563EB]/50',
      flowBg: 'bg-blue-50/70 border-blue-100 text-[#111318]',
      flowActive: 'bg-[#2563EB] text-white',
      arrow: 'text-[#2563EB]'
    },
    indigo: {
      text: 'text-indigo-600',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      borderHover: 'hover:border-indigo-400/50',
      flowBg: 'bg-indigo-50/70 border-indigo-100 text-[#111318]',
      flowActive: 'bg-indigo-600 text-white',
      arrow: 'text-indigo-600'
    },
    purple: {
      text: 'text-purple-600',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      borderHover: 'hover:border-purple-400/50',
      flowBg: 'bg-purple-50/70 border-purple-100 text-[#111318]',
      flowActive: 'bg-purple-600 text-white',
      arrow: 'text-purple-600'
    },
    emerald: {
      text: 'text-emerald-600',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      borderHover: 'hover:border-emerald-400/50',
      flowBg: 'bg-emerald-50/70 border-emerald-100 text-[#111318]',
      flowActive: 'bg-emerald-600 text-white',
      arrow: 'text-emerald-600'
    }
  }

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] border-t border-[#E5E7EB] relative scroll-mt-16">
      <div id="capabilities" className="sr-only" tabIndex={-1} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + Avatar Growth Chart Callout  */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                03 · CAPABILITY SYSTEM
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Core Capabilities<br />
              <span className="text-[#2563EB]">From opportunity to outcome.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              A four-pillar operational framework combining front-end commercial velocity with back-end software systems and execution rigor.
            </p>
          </div>

          {/* Right Callout: Avatar with Growth Chart */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-growth-chart.png"
                alt="Vivek showing growth chart and commercial outcomes"
                width={315}
                height={428}
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Growth Velocity
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Opportunity → Scale
              </div>
              <p className="text-[11px] text-[#737984]">
                Compounding commercial leverage
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 4 VISUAL CAPABILITY CARDS GRID                       */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const style = accentStyles[cap.accent]
            return (
              <div
                key={cap.number}
                className={`p-7 rounded-3xl bg-white border border-[#E5E7EB] ${style.borderHover} hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Number & Arrow */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[#111318]/25 group-hover:text-[#111318] transition-colors">
                      {cap.number}
                    </span>

                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${style.badge}`}>
                      {cap.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#555B66] leading-relaxed pt-1">
                      {cap.description}
                    </p>
                  </div>

                  {/* Flow Diagram */}
                  <div className="pt-1">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#737984] font-bold block mb-1.5">
                      Execution Flow
                    </span>
                    <div className="flex items-center justify-between gap-1 p-2 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB]">
                      {cap.flow.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <div className={`px-2 py-1 rounded-xl text-[10.5px] font-mono font-semibold text-center flex-1 ${
                            sIdx === cap.flow.length - 1 ? style.flowActive : style.flowBg
                          }`}>
                            {step}
                          </div>
                          {sIdx < cap.flow.length - 1 && (
                            <span className={`text-[11px] font-bold ${style.arrow}`}>→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>View Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#737984]">
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
