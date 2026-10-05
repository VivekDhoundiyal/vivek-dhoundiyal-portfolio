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
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col lg:flex-row items-end justify-center lg:justify-start gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative">
            
            {/* ===================================================================== */}
            {/* ZONE 2: CENTER ZONE — HEROIC PROFILE PHOTO + LIVING BUSINESS ECOSYSTEM */}
            {/* ===================================================================== */}
            <div id="hero-portrait-zone" className="relative w-full max-w-[320px] sm:max-w-[370px] lg:max-w-[360px] xl:max-w-[410px] 2xl:max-w-[440px] flex items-end justify-center flex-shrink-0 z-10">
              
              {/* =================================================================== */}
              {/* 1. SOFT SKY-BLUE ORGANIC GRADIENT BACKDROP (MATCHING REFERENCE)     */}
              {/* Soft illustrated backdrop, subtle layered blue tones, light opacity,*/}
              {/* faint dotted/gradient details, photo merges softly into base.       */}
              {/* =================================================================== */}
              <div
                className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[310px] sm:w-[370px] lg:w-[380px] xl:w-[420px] 2xl:w-[450px] h-[310px] sm:h-[370px] lg:h-[380px] xl:h-[420px] 2xl:h-[450px] pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                {/* Layer A: Core sky-blue organic gradient aura */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38bdf8]/35 via-[#60a5fa]/25 to-[#c084fc]/15 blur-2xl transform-gpu" />

                {/* Layer B: Secondary luminous cyan/sky atmospheric aura */}
                <div className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-b from-[#38bdf8]/30 via-[#93c5fd]/20 to-transparent blur-xl transform-gpu" />

                {/* Layer C: Delicate illustrated accent ring with fine subtle dashes/dots */}
                <div className="absolute inset-3 sm:inset-5 rounded-full border border-sky-300/40 border-dashed opacity-50" />

                {/* Layer D: Faint illustrated orbital dots */}
                <div className="absolute top-3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#38bdf8]/70" />
                <div className="absolute bottom-8 right-1/4 w-1 h-1 rounded-full bg-[#60a5fa]/70" />
              </div>

              {/* =================================================================== */}
              {/* 2. HANDWRITTEN-STYLE EDITORIAL LABEL + CURVED ARROW                 */}
              {/* Positioned to the LEFT/UPPER-LEFT of Vivek's photo.                 */}
              {/* Curved arrow points toward photo with a guaranteed 35-45px clearance*/}
              {/* Understated continuous float animation. Never hidden on mobile.    */}
              {/* =================================================================== */}
              <div
                className="absolute -top-11 sm:-top-12 lg:-top-13 xl:-top-14 left-1 sm:left-2 lg:left-2 xl:left-3 z-20 pointer-events-none select-none flex flex-col items-start animate-hero-doodle"
                aria-label="Business Growth Partnerships Operations Future -> Product"
              >
                <div className="font-['Caveat',_cursive,_sans-serif] text-[13px] sm:text-[14px] lg:text-[14.5px] xl:text-[15.5px] font-semibold text-purple-600/90 leading-[1.25] tracking-wide -rotate-3 filter drop-shadow-xs">
                  <div>Business</div>
                  <div>Growth</div>
                  <div>Partnerships</div>
                  <div>Operations</div>
                  <div className="text-indigo-600/95 font-bold">Future → Product</div>
                </div>

                {/* Curved hand-drawn arrow with clear gap before Vivek's silhouette */}
                <svg
                  className="w-10 h-7 sm:w-11 sm:h-8 lg:w-13 lg:h-9 text-purple-500/85 ml-6 sm:ml-8 -mt-0.5 filter drop-shadow-xs"
                  viewBox="0 0 54 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4 C 18 6, 32 14, 46 28"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34 26 L 46 28 L 44 16"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* 3. RICH LIVING BUSINESS & GROWTH ECOSYSTEM: VISUAL SYMBOLS        */}
              {/* Pure visual symbols (NO text). Continuous multi-speed CSS motion. */}
              {/* ----------------------------------------------------------------- */}

              {/* Symbol 1: Upward Growth Arrow (Sales / Scaling) */}
              <div
                className="absolute top-[12%] left-1 sm:left-2 lg:left-1 xl:left-2 z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-card animate-eco-float-v1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Symbol 2: Scaling Bar Chart (Revenue & Analytics) */}
              <div
                className="absolute top-[26%] left-0 sm:left-1 lg:left-0 xl:left-1 z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-card animate-eco-float-diag1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                </div>
              </div>

              {/* Symbol 3: AI Sparkle (Technology & AI) */}
              <div
                className="absolute -top-6 sm:-top-8 left-[32%] sm:left-[35%] z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-purple-200/90 shadow-card animate-eco-pulse-brisk select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 4: Target Crosshair (Strategy & Focus) */}
              <div
                className="absolute -top-5 sm:-top-7 right-[20%] sm:right-[22%] z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200/90 shadow-card animate-eco-float-h1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              </div>

              {/* Symbol 5: Handshake (Partnerships & Strategic Deals) */}
              <div
                className="absolute top-[10%] right-0 sm:right-1 lg:-right-4 xl:-right-2 z-20 flex items-center justify-center w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-200/90 shadow-card animate-eco-float-v2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg sm:rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16l3-3a2.8 2.8 0 0 0-4-4l-3 3" />
                    <path d="M8 8L5 11a2.8 2.8 0 0 0 4 4l3-3" />
                    <path d="M14.5 9.5L9.5 14.5" />
                  </svg>
                </div>
              </div>

              {/* Symbol 6: Trend Sparkline (Scaling & Analytics) */}
              <div
                className="absolute top-[24%] right-1 sm:right-2 lg:-right-2 xl:right-0 z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-card animate-eco-float-diag2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
              </div>

              {/* Symbol 7: Rocket (Entrepreneurship / 0→1 Launch) */}
              <div
                className="absolute top-[46%] left-1 sm:left-2 lg:left-1 xl:left-2 z-20 flex items-center justify-center w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-blue-200/90 shadow-card animate-eco-float-diag1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 9-1 1.2-2.7 2.1-3.95 2z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 8: Workflow Nodes (Systems & Automation) */}
              <div
                className="absolute top-[46%] right-0 sm:right-1 lg:-right-4 xl:-right-2 z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200/90 shadow-card animate-eco-float-h2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                </div>
              </div>

              {/* Symbol 9: Lightning Bolt (Execution Speed & Velocity) */}
              <div
                className="absolute top-[68%] left-1 sm:left-2 lg:left-1 xl:left-2 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-amber-200/90 shadow-card animate-eco-pulse-brisk select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-500">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
              </div>

              {/* Symbol 10: Precision Cog (Operations & Systems Engine) */}
              <div
                className="absolute top-[68%] right-0 sm:right-1 lg:-right-3 xl:-right-1 z-20 flex items-center justify-center w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-card select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 animate-eco-spin-gentle">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 11: Briefcase / Commercial Deal (Enterprise BD) */}
              <div
                className="absolute top-[16%] left-10 sm:left-14 lg:left-8 z-20 flex items-center justify-center w-7.5 h-7.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-card animate-eco-float-v1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>

              {/* Symbol 12: Percentage Delta (Measurable Commercial Growth) */}
              <div
                className="absolute top-[16%] right-10 sm:right-14 lg:right-8 z-20 flex items-center justify-center w-7.5 h-7.5 rounded-xl bg-white/90 backdrop-blur-md border border-emerald-200/90 shadow-card animate-eco-float-v2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="5" x2="5" y2="19" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </div>
              </div>

              {/* Symbol 13: Lightbulb (Commercial Innovation & Ideas) */}
              <div
                className="absolute top-[34%] left-8 sm:left-10 lg:left-7 z-20 flex items-center justify-center w-7.5 h-7.5 rounded-xl bg-white/90 backdrop-blur-md border border-amber-200/90 shadow-card animate-eco-float-orbit1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 14: Compass (Opportunity & Market Direction) */}
              <div
                className="absolute top-[56%] left-8 sm:left-10 lg:left-7 z-20 flex items-center justify-center w-7.5 h-7.5 rounded-xl bg-white/90 backdrop-blur-md border border-cyan-200/90 shadow-card animate-eco-float-orbit2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 rounded-lg bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* 6 LUMINOUS AMBIENT PARTICLES (ORGANIC DRIFT & PULSE)              */}
              {/* ----------------------------------------------------------------- */}
              <div className="absolute top-[14%] left-6 sm:left-8 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-eco-pulse-particle pointer-events-none z-10" />
              <div className="absolute top-[6%] right-8 sm:right-10 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:0.7s]" />
              <div className="absolute top-[36%] -left-1 sm:left-0 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:1.1s]" />
              <div className="absolute top-[36%] -right-1 sm:right-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:0.3s]" />
              <div className="absolute top-[58%] -left-3 sm:-left-1 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:1.3s]" />
              <div className="absolute top-[58%] -right-3 sm:-right-1 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:0.5s]" />

              {/* ----------------------------------------------------------------- */}
              {/* HERO PROFILE PORTRAIT (TRANSPARENT CANONICAL PNG)                 */}
              {/* Pure CSS dissolve at bottom + subtle ambient gradient overlay     */}
              {/* ----------------------------------------------------------------- */}
              <div className="relative w-full aspect-[3/4] max-h-[480px] sm:max-h-[530px] lg:max-h-[520px] xl:max-h-[580px] 2xl:max-h-[610px] flex items-end justify-center z-10 animate-portrait-emerge hero-portrait-dissolve">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Builder"
                  width={1086}
                  height={1448}
                  priority
                  className="w-full h-full object-contain object-bottom filter contrast-[1.02] brightness-[1.01] pointer-events-none select-none"
                />
                {/* Subtle gradient feather at the bottom for seamless merge into background */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20" />
              </div>

            </div>

            {/* ===================================================================== */}
            {/* ZONE 3: RIGHT ZONE — DEDICATED EXPERIENCE CARDS COLUMN + RIGHT FLANK  */}
            {/* Desktop: Dedicated vertical column to the right of portrait (No overlap)*/}
            {/* Tablet: 3 columns beneath portrait                                   */}
            {/* Mobile: 1 column stacked beneath portrait                             */}
            {/* Extended with floating business symbols across the entire right flank */}
            {/* ===================================================================== */}
            <div id="hero-cards-zone" className="relative w-full sm:max-w-[560px] lg:w-[205px] xl:w-[225px] flex-shrink-0 flex flex-col gap-3 sm:gap-3.5 z-20 pb-4 lg:pb-8">

              {/* ----------------------------------------------------------------- */}
              {/* FLOATING SYMBOLS ACROSS RIGHT FLANK (SURROUNDING CARDS)           */}
              {/* ----------------------------------------------------------------- */}

              {/* Symbol 15: Conversion Funnel (Sales Conversion Velocity) */}
              <div
                className="absolute -top-7 right-2 sm:right-6 lg:-right-3 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-violet-200/90 shadow-card animate-eco-float-diag2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-violet-50 border border-violet-200/80 flex items-center justify-center text-violet-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </div>
              </div>

              {/* Symbol 16: High-Trust Network Nodes */}
              <div
                className="absolute top-2 right-1 sm:right-2 lg:-right-8 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-200/90 shadow-card animate-eco-float-h1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>

              {/* Symbol 19: Analytics Donut / Pie (Data-Driven BD) */}
              <div
                className="absolute top-[22%] right-0 sm:right-1 lg:-right-10 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-purple-200/90 shadow-card animate-eco-float-diag1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 17: Revenue Currency Coin ($) */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 lg:-right-8 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200/90 shadow-card animate-eco-float-v1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  <span>$</span>
                </div>
              </div>

              {/* Symbol 20: Globe / Global Expansion (Market Scale) */}
              <div
                className="absolute top-[68%] right-0 sm:right-1 lg:-right-9 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-sky-200/90 shadow-card animate-eco-float-diag2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>

              {/* Symbol 21: Key / Opportunity Unlock */}
              <div
                className="absolute top-[86%] right-1 sm:right-2 lg:-right-7 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-amber-200/90 shadow-card animate-eco-float-v2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7.5" cy="15.5" r="5.5" />
                    <path d="m21 2-9.6 9.6" />
                    <path d="m15.5 7.5 3 3L22 7l-3-3" />
                  </svg>
                </div>
              </div>

              {/* Symbol 18: Strategic Partnership Link */}
              <div
                className="absolute -bottom-6 right-6 sm:right-10 lg:right-4 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-200/90 shadow-card animate-eco-float-h2 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>

              {/* Symbol 22: Shield / High-Trust Governance */}
              <div
                className="absolute -bottom-6 left-4 sm:left-8 lg:left-2 z-10 flex items-center justify-center w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-emerald-200/90 shadow-card animate-eco-float-h1 select-none pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>

              {/* Ambient Glowing Particle 7: Right Side Accent */}
              <div className="absolute top-3 right-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:0.9s]" />

              {/* Ambient Glowing Particle 8: Far Right Accent */}
              <div className="absolute bottom-2 right-2 sm:right-4 lg:-right-6 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-eco-pulse-particle pointer-events-none z-10 [animation-delay:1.4s]" />

              {/* Card 1: 8+ Years */}
              <div className="relative z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-[#2563EB]/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-1">
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
              <div className="relative z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-purple-400/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-2">
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
              <div className="relative z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200 animate-hero-card-3">
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
