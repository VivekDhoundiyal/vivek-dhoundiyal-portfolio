import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostSource } from '../../lib/posts'
import { getSiteContent } from '../../lib/content'
import { ArrowRight, ArrowUpRight, CheckIcon } from '../../components/Icons'
import {
  Sticker,
  KeyTakeaway,
  CalculationBlock,
  ValidationChecklist,
  FaqAccordion
} from '../../components/blog/BlogComponents'

function slugify(text) {
  if (typeof text !== 'string') return ''
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const mdxComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111318] mt-12 mb-6 scroll-mt-24 leading-tight"
      {...props}
    />
  ),
  h2: ({ children, ...props }) => {
    const text = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : '')
    const id = slugify(text)
    return (
      <h2
        id={id || props.id}
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111318] mt-12 mb-5 scroll-mt-24 pt-4 border-t border-slate-200/80 leading-snug"
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => {
    const text = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : '')
    const id = slugify(text)
    return (
      <h3
        id={id || props.id}
        className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] mt-8 mb-3 scroll-mt-24 leading-snug"
        {...props}
      >
        {children}
      </h3>
    )
  },
  p: (props) => (
    <p
      className="text-base sm:text-lg text-[#374151] leading-relaxed mb-6 font-normal"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-outside pl-6 space-y-2.5 mb-6 text-base sm:text-lg text-[#374151]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside pl-6 space-y-2.5 mb-6 text-base sm:text-lg text-[#374151]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="p-5 my-6 rounded-2xl bg-blue-50/40 border-l-4 border-l-[#2563EB] border border-blue-100 text-base sm:text-lg italic text-[#1F2937]"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-2xs">
      <table className="w-full text-left border-collapse text-sm sm:text-base" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-slate-50 border-b border-[#E5E7EB]" {...props} />,
  th: (props) => (
    <th className="p-3.5 font-bold text-[#111318] text-xs uppercase font-mono tracking-wider" {...props} />
  ),
  td: (props) => <td className="p-3.5 border-b border-slate-100 text-[#374151]" {...props} />,
  hr: () => <hr className="my-10 border-slate-200" />,
  a: (props) => (
    <a
      className="text-[#2563EB] font-medium underline underline-offset-4 hover:text-blue-800 transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  Sticker,
  KeyTakeaway,
  CalculationBlock,
  ValidationChecklist,
  FaqAccordion
}

export default function BlogPostPage({ source, meta, siteData, allPosts = [] }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [headings, setHeadings] = useState([])
  const [activeHeading, setActiveHeading] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)))
      }

      // Check current heading in view
      const headingElements = Array.from(document.querySelectorAll('article h2'))
      const scrollPos = window.scrollY + 140
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i]
        if (el.offsetTop <= scrollPos) {
          setActiveHeading(el.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Collect headings on mount for TOC
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('article h2'))
    const list = headingElements.map(h => ({
      id: h.id,
      text: h.innerText.replace(/^[0-9]+\.\s*/, '') // Clean number prefix if present
    })).filter(h => h.id && h.text)
    setHeadings(list)
  }, [source])

  if (!meta) return null

  const profile = siteData?.profile || {}
  const ogImage = profile.portraitImage || '/images/vivek-canonical.png'
  const relatedPosts = allPosts.filter(p => p.slug !== meta.slug).slice(0, 3)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#2563EB] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <main className="py-10 sm:py-16 bg-[#FAFAF8] text-[#111318] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

          {/* Breadcrumb Navigation & Top Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#555B66]">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#2563EB] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#111318] truncate max-w-[200px] sm:max-w-xs font-semibold">{meta.category}</span>
            </nav>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111318] shadow-2xs transition-all cursor-pointer"
                title="Copy article link"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="text-xs">🔗</span>
                    <span>Share Article</span>
                  </>
                )}
              </button>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#555B66] hover:text-[#111318] shadow-2xs transition-all"
              >
                <span>← Back to Blog</span>
              </Link>
            </div>
          </div>

          {/* Article Header */}
          <header className="space-y-5 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#737984]">
              <span className="px-3 py-1 rounded-full text-[11px] uppercase font-bold text-[#2563EB] bg-blue-50 border border-blue-200/80">
                {meta.category}
              </span>
              <span>·</span>
              <time dateTime={meta.date}>{meta.date}</time>
              <span>·</span>
              <span>{meta.readingTime}</span>
              <span>·</span>
              <span className="text-[#111318] font-medium">By Vivek Dhoundiyal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.12]">
              {meta.title}
            </h1>

            {meta.excerpt && (
              <p className="text-lg sm:text-xl text-[#555B66] leading-relaxed font-normal">
                {meta.excerpt}
              </p>
            )}

            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {meta.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white border border-[#E5E7EB] text-[#555B66] shadow-2xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Hero Header Image */}
          {meta.coverImage && (
            <figure className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xs bg-slate-100">
              <Image
                src={meta.coverImage}
                alt="Business Idea Validation Roadmap — Step-by-step framework for testing ideas before building"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1152px"
                className="object-cover object-center"
              />
            </figure>
          )}

          {/* Mobile Table of Contents Accordion */}
          {headings.length > 0 && (
            <div className="block lg:hidden">
              <details className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs group">
                <summary className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#111318] font-bold cursor-pointer list-none select-none">
                  <span className="flex items-center gap-2">
                    <span className="text-base">📑</span>
                    <span>Table of Contents ({headings.length} Sections)</span>
                  </span>
                  <span className="group-open:rotate-180 transition-transform text-[#2563EB]">↓</span>
                </summary>
                <nav aria-label="Mobile table of contents" className="pt-4 border-t border-slate-100 mt-3 space-y-2 text-xs font-medium">
                  {headings.map((h, i) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block py-1 text-[#555B66] hover:text-[#2563EB] transition-colors truncate"
                    >
                      <span className="font-mono text-[#737984] mr-2">{i + 1}.</span>
                      <span>{h.text}</span>
                    </a>
                  ))}
                </nav>
              </details>
            </div>
          )}

          {/* Editorial Content Grid (Main Column + Desktop Sticky TOC Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Main Reading Column */}
            <article className="lg:col-span-8 space-y-6 text-[#111318]">
              <MDXRemote {...source} components={mdxComponents} />

              {/* Author Signature Box */}
              <aside className="pt-10 mt-14 border-t border-[#E5E7EB]">
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 border border-[#E5E7EB] shadow-2xs">
                    <Image
                      src={ogImage}
                      alt="Vivek Dhoundiyal"
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase text-[#2563EB] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>About the Author</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#111318]">
                      Vivek Dhoundiyal
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                      Commercial Operator &amp; Growth Leader with 8+ years across enterprise sales, strategic partnerships, revenue operations, and venture building.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-xs flex-shrink-0"
                  >
                    Connect with Vivek
                  </Link>
                </div>
              </aside>

              {/* Related Articles Navigation */}
              {relatedPosts.length > 0 && (
                <section aria-label="Related articles" className="pt-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#737984] font-bold">
                      More Articles &amp; Frameworks
                    </h3>
                    <Link href="/blog" className="text-xs font-semibold text-[#2563EB] hover:underline">
                      View all ({allPosts.length}) →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedPosts.map(post => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all flex flex-col justify-between group space-y-3"
                      >
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono text-[#2563EB] uppercase font-bold">
                            {post.category}
                          </span>
                          <h4 className="text-sm font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h4>
                        </div>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-[#737984] border-t border-slate-100">
                          <span>{post.readingTime}</span>
                          <span className="text-[#2563EB] font-semibold group-hover:translate-x-0.5 transition-transform">
                            Read →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Back to Blog Button */}
              <div className="pt-8 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] hover:bg-slate-50 shadow-xs transition-all"
                >
                  <span>← Return to Publication Archive</span>
                </Link>
              </div>

            </article>

            {/* Desktop Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#111318] font-bold">
                    Table of Contents
                  </span>
                  <span className="text-[11px] font-mono text-[#737984]">
                    {headings.length} Sections
                  </span>
                </div>

                <nav aria-label="Table of contents" className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
                  {headings.map((h, i) => {
                    const isActive = activeHeading === h.id
                    return (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 truncate ${
                          isActive
                            ? 'bg-blue-50 text-[#2563EB] font-bold translate-x-1'
                            : 'text-[#555B66] hover:text-[#111318] hover:bg-slate-50 font-normal'
                        }`}
                        title={h.text}
                      >
                        <span className="font-mono text-[11px] opacity-70 mr-1.5">{i + 1}.</span>
                        <span>{h.text}</span>
                      </a>
                    )
                  })}
                </nav>
              </div>

              {/* Quick Actions Card */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/70 space-y-3">
                <div className="text-xs font-bold text-[#111318]">
                  Share this Framework
                </div>
                <p className="text-xs text-[#555B66] leading-relaxed">
                  Help fellow founders and operators avoid premature execution and validate before building.
                </p>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-white border border-blue-200 text-[#2563EB] hover:bg-blue-50 transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? '✓ Link Copied!' : 'Copy Article Link'}
                </button>
              </div>
            </aside>

          </div>

        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const siteData = getSiteContent()
  const post = getPostSource(params.slug)
  const allPosts = getAllPosts()

  if (!post) {
    return { notFound: true }
  }

  const mdxSource = await serialize(post.content)
  const canonicalUrl = `https://vivek-dhoundiyal-portfolio.pages.dev/blog/${params.slug}/`

  return {
    props: {
      siteData,
      source: mdxSource,
      meta: post.meta,
      allPosts,
      seoProps: {
        title: `${post.meta.seoTitle || post.meta.title} | Vivek Dhoundiyal`,
        description: post.meta.seoDescription || post.meta.excerpt || "Article by Vivek Dhoundiyal",
        canonical: canonicalUrl,
        ogType: "article",
        ogImage: post.meta.coverImage || "/images/blog/business-idea-validation-roadmap.png",
        article: {
          ...post.meta,
          datePublished: post.meta.date,
          dateModified: post.meta.dateModified || post.meta.date
        },
        breadcrumbs: [
          { name: "Home", url: "https://vivek-dhoundiyal-portfolio.pages.dev/" },
          { name: "Blog", url: "https://vivek-dhoundiyal-portfolio.pages.dev/blog/" },
          { name: post.meta.title, url: canonicalUrl }
        ]
      }
    }
  }
}
