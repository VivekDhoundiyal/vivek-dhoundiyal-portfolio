import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ThinkingNotes({ articles = [] }) {
  // Fallback master articles if none supplied
  const defaultArticles = [
    {
      slug: 'validate-business-idea',
      title: 'How to Validate a Business Idea Before Investing Time and Money',
      category: 'Entrepreneurship & Startups',
      date: 'Oct 2026',
      readingTime: '14 min read',
      coverImage: '/images/blog/business-idea-validation-roadmap.png',
      excerpt: "A practitioner's blueprint for testing problem severity, customer willingness to pay, competitor dynamics, and break-even unit economics before building."
    },
    {
      slug: 'how-to-build-a-predictable-sales-pipeline',
      title: 'How to Build a Predictable B2B Sales Pipeline from Scratch',
      category: 'Sales Strategy',
      date: 'Sep 2026',
      readingTime: '7 min read',
      excerpt: 'A practitioner\'s blueprint for ICP definition, multi-channel outbound sequencing, and qualification frameworks that build repeatable revenue.'
    },
    {
      slug: 'strategic-partnerships-gtm-playbook',
      title: 'The Strategic Partnerships Playbook: Unlocking Non-Linear Growth',
      category: 'Partnerships',
      date: 'Aug 2026',
      readingTime: '6 min read',
      excerpt: 'How to structure high-trust commercial distribution agreements, co-marketing alliances, and mutual-upside channel partnerships.'
    },
    {
      slug: 'scaling-business-operations-0-to-1',
      title: 'Scaling Business Operations: From Chaos to Predictable Execution',
      category: 'Business Operations',
      date: 'Jul 2026',
      readingTime: '6 min read',
      excerpt: 'Tactical operational lessons from running early-stage ventures: process decomposition, unit economics governance, and building repeatable systems.'
    }
  ]

  // Enforce strictly 4 articles on homepage
  const articleList = (articles && articles.length > 0) ? articles.slice(0, 4) : defaultArticles
  const featured = articleList[0] || defaultArticles[0]
  const secondary = articleList.slice(1, 4)

  return (
    <section id="blog" className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative scroll-mt-16">
      <div id="thinking" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + View All Articles CTA        */}
        {/* ==================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">06 · IDEAS &amp; INSIGHTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Latest from the Blog<br />
              <span className="text-[#2563EB]">Commercial strategy, validation &amp; systems.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              Field-tested playbooks on venture validation, B2B sales pipelines, and scalable business operations.
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

        {/* ==================================================== */}
        {/* EDITORIAL CARDS: 1 Featured Guide + 3 Secondary      */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* FEATURED ESSAY (7 cols) with Roadmap Cover Banner */}
          <div className="lg:col-span-7 flex">
            <Link
              href={`/blog/${featured.slug}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-5 w-full group reveal-on-scroll relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Cover Image Banner */}
                {featured.coverImage ? (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 680px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-between pb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                      FEATURED · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime}
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                      FEATURED GUIDE · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-[#555B66] leading-relaxed font-normal line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-[#737984]">
                  Comprehensive Guide
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline">
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* 3 SECONDARY ESSAYS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {secondary.map((art, idx) => (
              <Link
                key={art.slug || idx}
                href={`/blog/${art.slug}`}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-200 flex flex-col justify-between space-y-2.5 block group reveal-on-scroll flex-1"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#737984]">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-100">
                    {art.category}
                  </span>
                  <span>{art.readingTime}</span>
                </div>

                <h4 className="text-base font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="text-xs text-[#555B66] line-clamp-2 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-[#737984]">Strategy Playbook</span>
                  <span className="text-[#2563EB] font-semibold group-hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
