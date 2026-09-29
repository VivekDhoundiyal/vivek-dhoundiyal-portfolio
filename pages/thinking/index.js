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
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <header className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-blue font-semibold">
            Publication Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-obsidian-900 dark:text-white">
            Thinking & Notes
          </h1>
          <p className="text-base text-text-secondary dark:text-slate-300 max-w-xl leading-relaxed">
            Essays on product strategy, systems architecture, operational leverage, and human-in-the-loop AI workflows.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle dark:border-border-darkHairline">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-colors ${
                  selectedTag === cat
                    ? 'bg-obsidian-900 dark:bg-white text-white dark:text-obsidian-900 font-semibold'
                    : 'bg-sand-50 dark:bg-obsidian-800 text-text-muted hover:text-obsidian-900 dark:hover:text-white border border-border-subtle dark:border-border-darkHairline'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <SearchIcon className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search essays..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white dark:bg-obsidian-800 border border-border-subtle dark:border-border-darkHairline text-obsidian-900 dark:text-white focus:outline-none focus:border-accent-blue"
            />
          </div>
        </div>

        {/* Article List */}
        <div className="divide-y divide-border-subtle dark:divide-border-darkHairline">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-text-muted text-sm font-mono">
              No essays found matching your criteria.
            </div>
          ) : (
            filteredPosts.map(post => (
              <article key={post.slug} className="py-8 group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                    <span className="text-accent-blue font-semibold uppercase">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <Link href={`/thinking/${post.slug}`}>
                    <h2 className="text-2xl font-bold tracking-tight text-obsidian-900 dark:text-white group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-text-secondary dark:text-slate-300 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/thinking/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-obsidian-900 dark:text-white group-hover:text-accent-blue transition-colors"
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
