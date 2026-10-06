import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ThinkingNotes({ articles = [] }) {
  const featured = articles[0] || {
    slug: 'operator-to-product',
    title: 'From Operator to Product: Bridging the Commercial-Engineering Gap',
    category: 'PRODUCT',
    date: 'Aug 2026',
    readingTime: '5 min read',
    excerpt: 'Why the most defensible software systems are designed by operators who understand customer economics first.'
  }

  const secondary = articles.slice(1, 4).length > 0 ? articles.slice(1, 4) : [
    {
      slug: 'strategic-partnerships-gtm-playbook',
      title: 'Strategic Partnerships as a Compound Distribution Channel',
      category: 'GTM & ALLIANCES',
      date: 'Jul 2026',
      readingTime: '4 min read',
      excerpt: 'Structuring co-distribution alliances to bypass paid CAC.'
    },
    {
      slug: 'how-to-build-a-predictable-sales-pipeline',
      title: 'Architecting Predictable Outbound B2B Pipelines',
      category: 'SALES ENGINE',
      date: 'Jun 2026',
      readingTime: '6 min read',
      excerpt: 'ICP qualification and multi-threading enterprise champions.'
    },
    {
      slug: 'scaling-business-operations-0-to-1',
      title: 'Operating Entropy: Why Playbooks Decay Without SLAs',
      category: 'SYSTEMS & SOPS',
      date: 'May 2026',
      readingTime: '4 min read',
      excerpt: 'Deterministic schema constraints over human goodwill.'
    }
  ]

  return (
    <section id="thinking" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">08 · Blog &amp; Insights</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Blog &amp; Writing
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-[#FAFAF8] text-[#111318] shadow-xs transition-all self-start md:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </Link>
        </div>

        {/* Editorial Layout: Large Featured Visual Card + 3 Compact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* FEATURED ESSAY (7 cols) with 3D Glass Tablet Illustration */}
          <div className="lg:col-span-7">
            <Link
              href={`/blog/${featured.slug}`}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 block group reveal-on-scroll relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-3.5 max-w-md">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                      FEATURED ESSAY · {featured.category}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {featured.readingTime} · {featured.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {featured.excerpt}
                  </p>
                </div>

                {/* 3D Glass Blog & Writing Tablet Illustration */}
                <div className="relative w-40 sm:w-48 h-28 sm:h-36 flex-shrink-0 animate-float-medium illustration-tilt self-center">
                  <Image
                    src="/illustrations/blog-illustration.png"
                    alt="Blog & Writing Editorial 3D Glass Tablet Illustration"
                    fill
                    sizes="200px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-[#737984]">
                  Editorial Playbook
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* 3 COMPACT SECONDARY ESSAYS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {secondary.map((art, idx) => (
              <Link
                key={art.slug || idx}
                href={`/blog/${art.slug}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-200 flex flex-col justify-between space-y-2.5 block group reveal-on-scroll"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#737984]">
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-100">
                    {art.category}
                  </span>
                  <span>{art.readingTime} · {art.date}</span>
                </div>

                <h4 className="text-base font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="text-xs text-[#555B66] line-clamp-1">
                  {art.excerpt}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-[#737984]">Insights</span>
                  <span className="text-[#2563EB] font-semibold group-hover:underline flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
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
