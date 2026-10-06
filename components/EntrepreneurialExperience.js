import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience() {
  const careerosFlow = [
    { step: '01', label: 'Profile', desc: 'Vector Ingestion' },
    { step: '02', label: 'Matching', desc: '7-D Semantic AI' },
    { step: '03', label: 'Discovery', desc: '7-Day Freshness SLA' },
    { step: '04', label: 'Application', desc: 'Stage Telemetry' }
  ]

  const compactVentures = [
    {
      id: 'settlemycar',
      slug: 'settlemycar',
      title: 'SettleMyCar',
      category: 'MARKETPLACE · HISTORICAL',
      year: '2018–2021',
      what: 'Doorstep automotive servicing marketplace connecting car owners with vetted multi-brand garages.',
      role: 'Co-founder',
      roleDesc: 'Network garage onboarding, quality checklists & doorstep logistics.',
      result: '50+ Partner Garages · 1,000+ Orders Fulfilled',
      metricPill: '50+ Vetted Garages',
      tags: ['Marketplace', 'Ground Operations', 'Two-Sided Trust']
    },
    {
      id: 'dark-kitchen',
      slug: 'dark-kitchen',
      title: 'Dark Kitchen',
      category: 'B2B FOOD SUPPLY · VENTURE',
      year: '2020–2023',
      what: 'B2B commercial food-supply venture supplying commercial kitchens with scheduled raw ingredients.',
      role: 'Founder',
      roleDesc: '4:00 AM procurement dispatch, cold chain logistics & restaurant accounts.',
      result: 'Zero-Stockout SLA · 100% Morning Kitchen Readiness',
      metricPill: 'Zero Stockouts',
      tags: ['B2B Supply Chain', 'JIT Fulfillment', 'Daily Logistics']
    },
    {
      id: 'fixins',
      slug: 'fixins',
      title: 'Fixins',
      category: 'B2B DISTRIBUTION · BUSINESS',
      year: '2017–2020',
      what: 'B2B commercial trade enterprise supplying institutional clients with fast-moving goods.',
      role: 'Co-founder / Partner',
      roleDesc: 'Regional account contracts, bulk wholesale pricing & credit terms.',
      result: 'Multi-Point Regional Fulfillment · SLA Credit Governance',
      metricPill: 'Commercial Distribution',
      tags: ['Wholesale Trade', 'Route Logistics', 'Working Capital']
    }
  ]

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/60 border border-blue-200/60 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">03 · Selected Work &amp; Ventures</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Selected Work &amp; Ventures
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            Software systems and commercial ventures I have architected, founded, and operated — combining product thinking, unit economics, and real execution.
          </p>
        </div>

        {/* ==================================================== */}
        {/* 1. CAREEROS FLAGSHIP SHOWCASE                        */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-blue-50/30 border-2 border-[#E5E7EB] hover:border-[#2563EB]/50 shadow-sm p-6 sm:p-9 lg:p-12 transition-all duration-300 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Metadata, Title, Positioning, Flow Diagram, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 border border-blue-200">
                    FLAGSHIP PRODUCT · AI SYSTEMS ARCHITECTURE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Architecture
                  </span>
                </div>
                <span className="text-xs font-mono text-[#737984]">
                  2024–2026
                </span>
              </div>

              {/* Title & 1-Line Positioning */}
              <div className="space-y-1">
                <Link href="/work/careeros" className="group/title inline-block">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111318] group-hover/title:text-[#2563EB] transition-colors flex items-center gap-3">
                    <span>CareerOS</span>
                    <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover/title:text-[#2563EB] group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-transform" />
                  </h3>
                </Link>
                <p className="text-base sm:text-lg font-semibold text-[#2563EB]">
                  AI-powered career operating system.
                </p>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
                  Transforms a candidate’s background into a 7-dimensional semantic search query, orchestrating discovery, ATS alignment, and application telemetry.
                </p>
              </div>

              {/* Animated Flow: Profile → Matching → Discovery → Application */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                  Closed-Loop Pipeline Flow
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {careerosFlow.map((f, idx) => (
                    <div
                      key={f.step}
                      className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-0.5 text-center group/flow hover:border-[#2563EB] transition-colors"
                    >
                      <div className="text-[10px] font-mono text-[#2563EB] font-bold">
                        {f.step} · {f.label}
                      </div>
                      <div className="text-[11px] font-medium text-[#111318]">
                        {f.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Key Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">10 Stages</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Pipeline Architecture</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">7-D Vector</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Profile Matching</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">7-Day SLA</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Posting Freshness</div>
                </div>
              </div>

              {/* Category & Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['AI Product', 'Next.js 14', 'TypeScript', 'Vector Embeddings', 'Cloudflare Edge', 'SQLite / D1'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-[#E5E7EB] text-[#555B66] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/work/careeros"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111318] hover:bg-[#2563EB] text-white text-xs font-semibold transition-colors shadow-xs group/btn"
                >
                  <span>Explore Architecture &amp; Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-xs font-mono text-[#737984]">
                  Full Blueprint Breakdown →
                </span>
              </div>

            </div>

            {/* Right: Visual Product Screenshot Preview */}
            <div className="lg:col-span-5">
              <Link href="/work/careeros" className="block group/preview">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-frame border border-[#E5E7EB] shadow-md group-hover/preview:border-[#2563EB]/50 transition-all duration-300">
                  <Image
                    src="/images/careeros/careeros-operating-system-infographic.png"
                    alt="CareerOS AI-Powered Career Operating System Infographic Architecture"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center transition-transform duration-500 group-hover/preview:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      Click to inspect full architecture blueprint ↗
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. COMPACT VENTURES: SettleMyCar, Dark Kitchen, Fixins */}
        {/* ==================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]">
              Commercial &amp; Ground Supply Ventures
            </h3>
            <span className="text-xs font-mono text-[#737984]">
              Compact Operator Profiles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {compactVentures.map((proj) => (
              <div
                key={proj.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 reveal-on-scroll group"
              >
                <div className="space-y-4">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {proj.year}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link href={`/work/${proj.slug}`}>
                        <h4 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                          {proj.title}
                        </h4>
                      </Link>
                      <Link href={`/work/${proj.slug}`} className="p-1 text-slate-400 group-hover:text-[#2563EB]">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-100 text-[#111318]">
                      Role: {proj.role}
                    </div>
                  </div>

                  {/* What it was */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                      What It Was
                    </span>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                      {proj.what}
                    </p>
                  </div>

                  {/* Key Result */}
                  <div className="p-3 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                      Key Verifiable Result
                    </span>
                    <div className="text-xs font-semibold text-[#111318]">
                      {proj.result}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={`/work/${proj.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#737984]">
                    Evidence →
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
