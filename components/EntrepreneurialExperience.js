import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience({ projects = [] }) {
  // Extract CareerOS as the prominent featured architecture project
  const careerosProject = projects.find(p => p.id === 'careeros' || p.slug === 'careeros') || {
    id: 'careeros',
    slug: 'careeros',
    title: 'CareerOS',
    subtitle: 'The AI-Powered Career Operating System',
    projectType: 'PRODUCT / SYSTEMS ARCHITECTURE',
    year: '2024–2026',
    status: 'Featured Architecture',
    description: "An AI-powered career operating system that turns a candidate's profile into an active search engine for relevant opportunities.",
    imageWebp: '/images/careeros/careeros-operating-system-infographic.webp',
    imagePng: '/images/careeros/careeros-operating-system-infographic.png',
    alt: 'CareerOS AI-powered career operating system architecture',
    tags: ['AI Product', 'Product Management', 'Systems Architecture']
  }

  // Filter remaining entrepreneurial ventures (excluding corporate / consulting and careeros)
  const otherVentures = projects.filter(p => 
    p.slug !== 'commercial-partnerships' && 
    p.slug !== 'supersurge' && 
    p.slug !== 'careeros' && 
    p.id !== 'careeros'
  )
  const displayVentures = otherVentures.length > 0 ? otherVentures : []

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>03 · ZERO-TO-ONE VENTURES &amp; SYSTEMS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Selected Work &amp; Ventures
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Featured software systems and commercial ventures I have architected, founded, and operated — combining product thinking, unit economics, and real execution.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984]">
            [ Click any project to inspect full case study ]
          </div>
        </div>

        {/* ==================================================== */}
        {/* 1. CAREEROS FEATURED PROJECT CASE STUDY              */}
        {/* ==================================================== */}
        <Link
          href="/work/careeros"
          className="mb-10 sm:mb-14 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/30 border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs p-6 sm:p-9 lg:p-10 transition-all duration-300 block group reveal-on-scroll"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Context, Title, Description, Tags, CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Category & Status Eyebrow */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    {careerosProject.projectType || 'PRODUCT / SYSTEMS ARCHITECTURE'}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {careerosProject.status || 'Featured Architecture'}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#737984]">
                  {careerosProject.year || '2024–2026'}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                  <span>{careerosProject.title || 'CareerOS'}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </h3>
                <p className="text-base sm:text-lg text-[#2563EB] font-medium leading-snug">
                  {careerosProject.subtitle || careerosProject.tagline || 'The AI-Powered Career Operating System'}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal">
                {careerosProject.description || careerosProject.summary || "An AI-powered career operating system that turns a candidate's profile into an active search engine for relevant opportunities."}
              </p>

              {/* Key Principles Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">Sourcing</span>
                  <span className="text-xs font-medium text-[#111318] block leading-snug">Multi-Source Continuous Registry</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">Matching</span>
                  <span className="text-xs font-medium text-[#111318] block leading-snug">7-Dimensional AI Profile Model</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">Freshness</span>
                  <span className="text-xs font-medium text-[#111318] block leading-snug">Strict 7-Day Posting Date SLA</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {(careerosProject.tags || ['AI Product', 'Product Management', 'Systems Architecture']).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white border border-[#E5E7EB] text-[#555B66] group-hover:border-slate-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs font-mono text-[#737984]">
                  Full Architecture Breakdown →
                </span>
              </div>

            </div>

            {/* Right Column: Visual Preview of Infographic (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-[#E5E7EB] shadow-xs group-hover:border-[#2563EB]/40 transition-all">
                <picture>
                  <source srcSet={careerosProject.image || careerosProject.imageWebp || '/images/careeros/careeros-operating-system-infographic.webp'} type="image/webp" />
                  <img
                    src={careerosProject.imagePng || '/images/careeros/careeros-operating-system-infographic.png'}
                    alt={careerosProject.alt || "CareerOS AI-powered career operating system architecture"}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

          </div>
        </Link>

        {/* ==================================================== */}
        {/* 2. OTHER MAJOR VENTURES (3-Column Balanced Grid)     */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {displayVentures.map((proj, idx) => (
            <Link
              key={proj.id || idx}
              href={`/work/${proj.slug}`}
              className={`p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    {proj.projectType || proj.category}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">
                    {proj.year}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {proj.tagline || proj.summary}
                  </p>
                </div>

                {/* Evidence Metrics Tiles */}
                {proj.evidence && proj.evidence.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {proj.evidence.slice(0, 2).map((ev, eIdx) => (
                      <div key={eIdx} className="p-3 rounded-xl bg-slate-50/80 border border-[#E5E7EB] space-y-0.5">
                        <div className="text-base font-bold text-[#111318]">{ev.value}</div>
                        <div className="text-[10px] font-mono uppercase text-[#2563EB] font-bold truncate">{ev.label}</div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5">
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-xs font-mono text-[#737984]">
                  {proj.status}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
