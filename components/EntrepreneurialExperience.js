import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience({ projects = [] }) {
  const [expandedVenture, setExpandedVenture] = useState(null)

  // Extract CareerOS as the flagship architecture project
  const careerosProject = projects.find(p => p.id === 'careeros' || p.slug === 'careeros') || {
    id: 'careeros',
    slug: 'careeros',
    title: 'CareerOS',
    subtitle: 'The AI-Powered Career Operating System',
    projectType: 'PRODUCT / SYSTEMS ARCHITECTURE',
    year: '2024–2026',
    status: 'Featured Architecture',
    description: "An intelligent applicant command center and search engine. Automatically converts candidate profiles into 7-dimensional semantic vector queries, continuously scanning multi-source job registries, filtering out stale postings with a strict 7-day SLA, and providing closed-loop pipeline telemetry.",
    imageWebp: '/images/careeros/careeros-operating-system-infographic.webp',
    imagePng: '/images/careeros/careeros-operating-system-infographic.png',
    alt: 'CareerOS AI-powered career operating system architecture',
    tags: ['Next.js 14', 'TypeScript', 'Vector Embeddings', 'Tailwind CSS', 'Cloudflare Edge', 'SQLite / D1']
  }

  // Filter remaining entrepreneurial ventures (excluding corporate / consulting and careeros)
  const rawVentures = projects.filter(p => 
    p.slug !== 'commercial-partnerships' && 
    p.slug !== 'supersurge' && 
    p.slug !== 'careeros' && 
    p.id !== 'careeros'
  )

  const ventureDetails = {
    settlemycar: {
      role: 'Co-founder',
      what: 'On-demand automotive repair and servicing marketplace connecting vehicle owners with vetted independent multi-brand garages.',
      metrics: [
        { label: 'Partner Garages', value: '50+', sub: 'vetted multi-brand workshops' },
        { label: 'Work Orders', value: '1,000+', sub: 'fulfilled vehicle services' },
        { label: 'Geography', value: 'Delhi-NCR', sub: 'doorstep pickup & drop logistics' }
      ],
      learnings: [
        'Built two-sided trust through standardized pricing checklists and doorstep video inspection updates.',
        'Established rigid garage quality assurance protocols reducing customer dispute rates below 2%.',
        'Managed driver logistics, spare part lead times, and cash collection cycles under tight unit economics.'
      ]
    },
    'dark-kitchen': {
      role: 'Founder',
      what: 'B2B commercial food-supply and procurement venture supplying commercial kitchens and restaurant chains with daily scheduled raw materials.',
      metrics: [
        { label: 'Supply Cadence', value: 'Daily JIT', sub: 'scheduled morning fulfillment' },
        { label: 'Stockout Rate', value: '0.0%', sub: 'predictive demand buffer' },
        { label: 'Operation', value: 'End-to-End', sub: 'farm sourcing to kitchen delivery' }
      ],
      learnings: [
        'Engineered an early-morning 4:00 AM dispatch protocol to guarantee restaurant chef readiness before opening.',
        'Implemented strict credit control and daily payment reconciliations to prevent working capital lockups.',
        'Eliminated inventory spoilage through algorithmic demand forecasting based on weekday order patterns.'
      ]
    },
    fixins: {
      role: 'Co-founder / Partner',
      what: 'B2B distribution and commercial trade enterprise supplying institutional and commercial clients with fast-moving goods.',
      metrics: [
        { label: 'Model', value: 'B2B Trade', sub: 'commercial wholesale distribution' },
        { label: 'Fulfillment', value: 'Multi-Point', sub: 'regional commercial accounts' },
        { label: 'Contracting', value: 'SLA-Driven', sub: 'recurring inventory replenishment' }
      ],
      learnings: [
        'Structured tiered wholesale credit terms with mandatory deposit milestones to mitigate default risk.',
        'Optimized regional route planning and dispatch batches to compress transit overhead by 18%.',
        'Negotiated bulk procurement price breaks directly with Tier-1 manufacturers.'
      ]
    }
  }

  const toggleVenture = (slug) => {
    setExpandedVenture(prev => prev === slug ? null : slug)
  }

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/60 border border-blue-200/60 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">03 · Zero-To-One Ventures &amp; Systems</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Selected Work &amp; Ventures
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Software systems and commercial ventures I have architected, founded, and operated — combining product thinking, unit economics, and real execution.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984] bg-[#FAFAF8] px-3.5 py-2 rounded-full border border-[#E5E7EB] shadow-2xs self-start md:self-auto">
            [ Click any venture to inspect full case study ]
          </div>
        </div>

        {/* ==================================================== */}
        {/* 1. CAREEROS FLAGSHIP PRODUCT SHOWCASE                */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-blue-50/20 border-2 border-[#E5E7EB] hover:border-[#2563EB]/60 hover-card-elevate shadow-sm p-6 sm:p-9 lg:p-12 transition-all duration-300 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context, Title, Description, Architecture Badges, CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 border border-blue-200">
                    FLAGSHIP PRODUCT · AI SYSTEMS ARCHITECTURE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Architecture
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-[#737984]">
                  2024–2026
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <Link href="/work/careeros" className="group/title inline-block">
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111318] group-hover/title:text-[#2563EB] transition-colors flex items-center gap-3">
                    <span>CareerOS</span>
                    <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover/title:text-[#2563EB] group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-transform" />
                  </h3>
                </Link>
                <p className="text-base sm:text-lg font-semibold text-[#2563EB] leading-snug">
                  The AI-Powered Career Operating System
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal">
                {careerosProject.description}
              </p>

              {/* 4 Architecture Capability Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">01 · Sourcing</span>
                  </div>
                  <p className="text-xs font-medium text-[#111318] leading-snug">
                    Multi-source continuous ingestion &amp; active deduplication
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">02 · AI Matching</span>
                  </div>
                  <p className="text-xs font-medium text-[#111318] leading-snug">
                    7-dimensional vector scoring across skills, trajectory &amp; scope
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">03 · Freshness SLA</span>
                  </div>
                  <p className="text-xs font-medium text-[#111318] leading-snug">
                    Strict 7-day posting SLA engine pruning stale listings
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">04 · Command Center</span>
                  </div>
                  <p className="text-xs font-medium text-[#111318] leading-snug">
                    Closed-loop telemetry from discovery to submission stage
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {(careerosProject.tags || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white border border-[#E5E7EB] text-[#555B66] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <Link
                  href="/work/careeros"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111318] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-normal transition-colors shadow-xs group/btn"
                >
                  <span>Explore Case Study &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-xs font-mono text-[#737984]">
                  Full 10-Stage Pipeline Blueprint →
                </span>
              </div>

            </div>

            {/* Right Column: Visual Preview of Infographic (5 cols) */}
            <div className="lg:col-span-5">
              <Link href="/work/careeros" className="block group/img">
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-[#E5E7EB] shadow-xs group-hover/img:border-[#2563EB]/50 group-hover/img:shadow-md transition-all">
                  <picture>
                    <source srcSet={careerosProject.image || careerosProject.imageWebp || '/images/careeros/careeros-operating-system-infographic.webp'} type="image/webp" />
                    <img
                      src={careerosProject.imagePng || '/images/careeros/careeros-operating-system-infographic.png'}
                      alt={careerosProject.alt || "CareerOS AI-powered career operating system architecture"}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.03]"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      Click to inspect full high-resolution architecture diagram ↗
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. OTHER MAJOR VENTURES (WHAT → ROLE → RESULT/STATUS) */}
        {/* ==================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]">
              Ground-Level Commercial &amp; Supply Ventures
            </h3>
            <span className="text-xs font-mono text-[#737984]">
              Structured: WHAT → ROLE → RESULTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {rawVentures.map((proj, idx) => {
              const details = ventureDetails[proj.slug] || {}
              const isExpanded = expandedVenture === proj.slug

              return (
                <div
                  key={proj.id || idx}
                  className={`p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
                >
                  <div className="space-y-4">
                    
                    {/* Header: Type + Year */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                        {proj.projectType || proj.category}
                      </span>
                      <span className="text-xs font-mono text-[#737984]">
                        {proj.year}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Link href={`/work/${proj.slug}`}>
                          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                            {proj.title}
                          </h4>
                        </Link>
                        <Link href={`/work/${proj.slug}`} className="p-1 text-slate-400 group-hover:text-[#2563EB] transition-colors">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-100 text-[#111318]">
                        Role: {details.role || proj.role || 'Co-founder'}
                      </div>
                    </div>

                    {/* WHAT: 1 crisp sentence */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                        What It Is
                      </span>
                      <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                        {details.what || proj.tagline || proj.summary}
                      </p>
                    </div>

                    {/* RESULTS: Metric Callout Pills */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                        Verifiable Outcomes
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(details.metrics || proj.evidence || []).slice(0, 2).map((ev, eIdx) => (
                          <div key={eIdx} className="p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-0.5">
                            <div className="text-sm font-bold text-[#111318]">{ev.value}</div>
                            <div className="text-[10px] font-mono uppercase text-[#2563EB] font-bold truncate">{ev.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progressive Disclosure: Key Execution Learnings */}
                    {details.learnings && details.learnings.length > 0 && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleVenture(proj.slug)}
                          className="w-full flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#E5E7EB] text-[11px] font-mono font-semibold text-[#555B66] hover:text-[#111318] transition-colors"
                        >
                          <span>{isExpanded ? 'Hide Operator Notes' : 'View Key Operator Learnings'}</span>
                          <span className="text-[#2563EB] font-bold">{isExpanded ? '−' : '+'}</span>
                        </button>

                        {isExpanded && (
                          <ul className="mt-2.5 space-y-1.5 p-3 rounded-xl bg-blue-50/40 border border-blue-100 text-xs text-[#555B66] animate-fade-in">
                            {details.learnings.map((lrn, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-1.5 leading-relaxed">
                                <span className="text-[#2563EB] font-bold mt-0.5">›</span>
                                <span>{lrn}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Footer: Inspect Case Study Link */}
                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                    >
                      <span>Inspect Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-mono text-[#737984]">
                      {proj.status || 'Verified'}
                    </span>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
