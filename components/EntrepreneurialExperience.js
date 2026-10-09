import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filterTabs = ['All', 'Products', 'Strategy', 'Growth']

  // Complete 5 project gallery matching master specification
  const allProjects = [
    {
      id: 'careeros',
      slug: 'careeros',
      title: 'CareerOS',
      category: 'AI PRODUCT · APPLIED WORKFLOWS',
      type: 'Products',
      year: '2024–Present',
      status: 'Live',
      statusBadgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-300',
      statusDotClass: 'bg-emerald-500',
      tagline: 'AI-powered career operating system.',
      description: 'Transforms a candidate’s background into targeted high-conviction opportunities, orchestrating discovery, role alignment, and submission tracking.',
      tags: ['AI Product', 'Semantic Matching', 'Real-Time Discovery', 'Automation'],
      href: '/work/careeros',
      role: 'Product Strategy & Software Architecture',
      featured: true
    },
    {
      id: 'nuvio',
      slug: 'nuvio',
      title: 'NUVIO',
      category: '0→1 PRODUCT · CLIENT-SIDE SANDBOX',
      type: 'Products',
      year: '2026 (Building)',
      status: 'Building',
      statusBadgeClass: 'bg-amber-50 text-amber-700 border-amber-300',
      statusDotClass: 'bg-amber-500 animate-pulse',
      tagline: 'Private PDF editing workspace, reimagined.',
      description: 'A privacy-first PDF workspace designed to make everyday document work simpler while keeping files on the user’s device with zero remote server upload.',
      capabilities: ['Edit & Annotate', 'Merge Documents', 'Convert Files', 'Compress PDFs', 'Organize Pages', 'Sign Documents'],
      tags: ['Local Sandbox', 'Zero Cloud Egress', 'Unified Workspace', 'Active Development'],
      href: '/work/nuvio',
      role: 'Product Management & Systems Design',
      featured: true
    },
    {
      id: 'settlemycar',
      slug: 'settlemycar',
      title: 'SettleMyCar',
      category: 'MARKETPLACE · OPERATED',
      type: 'Growth',
      year: '2018–2021',
      status: 'Operated',
      statusBadgeClass: 'bg-blue-50 text-[#2563EB] border-blue-300',
      statusDotClass: 'bg-blue-500',
      tagline: 'Automotive servicing marketplace connecting car owners with vetted garages.',
      description: 'Onboarded 50+ multi-brand garages with quality checklists, SLA governance, and end-to-end doorstep logistics.',
      tags: ['Marketplace', 'Ground Operations', 'Two-Sided Trust', 'Vendor SLAs'],
      href: '/work/settlemycar',
      role: 'Co-Founder & Head of Operations',
      featured: true
    },
    {
      id: 'dark-kitchen',
      slug: 'dark-kitchen',
      title: 'Dark Kitchen',
      category: 'B2B FOOD SUPPLY · SCALED',
      type: 'Strategy',
      year: '2020–2023',
      status: 'Scaled',
      statusBadgeClass: 'bg-purple-50 text-purple-700 border-purple-300',
      statusDotClass: 'bg-purple-500',
      tagline: 'Early-morning B2B food supply chain for commercial restaurants.',
      description: 'Managed 4:00 AM procurement dispatch, cold-chain fulfillment, and institutional restaurant accounts with zero stockouts.',
      tags: ['B2B Supply Chain', 'JIT Fulfillment', 'Daily Logistics', 'Route Ops'],
      href: '/work/dark-kitchen',
      role: 'Founder & Commercial Operator',
      featured: false
    },
    {
      id: 'fixins',
      slug: 'fixins',
      title: 'Fixins',
      category: 'B2B DISTRIBUTION · BUSINESS',
      type: 'Growth',
      year: '2017–2020',
      status: 'Building',
      statusBadgeClass: 'bg-amber-50 text-amber-700 border-amber-300',
      statusDotClass: 'bg-amber-500',
      tagline: 'Fast-moving goods distribution and wholesale institutional trade.',
      description: 'Negotiated multi-point regional fulfillment contracts, bulk wholesale pricing tiers, and credit risk governance.',
      tags: ['Wholesale Trade', 'Route Logistics', 'Working Capital', 'B2B Accounts'],
      href: '/work/fixins',
      role: 'Commercial Operations Lead',
      featured: false
    }
  ]

  const filteredProjects = useMemo(() => {
    let list = allProjects
    if (activeFilter !== 'All') {
      list = list.filter((p) => p.type === activeFilter)
    }
    if (!showAllProjects && activeFilter === 'All') {
      list = list.slice(0, 3) // Show top 3 featured on homepage initially
    }
    return list
  }, [activeFilter, showAllProjects, allProjects])

  return (
    <section id="work" className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-white text-[#111318] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Dashboard Title + Avatar Callout     */}
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
              Complete project gallery of products, digital marketplaces, and commercial operations architected, operated, and in development.
            </p>
          </div>

          {/* Right Callout: Avatar Pointing to Work */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-3 rounded-2xl border border-blue-100 shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-pointing-right.png"
                alt="Vivek pointing to featured work"
                width={281}
                height={443}
                loading="eager"
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Proof of Execution
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Real Products &amp; Operations
              </div>
              <p className="text-[11px] text-[#737984]">
                From 0→1 build to full P&amp;L
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* FILTER TABS & ALL PROJECTS TOGGLE                   */}
        {/* ==================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-3">
          <div className="flex items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveFilter(tab)
                    if (tab !== 'All') setShowAllProjects(true)
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#111318] text-white shadow-xs'
                      : 'bg-[#FAFAF8] text-[#555B66] hover:text-[#111318] hover:bg-slate-100 border border-[#E5E7EB]'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {activeFilter === 'All' && (
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>{showAllProjects ? 'Show Featured (Top 3)' : 'View All 5 Projects'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* ==================================================== */}
        {/* PROJECT CARDS GRID (DIFFERENTIATED & ACCURATE STATUS)*/}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 group ${
                proj.id === 'nuvio' ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#FAFAF8] via-white to-blue-50/30 border-blue-200/80' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Category & Status Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    {proj.category}
                  </span>

                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold border ${proj.statusBadgeClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${proj.statusDotClass}`} />
                    <span>{proj.status}</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <Link href={proj.href}>
                    <h3 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center gap-2">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                    {proj.tagline}
                  </p>

                  <p className="text-xs text-[#555B66] leading-relaxed pt-1">
                    {proj.description}
                  </p>
                </div>

                {/* Special NUVIO 6 Core Capabilities Strip */}
                {proj.capabilities && (
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Core Workspace Capabilities
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {proj.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="px-2.5 py-1.5 rounded-xl bg-white border border-blue-100 text-[11px] font-medium text-slate-700 shadow-2xs flex items-center gap-1.5"
                        >
                          <span className="text-[#2563EB] font-bold text-xs">✓</span>
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Role / Contribution Note */}
                <div className="text-[11px] text-[#737984] font-medium pt-1">
                  <span className="font-semibold text-slate-700">Role:</span> {proj.role}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-slate-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <Link
                  href={proj.href}
                  className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1"
                >
                  <span>Open Case Study &amp; Details</span>
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
