import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getCapabilities, getCapabilityBySlug } from '../../lib/content'
import { ArrowRight, ArrowUpRight, CheckIcon } from '../../components/Icons'

export default function CapabilityPage({ capability, allCapabilities }) {
  if (!capability) return null

  const currentIndex = allCapabilities.findIndex(c => c.slug === capability.slug)
  const nextCapability = allCapabilities[(currentIndex + 1) % allCapabilities.length]

  return (
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318]">
      <Head>
        <title>{capability.title} — Commercial Discipline & Methodology | Vivek Dhoundiyal</title>
        <meta name="description" content={capability.headline || capability.summary} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
          <Link
            href="/#capabilities"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#111318] transition-colors"
          >
            <span>← Return to All Capabilities</span>
          </Link>

          <span className="text-xs font-mono text-[#737984]">
            Discipline {currentIndex + 1} of {allCapabilities.length}
          </span>
        </div>

        {/* Header Block */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
            <span>COMMERCIAL CAPABILITY · {capability.tag.toUpperCase()}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111318] leading-tight">
            {capability.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#2563EB] font-medium leading-snug">
            {capability.headline}
          </p>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            {capability.summary}
          </p>
        </header>

        {/* Operating Approach Thesis */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
            Operating Thesis
          </span>
          <p className="text-base sm:text-lg text-[#111318] leading-relaxed font-normal">
            "{capability.approach}"
          </p>
        </div>

        {/* Typical Problems Solved */}
        {capability.problemsSolved && capability.problemsSolved.length > 0 && (
          <div className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
              Typical Commercial Problems Solved
            </span>
            <div className="space-y-3">
              {capability.problemsSolved.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#111318]">
                  <span className="text-[#2563EB] font-bold">0{idx + 1}</span>
                  <span className="leading-relaxed">{prob}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step-by-Step Methodology Flow */}
        {capability.methodology && capability.methodology.length > 0 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                Execution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111318] pt-1">
                4-Stage Methodology
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capability.methodology.map((m, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-[#E5E7EB] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#2563EB]">
                      STAGE {m.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111318]">
                    {m.name}
                  </h3>
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Relevant Experience & Ground Truth */}
        {capability.relevantExperience && capability.relevantExperience.length > 0 && (
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
              Relevant Ground Truth Experience
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {capability.relevantExperience.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#E5E7EB] space-y-1.5">
                  <div className="text-sm font-semibold text-[#111318]">{exp.company}</div>
                  <div className="text-xs font-mono text-[#2563EB]">{exp.role}</div>
                  <p className="text-xs text-[#555B66] leading-relaxed pt-1">
                    {exp.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Used */}
        {capability.toolsUsed && capability.toolsUsed.length > 0 && (
          <div className="p-6 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-2">
            <span className="text-xs font-mono uppercase text-[#737984] font-semibold block">
              Platforms & Tool Stack
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {capability.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-white border border-[#E5E7EB] text-[#111318]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Outcomes & Lessons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB] space-y-2">
            <span className="text-xs font-mono uppercase text-emerald-700 font-semibold block">
              Verified Outcomes
            </span>
            <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
              {capability.outcomes}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB] space-y-2">
            <span className="text-xs font-mono uppercase text-[#2563EB] font-semibold block">
              Core Operator Lesson
            </span>
            <p className="text-xs sm:text-sm text-[#555B66] italic leading-relaxed">
              "{capability.lessons}"
            </p>
          </div>
        </div>

        {/* Next Capability Footer Link */}
        {nextCapability && (
          <div className="pt-8 border-t border-[#E5E7EB] flex items-center justify-between">
            <Link
              href={`/capabilities/${nextCapability.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111318] hover:text-[#2563EB] transition-colors"
            >
              <span>Next Capability: {nextCapability.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors"
            >
              Discuss Opportunities
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const capabilities = getCapabilities()
  const paths = capabilities.map(c => ({
    params: { slug: c.slug }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const capability = getCapabilityBySlug(params.slug)
  const allCapabilities = getCapabilities()
  return {
    props: {
      capability,
      allCapabilities
    }
  }
}
