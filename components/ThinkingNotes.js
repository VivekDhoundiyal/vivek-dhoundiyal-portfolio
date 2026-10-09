import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ThinkingNotes({ articles = [] }) {
  // Master specified articles
  const defaultArticles = [
    {
      slug: 'scaling-business-operations-0-to-1',
      title: 'Lessons from Building and Scaling Ventures',
      category: 'Growth',
      date: 'Aug 2026',
      readingTime: '5 min read',
      excerpt: 'First-hand principles on cashflow discipline, unit margin control, and operational friction learned across three bootstrapped ventures.'
    },
    {
      slug: 'ai-product-loop',
      title: 'How AI is Changing Business Workflows',
      category: 'Productivity',
      date: 'Jul 2026',
      readingTime: '4 min read',
      excerpt: 'Moving beyond chat prompts to autonomous trigger loops, document parsing pipelines, and deterministic business automation.'
    },
    {
      slug: 'strategic-partnerships-gtm-playbook',
      title: 'Building Systems for Long-Term Growth',
      category: 'Strategy',
      date: 'Jun 2026',
      readingTime: '6 min read',
      excerpt: 'Why disciplined documentation, standard operating procedures, and strict SLAs outlast charismatic founders.'
    }
  ]

  const articleList = (articles && articles.length > 0) ? articles : defaultArticles
  const featured = articleList[0] || defaultArticles[0]
  const secondary = articleList.slice(1, 3).length > 0 ? articleList.slice(1, 3) : defaultArticles.slice(1, 3)

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
              <span className="text-[#2563EB]">Commercial strategy, AI &amp; systems.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              Field notes and frameworks on enterprise business development, autonomous workflows, and venture operations.
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
        {/* EDITORIAL CARDS: Featured Essay + 2 Secondary Cards  */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* FEATURED ESSAY (7 cols) with Idea Lightbulb Avatar */}
          <div className="lg:col-span-7">
            <Link
              href={`/blog/${featured.slug}`}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 block group reveal-on-scroll relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-3.5 max-w-md">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                      FEATURED · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {featured.excerpt}
                  </p>
                </div>

                {/* Avatar with Idea Lightbulb */}
                <div className="relative w-28 sm:w-36 h-36 sm:h-44 flex-shrink-0 animate-float-medium self-center">
                  <Image
                    src="/images/avatars/avatar-thinking-idea.png"
                    alt="Vivek thinking with idea lightbulb"
                    fill
                    sizes="180px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-[#737984]">
                  Editorial Essay
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* 2 SECONDARY ESSAYS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {secondary.map((art, idx) => (
              <Link
                key={art.slug || idx}
                href={`/blog/${art.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-200 flex flex-col justify-between space-y-3 block group reveal-on-scroll"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#737984]">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-100">
                    {art.category}
                  </span>
                  <span>{art.readingTime}</span>
                </div>

                <h4 className="text-lg font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
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
