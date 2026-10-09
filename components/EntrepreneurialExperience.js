import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from './Icons'

export default function EntrepreneurialExperience() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filterTabs = ['All', 'Products', 'Strategy', 'Growth']

  // Verified 5 project gallery matching exact master prompt specification
  const allProjects = [
    {
      id: 'careeros',
      slug: 'careeros',
      title: 'CareerOS',
      category: 'AI Product · Job Intelligence',
      type: 'Products',
      year: '2024–Present',
      status: 'Live / Active',
      statusBadgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-300',
      statusDotClass: 'bg-emerald-500',
      iconSrc: '/images/illustrations/icon-workflow-nodes.png',
      tagline: 'AI-powered career operating system.',
      description: 'Transforms a candidate background into high-conviction opportunities, orchestrating discovery, role alignment, and submission tracking.',
      tags: ['AI Workflow', 'Semantic Matching', 'Real-Time Pipeline'],
      href: '/work/careeros',
      role: 'Product Strategy & Architecture'
    },
    {
      id: 'nuvio',
      slug: 'nuvio',
      title: 'NUVIO',
      category: 'Client-Side PDF Workspace',
      type: 'Products',
      year: '2026 (Building)',
      status: 'Building / In Development',
      statusBadgeClass: 'bg-amber-50 text-amber-700 border-amber-300',
      statusDotClass: 'bg-amber-500 animate-pulse',
      iconSrc: '/images/illustrations/icon-pdf-card.png',
      tagline: 'Private client-side PDF editing workspace.',
      description: 'A privacy-first PDF workspace designed to edit, merge, convert, and organize documents on-device with zero server upload.',
      tags: ['Local Sandbox', 'Zero Cloud Egress', 'Client-Side WASM'],
      href: '/work/nuvio',
      role: 'Product Design & System Architecture'
    },
    {
      id: 'settlemycar',
      slug: 'settlemycar',
      title: 'SettleMyCar',
      category: 'Automotive Servicing Marketplace',
      type: 'Growth',
      year: '2018–2021',
      status: 'Operated',
      statusBadgeClass: 'bg-blue-50 text-[#2563EB] border-blue-300',
      statusDotClass: 'bg-blue-500',
      iconSrc: '/images/illustrations/icon-shield-check.png',
      tagline: 'Automotive servicing marketplace connecting car owners with vetted garages.',
      description: 'Onboarded 50+ multi-brand garages with quality checklists, SLA governance, and end-to-end doorstep logistics.',
      tags: ['Marketplace', 'Doorstep Logistics', '50+ Garages'],
      href: '/work/settlemycar',
      role: 'Co-Founder & Head of Operations'
    },
    {
      id: 'dark-kitchen',
      slug: 'dark-kitchen',
      title: 'Dark Kitchen',
      category: 'B2B Food Supply Chain',
      type: 'Strategy',
      year: '2020–2023',
      status: 'Scaled',
      statusBadgeClass: 'bg-purple-50 text-purple-700 border-purple-300',
      statusDotClass: 'bg-purple-500',
      iconSrc: '/images/illustrations/icon-logistics-box.png',
      tagline: 'Early-morning B2B food supply chain for commercial restaurants.',
      description: 'Managed 4:00 AM procurement dispatch, cold-chain fulfillment, and institutional restaurant accounts with zero stockouts.',
      tags: ['B2B Supply Chain', 'JIT Fulfillment', 'Route Logistics'],
      href: '/work/dark-kitchen',
      role: 'Founder & Commercial Operator'
    },
    {
      id: 'fixins',
      slug: 'fixins',
      title: 'Fixins',
      category: 'B2B FMCG Distribution',
      type: 'Growth',
      year: '2017–2020',
      status: 'Operated',
      statusBadgeClass: 'bg-blue-50 text-[#2563EB] border-blue-300',
      statusDotClass: 'bg-blue-500',
      iconSrc: '/images/illustrations/icon-briefcase.png',
      tagline: 'Fast-moving goods distribution and wholesale institutional trade.',
      description: 'Negotiated multi-point regional fulfillment contracts, bulk wholesale pricing tiers, and credit risk governance.',
      tags: ['Wholesale Trade', 'B2B Accounts', 'Working Capital'],
      href: '/work/fixins',
      role: 'Commercial Operations Lead'
    }
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjects
    return allProjects.filter((p) => p.type === activeFilter)
  }, [activeFilter, allProjects])

  return (
    <section id="work" className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-white text-[#111318] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Dashboard Title + Subtle Avatar      */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>05 · FEATURED WORK &amp; VENTURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Featured Work<br />
              <span className="text-[#2563EB]">Ventures &amp; software systems.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl leading-relaxed font-normal pt-1">
              Curated product portfolio of digital products, client-side tools, and commercial operations architected, operated, and in development.
            </p>
          </div>

          {/* Right Callout: Subtle Avatar */}
          <div className="flex items-center gap-3 bg-slate-50/80 p-2.5 rounded-2xl border border-slate-200/90 shadow-2xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-12 h-14 flex-shrink-0">
              <Image
                src="/images/avatars/avatar-pointing-right.png"
                alt="Vivek pointing to featured work"
                width={281}
                height={443}
                loading="eager"
                className="object-contain w-full h-full drop-shadow-2xs"
              />
            </div>
            <div className="space-y-0.5 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Proof of Execution
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Real Products &amp; Operations
              </div>
              <p className="text-[10.5px] text-[#737984]">
                From 0→1 build to commercial scale
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* COMPACT FILTER TABS                                 */}
        {/* ==================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E7EB] pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab
              const count = tab === 'All' ? allProjects.length : allProjects.filter(p => p.type === tab).length
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#111318] text-white shadow-2xs'
                      : 'bg-[#FAFAF8] text-[#555B66] hover:text-[#111318] hover:bg-slate-100 border border-[#E5E7EB]'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] font-mono rounded-full px-1.5 py-0.2 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          <span className="text-xs font-mono text-slate-400">
            Showing {filteredProjects.length} of {allProjects.length} case studies
          </span>
        </div>

        {/* ==================================================== */}
        {/* BALANCED 5 PROJECT CARDS GRID (EQUAL VISUAL WEIGHT)  */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-2xs transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Card Top: 3D Product Icon + Status Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/70 p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Image
                        src={proj.iconSrc}
                        alt={proj.title}
                        width={36}
                        height={36}
                        loading="eager"
                        unoptimized={true}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold border ${proj.statusBadgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${proj.statusDotClass}`} />
                    <span>{proj.status}</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <Link href={proj.href}>
                    <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                    </h3>
                  </Link>

                  <p className="text-xs font-semibold text-[#2563EB]">
                    {proj.tagline}
                  </p>

                  <p className="text-xs text-[#555B66] leading-relaxed pt-1">
                    {proj.description}
                  </p>
                </div>

                {/* Role Note */}
                <div className="text-[11px] text-[#737984] pt-0.5">
                  <span className="font-semibold text-slate-700">Role:</span> {proj.role}
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={proj.href}
                  className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-[11px] font-mono text-slate-400">
                  {proj.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
