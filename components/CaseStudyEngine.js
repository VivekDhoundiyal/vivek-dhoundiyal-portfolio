import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckIcon } from './Icons'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function CaseStudyEngine({
  item,
  parentLabel = 'Entrepreneurial Experience',
  parentHref = '/#work',
  nextItem,
  type = 'venture' // 'venture' | 'corporate' | 'capability'
}) {
  useScrollReveal([item?.slug])

  if (!item) return null

  // Collect only sections that have verified, non-empty content
  const narrativeSections = [
    { id: 'context', step: '01', title: 'Context & Background', content: item.context },
    { id: 'problem', step: '02', title: 'The Problem & Friction', content: item.problem },
    { id: 'approach', step: '03', title: 'Strategic Approach & Decisions', content: item.approach },
    { id: 'execution', step: '04', title: 'Operational Execution', content: item.execution || item.responsibilities },
    { id: 'systems', step: '05', title: 'Systems & Architecture', content: item.systems || item.solution },
    { id: 'challenges', step: '06', title: 'Obstacles & Constraints Overcome', content: item.challenges },
    { id: 'outcomes', step: '07', title: 'Verified Commercial Outcomes', content: item.outcomes },
    { id: 'lessons', step: '08', title: 'Key Operator Lessons', content: item.learning || item.lessons }
  ].filter(s => Boolean(s.content))

  return (
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318] selection:bg-blue-100 selection:text-blue-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
          <Link
            href={parentHref}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#111318] transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to {parentLabel}</span>
          </Link>

          <span className="text-xs font-mono text-[#737984]">
            [ Verified Case Record ]
          </span>
        </div>

        {/* HERO BLOCK */}
        <header className="space-y-6 pb-12 border-b border-[#E5E7EB] reveal-on-scroll">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200">
              {item.projectType || item.badge || item.category || 'COMMERCIAL CASE STUDY'}
            </span>

            {item.status && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white text-slate-700 border border-[#E5E7EB]">
                <span className={`w-1.5 h-1.5 rounded-full ${item.statusType === 'active' || item.status === 'Active Engagement' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                <span>{item.status}</span>
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111318] leading-[1.1]">
            {item.title || item.company}
          </h1>

          <p className="text-xl sm:text-2xl text-[#2563EB] font-medium leading-snug">
            {item.tagline || item.headline}
          </p>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            {item.summary}
          </p>

          {/* Role & Period Metadata */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#737984]">
            {item.role && (
              <div>
                <span className="uppercase text-[#737984] mr-1.5">My Role:</span>
                <span className="text-[#111318] font-semibold">{item.role}</span>
              </div>
            )}
            {(item.year || item.period) && (
              <div>
                <span className="uppercase text-[#737984] mr-1.5">Tenure:</span>
                <span className="text-[#111318] font-semibold">{item.year || item.period}</span>
              </div>
            )}
            {item.location && (
              <div>
                <span className="uppercase text-[#737984] mr-1.5">Location:</span>
                <span className="text-[#111318] font-semibold">{item.location}</span>
              </div>
            )}
          </div>

          {/* Verified Evidence Metric Cards (If Present) */}
          {item.evidence && item.evidence.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              {item.evidence.map((ev, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-1">
                  <div className="text-2xl font-semibold text-[#111318]">{ev.value}</div>
                  <div className="text-[10px] font-mono text-[#2563EB] uppercase font-semibold">{ev.label}</div>
                  <div className="text-xs text-[#555B66]">{ev.sub}</div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* VERIFIED NARRATIVE SECTIONS */}
        <div className="space-y-8">
          {narrativeSections.map((sec, idx) => {
            const isHighlighted = sec.id === 'outcomes' || sec.id === 'lessons'
            return (
              <section
                key={sec.id}
                className={`p-8 sm:p-10 rounded-2xl border shadow-xs transition-all reveal-on-scroll delay-${(idx % 4) * 100} ${
                  isHighlighted
                    ? 'bg-white border-[#2563EB]/30'
                    : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#2563EB]">
                      {sec.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
                      {sec.title}
                    </span>
                  </div>

                  {Array.isArray(sec.content) ? (
                    <ul className="space-y-2 pt-1">
                      {sec.content.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#111318] leading-relaxed">
                          <span className="text-[#2563EB] mt-1.5 font-bold">▪</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`text-base sm:text-lg leading-relaxed ${isHighlighted ? 'text-[#111318] font-medium' : 'text-[#555B66] font-normal'}`}>
                      {sec.content}
                    </p>
                  )}
                </div>
              </section>
            )
          })}
        </div>

        {/* SKILLS / METHODOLOGIES COVERED */}
        {item.skills && item.skills.length > 0 && (
          <div className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
              Core Competencies & Frameworks Demonstrated
            </span>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#111318]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM NEXT CASE STUDY BANNER */}
        {nextItem && (
          <footer className="pt-10 border-t border-[#E5E7EB] reveal-on-scroll">
            <Link
              href={type === 'corporate' ? `/experience/${nextItem.slug}` : `/work/${nextItem.slug}`}
              className="p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-elevated transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group block"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#737984] uppercase tracking-wider">
                  Next Case Study
                </span>
                <h3 className="text-2xl font-semibold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                  {nextItem.title || nextItem.company}
                </h3>
                <p className="text-xs text-[#555B66] line-clamp-1">
                  {nextItem.tagline || nextItem.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] font-mono uppercase group-hover:translate-x-1 transition-transform">
                <span>Inspect Record</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </footer>
        )}

      </article>
    </div>
  )
}
