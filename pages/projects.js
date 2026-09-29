import React from 'react'
import Link from 'next/link'
import { getSiteContent } from '../lib/content'
import { ArrowRight } from '../components/Icons'

export default function ProjectsIndex({ siteData }) {
  const projects = siteData?.projects || []

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            Work Index
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111318] mt-2">
            Entrepreneurial Experience & Systems
          </h1>
          <p className="text-base text-[#555B66] max-w-2xl mt-4 leading-relaxed font-normal">
            A comprehensive archive of products, operational architectures, and go-to-market engines engineered from first principles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.slug}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:border-blue-500/40 hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-600">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">{proj.status}</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#111318]">
                  {proj.title}
                </h2>
                <p className="text-sm text-[#555B66] leading-relaxed max-w-2xl font-normal">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags?.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#F4F5F7] text-[#555B66] border border-[#E5E7EB]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={`/work/${proj.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-blue-600 transition-all shadow-xs"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
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
        title: "Entrepreneurial Experience & Systems — Vivek Dhoundiyal",
        description: "Case studies and product breakdowns by Vivek Dhoundiyal.",
        canonical: "https://vivekdhoundiyal.com/projects",
      }
    }
  }
}
