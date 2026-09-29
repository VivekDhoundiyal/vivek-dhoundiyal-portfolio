import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSiteContent } from '../lib/content'
import { ArrowUpRight } from '../components/Icons'

export default function ExperiencePage({ siteData }) {
  const experience = siteData?.experience || {}
  const nodes = experience.nodes || []

  return (
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318]">
      <Head>
        <title>Professional Experience & Trajectory — Vivek Dhoundiyal</title>
        <meta name="description" content="Verified professional career trajectory of Vivek Dhoundiyal across revenue consulting, enterprise sales, and 0-to-1 venture building." />
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#111318] transition-colors"
          >
            <span>← Return to Home</span>
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:underline"
          >
            <span>Inspect Resumes</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs uppercase tracking-widest text-blue-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>8+ Years Track Record</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318]">
            Professional Experience
          </h1>

          <p className="text-sm sm:text-lg text-[#555B66] max-w-3xl leading-relaxed font-normal">
            {experience.headline} {experience.intro}
          </p>
        </div>

        {/* SOPHISTICATED VERTICAL TIMELINE */}
        <div className="relative border-l border-[#E5E7EB] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {nodes.map((item, idx) => (
            <div key={item.id || idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 transition-colors shadow-xs" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-slate-300 transition-all shadow-xs space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                      {item.badge}
                    </span>
                    <h2 className="text-2xl font-semibold text-[#111318]">
                      {item.role}
                    </h2>
                    <div className="text-sm font-semibold text-slate-700">
                      {item.company}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#555B66] bg-[#F4F5F7] px-3 py-1.5 rounded-lg border border-[#E5E7EB] self-start sm:self-auto">
                    {item.period} · {item.location}
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Operational Takeaway */}
                <div className="p-4 rounded-xl bg-[#F4F5F7] border border-[#E5E7EB] text-xs text-[#555B66] space-y-1">
                  <span className="font-mono text-[10px] text-[#737984] uppercase font-semibold block">
                    Core Operational Takeaway
                  </span>
                  <p className="italic">
                    "{item.takeaway}"
                  </p>
                </div>

                {['supersurge', 'kreedon', 'collegedunia'].includes(item.id) && (
                  <div className="pt-2">
                    <Link
                      href={`/experience/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:underline"
                    >
                      <span>Read Deep-Dive Corporate Case Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA to Resume */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#737984]">
            Full credentials and verified achievements documented in curriculum vitae.
          </div>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-blue-600 transition-colors shadow-xs"
          >
            <span>View Verified Resumes</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  return {
    props: {
      siteData,
      seoProps: {
        title: "Professional Experience — Vivek Dhoundiyal",
        description: "Verified professional career trajectory of Vivek Dhoundiyal across revenue consulting, enterprise sales, and 0-to-1 venture building.",
      }
    }
  }
}
