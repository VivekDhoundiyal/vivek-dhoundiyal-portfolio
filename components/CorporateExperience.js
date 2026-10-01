import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function CorporateExperience({ corporateExperience = [] }) {
  const targetSlugs = ['collegedunia', 'kreedon']
  const fallbackExperiences = [
    {
      id: 'collegedunia',
      slug: 'collegedunia',
      company: 'CollegeDunia Web Pvt Ltd',
      shortName: 'CD',
      role: 'Senior Manager – Business Development',
      period: 'Apr 2023 – Sep 2023',
      location: 'India',
      badge: 'Enterprise Sales',
      tagline: 'Enterprise consultative selling, institutional partnerships, and multi-stakeholder contract closing.',
      summary: 'Led consultative business development cycles for higher education institutions, pitching institutional leaders, structuring customized digital marketing and student acquisition solutions, and managing contract negotiations.',
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
      badge: 'Media Sales & Sponsorships',
      tagline: 'Brand sponsorships, sports media monetization, and commercial campaign architecture.',
      summary: 'Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns for consumer brands, corporate sponsors, and advertising agencies.',
      skills: ['Media Monetization', 'Brand Sponsorships', 'Agency Relationship Management', 'Commercial Campaign Design']
    }
  ]

  const sourceList = corporateExperience.length > 0 ? corporateExperience : fallbackExperiences
  const experiences = sourceList.filter(e => e.slug !== 'supersurge')

  return (
    <section id="corporate" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>04 · CORPORATE TRACK RECORD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Corporate Experience
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              High-stakes enterprise commercial roles — managing multi-stakeholder consultative cycles, closing institutional contracts, and building revenue pipeline engines.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984]">
            [ Select an organization to inspect role breakdown ]
          </div>
        </div>

        {/* Clickable Corporate Experience Cards (2-column layout for CollegeDunia + KreedOn) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => {
            const initials = exp.shortName || exp.company.substring(0, 2).toUpperCase()
            return (
              <Link
                key={exp.id || idx}
                href={`/experience/${exp.slug}`}
                className={`p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar with Clean Logo Placeholder */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      {/* Clean high-contrast brand mark badge */}
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-xs font-bold font-mono text-[#111318] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-colors">
                        {initials}
                      </div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                        {exp.badge}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-semibold text-[#555B66]">
                      {exp.role}
                    </div>
                    <div className="text-xs font-mono text-[#737984]">
                      {exp.period} · {exp.location}
                    </div>
                  </div>

                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Skills Preview */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2563EB] group-hover:underline">
                  <span>Inspect Corporate Record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
