import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ThinkingNotes({ articles = [] }) {
  const featured = articles[0] || {
    slug: 'operator-to-product',
    title: 'From Operator to Product: Bridging the Commercial-Engineering Gap',
    category: 'PRODUCT ARCHITECTURE',
    date: 'August 12, 2026',
    readingTime: '5 min read',
    excerpt: 'Why the most effective product builders think like business operators first, and how ground-level commercial realities shape superior software systems.'
  }

  const secondary = articles.slice(1, 3)

  return (
    <section id="thinking" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">08 · Blog &amp; Commercial Insights</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Blog &amp; Writing
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Essays, playbooks, and operating frameworks exploring B2B sales strategy, strategic partnerships, business development, and scalable execution.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-[#FAFAF8] text-[#111318] shadow-xs transition-all self-start md:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </Link>
        </div>

        {/* EDITORIAL PUBLICATION LAYOUT: 1 HERO ESSAY + 2 SECONDARY PIECES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FEATURED EDITORIAL ESSAY (7 cols) */}
          {featured && (
            <div className="lg:col-span-7">
              <Link
                href={`/blog/${featured.slug}`}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-8 block group reveal-on-scroll"
              >
                <div className="space-y-6">
                  {/* Eyebrow & Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                      FEATURED ARTICLE · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {featured.title}
                  </h3>

                  {/* Excerpt Pull-Quote */}
                  <div className="p-5 rounded-2xl bg-[#FAFAF8] border-l-4 border-[#2563EB] space-y-2">
                    <p className="text-xs sm:text-sm text-[#111318] font-medium leading-relaxed italic">
                      "{featured.excerpt}"
                    </p>
                  </div>

                  {/* Core Theme Summary */}
                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    Deconstructing how operator instinct translates into defensible product choices: unit economics driving UI simplicity, customer support friction shaping database validation, and sales cycle realities pruning unnecessary roadmap complexity.
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#737984]">
                    Published {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline">
                    <span>Read Complete Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* SECONDARY ESSAYS & RESEARCH NOTE (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {secondary.map((art, idx) => (
              <Link
                key={art.id || idx}
                href={`/blog/${art.slug}`}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-4 block group reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#737984]">
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] uppercase text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold">{art.category}</span>
                    <span>{art.readingTime}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-xs font-mono text-[#737984]">{art.date}</span>
                  <span className="text-[#2563EB] font-semibold group-hover:underline flex items-center gap-1">
                    <span>Read Playbook</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}

            {/* In-Progress Research Working Note */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAFAF8] to-slate-100/70 border border-[#E5E7EB] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#737984]">
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] uppercase font-semibold text-[#111318] bg-white border border-[#E5E7EB] shadow-2xs">Working Note</span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Progress
                </span>
              </div>
              <div className="text-sm font-bold text-[#111318]">
                Operational Entropy: Why Playbooks Decay Without Automated Checkpoints
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
