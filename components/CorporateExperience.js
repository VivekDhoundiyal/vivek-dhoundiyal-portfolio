import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function CorporateExperience() {
  const timelineSteps = [
    {
      year: '2023',
      company: 'CollegeDunia',
      companyFull: 'CollegeDunia Web Pvt Ltd',
      slug: 'collegedunia',
      shortName: 'CD',
      role: 'Senior Manager — BD',
      domain: 'Higher Education EdTech',
      points: [
        'Enterprise Sales',
        'Institutional Partnerships',
        'Contract Closing'
      ],
      skills: ['Consultative Selling', 'Executive Pitching', 'Contract Negotiation']
    },
    {
      year: '2023–2024',
      company: 'KreedOn',
      companyFull: 'Voice of Indian Sports',
      slug: 'kreedon',
      shortName: 'KO',
      role: 'Media Sales Manager',
      domain: 'Sports Media & Sponsorships',
      points: [
        'Brand Sponsorships',
        'Agency Partnerships',
        'Campaign Monetization'
      ],
      skills: ['Media Monetization', 'Brand Sponsorships', 'Agency Accounts']
    },
    {
      year: '2024–NOW',
      company: 'Consulting & Products',
      companyFull: 'SuperSurge & Independent Systems',
      slug: 'careeros',
      shortName: 'SS',
      role: 'Growth & Product Systems',
      domain: 'Revenue Operations & AI Products',
      points: [
        'Commercial Growth Advisory',
        'Outbound Pipeline Systems',
        'AI Product Architecture'
      ],
      skills: ['GTM Strategy', 'Workflow Automation', 'CareerOS']
    }
  ]

  return (
    <section id="corporate" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header with 3D Glass Corporate Building Anchor */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">04 · Corporate Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Corporate Experience Timeline
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              Enterprise consultative roles and growth advisory — closing high-ticket institutional contracts and monetizing digital audience attention.
            </p>
          </div>

          {/* 3D Glass Corporate Building Visual Anchor */}
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-[#2563EB]/40 transition-all">
            <div className="relative w-24 h-20 sm:w-28 sm:h-24 flex-shrink-0 animate-float-medium illustration-tilt">
              <Image
                src="/illustrations/corporate-illustration.png"
                alt="CollegeDunia and KreedOn Corporate 3D Glass Building Illustration"
                width={140}
                height={110}
                className="object-contain w-full h-full drop-shadow-md"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Institutional Record
              </span>
              <div className="text-xs font-semibold text-[#111318]">
                CollegeDunia · KreedOn
              </div>
              <p className="text-[11px] text-[#737984]">
                Enterprise BD &amp; Media Sponsorships
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* HORIZONTAL TIMELINE SYSTEM                           */}
        {/* ==================================================== */}
        <div className="relative">
          
          {/* Connecting Track Line across cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-8 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-200 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.year}
                className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 reveal-on-scroll group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Year & Logo Monogram */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-xs font-bold font-mono text-[#111318] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-colors shadow-2xs">
                        {step.shortName}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                          {step.year}
                        </span>
                        <span className="text-[10.5px] font-mono text-[#737984]">
                          {step.domain}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={step.slug === 'careeros' ? '/work/careeros' : `/experience/${step.slug}`}
                      className="p-1 text-slate-400 group-hover:text-[#2563EB]"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-0.5">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {step.company}
                    </h3>
                    <div className="text-xs font-semibold text-[#555B66]">
                      {step.role}
                    </div>
                  </div>

                  {/* 3 Key Bullets */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                      Core Ownership
                    </span>
                    <ul className="space-y-1 text-xs text-[#555B66]">
                      {step.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          <span className="font-medium text-[#111318]">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Skills */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {step.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={step.slug === 'careeros' ? '/work/careeros' : `/experience/${step.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>Inspect Record</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#737984]">
                    Verified →
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
