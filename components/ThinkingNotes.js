import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ThinkingNotes({ articles = [] }) {
  const featured = articles[0] || {
    slug: 'operator-to-product',
    title: 'From Operator to Product: Bridging the Commercial-Engineering Gap',
    category: 'PRODUCT',
    date: '2026-08-12',
    readingTime: '5 min read',
    excerpt: 'Why the most effective product builders think like business operators first, and how commercial realities shape superior software architecture.'
  }

  const secondary = articles.slice(1, 3)

  return (
    <section id="thinking" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>08 · PERSPECTIVES & WRITING</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Thinking & Writing
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Essays and operational frameworks exploring the intersections of commercial operations, systems architecture, and modern technology.
            </p>
          </div>

          <Link
            href="/thinking"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#2563EB] hover:underline"
          >
            <span>View All Essays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* EDITORIAL PUBLICATION LAYOUT: 1 FEATURED + 2 SECONDARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FEATURED ESSAY (7 cols) */}
          {featured && (
            <div className="lg:col-span-7">
              <Link
                href={`/thinking/${featured.slug}`}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-8 block group reveal-on-scroll"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                      FEATURED ESSAY · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {featured.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#737984]">
                    Published {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline">
                    <span>Read Essay</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* SECONDARY ESSAYS & RESEARCH FRAGMENTS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {secondary.map((art, idx) => (
              <Link
                key={art.id || idx}
                href={`/thinking/${art.slug}`}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-4 block group reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#737984]">
                    <span className="uppercase text-[#2563EB] font-semibold">{art.category}</span>
                    <span>{art.readingTime}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-semibold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                    {art.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-xs font-mono text-[#737984]">{art.date}</span>
                  <span className="text-[#2563EB] font-semibold group-hover:underline flex items-center gap-1">
                    <span>Read Note</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}

            {/* Research Fragment Note */}
            <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-[#E5E7EB] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#737984]">
                <span className="uppercase font-semibold text-[#111318]">Working Note</span>
                <span>In Progress</span>
              </div>
              <div className="text-sm font-semibold text-[#111318]">
                Operational Entropy: Why Documentation Decays Without Automated Checkpoints
              </div>
              <p className="text-xs text-[#555B66] leading-relaxed">
                Exploring deterministic schema constraints over human goodwill when designing internal operational playbooks.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
