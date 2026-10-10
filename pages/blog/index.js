import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getSiteContent } from '../../lib/content'
import { getAllPosts } from '../../lib/posts'
import { ArrowRight, ArrowUpRight, SearchIcon } from '../../components/Icons'

export default function BlogIndex({ siteData, posts = [] }) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Entrepreneurship & Startups',
    'Sales Strategy',
    'Partnerships',
    'Revenue Growth',
    'Business Operations',
    'Commercial Strategy'
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || 
      post.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'Business Operations' && (post.category?.includes('Operations') || post.category?.includes('Systems'))) ||
      (selectedCategory === 'Commercial Strategy' && post.category?.includes('Commercial'))
    
    const matchesQuery = !query.trim() || 
      post.title.toLowerCase().includes(query.toLowerCase()) || 
      post.excerpt?.toLowerCase().includes(query.toLowerCase()) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(query.toLowerCase())))

    return matchesCategory && matchesQuery
  })

  // Separate featured guide if viewing "All" with no search query
  const isDefaultView = selectedCategory === 'All' && !query.trim()
  const featuredPost = isDefaultView ? posts.find(p => p.slug === 'validate-business-idea') || posts[0] : null
  const gridPosts = isDefaultView && featuredPost ? filteredPosts.filter(p => p.slug !== featuredPost.slug) : filteredPosts

  const profile = siteData?.profile || {}
  const ogImage = profile.portraitImage || '/images/vivek-canonical.png'

  return (
    <main className="py-12 sm:py-20 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
        {/* Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-xs font-semibold text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-wider">Publication Archive</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] leading-[1.08]">
            Blog &amp; Commercial Insights
          </h1>
          
          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            Field-tested playbooks, validation frameworks, and operational essays on 0→1 business building, enterprise sales strategy, strategic distribution partnerships, and revenue growth.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
          <nav aria-label="Blog categories" className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111318] text-white shadow-xs'
                    : 'bg-white text-[#555B66] hover:text-[#111318] hover:bg-slate-50 border border-[#E5E7EB] shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="relative w-full sm:w-72">
            <SearchIcon className="w-4 h-4 text-[#737984] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search playbooks & topics..."
              aria-label="Search articles"
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-white border border-[#E5E7EB] text-[#111318] placeholder-[#737984] focus:outline-none focus:border-[#2563EB] shadow-2xs"
            />
          </div>
        </div>

        {/* FEATURED GUIDE HERO CARD (Shown on Default "All" view) */}
        {featuredPost && (
          <section aria-label="Featured Guide" className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
              ★ Flagship Guide
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 block group relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#737984]">
                    <span className="px-3 py-1 rounded-full text-[11px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-200/80">
                      {featuredPost.category}
                    </span>
                    <span>·</span>
                    <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                    <span>·</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#2563EB] group-hover:underline">
                    <span>Read Complete 16-Section Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {featuredPost.coverImage && (
                  <div className="lg:col-span-5 relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-slate-100 shadow-2xs">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            </Link>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section aria-label="Articles list" className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-[#737984] font-bold">
              {isDefaultView ? `All Articles & Playbooks (${filteredPosts.length})` : `Filtered Results (${filteredPosts.length})`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white border border-[#E5E7EB] text-[#737984] text-xs font-mono">
              No articles found matching "{query || selectedCategory}". Click "All" to view the complete publication archive.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map(post => (
                <article
                  key={post.slug}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#737984]">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-100">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10.5px] font-mono bg-slate-50 border border-slate-200 text-[#555B66]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#737984]">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#2563EB] group-hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Author Signature & Cross-Links */}
        <aside className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50 border border-[#E5E7EB]">
            <Image
              src={ogImage}
              alt="Vivek Dhoundiyal"
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-1.5 text-center md:text-left flex-1">
            <h3 className="text-lg font-bold text-[#111318]">
              About Vivek Dhoundiyal
            </h3>
            <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
              Commercial Operator &amp; Growth Leader with 8+ years across enterprise sales, strategic partnerships, revenue operations, and venture building.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] hover:bg-slate-50 transition-colors shadow-2xs"
            >
              View Ventures
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-xs"
            >
              Get in Touch
            </Link>
          </div>
        </aside>

      </div>
    </main>
  )
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  const posts = getAllPosts()

  return {
    props: {
      siteData,
      posts,
      seoProps: {
        title: "Blog & Commercial Insights | Vivek Dhoundiyal",
        description: "Essays, playbooks, and tactical frameworks on B2B sales strategy, enterprise partnerships, revenue operations, and 0→1 business building by Vivek Dhoundiyal.",
        canonical: "https://vivek-dhoundiyal-portfolio.pages.dev/blog/",
        breadcrumbs: [
          { name: "Home", url: "https://vivek-dhoundiyal-portfolio.pages.dev/" },
          { name: "Blog", url: "https://vivek-dhoundiyal-portfolio.pages.dev/blog/" }
        ]
      }
    }
  }
}
