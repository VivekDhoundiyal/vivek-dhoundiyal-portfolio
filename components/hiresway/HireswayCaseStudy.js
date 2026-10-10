import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckIcon } from '../Icons'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function HireswayCaseStudy({ siteData }) {
  useScrollReveal()

  // Pull Hiresway content from CMS siteData with complete static defaults
  const hiresway = siteData?.hiresway || siteData?.hiresway || {}
  const hero = hiresway.hero || {}
  const infographic = hiresway.infographic || {}
  const transition = hiresway.transition || {}
  const architecturePages = hiresway.architecturePages || []
  const systemSummary = hiresway.systemSummary || {}
  const productThinking = hiresway.productThinking || {}
  const currentState = hiresway.currentState || {}
  const whyIBuilt = hiresway.whyIBuilt || {}

  // Interactive Lightbox State
  const [activeLightbox, setActiveLightbox] = useState(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318] selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ==============================================================================
            SECTION 01: CAREEROS INTRODUCTION & HERO
            ============================================================================== */}
        <section id="introduction" className="space-y-10 ">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
            <Link
              href="/#building"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#2563EB] transition-colors group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>Return to Where I Am Building</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[#737984]">
                [ PRODUCT CASE STUDY · SYSTEMS ARCHITECTURE ]
              </span>
            </div>
          </div>

          {/* Master Headline Block */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200">
                {hero.eyebrow || 'CASE STUDY / SYSTEMS ARCHITECTURE'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white text-slate-700 border border-[#E5E7EB]">
                {hero.category || 'Independent Software Product'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                {hero.status || 'Product Concept & Systems Architecture'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111318] leading-[1.08] max-w-4xl">
              {hero.title || 'Hiresway: The AI-Powered Career Platform'}
            </h1>

            <p className="text-xl sm:text-2xl text-[#2563EB] font-medium leading-relaxed max-w-3xl">
              {hero.subtitle || 'A continuous, profile-driven career platform that shifts the integration burden away from the candidate and transforms job discovery into an automated intelligence engine.'}
            </p>

            {/* Author & Role Metadata Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#737984] border-t border-[#E5E7EB]/60">
              <div>
                <span className="text-[#737984] uppercase mr-1.5">Architect & Author:</span>
                <span className="text-[#111318] font-semibold">{hero.author || 'Vivek Dhoundiyal'}</span>
              </div>
              <div>
                <span className="text-[#737984] uppercase mr-1.5">Discipline:</span>
                <span className="text-[#111318] font-semibold">{hero.role || 'Commercial Strategy & Systems Architecture'}</span>
              </div>
            </div>

            {/* Foundational Thesis Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2563EB]" />
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-bold block">
                  Foundational Product Thesis
                </span>
                <blockquote className="text-base sm:text-lg text-[#111318] font-normal italic leading-relaxed">
                  "{hero.thesis || "A person's career profile should become an active search engine for their career. The system should continuously evaluate opportunities against the user, rather than forcing the user to search through thousands of jobs."}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>


        {/* ==============================================================================
            SECTION 02: CAREEROS OPERATING SYSTEM INFOGRAPHIC (PRIMARY VISUAL ANCHOR)
            ============================================================================== */}
        <section id="operating-system-infographic" className="space-y-8 pt-8 border-t border-[#E5E7EB] ">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{infographic.eyebrow || 'CAREEROS / SYSTEM OVERVIEW'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              {infographic.heading || 'Your Career, Operated as a System.'}
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] max-w-3xl leading-relaxed font-normal">
              {infographic.intro || 'Hiresway brings fragmented career discovery, research, matching, tracking and application workflows into one connected operating system.'}
            </p>
          </div>

          {/* Dedicated Full-Width Visual Section with High-Res Infographic (1100–1400px centered composition) */}
          <div className="relative rounded-3xl bg-white border border-[#E5E7EB] p-4 sm:p-8 shadow-card overflow-hidden group">
            <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50 cursor-pointer"
                 onClick={() => setActiveLightbox({
                   url: infographic.imagePng || '/images/hiresway/hiresway-operating-system-infographic.png',
                   webp: infographic.imageWebp || '/images/hiresway/hiresway-operating-system-infographic.webp',
                   title: infographic.heading || 'Hiresway: Your All-in-One Career Platform',
                   subtitle: 'System Workflow Overview Infographic'
                 })}>
              <picture>
                <source srcSet={infographic.imageWebp || '/images/hiresway/hiresway-operating-system-infographic.webp'} type="image/webp" />
                <img
                  src={infographic.imagePng || '/images/hiresway/hiresway-operating-system-infographic.png'}
                  alt={infographic.alt || 'Hiresway: Your All-in-One Career Platform'}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </picture>

              {/* Hover expand banner */}
              <div className="absolute inset-0 bg-[#111318]/0 group-hover:bg-[#111318]/20 transition-all flex items-end justify-center p-4">
                <span className="px-4 py-2 rounded-xl bg-white/95 text-[#111318] text-xs font-semibold font-mono shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <span>Click to Expand Diagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#737984] px-1">
              <span>System Workflow Architecture</span>
              <button
                onClick={() => setActiveLightbox({
                  url: infographic.imagePng || '/images/hiresway/hiresway-operating-system-infographic.png',
                  webp: infographic.imageWebp || '/images/hiresway/hiresway-operating-system-infographic.webp',
                  title: infographic.heading || 'Hiresway: Your All-in-One Career Platform',
                  subtitle: 'System Workflow Architecture'
                })}
                className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Expand Diagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Underneath Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
            <div className="md:col-span-7 space-y-4 text-base text-[#555B66] leading-relaxed">
              <p>
                Traditional job searching forces the candidate to become the integration layer between dozens of disconnected tools, job boards, spreadsheets, company pages and communication channels.
              </p>
              <p className="font-semibold text-[#111318] text-lg">
                Hiresway reverses that model.
              </p>
              <p>
                The profile becomes the system's intelligence layer, while discovery, verification, matching, organization and application tracking become connected workflows.
              </p>
            </div>

            {/* Comparison Table Card */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                Traditional Search vs. Hiresway System
              </span>
              <div className="space-y-3 divide-y divide-slate-100 text-xs">
                {(infographic.comparison || [
                  { dimension: 'Sourcing', traditional: 'Manual browsing across LinkedIn & boards', hiresway: 'Automated Multi-Source Registry' },
                  { dimension: 'Matching', traditional: 'Keyword guessing with false positives', hiresway: '7-Dimensional Profile-Aware AI' },
                  { dimension: 'Freshness', traditional: 'Stale 30-60 day listings resurfaced', hiresway: 'Strict 7-Day Posting Date SLA' },
                  { dimension: 'Organization', traditional: 'Fragmented spreadsheets & lost emails', hiresway: 'Unified Career Command Center' }
                ]).map((comp, cIdx) => (
                  <div key={cIdx} className="pt-2.5 first:pt-0 space-y-1">
                    <span className="font-mono text-[#2563EB] font-bold uppercase">{comp.dimension}</span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="text-[#737984]">
                        <span className="block font-semibold text-slate-500">Legacy:</span>
                        {comp.traditional}
                      </div>
                      <div className="text-[#111318] font-medium">
                        <span className="block font-semibold text-emerald-700">Hiresway:</span>
                        {comp.hiresway}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ==============================================================================
            SECTION 03: TRANSITION / EXPLANATION ("Inside Hiresway")
            ============================================================================== */}
        <section id="inside-hiresway" className="space-y-8 pt-8 border-t border-[#E5E7EB]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>SYSTEM ARCHITECTURE & PRODUCT LOGIC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111318]">
              {transition.heading || 'Inside Hiresway'}
            </h2>

            <p className="text-lg text-[#111318] font-medium leading-relaxed">
              "{transition.lead || 'The operating-system view explains the product at a high level. The architecture below shows how that idea becomes a real product system.'}"
            </p>

            <p className="text-base text-[#555B66] leading-relaxed">
              {transition.body || 'The following architecture sections present the core system models, forensic failure-mode analyses, domain normalization schemas, query engines, and engineering standards formulated during system discovery. Each chapter illustrates a foundational layer of the end-to-end product architecture.'}
            </p>
          </div>
        </section>


        {/* ==============================================================================
            SECTIONS 04–09+: ARCHITECTURE CHAPTERS & SYSTEM DESIGN MODELS
            ============================================================================== */}
        <div className="space-y-24 sm:space-y-32">
          {architecturePages.map((page) => {
            const pageId = `architecture-${String(page.pageNumber).padStart(2, '0')}`

            return (
              <article
                key={page.pageNumber}
                id={pageId}
                className="scroll-mt-24 space-y-8 pt-12 border-t border-[#E5E7EB]"
              >
                {/* Context Transition (if present) */}
                {page.transition && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-[#2563EB] font-medium flex items-center gap-3">
                    <span className="font-mono font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 flex-shrink-0">
                      Context
                    </span>
                    <span>{page.transition}</span>
                  </div>
                )}

                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-semibold tracking-wider text-[#2563EB] uppercase">
                    {page.chapter || `SYSTEM DESIGN · ${page.badge || String(page.pageNumber).padStart(2, '0')}`}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111318] leading-snug">
                    {page.title}
                  </h3>
                </div>

                {/* Concise Description (2–4 sentences) */}
                <div className="text-base sm:text-lg text-[#555B66] leading-relaxed max-w-4xl font-normal">
                  <p>{page.whatThisLayerRepresents}</p>
                </div>

                {/* Product Implication / What This Solves */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 pb-2">
                  <div className="border-l-2 border-[#2563EB]/40 pl-4 py-1 space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                      Architectural Rationale
                    </span>
                    <p className="text-sm text-[#555B66] leading-relaxed">
                      {page.whyItMatters}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-500/40 pl-4 py-1 space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block">
                      Product Implication
                    </span>
                    <p className="text-sm text-[#555B66] leading-relaxed">
                      {page.productThinking}
                    </p>
                  </div>
                </div>

                {/* Architecture Visual Asset */}
                <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] p-3 sm:p-5 shadow-xs hover:border-[#2563EB]/30 transition-all group">
                  <div
                    className="relative w-full aspect-[1376/768] overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 cursor-pointer"
                    onClick={() => setActiveLightbox({
                      url: page.imagePng,
                      webp: page.imageWebp,
                      title: page.title,
                      subtitle: `${page.chapter} · System Diagram`
                    })}
                  >
                    <picture>
                      <source srcSet={page.imageWebp} type="image/webp" />
                      <img
                        src={page.imagePng}
                        alt={page.alt || page.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        loading={page.pageNumber <= 2 ? 'eager' : 'lazy'}
                      />
                    </picture>

                    <div className="absolute inset-0 bg-[#111318]/0 group-hover:bg-[#111318]/15 transition-all flex items-end justify-center p-4">
                      <span className="px-3.5 py-1.5 rounded-lg bg-white/95 text-[#111318] text-xs font-mono font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                        <span>Click to Expand Diagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#737984] px-1">
                    <span className="truncate max-w-[70%]">{page.alt || page.title}</span>
                    <button
                      onClick={() => setActiveLightbox({
                        url: page.imagePng,
                        webp: page.imageWebp,
                        title: page.title,
                        subtitle: `${page.chapter} · System Diagram`
                      })}
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold flex-shrink-0"
                    >
                      <span>Expand Diagram</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>


        {/* ==============================================================================
            SECTION 10: CAREEROS SYSTEM SUMMARY (CLOSED-LOOP FLOW)
            ============================================================================== */}
        <section id="system-summary" className="space-y-10 pt-16 border-t border-[#E5E7EB] ">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{systemSummary.eyebrow || 'CAREEROS AS A CAREER OPERATING SYSTEM'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318]">
              {systemSummary.heading || 'The Closed-Loop Intelligence Flow'}
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] max-w-3xl leading-relaxed">
              {systemSummary.intro || 'Hiresway connects fragmented multi-platform job hunting into a 10-stage unified lifecycle where every user action continuously trains the system\'s matching algorithms.'}
            </p>
          </div>

          {/* 10-Stage Sequential Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(systemSummary.steps || []).map((st, sIdx) => (
              <div
                key={st.id || sIdx}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-3 hover:border-[#2563EB]/40 transition-colors"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#2563EB]">
                    {st.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {st.tag || 'STAGE'}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#111318]">
                  {st.name}
                </h4>

                <p className="text-xs text-[#555B66] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* ==============================================================================
            SECTION 11: PRODUCT THINKING BEHIND CAREEROS (5 CORE PRINCIPLES)
            ============================================================================== */}
        <section id="product-thinking" className="space-y-10 pt-16 border-t border-[#E5E7EB] ">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{productThinking.eyebrow || 'FOUNDATIONAL PRINCIPLES'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318]">
              {productThinking.heading || 'Product Thinking Behind Hiresway'}
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] max-w-3xl leading-relaxed">
              {productThinking.intro || 'Five architectural and systems design principles that guide every decision within Hiresway.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(productThinking.principles || []).map((pr, pIdx) => (
              <div
                key={pIdx}
                className="p-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4 hover-card-elevate transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB]">
                    {pr.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {pr.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#111318]">
                  {pr.title}
                </h3>

                <p className="text-sm text-[#555B66] leading-relaxed">
                  {pr.concept}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* ==============================================================================
            SECTION 12: CURRENT PRODUCT STATE (TRANSPARENT INVENTORY)
            ============================================================================== */}
        <section id="current-state" className="space-y-10 pt-16 border-t border-[#E5E7EB] ">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{currentState.eyebrow || 'HONEST SYSTEM INVENTORY'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318]">
              {currentState.heading || 'Current State & Demonstration'}
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] max-w-3xl leading-relaxed">
              {currentState.intro || 'Hiresway is a professional product architecture and engineering laboratory. Credibility matters more than vanity metrics; here is the transparent breakdown of what is built versus what is planned.'}
            </p>
          </div>

          {/* 4-Column Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(currentState.columns || []).map((col, cIdx) => {
              const badgeStyles = {
                emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                blue: 'bg-blue-50 text-[#2563EB] border-blue-200',
                amber: 'bg-amber-50 text-amber-700 border-amber-200',
                purple: 'bg-purple-50 text-purple-700 border-purple-200'
              }

              return (
                <div
                  key={cIdx}
                  className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${badgeStyles[col.badgeColor] || badgeStyles.blue}`}>
                        {col.status}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#555B66] leading-relaxed">
                      {col.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>


        {/* ==============================================================================
            SECTION 13: WHY I BUILT CAREEROS & FINAL ACTIONS
            ============================================================================== */}
        <section id="why-i-built" className="space-y-10 pt-16 border-t border-[#E5E7EB] ">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>{whyIBuilt.eyebrow || 'FOUNDER REFLECTION'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318]">
                {whyIBuilt.heading || 'Why I Built Hiresway'}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#555B66] leading-relaxed max-w-3xl">
              {(whyIBuilt.narrative || []).map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Verified Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E5E7EB]">
              {(whyIBuilt.actions || [
                { label: 'Explore Lab Build on Homepage', href: '/#building', primary: true },
                { label: 'Explore Architecture', href: '#architecture-01', secondary: true },
                { label: 'Connect with Vivek', href: 'mailto:vivekdhoundiyal2901@gmail.com', external: true }
              ]).map((act, aIdx) => {
                if (act.external) {
                  return (
                    <a
                      key={aIdx}
                      href={act.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border border-[#E5E7EB] text-[#111318] hover:border-[#2563EB] hover:text-[#2563EB] transition-all bg-[#FAFAF8]"
                    >
                      <span>{act.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )
                }

                if (act.primary) {
                  return (
                    <Link
                      key={aIdx}
                      href={act.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-[#2563EB] transition-all shadow-xs"
                    >
                      <span>{act.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )
                }

                return (
                  <a
                    key={aIdx}
                    href={act.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white border border-[#E5E7EB] text-[#111318] hover:border-[#2563EB] transition-all shadow-xs"
                  >
                    <span>{act.label}</span>
                    <ArrowDownIcon className="w-3.5 h-3.5 text-[#737984]" />
                  </a>
                )
              })}
            </div>
          </div>
        </section>

      </div>

      {/* ==============================================================================
          LIGHTBOX MODAL FOR SYSTEM DIAGRAM INSPECTION
          ============================================================================== */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#111318]/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between pb-4 text-white max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {activeLightbox.title}
              </h4>
              <p className="text-xs font-mono text-slate-300">
                {activeLightbox.subtitle}
              </p>
            </div>

            <button
              onClick={() => setActiveLightbox(null)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold transition-colors flex items-center gap-2"
            >
              <span>Close (Esc)</span>
              <span>✕</span>
            </button>
          </div>

          {/* Image Container */}
          <div
            className="flex-1 flex items-center justify-center p-2 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <picture>
              {activeLightbox.webp && <source srcSet={activeLightbox.webp} type="image/webp" />}
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="max-h-[85vh] max-w-[95vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </picture>
          </div>

          {/* Bottom Bar */}
          <div
            className="pt-2 text-center text-[11px] font-mono text-slate-400 max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            Click outside or press Escape to return to the case study
          </div>
        </div>
      )}

    </div>
  )
}

function ArrowDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  )
}
