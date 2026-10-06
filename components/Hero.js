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
  const portrait = '/images/vivek-tech-creator.png'
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
      className="relative w-full overflow-hidden bg-white text-[#111318] min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-2 sm:pt-4 lg:pt-2 pb-6 sm:pb-8 lg:pb-5"
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
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 xl:gap-8 items-center">
          
          {/* ======================================================================= */}
          {/* ZONE 1: LEFT ZONE (Headline, Bio, CTAs) ~45-48% width on Desktop        */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center animate-hero-entrance z-10">
            
            {/* Professional Eyebrow Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                {eyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.15rem] 2xl:text-[3.5rem] font-bold tracking-tight text-[#111318] leading-[1.1] break-words">
              {renderTitle(title)}
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-[15px] xl:text-[16px] text-[#555B66] leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* CTA Buttons + Micro Operations Chip */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <a
                href={primaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-5.5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111318] text-white hover:bg-[#2563EB] shadow-xs hover:shadow-sm transition-all duration-200 group cursor-pointer whitespace-nowrap"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>

              <Link
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-2xs hover:shadow-xs transition-colors duration-200 whitespace-nowrap"
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
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-6 xl:gap-10 relative">
            
            {/* ===================================================================== */}
            {/* ZONE 2: CENTER ZONE — HERO CHARACTER + SOFT BLUE HALO + FLOATING SIGNS */}
            {/* ===================================================================== */}
            <div id="hero-portrait-zone" className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[370px] xl:max-w-[430px] 2xl:max-w-[470px] flex items-center justify-center flex-shrink-0 z-10 mt-6 sm:mt-8 lg:mt-0">
              
              {/* =================================================================== */}
              {/* 1. SOFT FADED SKY-BLUE CIRCULAR / RADIAL GLOW (BEHIND CHARACTER)     */}
              {/* Large soft sky-blue circular glow, subtle radial fade into white,   */}
              {/* secondary light-blue halo ring, slow gentle breathing pulse         */}
              {/* =================================================================== */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[320px] sm:w-[390px] lg:w-[380px] xl:w-[440px] 2xl:w-[480px] h-[320px] sm:h-[390px] lg:h-[380px] xl:h-[440px] 2xl:h-[480px] pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                {/* Layer A: Core soft sky-blue circular glow with subtle radial fade */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25)_0%,rgba(96,165,250,0.16)_40%,rgba(147,197,253,0.06)_70%,transparent_100%)] blur-2xl transform-gpu animate-hero-halo-pulse" />

                {/* Layer B: Secondary light-blue atmospheric halo / ring for refined depth */}
                <div className="absolute inset-3 sm:inset-5 rounded-full border border-sky-300/35 bg-[radial-gradient(circle_at_center,rgba(186,230,253,0.18)_0%,transparent_75%)] blur-md transform-gpu" />

                {/* Layer C: Delicate luminous white/cyan core accent */}
                <div className="absolute inset-10 sm:inset-14 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55)_0%,rgba(224,242,254,0.18)_55%,transparent_100%)] blur-lg" />
              </div>

              {/* =================================================================== */}
              {/* 2. REDESIGNED FLOATING SIGNS ECOSYSTEM (NATURALLY SPREAD OUT)       */}
              {/* Distributed across upper-left, upper-right, outer-left, outer-right, */}
              {/* and lower surrounding areas with clear whitespace around cards.      */}
              {/* =================================================================== */}

              {/* Sign 1: Growth Chart (Upper-Left Outer Flank) */}
              <div
                className="absolute -top-5 sm:-top-7 -left-3 sm:-left-6 lg:-left-5 xl:-left-7 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-card animate-flow-drift-1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
              </div>

              {/* Sign 2: Upward Arrow (Outer-Left Upper) */}
              <div
                className="absolute top-[22%] -left-6 sm:-left-9 lg:-left-8 xl:-left-11 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/90 shadow-card animate-flow-drift-2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Sign 3: Analytics Line / Bar (Outer-Left Mid) */}
              <div
                className="absolute top-[46%] -left-5 sm:-left-8 lg:-left-7 xl:-left-9 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-card animate-flow-drift-3 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              </div>

              {/* Sign 4: Commercial Briefcase (Outer-Left Lower) */}
              <div
                className="hidden sm:flex absolute top-[70%] -left-4 sm:-left-7 lg:-left-6 xl:-left-8 z-20 items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-flow-drift-4 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>

              {/* Sign 5: Strategy Stack (Upper-Right Crown) */}
              <div
                className="absolute -top-6 sm:-top-8 right-[20%] sm:right-[26%] z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-card animate-flow-drift-5 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>

              {/* Sign 6: Percentage % (Upper-Right Flank) */}
              <div
                className="absolute top-[4%] -right-3 sm:-right-6 lg:-right-4 xl:-right-6 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-card animate-flow-drift-6 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <span>%</span>
                </div>
              </div>

              {/* Sign 7: Revenue Currency ($) (Upper-Right High Outer Flank) */}
              <div
                className="hidden sm:flex absolute -top-4 sm:-top-6 right-2 sm:right-4 lg:-right-10 xl:-right-12 z-20 items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-card animate-flow-drift-7 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <span>$</span>
                </div>
              </div>

              {/* Sign 8: Target / Bullseye (Lower-Right Inner Flank) */}
              <div
                className="absolute bottom-2 sm:bottom-4 -right-2 sm:-right-4 lg:-right-3 xl:-right-5 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-rose-200/90 shadow-card animate-flow-drift-8 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>

              {/* Sign 9: Rocket (0→1 Launch) (Lower Outer Gutter) */}
              <div
                className="hidden sm:flex absolute -bottom-5 sm:-bottom-7 right-[18%] sm:right-[24%] z-20 items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-violet-200/90 shadow-card animate-flow-drift-9 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-violet-50 border border-violet-200/80 flex items-center justify-center text-violet-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  </svg>
                </div>
              </div>

              {/* Sign 10: Partnerships / Link (Bottom Center-Left) */}
              <div
                className="hidden sm:flex absolute -bottom-5 sm:-bottom-7 left-[22%] sm:left-[26%] z-20 items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-200/90 shadow-card animate-flow-drift-10 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>

              {/* Sign 11: Settings / Operations Cog (Lower-Left Outer Flank) */}
              <div
                className="absolute bottom-1 sm:bottom-3 -left-3 sm:-left-5 lg:-left-4 xl:-left-6 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card animate-flow-drift-11 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>

              {/* Sign 12: Network / Graph Nodes (Mid-High Left Gap) */}
              <div
                className="hidden sm:flex absolute top-[10%] -left-2 sm:-left-4 lg:-left-3 xl:-left-4 z-20 items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-200/90 shadow-card animate-flow-drift-12 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>

              {/* Small abstract accent dots */}
              <div className="absolute top-[16%] left-[18%] w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)] animate-eco-dot-1 pointer-events-none z-10" />
              <div className="absolute top-[34%] right-[14%] w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.85)] animate-eco-dot-2 pointer-events-none z-10" />
              <div className="absolute top-[65%] left-[10%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.85)] animate-eco-dot-3 pointer-events-none z-10" />
              <div className="absolute bottom-[18%] right-[16%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)] animate-eco-dot-4 pointer-events-none z-10" />

              {/* =================================================================== */}
              {/* 3. HERO PRIMARY CHARACTER (TECH CREATOR ANALYTICS AVATAR)           */}
              {/* Crisp transparent PNG with continuous subtle breathing float        */}
              {/* Uncropped head, arms, torso, and surrounding illustrations          */}
              {/* =================================================================== */}
              <div className="relative w-full aspect-square max-h-[370px] sm:max-h-[410px] lg:max-h-[400px] xl:max-h-[450px] 2xl:max-h-[490px] flex items-center justify-center z-10 animate-hero-character-breathe will-change-transform">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Builder"
                  width={1254}
                  height={1254}
                  priority
                  className="w-full h-full object-contain pointer-events-none select-none filter contrast-[1.01] brightness-[1.01]"
                />
              </div>

            </div>

            {/* ===================================================================== */}
            {/* ZONE 3: RIGHT ZONE — DEDICATED EXPERIENCE CARDS COLUMN (CLEAN BREATHING)*/}
            {/* Zero clutter, zero overlapping icons, generous whitespace            */}
            {/* ===================================================================== */}
            <div id="hero-cards-zone" className="relative w-full sm:max-w-[540px] lg:w-[200px] xl:w-[225px] flex-shrink-0 flex flex-col gap-2.5 sm:gap-3 z-20 self-center lg:-mt-2 xl:-mt-4 pb-2 sm:pb-4 lg:pb-0">

              {/* Card 1: 8+ Years */}
              <div className="animate-hero-card-1 will-change-transform">
                <div className="relative z-20 p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-[#2563EB]/40 hover:shadow-subtle transition-all duration-200">
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
              </div>

              {/* Card 2: 3+ Ventures */}
              <div className="animate-hero-card-2 will-change-transform">
                <div className="relative z-20 p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-purple-400/40 hover:shadow-subtle transition-all duration-200">
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
              </div>

              {/* Card 3: Entrepreneurship */}
              <div className="animate-hero-card-3 will-change-transform">
                <div className="relative z-20 p-2.5 sm:p-3 xl:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-emerald-400/40 hover:shadow-subtle transition-all duration-200">
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
      </div>
    </section>
  )
}
