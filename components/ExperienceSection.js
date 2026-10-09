import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

function CloseIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function ExperienceSection({ experience = {} }) {
  const [activePhase, setActivePhase] = useState('all')
  const [activeModalItem, setActiveModalItem] = useState(null)

  // Integrated Career Trajectory Phases (Engineering -> Corporate -> Entrepreneurship -> Product)
  const trajectoryPhases = [
    { id: 'all', label: 'All Experience', tag: 'COMPLETE RECORD' },
    { id: 'corporate', label: 'Corporate & BD', tag: 'COLLEGEDUNIA · KREEDON' },
    { id: 'advisory', label: 'Advisory & Growth', tag: 'SUPERSURGE' },
    { id: 'entrepreneurial', label: 'Venture Operations', tag: 'SETTLEMYCAR · VENTURES' }
  ]

  const roles = [
    {
      id: 'collegedunia',
      phase: 'corporate',
      role: 'Senior Manager — Business Development',
      company: 'CollegeDunia Web Pvt Ltd',
      compensation: '8 LPA + 1 LPA Variable',
      period: 'Apr 2023 – Sep 2023',
      location: 'New Delhi, India',
      badge: 'Enterprise B2B',
      badgeColor: 'red',
      iconColor: 'bg-rose-50 text-rose-600 border-rose-200',
      contributions: [
        'Consultative institutional sales cycles with higher-ed leadership and university trustees',
        'Customized digital marketing & student acquisition solution bundles for enterprise institutions',
        'Multi-stakeholder executive contract negotiations, closing high-value annual contracts'
      ],
      skills: ['Enterprise Sales', 'Consultative BD', 'Contract Negotiation', 'Institutional Accounts'],
      summary: 'Led consultative business development cycles for higher education institutions, pitching institutional leaders and managing contract negotiations.',
      takeaway: 'Enterprise deals stall when procurement criteria are unmapped; multi-threading champions across departments is essential for closure.',
      link: '/experience/collegedunia'
    },
    {
      id: 'kreedon',
      phase: 'corporate',
      role: 'Media Sales Manager',
      company: 'KreedOn (Voice of Indian Sports)',
      compensation: 'Media Sponsorships & Brand Alliances',
      period: 'Dec 2023 – Oct 2024',
      location: 'India',
      badge: 'Media Sales',
      badgeColor: 'purple',
      iconColor: 'bg-purple-50 text-purple-600 border-purple-200',
      contributions: [
        'End-to-end commercial brand sponsorships & media campaigns for marquee sports properties',
        'Direct relationship management with national advertising agencies and brand marketing heads',
        'Multi-format sponsorship packages across athlete intellectual property and digital media channels'
      ],
      skills: ['Media Monetization', 'Brand Sponsorships', 'Agency Accounts', 'Media Planning'],
      summary: 'Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns.',
      takeaway: 'Monetizing media properties requires understanding the agency media planner’s exact KPIs and delivering transparent post-campaign analytics and reporting.',
      link: '/experience/kreedon'
    },
    {
      id: 'supersurge',
      phase: 'advisory',
      role: 'Growth & Revenue Consultant',
      company: 'SuperSurge Consulting',
      compensation: 'Advisory & Growth Engagements',
      period: 'Oct 2024 – Present',
      location: 'India',
      badge: 'Growth Consulting',
      badgeColor: 'blue',
      iconColor: 'bg-blue-50 text-[#2563EB] border-blue-200',
      contributions: [
        'Outbound pipeline design & ICP qualification frameworks for B2B founders and executive teams',
        'Multi-channel outreach automation reducing sales cycle length and customer acquisition costs',
        'CRM data governance, pipeline stage definitions, and stage-by-stage audit frameworks'
      ],
      skills: ['Revenue Operations', 'Outbound Systems', 'GTM Strategy', 'CRM Architecture'],
      summary: 'Advising B2B founders and executive teams on cold outbound pipeline engineering, revenue operations, and commercial execution rigor.',
      takeaway: 'High-converting sales pipelines are built on strict ICP criteria and disciplined CRM hygiene, not spray-and-pray volume.',
      link: '/resume'
    },
    {
      id: 'settlemycar',
      phase: 'entrepreneurial',
      role: 'Founder & Venture Operator',
      company: 'SettleMyCar & Entrepreneurial Ventures',
      compensation: 'Alo Technologies · Dark Kitchen (Sold) · Fixins',
      period: '2017 – 2023',
      location: 'Delhi-NCR, India',
      badge: '0→1 Founder',
      badgeColor: 'emerald',
      iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      contributions: [
        'Onboarded and governed network of 50+ vetted multi-brand garages with SLA quality checklists',
        'Fulfilled 1,000+ customer automotive service orders with doorstep pickup & quality assurance',
        'Operated daily morning food-supply logistics and regional institutional wholesale distribution'
      ],
      skills: ['Ground Operations', 'Unit Economics', 'Vendor SLAs', 'P&L Ownership'],
      summary: 'Founded and operated multi-sided businesses across automotive repair, early-morning commercial restaurant food supply, and wholesale distribution.',
      takeaway: 'Ground-level execution requires uncompromising unit economics and daily cashflow discipline over vanity top-line growth.',
      link: '/work/settlemycar'
    }
  ]

  const filteredRoles = activePhase === 'all'
    ? roles
    : roles.filter(r => r.phase === activePhase)

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
    <section id="experience" className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-white text-[#111318] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + Avatar Laptop Typing Callout */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">03 · PROFESSIONAL EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Professional Experience<br />
              <span className="text-[#2563EB]">Track record &amp; career progression.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl leading-relaxed font-normal pt-1">
              8+ years bridging engineering systems, consultative enterprise sales at Collegedunia, media monetization at KreedOn, and 0→1 venture operations.
            </p>
          </div>

          {/* Right Callout: Avatar with Laptop Typing */}
          <div className="flex items-center gap-3 bg-[#FAFAF8] p-3 rounded-2xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-laptop-typing.png"
                alt="Vivek actively coding and building systems on laptop"
                width={319}
                height={401}
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Career Trajectory
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Operator &amp; Builder
              </div>
              <p className="text-[11px] text-[#737984]">
                Engineering → Sales → Ventures
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* INTEGRATED CAREER JOURNEY FILTER TRACK               */}
        {/* ==================================================== */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {trajectoryPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activePhase === phase.id
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              <span>{phase.label}</span>
              <span className="ml-1.5 opacity-70 text-[10px] font-mono hidden sm:inline">
                ({phase.tag})
              </span>
            </button>
          ))}
        </div>

        {/* ==================================================== */}
        {/* TIMELINE ROLES LIST (AS IN MASTER REFERENCE)         */}
        {/* ==================================================== */}
        <div className="space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6 group"
            >
              {/* Left Column: Company & Designation */}
              <div className="space-y-2 md:w-5/12 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm border flex-shrink-0 ${role.iconColor}`}>
                    {role.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {role.company}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 pt-0.5">
                      {role.role}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 pl-13">
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold bg-slate-100 text-slate-700">
                    {role.period}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-medium">
                    {role.compensation}
                  </span>
                </div>
              </div>

              {/* Right Column: Contributions & Highlights */}
              <div className="space-y-3 md:w-7/12">
                <ul className="space-y-2">
                  {role.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555B66] leading-relaxed">
                      <span className="text-[#2563EB] font-bold mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalItem(role)}
                    className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Role Summary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Role Summary Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-semibold text-[#2563EB] block">
                  {activeModalItem.period} · {activeModalItem.location}
                </span>
                <h3 className="text-xl font-extrabold text-[#111318]">
                  {activeModalItem.role}
                </h3>
                <div className="text-sm font-semibold text-slate-700">
                  {activeModalItem.company}
                </div>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-blue-900 block mb-1">Commercial Takeaway:</span>
              {activeModalItem.takeaway}
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400">
                Core Contributions
              </h4>
              <ul className="space-y-1.5">
                {activeModalItem.contributions.map((c, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
