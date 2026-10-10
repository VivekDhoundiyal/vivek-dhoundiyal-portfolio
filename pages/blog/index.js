import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getSiteContent } from '../../lib/content'
import { getAllPosts } from '../../lib/posts'
import { ArrowRight, ArrowUpRight, SearchIcon } from '../../components/Icons'

export default function BlogIndex({ siteData, posts }) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
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

  const profile = siteData?.profile || {}
  const canonicalUrl = 'https://vivek-dhoundiyal-portfolio.pages.dev/blog'
  const ogImage = profile.portraitImage || '/images/vivek-canonical.png'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://vivek-dhoundiyal-portfolio.pages.dev/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': canonicalUrl
      }
    ]
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Blog & Commercial Insights | Vivek Dhoundiyal',
    'description': 'Playbooks, operational frameworks, and essays exploring B2B sales strategy, enterprise partnerships, revenue operations, and scalable execution.',
    'url': canonicalUrl,
    'author': {
      '@type': 'Person',
      'name': 'Vivek Dhoundiyal',
      'jobTitle': 'Commercial Operator & Business Development Leader',
      'url': 'https://vivek-dhoundiyal-portfolio.pages.dev/'
    }
  }

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">Publication Archive</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111318] leading-[1.08]">
              Blog & Commercial Insights
            </h1>
            
            <p className="text-base sm:text-lg text-[#555B66] max-w-2xl leading-relaxed font-normal">
              Practical playbooks and operational essays exploring B2B sales strategy, strategic partnerships, revenue growth, and scalable execution from an experienced commercial operator.
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

          {/* Article List */}
          <section aria-label="Articles list" className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white border border-[#E5E7EB] text-[#737984] text-xs font-mono">
                No articles found matching "{query || selectedCategory}". Click "All" to view the complete publication archive.
              </div>
            ) : (
              filteredPosts.map((post, idx) => (
                <article
                  key={post.slug}
                  className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#737984]">
                      <span className="px-2.5 py-0.5 rounded-full text-[10.5px] uppercase font-semibold text-[#2563EB] bg-blue-50 border border-blue-100">
                        {post.category}
                      </span>
                      <span>·</span>
                      <time dateTime={post.date}>{post.date}</time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal max-w-3xl">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 border border-slate-200 text-[#555B66]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#737984]">
                      By Vivek Dhoundiyal
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))
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
                Entrepreneur, Sales & Business Development leader with 8+ years across enterprise consultative sales, strategic partnerships, revenue operations, and scaling businesses from 0→1.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#work"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] hover:bg-slate-50 transition-colors"
              >
                View Ventures
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors"
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
