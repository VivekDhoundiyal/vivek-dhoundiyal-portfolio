import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostSource } from '../../lib/posts'
import { getSiteContent } from '../../lib/content'
import { ArrowRight, ArrowUpRight } from '../../components/Icons'

const mdxComponents = {
  h1: (props) => (
    <h2
      className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318] mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-lg sm:text-xl font-semibold tracking-tight text-[#111318] mt-6 mb-2"
      {...props}
    />
  ),
}

export default function BlogPostPage({ source, meta, siteData, allPosts = [] }) {
  if (!meta) return null

  const profile = siteData?.profile || {}
  const canonicalUrl = `https://vivek-dhoundiyal-portfolio.pages.dev/blog/${meta.slug}`
  const ogImage = profile.portraitImage || '/images/vivek-canonical.png'

  // Structured Data: Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': meta.title,
    'description': meta.excerpt || `${meta.title} by Vivek Dhoundiyal`,
    'image': [ogImage],
    'datePublished': meta.date,
    'dateModified': meta.date,
    'author': {
      '@type': 'Person',
      'name': 'Vivek Dhoundiyal',
      'jobTitle': 'Commercial Operator & Business Development Leader',
      'url': 'https://vivek-dhoundiyal-portfolio.pages.dev/'
    },
    'publisher': {
      '@type': 'Person',
      'name': 'Vivek Dhoundiyal',
      'url': 'https://vivek-dhoundiyal-portfolio.pages.dev/'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  }

  // Structured Data: BreadcrumbList Schema
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
        'item': 'https://vivek-dhoundiyal-portfolio.pages.dev/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': meta.title,
        'item': canonicalUrl
      }
    ]
  }

  // Related posts (excluding current post)
  const relatedPosts = allPosts.filter(p => p.slug !== meta.slug).slice(0, 2)

  return (
    <main className="py-12 sm:py-20 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#555B66]">
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#2563EB] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#111318] truncate max-w-[200px] sm:max-w-xs">{meta.category}</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[#E5E7EB]">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#737984]">
              <span className="px-2.5 py-0.5 rounded-full text-[10.5px] uppercase font-semibold text-[#2563EB] bg-blue-50 border border-blue-100">
                {meta.category}
              </span>
              <span>·</span>
              <time dateTime={meta.date}>{meta.date}</time>
              <span>·</span>
              <span>{meta.readingTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111318] leading-[1.12]">
              {meta.title}
            </h1>

            {meta.excerpt && (
              <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
                {meta.excerpt}
              </p>
            )}

            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
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

          {/* Article Content Body */}
          <article className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed space-y-6 text-[#111318]">
            <MDXRemote {...source} components={mdxComponents} />
          </article>

          {/* Author Bio Signature Box */}
          <aside className="pt-10 mt-12 border-t border-[#E5E7EB]">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-slate-50 border border-[#E5E7EB]">
                <Image
                  src={ogImage}
                  alt="Vivek Dhoundiyal"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left flex-1">
                <h3 className="text-base font-bold text-[#111318]">
                  Written by Vivek Dhoundiyal
                </h3>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                  Entrepreneur & Business Development Leader with 8+ years across enterprise sales, strategic partnerships, revenue operations, and scaling businesses.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/#contact"
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-xs"
                >
                  Contact Vivek
                </Link>
              </div>
            </div>
          </aside>

          {/* Related Articles Navigation */}
          {relatedPosts.length > 0 && (
            <section aria-label="Related articles" className="pt-8 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
                More Articles & Playbooks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all flex flex-col justify-between group space-y-2"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#2563EB] uppercase font-semibold">
                        {post.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#737984]">
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
          <div className="pt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] hover:bg-slate-50 shadow-2xs transition-colors"
            >
              <span>← Back to all articles</span>
            </Link>
          </div>

        </div>
      </main>
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

  return {
    props: {
      siteData,
      source: mdxSource,
      meta: post.meta,
      allPosts,
      seoProps: {
        title: `${post.meta.title} | Vivek Dhoundiyal`,
        description: post.meta.excerpt || "Article by Vivek Dhoundiyal",
        canonical: `https://vivek-dhoundiyal-portfolio.pages.dev/blog/${params.slug}/`,
        ogType: "article",
        article: post.meta,
        breadcrumbs: [
          { name: "Home", url: "https://vivek-dhoundiyal-portfolio.pages.dev/" },
          { name: "Blog", url: "https://vivek-dhoundiyal-portfolio.pages.dev/blog/" },
          { name: post.meta.title, url: `https://vivek-dhoundiyal-portfolio.pages.dev/blog/${params.slug}/` }
        ]
      }
    }
  }
}
