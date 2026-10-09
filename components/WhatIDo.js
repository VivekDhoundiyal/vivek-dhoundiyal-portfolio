import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChartIcon,
  HandshakeIcon,
  TargetIcon,
  SparklesIcon,
  SlidersIcon,
  ArrowRight
} from './Icons'
import ToolsSystems from './ToolsSystems'

export default function WhatIDo() {
  const capabilities = [
    {
      id: 'business-growth',
      number: '01',
      title: 'Business Growth',
      tagline: 'GTM · Sales · Revenue',
      description: 'Growth strategy, business development, and commercial expansion.',
      details: 'Building predictable outbound pipelines, ICP qualification, consultative pitching, and repeatable revenue engines.',
      icon: ChartIcon,
      color: 'blue',
      badgeClass: 'bg-blue-50 text-[#2563EB] border-blue-200',
      iconBg: 'bg-blue-50 text-[#2563EB] border-blue-100',
      hoverBorder: 'hover:border-[#2563EB]/50'
    },
    {
      id: 'revenue-partnerships',
      number: '02',
      title: 'Revenue & Partnerships',
      tagline: 'Strategic Alliances',
      description: 'B2B sales, partnerships, GTM, and revenue development.',
      details: 'Structuring commercial co-distribution alliances, agency account management, and high-trust institutional agreements.',
      icon: HandshakeIcon,
      color: 'purple',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      hoverBorder: 'hover:border-purple-400/50'
    },
    {
      id: 'product-strategy',
      number: '03',
      title: 'Product Strategy',
      tagline: 'From problem to solution',
      description: 'Problem discovery, product thinking, prioritization, and execution.',
      details: 'Translating user pain points into crisp PRDs, scoped milestones, client-side workflows, and zero-bloat product roadmaps.',
      icon: TargetIcon,
      color: 'emerald',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      hoverBorder: 'hover:border-emerald-400/50'
    },
    {
      id: 'ai-automation',
      number: '04',
      title: 'AI & Automation',
      tagline: 'Smarter workflows',
      description: 'AI-assisted workflows, intelligent systems, and process automation.',
      details: 'Deploying agentic prompting, document automation loops, and trigger-based systems to eliminate operational drag.',
      icon: SparklesIcon,
      color: 'amber',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      hoverBorder: 'hover:border-amber-400/50'
    },
    {
      id: 'operations-execution',
      number: '05',
      title: 'Operations & Execution',
      tagline: 'Execution & Systems',
      description: 'Process improvement, operating systems, and cross-functional execution.',
      details: 'Designing strict standard operating procedures, vendor SLA accountability, unit economics governance, and logistics cadences.',
      icon: SlidersIcon,
      color: 'rose',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
      hoverBorder: 'hover:border-rose-400/50'
    }
  ]

  return (
    <section id="capabilities" className="py-12 sm:py-16 bg-[#FAFAF8] text-[#111318] border-t border-[#E5E7EB] relative scroll-mt-16">
      <div id="what-i-do" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + Supporting Avatar            */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                02 · CORE CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Core Capabilities<br />
              <span className="text-[#2563EB]">From opportunity to outcome.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              A five-pillar operational framework blending commercial velocity, product thinking, and system execution rigor.
            </p>
          </div>

          {/* Right Callout: Supporting Avatar */}
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 animate-float-medium">
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
                Execution Model
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Opportunity → Delivery
              </div>
              <p className="text-[11px] text-[#737984]">
                Compounding commercial leverage
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 5 CAPABILITY CARDS GRID (AS IN REFERENCE)            */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.id}
                className={`p-7 rounded-3xl bg-white border border-[#E5E7EB] ${cap.hoverBorder} hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-5 reveal-on-scroll`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${cap.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${cap.badgeClass}`}>
                      {cap.tagline}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      {cap.description}
                    </p>
                    <p className="text-xs text-[#737984] leading-relaxed pt-1">
                      {cap.details}
                    </p>
                  </div>
                </div>

                {/* Card Base */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-slate-400">
                    Pillar {cap.number}
                  </span>
                  <span className="text-[#2563EB] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Applied Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )
          })}

          {/* 6th Card: Supporting Summary / Integration Callout */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-white border border-blue-100 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800 text-[10.5px] font-mono font-semibold">
                <span>Integrated Mindset</span>
              </div>
              <h3 className="text-lg font-bold text-[#111318]">
                Bridging Commercial &amp; Product
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating at the intersection of enterprise business development, product management, and operational systems to deliver measurable outcomes.
              </p>
            </div>

            <div className="pt-3 border-t border-blue-100/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#2563EB] font-bold">
                5 Pillars Combined
              </span>
              <Link
                href="/resume"
                className="text-xs font-semibold text-[#111318] hover:text-[#2563EB] flex items-center gap-1"
              >
                <span>Read CV</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* COMPACT TOOLS & OPERATING SYSTEMS SUBSECTION        */}
        {/* ==================================================== */}
        <ToolsSystems />

      </div>
    </section>
  )
}
