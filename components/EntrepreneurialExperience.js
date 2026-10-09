import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filterTabs = ['All', 'Products', 'Strategy', 'Growth']

  const allProjects = [
    {
      id: 'careeros',
      slug: 'careeros',
      title: 'CareerOS',
      category: 'AI PRODUCT · APPLIED WORKFLOWS',
      type: 'Products',
      year: '2024–Present',
      status: 'Live Flagship',
      statusColor: 'emerald',
      tagline: 'AI-powered career operating system.',
      description: 'Transforms a candidate’s background into targeted high-conviction opportunities, orchestrating discovery, role alignment, and submission tracking.',
      metrics: [
        { label: 'Operating Flow', value: '10 Stages' },
        { label: 'Role Alignment', value: 'Multivariate' },
        { label: 'Posting Freshness', value: '7-Day SLA' }
      ],
      tags: ['AI Product', 'Semantic Matching', 'Real-Time Discovery', 'Automation'],
      href: '/work/careeros',
      badge: 'Flagship System'
    },
    {
      id: 'settlemycar',
      slug: 'settlemycar',
      title: 'SettleMyCar',
      category: 'MARKETPLACE · OPERATED',
      type: 'Growth',
      year: '2018–2021',
      status: 'Operated',
      statusColor: 'blue',
      tagline: 'Automotive servicing marketplace connecting car owners with vetted garages.',
      description: 'Onboarded 50+ multi-brand garages with quality checklists, SLA governance, and end-to-end doorstep logistics.',
      metrics: [
        { label: 'Partner Garages', value: '50+ Garages' },
        { label: 'Orders Fulfilled', value: '1,000+' },
        { label: 'Quality Audit', value: '100% Inspected' }
      ],
      tags: ['Marketplace', 'Ground Operations', 'Two-Sided Trust', 'Vendor SLAs'],
      href: '/work/settlemycar',
      badge: '0→1 Venture'
    },
    {
      id: 'dark-kitchen',
      slug: 'dark-kitchen',
      title: 'Dark Kitchen',
      category: 'B2B FOOD SUPPLY · SCALED',
      type: 'Strategy',
      year: '2020–2023',
      status: 'Scaled',
      statusColor: 'purple',
      tagline: 'Early-morning B2B food supply chain for commercial restaurants.',
      description: 'Managed 4:00 AM procurement dispatch, cold-chain fulfillment, and institutional restaurant accounts with zero stockouts.',
      metrics: [
        { label: 'Morning Dispatch', value: '4:00 AM JIT' },
        { label: 'Stockout Rate', value: '0% Stockouts' },
        { label: 'Client Retention', value: 'High LTV' }
      ],
      tags: ['B2B Supply Chain', 'JIT Fulfillment', 'Daily Logistics', 'Route Ops'],
      href: '/work/dark-kitchen',
      badge: 'Commercial Logistics'
    },
    {
      id: 'fixins',
      slug: 'fixins',
      title: 'Fixins',
      category: 'B2B DISTRIBUTION · BUSINESS',
      type: 'Growth',
      year: '2017–2020',
      status: 'Operated',
      statusColor: 'amber',
      tagline: 'Fast-moving goods distribution and wholesale institutional trade.',
      description: 'Negotiated multi-point regional fulfillment contracts, bulk wholesale pricing tiers, and credit risk governance.',
      metrics: [
        { label: 'Distribution Points', value: 'Regional Hubs' },
        { label: 'SLA Governance', value: 'Structured Credit' },
        { label: 'Contract Type', value: 'B2B Wholesale' }
      ],
      tags: ['Wholesale Trade', 'Route Logistics', 'Working Capital', 'B2B Accounts'],
      href: '/work/fixins',
      badge: 'Trade Enterprise'
    }
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjects
    return allProjects.filter((p) => p.type === activeFilter)
  }, [activeFilter, allProjects])

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Dashboard Title + Avatar Callout     */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>01 · FEATURED WORK &amp; VENTURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-tight">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl leading-relaxed font-normal pt-1">
              Selected ventures, commercial systems, and 0→1 products I have architected, founded, and operated.
            </p>
          </div>

          {/* Right Callout: Avatar Pointing to Work */}
          <div className="flex items-center gap-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-3 sm:p-4 rounded-3xl border border-blue-100 shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-pointing-right.png"
                alt="Vivek pointing to featured work"
                width={281}
                height={443}
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Proof of Execution
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Real Ventures &amp; Products
              </div>
              <p className="text-[11px] text-[#737984]">
                Unit economics + product design
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* FILTER TABS (All · Products · Strategy · Growth)    */}
        {/* ==================================================== */}
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111318] text-white shadow-xs ring-1 ring-[#111318]'
                    : 'bg-[#FAFAF8] text-[#555B66] hover:text-[#111318] hover:bg-slate-100 border border-[#E5E7EB]'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>

        {/* ==================================================== */}
        {/* 1. LARGE HERO FEATURE CARD: NUVIO (ACTIVE BUILD)     */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-blue-50/30 border-2 border-[#E5E7EB] hover:border-[#2563EB]/50 shadow-sm p-6 sm:p-9 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Metadata, Title, Positioning, Architecture, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 border border-blue-200">
                    FEATURED CASE STUDY · 0→1 PRODUCT
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    BUILDING (IN PROGRESS)
                  </span>
                </div>
                <span className="text-xs font-mono text-[#737984]">
                  Active Development · 2026
                </span>
              </div>

              {/* Title & 1-Line Positioning */}
              <div className="space-y-1">
                <Link href="/work/nuvio" className="group/title inline-block">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111318] group-hover/title:text-[#2563EB] transition-colors flex items-center gap-3">
                    <span>NUVIO</span>
                    <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover/title:text-[#2563EB] group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-transform" />
                  </h3>
                </Link>
                <p className="text-base sm:text-lg font-semibold text-[#2563EB]">
                  Private PDF Editing, Reimagined.
                </p>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
                  A zero-cloud, client-side PDF workspace built around complete document sovereignty, instant local rendering, and distraction-free visual manipulation.
                </p>
              </div>

              {/* 3 Core Architecture Pillars */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                  Product Architecture Pillars
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#111318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      Client Sandbox
                    </div>
                    <p className="text-[11px] text-[#555B66] leading-snug">
                      100% in-memory document processing with zero remote server retention.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#111318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      Visual Canvas
                    </div>
                    <p className="text-[11px] text-[#555B66] leading-snug">
                      Direct Cartesian placement for text, signatures, and annotations.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#111318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Zero Conversion
                    </div>
                    <p className="text-[11px] text-[#555B66] leading-snug">
                      Single source of truth export preventing destructive formatting shifts.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Status / Product Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">0 Uploads</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">100% Local Device</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">WYSIWYG</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Direct Canvas</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">Phase 05 / 08</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Interactive Sandbox</div>
                </div>
              </div>

              {/* Strategy & Product Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Product Strategy', 'Client-Side Architecture', 'Document Privacy', '0→1 Product Design', 'UX Research'].map((tag) => (
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
                  href="/work/nuvio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111318] hover:bg-[#2563EB] text-white text-xs font-semibold transition-colors shadow-xs group/btn"
                >
                  <span>View Product Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-xs font-mono text-[#737984]">
                  Full PM Teardown &amp; Blueprint →
                </span>
              </div>

            </div>

            {/* Right: 3D Nuvio Laptop Visual & Privacy Architecture Peek */}
            <div className="lg:col-span-5 space-y-4">
              <Link href="/work/nuvio" className="block group/laptop">
                <div className="relative w-full aspect-[16/11] flex items-center justify-center p-3 sm:p-5 rounded-2xl glass-frame bg-gradient-to-b from-indigo-50/40 via-white to-blue-50/20 shadow-md group-hover/laptop:border-[#2563EB]/50 transition-all">
                  <div className="relative w-full h-full animate-float-slow illustration-tilt">
                    <Image
                      src="/illustrations/nuvio-hero-illustration.svg"
                      alt="NUVIO Private PDF Workspace 3D Laptop Concept Visual"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </Link>

              {/* Secondary Privacy Architecture Peek */}
              <Link href="/work/nuvio" className="block group/preview">
                <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-900 group-hover/preview:border-[#2563EB]/50 transition-all">
                  <Image
                    src="/illustrations/nuvio-privacy-diagram.svg"
                    alt="NUVIO Client-Side Sandbox Privacy Architecture"
                    fill
                    sizes="550px"
                    className="object-cover object-center opacity-85 group-hover/preview:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-2">
                    <span className="text-[11px] font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                      Inspect Client-Side Privacy Architecture ↗
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. 4 PROJECT CARDS GRID (CareerOS, SettleMyCar, etc)  */}
        {/* ==================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]">
              Ventures &amp; Commercial Systems
            </h3>
            <span className="text-xs font-mono text-[#737984]">
              {filteredProjects.length} Selected Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-7 sm:p-9 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  
                  {/* Category & Year */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                        {proj.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white border border-slate-200 text-slate-700">
                        {proj.status}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#737984]">
                      {proj.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link href={proj.href}>
                        <h4 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center gap-2">
                          <span>{proj.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </h4>
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                      {proj.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
                      {proj.description}
                    </p>
                  </div>

                  {/* 3 Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {proj.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-white border border-slate-200 text-center space-y-0.5">
                        <div className="text-xs font-bold text-[#111318]">{m.value}</div>
                        <div className="text-[9px] font-mono uppercase text-[#737984] font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={proj.href}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#737984]">
                    {proj.badge} →
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
