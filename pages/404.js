import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from '../components/Icons'

export default function Custom404() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-[#FAFAF8] text-[#111318]">
      <Head>
        <title>404 — Page Not Found | Vivek Dhoundiyal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs uppercase tracking-widest text-blue-600 font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
          Looks like this page doesn't exist.
        </h1>

        <p className="text-sm text-[#555B66] leading-relaxed font-normal">
          The requested page may have been moved, updated, or relocated to another section of the website.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-blue-600 transition-all shadow-sm"
          >
            <span>Back to Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#111318] transition-colors"
          >
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
