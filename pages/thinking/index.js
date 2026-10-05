import React, { useState } from 'react'
import Link from 'next/link'
import { getSiteContent } from '../../lib/content'
import { getAllPosts } from '../../lib/posts'
import { ArrowRight, SearchIcon } from '../../components/Icons'

export default function ThinkingIndex({ siteData, posts }) {
  const [query, setQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  const categories = ['All', 'Product Thinking', 'Systems & Operations', 'AI & Future of Work']

  const filteredPosts = posts.filter(post => {
    const matchesTag = selectedTag === 'All' || post.category === selectedTag
    const matchesQuery = !query.trim() || 
      post.title.toLowerCase().includes(query.toLowerCase()) || 
      post.excerpt?.toLowerCase().includes(query.toLowerCase())
    return matchesTag && matchesQuery
  })

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-wider">Publication Archive</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111318]">
            Thinking & Notes
          </h1>
          <p className="text-base text-[#555B66] max-w-xl leading-relaxed font-normal">
            Essays on product strategy, systems architecture, operational leverage, and human-in-the-loop AI workflows.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-[#111318] text-white shadow-xs'
                    : 'bg-white text-[#555B66] hover:text-[#111318] hover:bg-slate-50 border border-[#E5E7EB] shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <SearchIcon className="w-4 h-4 text-[#737984] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search essays..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-white border border-[#E5E7EB] text-[#111318] placeholder-[#737984] focus:outline-none focus:border-[#2563EB] shadow-xs"
            />
          </div>
        </div>

        {/* Article List */}
        <div className="divide-y divide-[#E5E7EB]">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-[#737984] text-sm font-mono">
              No essays found matching your criteria.
            </div>
          ) : (
            filteredPosts.map(post => (
              <article key={post.slug} className="py-8 group">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#737984]">
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] uppercase text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <Link href={`/thinking/${post.slug}`}>
                    <h2 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-[#555B66] leading-relaxed max-w-2xl font-normal">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/thinking/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:underline"
                    >
                      <span>Read essay</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </div>
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
        title: "Thinking & Notes — Vivek Dhoundiyal",
        description: "Essays on commercial software products, systems architecture, and business operations by Vivek Dhoundiyal.",
        canonical: "https://vivekdhoundiyal.com/thinking",
      }
    }
  }
}
