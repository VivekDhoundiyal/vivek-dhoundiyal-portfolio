import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

function CloseIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function ExperienceSection({ experience = {} }) {
  const [activeModalItem, setActiveModalItem] = useState(null)

  const roles = [
    {
      id: 'supersurge',
      role: 'Growth & Revenue Consultant',
      company: 'SuperSurge Consulting',
      period: 'Oct 2024 – Present',
      location: 'India',
      badge: 'Advisory',
      contributions: [
        'Outbound pipeline design & ICP qualification for B2B founders',
        'Multi-channel outreach automation reducing sales cycle length',
        'CRM data governance and pipeline stage audit frameworks'
      ],
      skills: ['Revenue Operations', 'Outbound Systems', 'GTM Strategy'],
      summary: 'Advising B2B founders and executive teams on cold outbound pipeline engineering, revenue operations, and commercial execution rigor.',
      takeaway: 'High-converting sales pipelines are built on strict ICP criteria and disciplined CRM hygiene, not spray-and-pray volume.',
      link: '/resume'
    },
    {
      id: 'kreedon',
      role: 'Media Sales Manager',
      company: 'KreedOn (Voice of Indian Sports)',
      period: 'Dec 2023 – Oct 2024',
      location: 'India',
      badge: 'Media Sales',
      contributions: [
        'End-to-end commercial brand sponsorships & media campaigns',
        'Direct relationship management with national advertising agencies',
        'Multi-format sponsorship packages across athlete & sports media'
      ],
      skills: ['Media Monetization', 'Brand Sponsorships', 'Agency Accounts'],
      summary: 'Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns.',
      takeaway: 'Monetizing media properties requires understanding the agency media planner’s exact KPIs and delivering transparent post-campaign analytics and reporting.',
      link: '/experience/kreedon'
    },
    {
      id: 'collegedunia',
      role: 'Senior Manager — Business Development',
      company: 'CollegeDunia Web Pvt Ltd',
      period: 'Apr 2023 – Sep 2023',
      location: 'India',
      badge: 'Enterprise B2B',
      contributions: [
        'Consultative institutional sales cycles with higher-ed leadership',
        'Customized digital marketing & student acquisition solution bundles',
        'Multi-stakeholder executive contract negotiations and closings'
      ],
      skills: ['Enterprise Sales', 'Consultative Selling', 'Contract Negotiation'],
      summary: 'Led consultative business development cycles for higher education institutions, pitching institutional leaders and managing contract negotiations.',
      takeaway: 'Enterprise deals stall when procurement criteria are unmapped; multi-threading champions across departments is essential for closure.',
      link: '/experience/collegedunia'
    },
    {
      id: 'settlemycar',
      role: 'Co-founder & Operator',
      company: 'SettleMyCar & Ventures',
      period: '2017 – 2023',
      location: 'Delhi-NCR, India',
      badge: '0→1 Ventures',
      contributions: [
        'Onboarded and governed network of 50+ vetted multi-brand garages',
        'Fulfilled 1,000+ customer automotive service orders with doorstep pickup',
        'Operated daily morning food-supply and regional wholesale distribution'
      ],
      skills: ['Ground Operations', 'Unit Economics', 'Vendor Governance'],
      summary: 'Founded and scaled multi-sided operational businesses across automotive repair, daily commercial restaurant food supply, and wholesale distribution.',
      takeaway: 'Ground-level execution requires uncompromising unit economics and daily cashflow discipline over vanity top-line growth.',
      link: '/work/settlemycar'
    }
  ]

  // ESC handler for detail drawer modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalItem(null)
    }
    if (activeModalItem) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalItem])

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">05 · Professional Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Professional Experience
            </h2>
          </div>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-[#FAFAF8] text-[#111318] shadow-xs transition-all self-start md:self-auto"
          >
            <span>Inspect Full Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </Link>
        </div>

        {/* 2-Column Minimalist Experience Cards (Role · Company · Date · 3 Contributions · 3 Skills · View Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {roles.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-9 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 reveal-on-scroll group"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">
                    {item.period}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#555B66]">
                    {item.company} · {item.location}
                  </div>
                </div>

                {/* 3 Key Contributions */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                    Key Contributions
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#555B66]">
                    {item.contributions.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#2563EB] font-bold mt-0.5">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3 Skills */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[10.5px] font-mono bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* View Details Action */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[10.5px] font-mono text-[#737984]">
                  Inspect Record →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ==================================================== */}
      {/* EXPANDABLE DETAIL MODAL / DRAWER                     */}
      {/* ==================================================== */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Experience Details"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-7 sm:p-9 space-y-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E7EB]">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold inline-block mb-1">
                  {activeModalItem.badge} · {activeModalItem.period}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#111318]">
                  {activeModalItem.role}
                </h3>
                <div className="text-sm font-semibold text-[#555B66]">
                  {activeModalItem.company} · {activeModalItem.location}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#111318] hover:bg-slate-100 transition-colors"
                aria-label="Close details"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                  Role Overview
                </span>
                <p className="text-sm text-[#555B66] leading-relaxed">
                  {activeModalItem.summary}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                  Key Delivered Contributions
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#555B66]">
                  {activeModalItem.contributions.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#2563EB] font-bold mt-0.5">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operator Takeaway */}
              {activeModalItem.takeaway && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-[#E5E7EB] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                    Operating Principle / Takeaway
                  </span>
                  <p className="text-xs sm:text-sm text-[#111318] italic leading-relaxed">
                    "{activeModalItem.takeaway}"
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <Link
                href={activeModalItem.link}
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1.5"
              >
                <span>Inspect Full Case Study / Record</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
