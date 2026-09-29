import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostSource } from '../../lib/posts'
import { getSiteContent } from '../../lib/content'
import { ArrowRight, ArrowUpRight } from '../../components/Icons'

export default function ThinkingPostPage({ source, meta, siteData }) {
  if (!meta) return null

  const profile = siteData?.profile || {}

  return (
    <article className="py-12 sm:py-20 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/thinking"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#555B66] hover:text-blue-600 transition-colors"
          >
            <span>← Back to all essays</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#737984]">
            <span className="text-blue-600 font-semibold uppercase">{meta.category}</span>
            <span>·</span>
            <span>{meta.date}</span>
            <span>·</span>
            <span>{meta.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111318] leading-[1.15]">
            {meta.title}
          </h1>

          {meta.excerpt && (
            <p className="text-lg text-[#555B66] leading-relaxed font-normal">
              {meta.excerpt}
            </p>
          )}

          {meta.tags && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {meta.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#F4F5F7] border border-[#E5E7EB] text-[#555B66]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Essay Content Body */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed space-y-6 text-[#111318]">
          <MDXRemote {...source} />
        </div>

        {/* Author Bio Signature Box */}
        <div className="pt-12 mt-12 border-t border-[#E5E7EB]">
          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#F4F5F7] border border-[#E5E7EB]">
              <Image
                src={profile.avatarImage || '/images/vivek-canonical.png'}
                alt="Vivek Dhoundiyal"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <h3 className="text-base font-semibold text-[#111318]">
                Written by Vivek Dhoundiyal
              </h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                B2B sales and business development professional with 8+ years across revenue generation, partnerships, and commercial operations. Building technology, AI workflows and CareerOS.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-blue-600 transition-colors shadow-xs"
            >
              Get in touch
            </Link>
          </div>
        </div>

      </div>
    </article>
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

  if (!post) {
    return { notFound: true }
  }

  const mdxSource = await serialize(post.content)

  return {
    props: {
      siteData,
      source: mdxSource,
      meta: post.meta,
      seoProps: {
        title: `${post.meta.title} — Vivek Dhoundiyal`,
        description: post.meta.excerpt || "Essay by Vivek Dhoundiyal",
        canonical: `https://vivekdhoundiyal.com/thinking/${params.slug}`,
        ogType: "article",
        article: post.meta,
      }
    }
  }
}
