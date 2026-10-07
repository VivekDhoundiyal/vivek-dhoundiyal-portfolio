import React, { useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, CheckIcon } from '../Icons'
import { useScrollReveal } from '../../lib/useScrollReveal'

export default function NuvioCaseStudy({ siteData }) {
  // useScrollReveal()

  const nuvio = siteData?.nuvio || {}
  const hero = nuvio.hero || {}
  const problem = nuvio.problem || {}
  const hypothesis = nuvio.hypothesis || {}
  const workspace = nuvio.workspace || {}
  const mvp = nuvio.mvp || {}
  const uxStrategy = nuvio.uxStrategy || {}
  const coordinateChallenge = nuvio.coordinateChallenge || {}
  const fakeEditor = nuvio.fakeEditor || {}
  const singleSourceOfTruth = nuvio.singleSourceOfTruth || {}
  const privacy = nuvio.privacy || {}
  const building = nuvio.building || {}
  const learnings = nuvio.learnings || {}
  const northStar = nuvio.northStar || {}
  const cta = nuvio.cta || {}

  // Interactive UI States
  const [activeProblemTab, setActiveProblemTab] = useState('nuvio') // 'fragmented' | 'nuvio'
  const [activeHotspot, setActiveHotspot] = useState('canvas')
  const [activeMvpLayer, setActiveMvpLayer] = useState('core') // 'core' | 'extensions' | 'peripherals'
  const [hoveredFlow, setHoveredFlow] = useState('good') // 'bad' | 'good'
  const [activeTimelineStep, setActiveTimelineStep] = useState('05')

  return (
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318] selection:bg-blue-100 selection:text-blue-900">
      <Head>
        <title>{nuvio.seo?.title || 'NUVIO: Private PDF Editing, Reimagined — Product Case Study | Vivek Dhoundiyal'}</title>
        <meta
          name="description"
          content={nuvio.seo?.description || 'A deep dive into NUVIO: product thinking, UX strategy, canonical document modeling, and client-side privacy architecture for PDF editing.'}
        />
        {nuvio.seo?.canonical && <link rel="canonical" href={nuvio.seo.canonical} />}
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ==============================================================================
            SECTION 01: BREADCRUMBS & HERO
            ============================================================================== */}
        <section id="hero" className="space-y-10">
          {/* Breadcrumb Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#2563EB] transition-colors group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>Return to Selected Work &amp; Ventures</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                {hero.badge || 'BUILDING'} · {hero.statusText || 'Active Product Exploration'}
              </span>
            </div>
          </div>

          {/* Hero Typography & Statement */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Product Case Study · Client-Side Architecture
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111318] leading-[1.08]">
              {hero.headline || 'NUVIO'}
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#2563EB] leading-snug">
              {hero.subheadline || 'Reimagining PDF workflows around privacy, simplicity, and control.'}
            </p>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed max-w-3xl font-normal">
              {hero.secondaryText || 'An active product exploration focused on making PDF editing feel like a modern productivity experience — without requiring users to send sensitive documents to external servers.'}
            </p>
          </div>

          {/* HERO VISUAL: 3D Glass Laptop Workspace Canvas */}
          <div className="relative rounded-3xl p-4 sm:p-8 bg-gradient-to-b from-white to-slate-50 border-2 border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[560px] flex items-center justify-center">
              <Image
                src={hero.primaryIllustration || '/illustrations/nuvio-hero-illustration.svg'}
                alt="NUVIO Private PDF Workspace Interface"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Quick-Jump Section Navigation Strip */}
            <div className="mt-6 pt-6 border-t border-[#E5E7EB] flex items-center justify-between overflow-x-auto gap-3 text-xs font-mono text-[#555B66] no-scrollbar">
              <span className="font-bold text-[#111318] flex-shrink-0">EXPLORE BLUEPRINT:</span>
              <a href="#problem" className="hover:text-[#2563EB] whitespace-nowrap">01 Problem</a>
              <span>·</span>
              <a href="#hypothesis" className="hover:text-[#2563EB] whitespace-nowrap">02 Hypothesis</a>
              <span>·</span>
              <a href="#workspace" className="hover:text-[#2563EB] whitespace-nowrap">03 Workspace</a>
              <span>·</span>
              <a href="#mvp" className="hover:text-[#2563EB] whitespace-nowrap">04 MVP</a>
              <span>·</span>
              <a href="#coordinate" className="hover:text-[#2563EB] whitespace-nowrap">05 Coordinate Model</a>
              <span>·</span>
              <a href="#privacy" className="hover:text-[#2563EB] whitespace-nowrap">06 Privacy</a>
              <span>·</span>
              <a href="#north-star" className="hover:text-[#2563EB] whitespace-nowrap">07 North Star</a>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 02: THE PROBLEM — TRUST & FRAGMENTATION TAX
            ============================================================================== */}
        <section id="problem" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {problem.eyebrow || '01 · THE PROBLEM'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {problem.headline || "The problem isn't a lack of PDF tools."}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#DC2626]">
              {problem.statement || "It's the trust and fragmentation tax."}
            </p>
          </div>

          {/* Interactive Flow Switcher */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-[#737984] uppercase">Workflow Comparison</span>
                <div className="text-sm font-bold text-[#111318]">
                  {activeProblemTab === 'nuvio' ? 'The NUVIO Direct Loop (Local Sovereignty)' : 'Traditional Cloud Utility Tax (Context Fragmentation)'}
                </div>
              </div>

              {/* Tab Buttons */}
              <div className="flex items-center gap-2 p-1 bg-[#FAFAF8] border border-[#E5E7EB] rounded-full">
                <button
                  type="button"
                  onClick={() => setActiveProblemTab('nuvio')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeProblemTab === 'nuvio'
                      ? 'bg-[#2563EB] text-white shadow-2xs'
                      : 'text-[#555B66] hover:text-[#111318]'
                  }`}
                >
                  ✓ NUVIO Streamlined Loop
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProblemTab('fragmented')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeProblemTab === 'fragmented'
                      ? 'bg-[#DC2626] text-white shadow-2xs'
                      : 'text-[#555B66] hover:text-[#111318]'
                  }`}
                >
                  ✕ Traditional Cloud Tax
                </button>
              </div>
            </div>

            {/* Rendered Workflow Cards */}
            {activeProblemTab === 'nuvio' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(problem.nuvioWorkflow || []).map((step, idx) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3 relative group hover:border-emerald-400 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-700">{step.step}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-base font-bold text-[#111318]">{step.label}</div>
                      <p className="text-xs text-[#555B66] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-300 text-xs text-emerald-900 font-medium flex items-center justify-between">
                  <span>✓ 100% Client-side: Zero bytes uploaded to external servers. No temporary storage exposure.</span>
                  <span className="font-mono font-bold text-emerald-700">Instant Execution</span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {(problem.fragmentedWorkflow || []).map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2 relative group"
                    >
                      <span className="text-xs font-mono font-bold text-rose-600">{step.step}</span>
                      <div className="text-sm font-bold text-[#111318]">{step.label}</div>
                      <p className="text-xs text-[#555B66] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-rose-100/60 border border-rose-300 text-xs text-rose-900 font-medium flex items-center justify-between">
                  <span>⚠️ Unverified Privacy: File leaves device, queues on remote infrastructure, risking retention.</span>
                  <span className="font-mono font-bold text-rose-700">Repeated Context Drag</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 03: PRODUCT HYPOTHESIS — 4 INTERACTIVE CARDS
            ============================================================================== */}
        <section id="hypothesis" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {hypothesis.eyebrow || '02 · STRATEGIC DIRECTION'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {hypothesis.headline || 'The Product Hypothesis'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {hypothesis.subheadline || 'Four foundational design pillars transforming how users interact with PDFs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(hypothesis.cards || []).map((card) => (
              <div
                key={card.num}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/50 hover-card-elevate shadow-xs transition-all duration-300 space-y-5 group"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                    {card.num}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">Hypothesis Principle</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                    "{card.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-2 border-t border-slate-100">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 04: NUVIO WORKSPACE INTERACTION
            ============================================================================== */}
        <section id="workspace" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {workspace.eyebrow || '03 · USER INTERACTION'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {workspace.headline || 'One workspace. Every PDF task.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {workspace.copy || 'Editing, merging, converting and organizing in one understandable workspace.'}
            </p>
          </div>

          {/* Interactive Workspace Hotspot Explorer */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            {/* Hotspot Switcher Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(workspace.hotspots || []).map((h) => {
                const isActive = activeHotspot === h.id
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveHotspot(h.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isActive
                        ? 'border-[#2563EB] bg-blue-50/50 shadow-2xs ring-2 ring-[#2563EB]/15'
                        : 'border-[#E5E7EB] bg-[#FAFAF8] hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#111318]">{h.name}</span>
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#2563EB]' : 'bg-slate-300'}`} />
                    </div>
                    <span className="text-[11px] text-[#737984] block truncate">Inspect zone</span>
                  </button>
                )
              })}
            </div>

            {/* Interactive Mock Workspace Canvas Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-white space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 pl-2">nuvio-interactive-workspace.canvas</span>
                </div>
                <span className="text-emerald-400 font-semibold">Active Mode: WYSIWYG Inspection</span>
              </div>

              {/* Active Hotspot Spotlight Detail */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold">
                    Zone Detail: {(workspace.hotspots || []).find(h => h.id === activeHotspot)?.name}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Deterministic Sync</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {(workspace.hotspots || []).find(h => h.id === activeHotspot)?.desc}
                </p>
              </div>

              {/* Graphical Simulation of the Workspace Canvas */}
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Thumbnails</span>
                  <div className="h-14 rounded bg-slate-800/80 border border-blue-500/50 flex items-center justify-center text-[10px] text-blue-300">
                    Page 1 (Active)
                  </div>
                  <div className="h-10 rounded bg-slate-800/40 flex items-center justify-center text-[10px] text-slate-500">
                    Page 2
                  </div>
                </div>

                <div className="col-span-9 p-5 rounded-lg bg-white text-slate-900 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs font-bold text-blue-600">Document Canvas View</span>
                    <span className="text-[10px] font-mono text-slate-400">100% Zoom</span>
                  </div>
                  <div className="p-2.5 rounded border-2 border-blue-500 border-dashed bg-blue-50/50 text-xs font-medium text-slate-800">
                    "Service Level Agreement &amp; Security Addendum"
                    <span className="text-[9px] font-mono text-blue-600 block pt-1">
                      [Bounding Box: x: 42.5pt, y: 720.0pt, width: 340pt]
                    </span>
                  </div>
                  <div className="h-3 w-4/5 rounded bg-slate-200" />
                  <div className="h-3 w-3/5 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 05: MVP THINKING — RADIAL HIERARCHY
            ============================================================================== */}
        <section id="mvp" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {mvp.eyebrow || '04 · PRODUCT SCOPING'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {mvp.headline || 'Start with the hardest, highest-value workflow.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {mvp.subheadline || 'A deliberate radial scoping model that builds core defensibility first.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Radial Layer Diagram */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col items-center justify-center relative min-h-[380px]">
              {/* Outer Orbit (Peripherals) */}
              <div
                onClick={() => setActiveMvpLayer('peripherals')}
                className={`w-72 sm:w-80 h-72 sm:h-80 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeMvpLayer === 'peripherals'
                    ? 'border-purple-500 bg-purple-50/30 ring-4 ring-purple-100'
                    : 'border-slate-200 hover:border-purple-300'
                }`}
              >
                {/* Mid Orbit (Extensions) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveMvpLayer('extensions')
                  }}
                  className={`w-52 sm:w-56 h-52 sm:h-56 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeMvpLayer === 'extensions'
                      ? 'border-blue-500 bg-blue-50/40 ring-4 ring-blue-100'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {/* Core Center (Visual Editor) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveMvpLayer('core')
                    }}
                    className={`w-32 sm:w-36 h-32 sm:h-36 rounded-full flex flex-col items-center justify-center text-center cursor-pointer shadow-md transition-all duration-300 ${
                      activeMvpLayer === 'core'
                        ? 'bg-[#2563EB] text-white ring-4 ring-blue-200 scale-105'
                        : 'bg-slate-900 text-white hover:bg-[#2563EB]'
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold">CORE</span>
                    <span className="text-xs font-bold px-2 pt-0.5">Visual PDF Editor</span>
                  </div>
                </div>
              </div>

              {/* Diagram Orbit Selector Indicator */}
              <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#555B66]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <span>Click any orbit tier to inspect product scoping rationale</span>
              </div>
            </div>

            {/* Right: Rationale Detail Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-4 shadow-xs">
                {activeMvpLayer === 'core' && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      TIER 1 · CORE ENGINE (CURRENT FOCUS)
                    </span>
                    <h3 className="text-2xl font-bold text-[#111318]">Visual PDF Editor</h3>
                    <p className="text-sm text-[#555B66] leading-relaxed">
                      {mvp.layers?.core?.desc || 'The hardest, most technically differentiated problem: direct in-place visual manipulation preserving exact document coordinate output.'}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#0F172A] border-t border-slate-200">
                      💡 PM Takeaway: Simple utilities (merge/split) have zero moat. Conquering the in-place editor solves the foundational hard problem.
                    </div>
                  </div>
                )}

                {activeMvpLayer === 'extensions' && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300">
                      TIER 2 · SURROUNDING EXTENSIONS (PHASE 2)
                    </span>
                    <h3 className="text-2xl font-bold text-[#111318]">Multi-Tool Utilities</h3>
                    <p className="text-sm text-[#555B66] leading-relaxed">
                      Once the core document state model is stable, utilities become straightforward transformations on the canonical state.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {(mvp.layers?.extensions || []).map((ext) => (
                        <span key={ext.name} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-slate-200 text-slate-700">
                          {ext.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeMvpLayer === 'peripherals' && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-300">
                      TIER 3 · PERIPHERALS &amp; ONBOARDING (PHASE 3)
                    </span>
                    <h3 className="text-2xl font-bold text-[#111318]">Guides &amp; Workflow Templates</h3>
                    <p className="text-sm text-[#555B66] leading-relaxed">
                      Pre-formatted contract templates, redlining playbooks, and educational tools designed to accelerate day-one user utility.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 06: UX STRATEGY — MENTAL MODEL TRANSITION
            ============================================================================== */}
        <section id="ux-strategy" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {uxStrategy.eyebrow || '05 · UX STRATEGY'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {uxStrategy.headline || 'Changing the mental model of PDF editing.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {uxStrategy.subheadline || 'Transitioning users from single-use utility fatigue into continuous productivity.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Utility */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] space-y-6 shadow-xs">
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  TRADITIONAL UTILITY MINDSET
                </span>
                <h3 className="text-xl font-bold text-[#111318]">Single-Use Tool Hopping</h3>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                {['Upload', 'Choose', 'Process', 'Download'].map((s, idx) => (
                  <Fragment key={s}>
                    <div className="p-2 rounded-lg bg-rose-50 text-rose-700 font-semibold border border-rose-100">
                      {s}
                    </div>
                    {idx < 3 && <span className="text-slate-300 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                User treats the website as an ephemeral conversion pipeline. Constant fear of privacy breaches and lost changes.
              </p>
            </div>

            {/* Modern Productivity App */}
            <div className="p-8 rounded-3xl bg-white border-2 border-[#2563EB] space-y-6 shadow-xs">
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  MODERN PRODUCTIVITY MINDSET
                </span>
                <h3 className="text-xl font-bold text-[#111318]">Continuous In-Place Workspace</h3>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                {['Open', 'Edit', 'Validate', 'Export'].map((s, idx) => (
                  <Fragment key={s}>
                    <div className="p-2 rounded-lg bg-blue-50 text-[#2563EB] font-bold border border-blue-200">
                      {s}
                    </div>
                    {idx < 3 && <span className="text-blue-400 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                User treats NUVIO as a dedicated document command center. Instant local feedback loops build unwavering confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 07: THE HARD PART — PDF COORDINATE SYSTEM
            ============================================================================== */}
        <section id="coordinate" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {coordinateChallenge.eyebrow || '06 · THE CORE SYSTEM PROBLEM'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {coordinateChallenge.headline || "Editing a PDF isn't the same as editing a document."}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#2563EB]">
              {coordinateChallenge.subheadline || 'PDF = positioned geometric objects, not reflowable text blocks.'}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-4 sm:p-8 shadow-xs space-y-6">
            <div className="w-full flex items-center justify-center">
              <Image
                src={coordinateChallenge.diagram || '/illustrations/nuvio-coordinate-diagram.svg'}
                alt="PDF Coordinate Mapping System vs Fluid Document Flow"
                width={880}
                height={440}
                className="w-full h-auto max-h-[440px] object-contain rounded-xl"
              />
            </div>

            <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] text-xs sm:text-sm text-[#555B66] leading-relaxed">
              <strong className="text-[#111318]">Why this is technically formidable: </strong>
              {coordinateChallenge.explanation || 'Word processors rely on fluid reflow where adding words shifts lines downward automatically. In contrast, PDFs place every character glyph at exact (x, y) Cartesian coordinates on an immutable canvas. The challenge is making edits visually intuitive while preserving the exact document result.'}
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 08: THE "FAKE EDITOR" PROBLEM
            ============================================================================== */}
        <section id="fake-editor" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {fakeEditor.eyebrow || '07 · SYSTEM INTEGRITY'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {fakeEditor.headline || "An editor that looks right isn't enough."}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {fakeEditor.subheadline || 'Why surface-level overlay tricks fail upon final document export.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Bad Path */}
            <div
              onMouseEnter={() => setHoveredFlow('bad')}
              className={`p-8 rounded-3xl border transition-all duration-300 space-y-5 ${
                hoveredFlow === 'bad'
                  ? 'bg-rose-50/50 border-rose-300 shadow-md'
                  : 'bg-white border-[#E5E7EB]'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <span className="text-xs font-mono font-bold text-rose-700 uppercase">FLAWED PATH</span>
                <span className="text-xs font-mono text-rose-500">Surface Overlay</span>
              </div>
              <h3 className="text-xl font-bold text-rose-900">{fakeEditor.badPath?.title}</h3>
              <div className="space-y-2">
                {(fakeEditor.badPath?.flow || []).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-rose-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-rose-700 leading-relaxed pt-2 border-t border-rose-200">
                {fakeEditor.badPath?.verdict}
              </p>
            </div>

            {/* The Good Path */}
            <div
              onMouseEnter={() => setHoveredFlow('good')}
              className={`p-8 rounded-3xl border transition-all duration-300 space-y-5 ${
                hoveredFlow === 'good'
                  ? 'bg-emerald-50/50 border-emerald-300 shadow-md ring-2 ring-emerald-200'
                  : 'bg-white border-[#E5E7EB]'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">CANONICAL PATH</span>
                <span className="text-xs font-mono text-emerald-600 font-semibold">NUVIO Solution</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900">{fakeEditor.goodPath?.title}</h3>
              <div className="space-y-2">
                {(fakeEditor.goodPath?.flow || []).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed pt-2 border-t border-emerald-200">
                {fakeEditor.goodPath?.verdict}
              </p>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 09: SINGLE SOURCE OF TRUTH
            ============================================================================== */}
        <section id="source-of-truth" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {singleSourceOfTruth.eyebrow || '08 · DATA ARCHITECTURE'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {singleSourceOfTruth.headline || 'One document. One source of truth.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {singleSourceOfTruth.subheadline || 'What users see and what they export must originate from the exact same document state.'}
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8">
            {/* Center State Node */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center space-y-1 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-200">CENTRAL TRUTH</span>
              <div className="text-base font-bold tracking-tight">{singleSourceOfTruth.centralState}</div>
            </div>

            {/* Connecting Synchronization Lines */}
            <div className="flex items-center justify-center gap-8 text-xs font-mono text-[#2563EB]">
              <span>↓ live updates</span>
              <span>↓ real-time sync</span>
              <span>↓ deterministic write</span>
            </div>

            {/* 3 Synchronized Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(singleSourceOfTruth.branches || []).map((b) => (
                <div key={b.name} className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] text-center space-y-2">
                  <span className="text-xs font-mono font-bold text-[#2563EB]">{b.name}</span>
                  <p className="text-xs text-[#555B66]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 10: PRIVACY BY ARCHITECTURE
            ============================================================================== */}
        <section id="privacy" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {privacy.eyebrow || '09 · PRIVACY BY ARCHITECTURE'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {privacy.headline || "Privacy isn't a checkbox."}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-emerald-700">
              {privacy.subheadline || "It's part of the architecture."}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-4 sm:p-8 shadow-xs space-y-8">
            {/* The Privacy Architecture Diagram SVG */}
            <div className="w-full flex items-center justify-center">
              <Image
                src={privacy.diagram || '/illustrations/nuvio-privacy-diagram.svg'}
                alt="NUVIO Privacy Architecture Comparison Diagram"
                width={920}
                height={540}
                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
              />
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {(privacy.principles || []).map((p) => (
                <div key={p.title} className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-2">
                  <div className="text-sm font-bold text-[#111318]">{p.title}</div>
                  <p className="text-xs text-[#555B66] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#737984]">
              ℹ️ {privacy.disclaimer}
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 11: BUILDING NUVIO — IN PUBLIC
            ============================================================================== */}
        <section id="building" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {building.eyebrow || '10 · BUILDING IN PUBLIC'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {building.headline || 'Building NUVIO'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-xl">
              {building.subheadline || 'An active product exploration moving systematically from hypothesis to usable MVP.'}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            {/* 8-Stage Product Loop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {(building.stages || []).map((s) => {
                const isCurrent = s.status === 'current'
                const isComplete = s.status === 'complete'
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveTimelineStep(s.step)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      isCurrent
                        ? 'border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-200'
                        : isComplete
                        ? 'border-emerald-200 bg-emerald-50/40 text-emerald-900'
                        : 'border-slate-200 bg-[#FAFAF8] text-slate-500'
                    }`}
                  >
                    <span className="text-[10px] font-mono block font-bold">
                      {isCurrent ? '● ' : isComplete ? '✓ ' : ''}{s.step}
                    </span>
                    <span className="text-xs font-bold leading-tight block pt-1">{s.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Current Callout Box */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-blue-950 font-medium flex items-center justify-between">
              <span>{building.statusCallout}</span>
              <span className="font-mono font-bold text-[#2563EB] px-2.5 py-1 bg-white rounded-full border border-blue-200">
                ACTIVE EXPLORATION
              </span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 12: PRODUCT LEARNINGS
            ============================================================================== */}
        <section id="learnings" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {learnings.eyebrow || '11 · PRODUCT RETROSPECTIVE'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {learnings.headline || 'What this project is teaching me'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(learnings.cards || []).map((card) => (
              <div
                key={card.num}
                className="p-6 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#2563EB]">{card.num}</span>
                <h3 className="text-sm font-bold text-[#111318] leading-snug">{card.title}</h3>
                <p className="text-xs text-[#555B66] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 13: NORTH STAR METRIC
            ============================================================================== */}
        <section id="north-star" className="space-y-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111318] via-slate-900 to-blue-950 text-white shadow-md space-y-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-blue-300 border border-white/20">
                {northStar.eyebrow || '12 · NORTH STAR METRIC'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                {northStar.headline || 'The metric that matters'}
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-xl sm:text-3xl font-extrabold tracking-tight text-blue-400">
                {northStar.metric || 'SUCCESSFUL DOCUMENT COMPLETION'}
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-slate-300">
                {(northStar.flow || []).map((step, idx) => (
                  <Fragment key={step}>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      {step}
                    </span>
                    {idx < (northStar.flow?.length - 1) && <span className="text-blue-400">→</span>}
                  </Fragment>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
              "{northStar.statement || 'The user only receives genuine value when the final document is successfully completed and persisted without corruption.'}"
            </p>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 14: FINAL CALL TO ACTION & STATUS
            ============================================================================== */}
        <section id="cta" className="text-center space-y-6 py-12 border-t border-[#E5E7EB]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {cta.badge || 'BUILDING · Product in Progress'}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318]">
            {cta.heading || 'Complex technology. Simple experience.'}
          </h2>

          <p className="text-sm sm:text-base text-[#555B66] max-w-lg mx-auto leading-relaxed">
            {cta.subheading || 'NUVIO is currently being designed and built as an independent product exploration.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <span className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300 cursor-default">
              Currently in Development
            </span>
            <Link
              href="/work/careeros"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#111318] text-white hover:bg-[#2563EB] transition-colors"
            >
              Explore CareerOS Flagship →
            </Link>
            <Link
              href="/#work"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#111318] border border-[#E5E7EB] hover:bg-slate-50 transition-colors"
            >
              ← Back to Selected Work
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
