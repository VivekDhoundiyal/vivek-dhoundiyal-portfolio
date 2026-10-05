import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  DocumentIcon,
  ChartIcon,
  VenturesIcon,
  TargetIcon
} from './Icons'

export default function Hero({ profile = {}, hero = {} }) {
  const rawEyebrow = hero?.eyebrow || profile?.heroEyebrow || 'BUSINESS • GROWTH • PARTNERSHIPS'
  const eyebrow = (rawEyebrow && !rawEyebrow.includes('TEST')) ? rawEyebrow : 'BUSINESS • GROWTH • PARTNERSHIPS'
  const title = hero?.title || profile?.heroHeadlineAlt || profile?.heroHeadline || 'I build revenue, relationships and scalable businesses.'
  const description = hero?.description || profile?.heroDescription || "I'm Vivek Dhoundiyal — an entrepreneurial sales, business development and growth professional with 8+ years of experience across enterprise sales, strategic partnerships, revenue operations and scaling businesses from 0→1. I focus on building high-trust commercial relationships, driving repeatable revenue, and executing scalable operations."
  const portrait = profile?.portraitImage || '/images/vivek-canonical.png'
  const primaryButtonText = hero?.primaryButtonText || 'Explore My Work'
  const primaryButtonUrl = hero?.primaryButtonUrl || '#work'
  const secondaryButtonText = hero?.secondaryButtonText || 'View Resume'
  const secondaryButtonUrl = hero?.secondaryButtonUrl || '/resume'

  const renderTitle = (text) => {
    if (!text) return null

    // Format "relationships" if in title
    if (text.includes('relationships')) {
      const parts = text.split('relationships')
      return (
        <>
          {parts[0]}
          <span className="text-[#2563EB]">
            relationships
          </span>
          {parts.slice(1).join('relationships')}
        </>
      )
    }

    // Format "grow" and "run" if in title
    if (text.includes('grow') && text.includes('run')) {
      const parts = text.split(/(grow|run)/gi)
      return parts.map((part, idx) => {
        if (part.toLowerCase() === 'grow' || part.toLowerCase() === 'run') {
          return (
            <span key={idx} className="text-[#2563EB]">
              {part}
            </span>
          )
        }
        return part
      })
    }

    return text
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white text-[#111318] pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-18"
    >
      {/* ========================================================================= */}
      {/* CLEAN, SPACIOUS HERO BACKGROUND ATMOSPHERE (NO CIRCULAR RINGS)             */}
      {/* ========================================================================= */}

      {/* Layer 1: Central Soft Radiant Glow behind profile (Cobalt/Cyan -> Lavender) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-12 lg:right-24 xl:right-32 w-[520px] sm:w-[660px] lg:w-[760px] h-[520px] sm:h-[660px] lg:h-[760px] rounded-full bg-gradient-to-tr from-[#2563EB]/14 via-sky-400/14 to-purple-400/10 blur-[100px] pointer-events-none z-0 animate-hero-glow-primary" />

      {/* Layer 2: Subtle Deep Blue Atmospheric Accent at Top-Right (matching reference) */}
      <div className="absolute top-0 right-0 w-[380px] sm:w-[500px] h-[300px] sm:h-[400px] bg-gradient-to-bl from-blue-900/8 via-indigo-600/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Layer 3: Left Ambient Counter-Glow behind Headline */}
      <div className="absolute top-1/3 left-4 sm:left-12 lg:left-20 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-br from-blue-500/8 via-indigo-500/6 to-emerald-400/5 blur-3xl pointer-events-none z-0 animate-hero-glow-ambient" />

      {/* Layer 4: Subtle Floating Canvas Particles & Micro Crosshairs */}
      <div className="absolute top-14 left-[8%] w-2 h-2 rounded-full bg-[#2563EB]/70 shadow-[0_0_10px_rgba(37,99,235,0.6)] animate-hero-particle-1 pointer-events-none z-0" />
      <div className="absolute bottom-16 left-[14%] w-2.5 h-2.5 rounded-full bg-indigo-500/60 shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-hero-particle-2 pointer-events-none z-0" />
      <div className="absolute top-24 left-[46%] w-1.5 h-1.5 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.7)] animate-hero-particle-3 pointer-events-none z-0" />
      <div className="absolute top-12 right-[12%] w-2 h-2 rounded-full bg-purple-500/70 shadow-[0_0_10px_rgba(168,85,247,0.6)] animate-hero-particle-4 pointer-events-none z-0" />
      <div className="absolute bottom-18 right-[6%] w-2.5 h-2.5 rounded-full bg-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-hero-particle-5 pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* MAIN HERO CONTAINER: THREE DISTINCT RESPONSIVE ZONES                      */}
      {/* [LEFT ZONE]  ~45-48% width: Eyebrow + Headline + Bio + CTA Buttons       */}
      {/* [CENTER ZONE] Tall Profile Photo + Floating Business Ecosystem + Arrow   */}
      {/* [RIGHT ZONE] Dedicated Experience Cards Column (Zero Overlap)             */}
      {/* ========================================================================= */}
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-end">
          
          {/* ======================================================================= */}
          {/* ZONE 1: LEFT ZONE (Headline, Bio, CTAs) ~45-48% width on Desktop        */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pb-6 lg:pb-10 animate-hero-entrance z-10">
            
            {/* Professional Eyebrow Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                {eyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.5rem] 2xl:text-[3.9rem] font-bold tracking-tight text-[#111318] leading-[1.08] break-words">
              {renderTitle(title)}
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#555B66] leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* CTA Buttons + Micro Operations Chip */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={primaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111318] text-white hover:bg-[#2563EB] shadow-xs hover:shadow-sm transition-all duration-200 group cursor-pointer whitespace-nowrap"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>

              <Link
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-2xs hover:shadow-xs transition-colors duration-200 whitespace-nowrap"
              >
                <DocumentIcon className="w-4 h-4 text-[#555B66] flex-shrink-0" />
                <span>{secondaryButtonText}</span>
              </Link>
            </div>

          </div>

          {/* ======================================================================= */}
          {/* COMBINED RIGHT AREA: ZONE 2 (PORTRAIT) + ZONE 3 (CARDS)                 */}
          {/* Profile photo moved slightly LEFT for closer relationship with copy.    */}
          {/* Cards positioned to the right with 32-48px gap (Zero overlap).          */}
          {/* ======================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col lg:flex-row items-end justify-center lg:justify-start gap-8 sm:gap-10 lg:gap-6 xl:gap-10 relative lg:-ml-4 xl:-ml-6">
            
            {/* ===================================================================== */}
            {/* ZONE 2: CENTER ZONE — TALL PROFILE PHOTO + BUSINESS ECOSYSTEM          */}
            {/* ===================================================================== */}
            <div id="hero-portrait-zone" className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[360px] xl:max-w-[410px] 2xl:max-w-[440px] flex items-end justify-center flex-shrink-0 z-10">
              
              {/* Floating Element 1: Revenue / B2B Pipeline Badge (Upper-Left above shoulder in open air) */}
              <div className="absolute top-6 lg:top-8 -left-4 z-20 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-biz-float-1 select-none pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#111318] leading-tight">+140% GTM Growth</span>
                  <span className="text-[9px] text-[#737984] leading-none font-medium">B2B Pipeline · 0→1</span>
                </div>
              </div>

              {/* Floating Element 2: Strategic Deals Badge (Tucked safely into the open space beside chest) */}
              <div className="absolute top-36 lg:top-38 -left-6 lg:-left-8 xl:-left-12 z-20 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-biz-float-2 select-none pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16l3-3a2.8 2.8 0 0 0-4-4l-3 3" />
                    <path d="M8 8L5 11a2.8 2.8 0 0 0 4 4l3-3" />
                    <path d="M14.5 9.5L9.5 14.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#111318] leading-tight">Strategic Deals</span>
                  <span className="text-[9px] text-[#737984] leading-none font-medium">Enterprise Partnerships</span>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* EDITORIAL ANNOTATION: LABEL + HAND-DRAWN CURVED ARROW             */}
              {/* Positioned upper-right of Vivek's head. Arrow points down-left    */}
              {/* toward Vivek with a strict 25-35px separation buffer (NO TOUCHING)*/}
              {/* ----------------------------------------------------------------- */}
              <div className="absolute -top-6 sm:-top-4 lg:-top-2 right-4 sm:-right-4 md:-right-6 lg:-right-8 xl:-right-6 z-20 hidden sm:flex items-center gap-1.5 pointer-events-none select-none animate-hero-doodle">
                {/* Hand-drawn curved arrow pointing down-left toward Vivek's hair with 25-35px clearance */}
                <svg className="w-11 h-11 text-purple-600/90 flex-shrink-0" viewBox="0 0 50 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 42,6 C 30,6 18,14 6,30" />
                  <polyline points="5,18 6,30 18,27" />
                </svg>
                {/* Editorial Annotation Text (Matching Reference Visual Language) */}
                <div className="text-[11px] sm:text-[11.5px] font-mono leading-tight text-purple-700 tracking-tight italic font-medium -rotate-2 select-none">
                  Business<br />
                  Growth<br />
                  Partnerships<br />
                  Operations<br />
                  <span className="font-semibold text-purple-900 not-italic">Execution → Scale</span>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* FREESTANDING CUTOUT PORTRAIT (TALL, HEROIC PROPORTIONS)          */}
              {/* Bottom aligned naturally with hero section baseline               */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative w-full aspect-[4/5] max-h-[480px] sm:max-h-[530px] lg:max-h-[520px] xl:max-h-[580px] 2xl:max-h-[610px] flex items-end justify-center z-10 animate-portrait-emerge">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Builder"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 440px, 480px"
                  priority
                  unoptimized
                  className="object-contain object-bottom filter contrast-[1.02] brightness-[1.01]"
                />
              </div>

            </div>

            {/* ===================================================================== */}
            {/* ZONE 3: RIGHT ZONE — DEDICATED EXPERIENCE CARDS COLUMN                */}
            {/* Desktop: Dedicated vertical column to the right of portrait (No overlap)*/}
            {/* Tablet: 3 columns beneath portrait                                   */}
            {/* Mobile: 1 column stacked beneath portrait                             */}
            {/* ===================================================================== */}
            <div id="hero-cards-zone" className="w-full sm:max-w-[560px] lg:w-[205px] xl:w-[225px] flex-shrink-0 flex flex-col gap-3 sm:gap-3.5 z-20 pb-4 lg:pb-8">
              
              {/* Floating Sparkline Growth Widget (Sitting neatly above Card 1 in the cards column) */}
              <div className="self-end mb-3.5 hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-biz-float-3 select-none pointer-events-none">
                <div className="flex flex-col">
                  <span className="text-[9.5px] font-bold text-[#111318] leading-none tracking-tight">Scale Trajectory</span>
                  <span className="text-[8.5px] text-emerald-600 font-semibold leading-none mt-0.5">+120% ARR</span>
                </div>
                <svg className="w-8 h-4 text-[#2563EB]" viewBox="0 0 32 16" fill="none">
                  <path d="M 2,14 Q 10,12 16,8 T 28,3" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <circle cx="28" cy="3" r="2" fill="#2563EB" />
                </svg>
              </div>

              {/* Card 1: 8+ Years */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-[#2563EB]/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    <ChartIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-tight text-[#111318]">8+ Years</div>
                    <div className="text-[10px] text-[#737984] leading-tight font-medium">Sales · Partnerships</div>
                    <div className="text-[9.5px] text-[#737984] leading-tight">BD · Revenue Growth</div>
                  </div>
                </div>
              </div>

              {/* Card 2: 3+ Ventures */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-purple-400/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <VenturesIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-tight text-[#111318]">3+ Ventures</div>
                    <div className="text-[10px] text-[#737984] leading-tight font-medium">Built · Operated · Scaled</div>
                    <div className="text-[9.5px] text-[#737984] leading-tight">SettleMyCar · Kitchen · Fixins</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Entrepreneurship */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <TargetIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-tight text-[#111318]">Entrepreneurship</div>
                    <div className="text-[10px] text-emerald-700 font-semibold leading-tight">Commercial Growth</div>
                    <div className="text-[9.5px] text-[#737984] leading-tight">0→1 · Scalable Operations</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
