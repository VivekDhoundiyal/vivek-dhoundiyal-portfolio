import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function EntrepreneurialExperience({ projects = [] }) {
  // Filter only legitimate, verified entrepreneurial ventures
  const legitimateSlugs = ['settlemycar', 'dark-kitchen', 'fixins']
  const ventures = projects.filter(p => legitimateSlugs.includes(p.slug))
  const displayVentures = ventures.length > 0 ? ventures : []

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>03 · ZERO-TO-ONE VENTURES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Entrepreneurial Experience
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Commercial ventures I have co-founded, operated, and scaled — managing unit economics, supplier governance, and real ground-level customer fulfillment.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984]">
            [ Click a venture to inspect full case study ]
          </div>
        </div>

        {/* 3 Balanced Grid of Verified Ventures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayVentures.map((proj, idx) => (
            <Link
              key={proj.id || idx}
              href={`/work/${proj.slug}`}
              className={`p-8 sm:p-9 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-7 reveal-on-scroll delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-5">
                
                {/* Meta Header without unnecessary role button */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                    {proj.projectType || proj.category}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">
                    {proj.year}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {proj.tagline || proj.summary}
                  </p>
                </div>

                {/* Evidence Metrics Tiles */}
                {proj.evidence && proj.evidence.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {proj.evidence.slice(0, 2).map((ev, eIdx) => (
                      <div key={eIdx} className="p-3 rounded-xl bg-white border border-[#E5E7EB] space-y-0.5">
                        <div className="text-base font-semibold text-[#111318]">{ev.value}</div>
                        <div className="text-[10px] font-mono uppercase text-[#2563EB] font-semibold truncate">{ev.label}</div>
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
