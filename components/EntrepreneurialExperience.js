import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience() {
  const careerosFlow = [
    { step: '01', label: 'Profile', desc: 'Profile Ingestion' },
    { step: '02', label: 'Matching', desc: 'Precision AI Alignment' },
    { step: '03', label: 'Discovery', desc: '7-Day Freshness SLA' },
    { step: '04', label: 'Application', desc: 'Status Tracking' }
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
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-blue-50/30 border-2 border-[#E5E7EB] hover:border-[#2563EB]/50 shadow-sm p-6 sm:p-9 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Metadata, Title, Positioning, Flow Diagram, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 border border-blue-200">
                    FLAGSHIP PRODUCT · APPLIED AI PLATFORM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Product
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
                  Transforms a candidate’s background into targeted high-conviction opportunities, orchestrating discovery, role alignment, and submission tracking.
                </p>
              </div>

              {/* Animated Flow: Profile → Matching → Discovery → Application + 3D Workflow Illustration */}
              <div className="space-y-3 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                  Closed-Loop Operating Flow
                </span>

                {/* 3D Glassmorphic Workflow Visual (Discover → Match → Apply → Grow) */}
                <div className="relative w-full h-14 sm:h-16 flex items-center justify-center p-1 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
                  <div className="relative w-full h-full max-w-md animate-float-fast illustration-tilt">
                    <Image
                      src="/illustrations/workflow-illustration.png"
                      alt="Discover Match Apply Grow 3D Workflow Illustration"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain drop-shadow-xs"
                    />
                  </div>
                </div>

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
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">End-to-End Workflow</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">Multivariate</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Profile Matching</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">7-Day SLA</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Posting Freshness</div>
                </div>
              </div>

              {/* Category & Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['AI Product', 'Semantic Matching', 'Real-Time Discovery', 'Cloud Infrastructure', 'Data Verification'].map((tag) => (
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
                  <span>Explore Product Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-xs font-mono text-[#737984]">
                  Full Operating Blueprint →
                </span>
              </div>

            </div>

            {/* Right: 3D CareerOS Laptop Visual & Product Preview */}
            <div className="lg:col-span-5 space-y-4">
              {/* 3D Glass Laptop Hero Illustration */}
              <Link href="/work/careeros" className="block group/laptop">
                <div className="relative w-full aspect-[16/11] flex items-center justify-center p-3 sm:p-5 rounded-2xl glass-frame bg-gradient-to-b from-blue-50/40 via-white to-indigo-50/20 shadow-md group-hover/laptop:border-[#2563EB]/50 transition-all">
                  <div className="relative w-full h-full animate-float-slow illustration-tilt">
                    <Image
                      src="/illustrations/careeros-illustration.png"
                      alt="CareerOS AI Product Interface 3D Glass Laptop Illustration"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </Link>

              {/* Secondary Product Blueprint Peek */}
              <Link href="/work/careeros" className="block group/preview">
                <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 group-hover/preview:border-[#2563EB]/50 transition-all">
                  <Image
                    src="/images/careeros/careeros-operating-system-infographic.png"
                    alt="CareerOS Systems Blueprint"
                    fill
                    sizes="550px"
                    className="object-cover object-top opacity-85 group-hover/preview:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex items-center justify-center p-2">
                    <span className="text-[11px] font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                      Inspect 10-Stage Operating Blueprint ↗
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* 1B. NUVIO PRODUCT SHOWCASE (ACTIVE BUILD)            */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-indigo-50/30 border-2 border-[#E5E7EB] hover:border-[#2563EB]/50 shadow-sm p-6 sm:p-9 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Metadata, Title, Positioning, Flow Diagram, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200">
                    ACTIVE BUILD · PRODUCT IN PROGRESS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    BUILDING
                  </span>
                </div>
                <span className="text-xs font-mono text-[#737984]">
                  2026 · Active Build
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
                  A browser-based PDF workspace designed to keep sensitive documents on the user&apos;s device while making editing feel as simple as a modern productivity app.
                </p>
              </div>

              {/* 3 Core Architecture Pillars */}
              <div className="space-y-3 pt-1">
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
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Direct Manipulation</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-0.5">
                  <div className="text-sm font-bold text-[#111318]">Phase 05 / 08</div>
                  <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold">Interactive Sandbox</div>
                </div>
              </div>

              {/* Strategy & Product Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Product Strategy', 'UX', 'Product Management', 'Systems Thinking'].map((tag) => (
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
                  <span>Explore Product Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-xs font-mono text-[#737984]">
                  UX &amp; Systems Teardown →
                </span>
              </div>

            </div>

            {/* Right: 3D Nuvio Laptop Visual & Privacy Architecture Peek */}
            <div className="lg:col-span-5 space-y-4">
              {/* 3D Glass Laptop Hero Illustration */}
              <Link href="/work/nuvio" className="block group/laptop">
                <div className="relative w-full aspect-[16/11] flex items-center justify-center p-3 sm:p-5 rounded-2xl glass-frame bg-gradient-to-b from-indigo-50/40 via-white to-blue-50/20 shadow-md group-hover/laptop:border-[#2563EB]/50 transition-all">
                  <div className="relative w-full h-full animate-float-slow illustration-tilt">
                    <Image
                      src="/illustrations/nuvio-hero-illustration.svg"
                      alt="NUVIO Private PDF Workspace 3D Laptop Concept Visual"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain drop-shadow-xl"
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

          {/* 3D Glass Ventures Visual Stack Header Feature */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-xs">
            <div className="space-y-2 max-w-lg">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                VENTURE PORTFOLIO STACK
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#111318]">
                3 Ground-Level Operational Businesses
              </h4>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Automotive repair marketplace, early morning cold-chain food distribution, and regional institutional wholesale supply.
              </p>
            </div>

            {/* 3D Glass Ventures Illustration */}
            <div className="relative w-64 sm:w-72 h-36 sm:h-40 flex-shrink-0 animate-float-medium illustration-tilt">
              <Image
                src="/illustrations/ventures-illustration.png"
                alt="SettleMyCar, Dark Kitchen, Fixins 3D Glassmorphism Visual Stack"
                fill
                sizes="300px"
                className="object-contain drop-shadow-md"
              />
            </div>
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
