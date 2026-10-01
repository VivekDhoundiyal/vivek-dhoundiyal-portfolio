import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, DocumentIcon } from './Icons'

export default function Hero({ profile, hero }) {
  const eyebrow = hero?.eyebrow || profile?.heroEyebrow || 'COMMERCIAL OPERATOR · REVENUE · 0→1 VENTURES'
  const title = hero?.title || profile?.heroHeadline || 'I build revenue, relationships and scalable business systems.'
  const description = hero?.description || profile?.heroDescription || "Commercial operator and business builder with 8+ years across enterprise B2B sales, revenue architecture, and 0→1 ventures. Applying that commercial foundation to software systems, automated workflows and product architecture — including CareerOS."
  const portrait = profile?.portraitImage || '/images/vivek-canonical.png'
  const primaryButtonText = hero?.primaryButtonText || 'Explore My Work'
  const primaryButtonUrl = hero?.primaryButtonUrl || '#work'
  const secondaryButtonText = hero?.secondaryButtonText || 'View Public Resume'
  const secondaryButtonUrl = hero?.secondaryButtonUrl || '/resume'

  const renderTitle = (text) => {
    if (!text) return null
    if (text.includes('relationships')) {
      const parts = text.split('relationships')
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-[#2563EB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            relationships
          </span>
          {parts.slice(1).join('relationships')}
        </>
      )
    }
    return text
  }

  return (
    <section
      id="hero"
      className="relative w-full h-auto lg:min-h-[calc(100vh-70px)] flex items-center py-6 sm:py-8 lg:py-0 overflow-hidden bg-[#FAFAF8] text-[#111318]"
    >
      {/* Ambient Radial Atmospheric Glow */}
      <div className="absolute top-1/4 right-1/4 w-[540px] h-[540px] theme-aura rounded-full blur-3xl pointer-events-none -z-10 animate-ambient-drift opacity-75" />

      {/* Subtle Architectural Coordinate Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-50 pointer-events-none" />

      {/* Centered balanced container */}
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ==================================================== */}
          {/* LEFT: Disciplined Editorial Column (7 cols)          */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 w-full max-w-xl lg:max-w-2xl flex flex-col justify-center animate-hero-entrance">
            
            {/* Professional Positioning Eyebrow */}
            <div className="self-start inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-[#555B66] font-mono truncate">
                {eyebrow}
              </span>
            </div>

            {/* Confident Editorial Headline */}
            <h1 className="mt-3 sm:mt-3.5 text-2xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold tracking-tight text-[#111318] leading-[1.12] sm:leading-[1.09] lg:leading-[1.07] break-words">
              {renderTitle(title)}
            </h1>

            {/* Value Proposition & Supporting Paragraph */}
            <p className="mt-3 sm:mt-3.5 text-sm sm:text-base lg:text-[1.02rem] text-[#555B66] leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* 4-Pillar Instant Credibility Matrix (Aligned Flush Data Strip) */}
            <div className="mt-4 sm:mt-5 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E5E7EB] shadow-xs overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="pt-1.5 sm:pt-0 sm:px-2 first:pl-0 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">01 · Who I Am</span>
                  <span className="text-xs font-semibold text-[#111318] block">Commercial Operator</span>
                  <span className="text-[11px] text-[#737984] block">8+ Years Experience</span>
                </div>
                <div className="pt-1.5 sm:pt-0 sm:px-2 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">02 · What I Do</span>
                  <span className="text-xs font-semibold text-[#111318] block">B2B Sales & GTM</span>
                  <span className="text-[11px] text-[#737984] block">Revenue & Growth</span>
                </div>
                <div className="pt-1.5 sm:pt-0 sm:px-2 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">03 · Built</span>
                  <span className="text-xs font-semibold text-[#111318] block">3+ Real Ventures</span>
                  <span className="text-[10.5px] sm:text-[11px] text-[#737984] block leading-tight break-words">SettleMyCar · Kitchen · Fixins</span>
                </div>
                <div className="pt-1.5 sm:pt-0 sm:px-2 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">04 · How I Think</span>
                  <span className="text-xs font-semibold text-[#111318] block">Systems & Logic</span>
                  <span className="text-[11px] text-[#737984] block">Unit Economics First</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Cluster */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
              <a
                href={primaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-normal bg-[#111318] text-white hover:bg-[#2563EB] transition-all duration-200 shadow-sm group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium tracking-normal bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-xs transition-colors duration-200"
              >
                <DocumentIcon className="w-4 h-4 text-[#555B66]" />
                <span>{secondaryButtonText}</span>
              </Link>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT: Sophisticated Framed Portrait (5 cols)        */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end items-center">
            
            {/* Visual Canvas Framing */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[430px] aspect-[4/5] flex items-center justify-center">
              
              {/* Soft Atmospheric Depth Gradient Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/15 via-cyan-400/10 to-violet-500/10 rounded-full blur-2xl pointer-events-none transform scale-95" />

              {/* Subtle Radial Coordinate Grid Disc */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-[#E5E7EB]/80 pointer-events-none -z-10" />

              {/* Freestanding Canonical Portrait Cutout */}
              <div className="relative w-full h-full flex items-center justify-center z-10 animate-portrait-emerge">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Business Builder"
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  priority
                  unoptimized
                  className="object-contain filter contrast-[1.02] brightness-[1.01]"
                />
              </div>

              {/* Floating Verified Status Card */}
              <div className="absolute bottom-2 -left-2 sm:-left-4 z-30 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card space-y-0.5 animate-fadeIn hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-700">
                    Commercial Operator
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#111318]">
                  8+ Years · Enterprise BD & Ventures
                </div>
                <div className="text-[10px] font-mono text-[#737984]">
                  Delhi-NCR / Global Remote
                </div>
              </div>

              {/* Integrated Grounding Baseline */}
              <div className="absolute bottom-0 inset-x-6 h-6 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none z-20" />

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
