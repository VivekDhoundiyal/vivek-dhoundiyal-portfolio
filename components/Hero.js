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
      className="relative w-full overflow-hidden bg-white text-[#111318] pt-8 sm:pt-12 lg:pt-16 pb-14 sm:pb-18 lg:pb-22"
    >
      {/* ========================================================================= */}
      {/* MULTI-LAYER HERO VISUAL FIELD (PURE CSS, GPU-ACCELERATED, 60FPS)          */}
      {/* ========================================================================= */}

      {/* Layer 1: Right Atmospheric Radiant Bloom (Electric Cobalt -> Cyan -> Violet) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-8 lg:right-16 xl:right-24 w-[480px] sm:w-[620px] lg:w-[720px] h-[480px] sm:h-[620px] lg:h-[720px] rounded-full bg-gradient-to-tr from-[#2563EB]/24 via-sky-400/18 to-purple-500/14 blur-3xl pointer-events-none z-0 animate-hero-glow-primary" />

      {/* Layer 2: Left Atmospheric Counter-Glow (Indigo & Emerald subtle ambient field) */}
      <div className="absolute top-1/4 left-4 sm:left-12 lg:left-24 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-br from-blue-500/12 via-indigo-500/10 to-emerald-400/8 blur-3xl pointer-events-none z-0 animate-hero-glow-ambient" />

      {/* Layer 3: Delicate Network Constellation & Micro-Marks SVG */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <svg className="w-full h-full opacity-60 animate-hero-constellation" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle connecting lines */}
          <path d="M 60,180 Q 220,120 420,190 T 780,140" fill="none" stroke="url(#heroLineGrad1)" strokeWidth="1.2" strokeDasharray="4 6" />
          <path d="M 520,380 C 720,320 900,440 1200,340" fill="none" stroke="url(#heroLineGrad2)" strokeWidth="1" strokeDasharray="3 5" />
          
          {/* Systems Micro-marks (Crosshairs and diamond nodes) */}
          <g className="text-slate-400/70 font-mono text-[9px]">
            {/* Mark 1: Top-Left */}
            <path d="M 120,70 L 128,70 M 124,66 L 124,74" stroke="currentColor" strokeWidth="1" />
            <text x="134" y="73" fill="currentColor">SYS_01</text>

            {/* Mark 2: Top-Center */}
            <path d="M 640,60 L 648,60 M 644,56 L 644,64" stroke="currentColor" strokeWidth="1" />
            <circle cx="644" cy="60" r="1.5" fill="#2563EB" />

            {/* Mark 3: Far-Right */}
            <path d="M 1180,110 L 1188,110 M 1184,106 L 1184,114" stroke="currentColor" strokeWidth="1" />
            <text x="1194" y="113" fill="currentColor">SCALE_99</text>
          </g>
        </svg>
      </div>

      {/* Layer 4: Six Distributed Canvas Floating Particles with staggered drift */}
      <div className="absolute top-16 left-[6%] sm:left-[10%] w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_12px_rgba(37,99,235,0.8)] animate-hero-particle-1 pointer-events-none z-0" />
      <div className="absolute bottom-16 left-[12%] sm:left-[18%] w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)] animate-hero-particle-2 pointer-events-none z-0" />
      <div className="absolute top-20 left-[48%] w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)] animate-hero-particle-3 pointer-events-none z-0" />
      <div className="absolute top-14 right-[10%] sm:right-[14%] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] animate-hero-particle-4 pointer-events-none z-0" />
      <div className="absolute bottom-20 right-[4%] sm:right-[8%] w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)] animate-hero-particle-5 pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[56%] w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)] animate-hero-particle-1 pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* MAIN HERO CONTAINER: THREE DISTINCT RESPONSIVE ZONES                      */}
      {/* [LEFT ZONE]  ~46-48% width: Eyebrow + Headline + Bio + CTA Buttons       */}
      {/* [CENTER/RIGHT ZONE] Freestanding Portrait with Concentric Orbits & Callout*/}
      {/* [FAR-RIGHT ZONE] Vertically Stacked Experience Cards (Zero Overlap)       */}
      {/* ========================================================================= */}
      <div className="max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          
          {/* ======================================================================= */}
          {/* ZONE 1: LEFT ZONE (Headline, Bio, CTAs) ~45-50% width on Desktop        */}
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
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[3.8rem] font-bold tracking-tight text-[#111318] leading-[1.08] break-words">
              {renderTitle(title)}
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#555B66] leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
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
          {/* On Desktop: Side-by-side flex row with explicit 28-36px gap.            */}
          {/* On Mobile/Tablet: Stacked (Portrait first, 3 Cards beneath).             */}
          {/* ======================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative">
            
            {/* ===================================================================== */}
            {/* ZONE 2: CENTER/RIGHT ZONE — FREESTANDING PORTRAIT + ORBITS + CALLOUT  */}
            {/* ===================================================================== */}
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[310px] xl:max-w-[350px] flex items-center justify-center flex-shrink-0">
              
              {/* Concentric Orbital 1: Outer Primary Ring (Diameter ~540px) */}
              <div className="absolute w-[440px] sm:w-[500px] lg:w-[520px] xl:w-[560px] h-[440px] sm:h-[500px] lg:h-[520px] xl:h-[560px] rounded-full border-2 border-[#2563EB]/40 shadow-[0_0_20px_rgba(37,99,235,0.18)] pointer-events-none animate-hero-orbital z-0 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB] shadow-[0_0_14px_rgba(37,99,235,1)] -top-1.5 absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)] -bottom-1 absolute" />
              </div>

              {/* Concentric Orbital 2: Secondary Dotted Counter-Orbit (Diameter ~430px) */}
              <div className="absolute w-[350px] sm:w-[400px] lg:w-[420px] xl:w-[450px] h-[350px] sm:h-[400px] lg:h-[420px] xl:h-[450px] rounded-full border-2 border-dashed border-purple-500/45 shadow-[0_0_16px_rgba(168,85,247,0.18)] pointer-events-none animate-hero-orbital-reverse z-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 shadow-[0_0_12px_rgba(168,85,247,0.9)] -right-1.5 absolute" />
              </div>

              {/* Concentric Orbital 3: Inner Geometric Track (Diameter ~330px) */}
              <div className="absolute w-[280px] sm:w-[320px] lg:w-[330px] xl:w-[350px] h-[280px] sm:h-[320px] lg:h-[330px] xl:h-[350px] rounded-full border-[1.5px] border-dotted border-emerald-500/40 pointer-events-none z-0" />

              {/* Playful Hand-drawn Purple Callout Arrow + Badge */}
              {/* Positioned anchored on the upper-left of Vivek's head/shoulder, curving TOWARD Vivek */}
              <div className="absolute -top-3 sm:top-0 lg:top-1 -left-4 sm:-left-8 lg:-left-12 xl:-left-14 z-30 hidden sm:flex items-center gap-1 pointer-events-none select-none animate-hero-doodle">
                <div className="text-[10px] sm:text-[10.5px] font-mono leading-tight text-purple-700 tracking-tight italic font-medium bg-purple-50/95 px-2.5 py-1.5 rounded-xl border border-purple-200/80 backdrop-blur-md shadow-xs whitespace-nowrap">
                  Business · Growth<br />
                  Partnerships · Operations<br />
                  <span className="font-semibold text-purple-900 not-italic">Execution → Scale</span>
                </div>
                <svg className="w-10 h-10 sm:w-11 sm:h-11 text-purple-600 flex-shrink-0 -ml-1" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 6,14 C 20,12 34,22 42,36" />
                  <polyline points="31,35 42,36 40,24" />
                </svg>
              </div>

              {/* Freestanding Cutout Portrait Image */}
              <div className="relative w-full aspect-[4/5] max-h-[440px] sm:max-h-[480px] lg:max-h-[460px] xl:max-h-[500px] flex items-end justify-center z-10 animate-portrait-emerge">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Builder"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  unoptimized
                  className="object-contain object-bottom filter contrast-[1.02] brightness-[1.01]"
                />
              </div>

            </div>

            {/* ===================================================================== */}
            {/* ZONE 3: FAR-RIGHT ZONE — EXPERIENCE & ENTREPRENEURSHIP CARDS          */}
            {/* Desktop: Vertically stacked beside portrait (32-60px gap, NO OVERLAP) */}
            {/* Tablet: 3 columns beneath portrait                                   */}
            {/* Mobile: 1 column stacked beneath portrait                             */}
            {/* ===================================================================== */}
            <div className="w-full sm:max-w-[560px] lg:w-[205px] xl:w-[225px] flex-shrink-0 grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-3 sm:gap-3.5 z-20">
              
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
