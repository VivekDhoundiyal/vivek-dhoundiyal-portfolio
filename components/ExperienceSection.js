import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function ExperienceSection({ experience = {} }) {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const nodes = (experience.nodes || []).filter(item => item.id !== 'building' && item.company !== 'CareerOS' && item.category !== 'Current Building')

  const milestoneRoadmap = [
    { label: '01 · Foundation', role: 'Engineering Logic', year: '2014–18' },
    { label: '02 · 0→1 Ventures', role: 'Ground Operations', year: '2017–23' },
    { label: '03 · Enterprise B2B', role: 'Commercial Sales', year: '2023–24' },
    { label: '04 · Advisory', role: 'Revenue Consulting', year: '2024–Now' },
    { label: '05 · Products', role: 'AI & Systems', year: 'Active' }
  ]

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">05 · Executive Trajectory</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Professional Experience Progression
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              A high-level career overview mapping the progression from 0→1 venture building and enterprise commercial sales to revenue consulting and operational systems.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-[#FAFAF8] text-[#111318] shadow-xs transition-all"
            >
              <span>Inspect Full Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
            </Link>
          </div>
        </div>

        {/* Visual Progression Trajectory Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-2xs reveal-on-scroll">
          <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] font-semibold mb-4">
            Macro Career Trajectory: Experience → Responsibility → Capability → Outcome
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {milestoneRoadmap.map((ms, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] space-y-1 shadow-2xs"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#2563EB] font-bold">
                  <span>{ms.label}</span>
                  <span className="text-[#737984]">{ms.year}</span>
                </div>
                <div className="text-xs font-bold text-[#111318]">{ms.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESSIVE TIMELINE: Interactive 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Chronological Rail (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {nodes.map((item, idx) => {
              const isSelected = idx === expandedIndex
              return (
                <button
                  key={item.id || idx}
                  onClick={() => setExpandedIndex(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 border flex flex-col space-y-2 reveal-on-scroll delay-${(idx + 1) * 100} cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2563EB] shadow-sm ring-2 ring-[#2563EB]/20 translate-x-1'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-300 hover:bg-[#FAFAF8]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-base sm:text-lg font-bold text-[#111318]">
                    {item.company}
                  </div>

                  <div className="text-xs font-medium text-[#555B66]">
                    {item.role}
                  </div>

                  {item.scope && (
                    <div className="text-xs text-[#737984] pt-1 line-clamp-1 italic">
                      "{item.scope}"
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* RIGHT: Detailed Narrative Pane for Active Node (7 cols) */}
          <div className="lg:col-span-7">
            {nodes[expandedIndex] && (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-xs space-y-6 reveal-on-scroll animate-scale-in">
                
                {/* Node Header */}
                <div className="space-y-3 pb-5 border-b border-[#E5E7EB]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100 font-semibold">
                      {nodes[expandedIndex].badge}
                    </span>
                    <span className="text-xs font-mono text-[#737984] bg-white px-3 py-1 rounded-full border border-[#E5E7EB] shadow-2xs">
                      {nodes[expandedIndex].period} · {nodes[expandedIndex].location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                    {nodes[expandedIndex].role}
                  </h3>

                  <div className="text-base font-semibold text-[#555B66]">
                    {nodes[expandedIndex].company}
                  </div>
                </div>

                {/* 3 Structured Dimension Cards: Responsibility · Capability · Outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nodes[expandedIndex].scope && (
                    <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] space-y-1 shadow-2xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                        Core Responsibility
                      </span>
                      <p className="text-xs text-[#111318] font-medium leading-relaxed">
                        {nodes[expandedIndex].scope}
                      </p>
                    </div>
                  )}

                  <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] space-y-1 shadow-2xs">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                      Target Outcome
                    </span>
                    <p className="text-xs text-[#111318] font-medium leading-relaxed">
                      {nodes[expandedIndex].outcome || 'Delivered predictable pipeline execution and verified business targets.'}
                    </p>
                  </div>
                </div>

                {/* Summary Body */}
                <div className="space-y-1.5">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                    Execution Overview
                  </span>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                    {nodes[expandedIndex].summary}
                  </p>
                </div>

                {/* Key First-Principles Takeaway */}
                {nodes[expandedIndex].takeaway && (
                  <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] space-y-1.5 shadow-2xs">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                      Operator Principle &amp; Key Insight
                    </span>
                    <p className="text-xs sm:text-sm text-[#555B66] italic leading-relaxed">
                      "{nodes[expandedIndex].takeaway}"
                    </p>
                  </div>
                )}

                {/* Direct Link to Detailed Page */}
                {nodes[expandedIndex].link && (
                  <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between">
                    <Link
                      href={nodes[expandedIndex].link}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline"
                    >
                      <span>Inspect Deep-Dive Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10.5px] font-mono text-[#737984]">
                      Role Case Study →
                    </span>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
