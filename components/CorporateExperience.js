import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function CorporateExperience({ corporateExperience = [] }) {
  const [expandedCorp, setExpandedCorp] = useState(null)

  const fallbackExperiences = [
    {
      id: 'collegedunia',
      slug: 'collegedunia',
      company: 'CollegeDunia Web Pvt Ltd',
      shortName: 'CD',
      role: 'Senior Manager – Business Development',
      period: 'Apr 2023 – Sep 2023',
      location: 'India',
      badge: 'Enterprise Consultative Sales',
      tagline: 'Enterprise consultative selling, institutional partnerships, and multi-stakeholder contract closing.',
      summary: 'Led consultative business development cycles for higher education institutions, pitching institutional leaders, structuring customized digital marketing and student acquisition solutions, and managing contract negotiations.',
      metrics: [
        { label: 'Domain', value: 'Higher Ed' },
        { label: 'Sale Type', value: 'Consultative B2B' },
        { label: 'Cycle', value: 'Multi-Stakeholder' }
      ],
      highlights: [
        'Conducted consultative discovery sessions with chancellors, deans, and marketing directors.',
        'Structured customized institutional branding and student acquisition solutions.',
        'Navigated complex procurement governance and legal compliance to execute signed contracts.'
      ],
      skills: ['Enterprise B2B Sales', 'Consultative Selling', 'Contract Negotiation', 'Executive Stakeholder Management']
    },
    {
      id: 'kreedon',
      slug: 'kreedon',
      company: 'KreedOn (Voice of Indian Sports)',
      shortName: 'KO',
      role: 'Media Sales Manager',
      period: 'Dec 2023 – Oct 2024',
      location: 'India',
      badge: 'Media Sales & Brand Sponsorships',
      tagline: 'Brand sponsorships, sports media monetization, and commercial campaign architecture.',
      summary: 'Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns for consumer brands, corporate sponsors, and advertising agencies.',
      metrics: [
        { label: 'Domain', value: 'Sports Media' },
        { label: 'Deals', value: 'Brand Sponsorships' },
        { label: 'Channels', value: 'Agencies & Direct' }
      ],
      highlights: [
        'Packaged sports editorial, athlete interviews, and social properties into high-value sponsorship bundles.',
        'Managed agency media planners and direct CMO relationships across national consumer brands.',
        'Executed end-to-end commercial campaign deliverables ensuring 100% sponsor satisfaction and renewal intent.'
      ],
      skills: ['Media Monetization', 'Brand Sponsorships', 'Agency Relationship Management', 'Commercial Campaign Design']
    }
  ]

  const sourceList = corporateExperience.length > 0 ? corporateExperience : fallbackExperiences
  const experiences = sourceList.filter(e => e.slug !== 'supersurge')

  const toggleCorp = (slug) => {
    setExpandedCorp(prev => prev === slug ? null : slug)
  }

  return (
    <section id="corporate" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">04 · Corporate Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Corporate Experience
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              High-stakes enterprise commercial roles — managing multi-stakeholder consultative cycles, closing institutional contracts, and building revenue pipeline engines.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984] bg-white px-3.5 py-2 rounded-full border border-[#E5E7EB] shadow-2xs self-start md:self-auto">
            [ Select an organization to inspect role breakdown ]
          </div>
        </div>

        {/* Corporate Track Record Cards Grid (2-Column Balanced Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => {
            const initials = exp.shortName || exp.company.substring(0, 2).toUpperCase()
            const isExpanded = expandedCorp === exp.slug

            return (
              <div
                key={exp.id || idx}
                className={`p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar with Brand Monogram + Status Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-xs font-bold font-mono text-[#111318] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-colors shadow-2xs">
                        {initials}
                      </div>
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 block w-fit">
                          {exp.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#737984] mt-0.5 block">
                          {exp.period} · {exp.location}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/experience/${exp.slug}`}
                      className="w-9 h-9 rounded-full bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-slate-400 group-hover:text-[#2563EB] group-hover:border-[#2563EB]/30 transition-colors"
                      title="Inspect full role breakdown"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1">
                    <Link href={`/experience/${exp.slug}`}>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                        {exp.company}
                      </h3>
                    </Link>
                    <div className="text-sm font-semibold text-[#555B66]">
                      {exp.role}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Metric Pills */}
                  {exp.metrics && (
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-center space-y-0.5">
                          <div className="text-xs font-bold text-[#111318] truncate">{m.value}</div>
                          <div className="text-[9.5px] font-mono uppercase text-[#2563EB] font-bold truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights Drawer */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleCorp(exp.slug)}
                        className="w-full flex items-center justify-between py-1.5 px-3 rounded-xl bg-[#FAFAF8] hover:bg-slate-100 border border-[#E5E7EB] text-[11px] font-mono font-semibold text-[#555B66] hover:text-[#111318] transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Outcomes' : 'View Key Outcomes & Deliverables'}</span>
                        <span className="text-[#2563EB] font-bold">{isExpanded ? '−' : '+'}</span>
                      </button>

                      {isExpanded && (
                        <ul className="mt-2.5 space-y-2 p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 text-xs text-[#555B66] animate-fade-in">
                          {exp.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-[#2563EB] font-bold mt-0.5">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Skills Preview */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[10.5px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={`/experience/${exp.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>Inspect Corporate Record</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#737984]">
                    Verified Experience →
                  </span>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
