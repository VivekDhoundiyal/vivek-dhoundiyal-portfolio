import React, { useState } from 'react'
import { ArrowUpRight } from './Icons'

export default function CurrentlyBuilding({ items = [] }) {
  // Use verified project from site data, defaulting to Hiresway
  const primaryBuild = items.find(i => i.id === 'hiresway' || i.id === 'careeros') || {
    id: 'hiresway',
    title: 'Hiresway',
    status: 'ACTIVE',
    category: 'Independent Software Product',
    tagline: 'Architecting a unified platform for career progression — centralizing opportunity discovery, intelligent positioning artifacts, application pipeline tracking, and interview preparation workflows.',
    description: 'An AI-powered career platform I am building to streamline opportunity discovery, eliminate pipeline fragmentation, and accelerate professional growth.',
    currentObjective: 'Engineering core opportunity indexing and state-machine pipeline tracking modules locally.',
    whatIsBeingBuilt: 'Full-stack interface with local state management, structured candidate profile generators, and opportunity ranking algorithms.',
    technology: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Local Storage APIs'],
    progress: 'Opportunity Discovery & Pipeline Tracking modules engineered in local build.',
    milestone: 'Active local architecture & engineering (zero fabricated metrics)'
  }

  const [activeModuleIndex, setActiveModuleIndex] = useState(0)

  // Real architectural modules under active development for Hiresway
  const modules = [
    {
      id: 'opp-discovery',
      name: 'Opportunity Discovery Engine',
      status: 'ACTIVE',
      focus: 'Data Schemas & Indexing',
      desc: 'Normalizing multi-platform job postings into structured opportunity objects with deterministic intent tags and compensation markers.',
      tech: ['Next.js', 'Local Schema', 'JSON Parser']
    },
    {
      id: 'profile-gen',
      name: 'Profile Positioning Generator',
      status: 'ACTIVE',
      focus: 'Contextual Document Assembly',
      desc: 'Generating role-specific commercial artifacts and tailored positioning briefs dynamically mapping applicant experience to employer requirements.',
      tech: ['React 18', 'Tailwind', 'Markdown AST']
    },
    {
      id: 'pipeline-sm',
      name: 'Application State Machine',
      status: 'ACTIVE',
      focus: 'Pipeline Lifecycle Tracking',
      desc: 'Deterministic status transitions (Outreach → Discovery → Final Round → Offer) with SLA benchmarks to prevent stagnant conversations.',
      tech: ['State Machines', 'Local Storage APIs']
    }
  ]

  return (
    <section id="building" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>07 · ACTIVE SYSTEM BUILDS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Currently Building
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              A transparent engineering lab answering what I am actively building right now. Grounded in actual local development with zero fabricated metrics or vanity user counts.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LOCAL BUILD · IN ACTIVE PROGRESS</span>
            </span>
          </div>
        </div>

        {/* Dynamic Build Architecture Layout: Featured Main Build + Sub-Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PRIMARY BUILD CARD: CareerOS (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover-card-elevate shadow-xs space-y-7 reveal-on-scroll">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {primaryBuild.status || 'ACTIVE'}
                    </span>
                    <span className="text-xs font-mono text-[#737984]">
                      {primaryBuild.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#737984]">
                    [ SYS-01 : HIRESWAY ]
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111318]">
                    {primaryBuild.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#2563EB] font-medium leading-snug">
                    {primaryBuild.focus || primaryBuild.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal">
                  {primaryBuild.description}
                </p>
              </div>

              {/* Architectural Workflow Pipeline Diagram */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  System Architecture Flow
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111318] shadow-xs">
                    <span className="text-[#2563EB] font-bold block mb-0.5">01 · Signals</span>
                    <span>Ingestion & ICP</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111318] shadow-xs">
                    <span className="text-[#2563EB] font-bold block mb-0.5">02 · Synthesis</span>
                    <span>Artifact Generation</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111318] shadow-xs">
                    <span className="text-[#2563EB] font-bold block mb-0.5">03 · Pipeline</span>
                    <span>State Machine SLA</span>
                  </div>
                </div>
              </div>

              {/* What Is Being Built & Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                    Current Engineering Objective
                  </span>
                  <p className="text-xs text-[#111318] leading-relaxed">
                    {primaryBuild.currentObjective || primaryBuild.milestone}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#111318] font-bold block">
                    Engineering Progress
                  </span>
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    {primaryBuild.progress || 'Core Opportunity Discovery & Pipeline modules implemented.'}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              {primaryBuild.technology && (
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                    Underlying Engineering Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {primaryBuild.technology.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white border border-[#E5E7EB] text-[#111318] shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* SECONDARY ARCHITECTURAL MODULES (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#737984] uppercase tracking-wider font-semibold px-1">
              <span>Active Modular Architecture</span>
              <span>{modules.length} Core Modules</span>
            </div>

            {modules.map((mod, idx) => (
              <div
                key={mod.id}
                onClick={() => setActiveModuleIndex(idx)}
                className={`p-6 rounded-2xl bg-white border transition-all duration-200 cursor-pointer space-y-3 reveal-on-scroll delay-${(idx + 1) * 100} ${
                  activeModuleIndex === idx
                    ? 'border-[#2563EB] shadow-card ring-1 ring-[#2563EB]/20'
                    : 'border-[#E5E7EB] hover-card-elevate shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-semibold uppercase text-emerald-700">
                      {mod.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#737984]">
                    {mod.focus}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-[#111318]">
                  {mod.name}
                </h4>

                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                  {mod.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mod.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
