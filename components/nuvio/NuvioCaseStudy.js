import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NuvioCaseStudy({ siteData }) {
  const nuvio = siteData?.nuvio || {}
  const hero = nuvio.hero || {}
  const problem = nuvio.problem || {}
  const opportunity = nuvio.opportunity || {}
  const capabilities = nuvio.capabilities || {}
  const privacy = nuvio.privacy || {}
  const productThinking = nuvio.productThinking || {}
  const prioritization = nuvio.prioritization || {}
  const hardProblem = nuvio.hardProblem || {}
  const documentModel = nuvio.documentModel || {}
  const productObjects = nuvio.productObjects || {}
  const challenges = nuvio.challenges || {}
  const loadingIncident = nuvio.loadingIncident || {}
  const shippingQualityLoop = nuvio.shippingQualityLoop || {}
  const outcome = nuvio.outcome || {}
  const roadmap = nuvio.roadmap || {}
  const learnings = nuvio.learnings || {}
  const cta = nuvio.cta || {}

  // Interactive UI States
  const [activeProblemTab, setActiveProblemTab] = useState('nuvio') // 'fragmented' | 'nuvio'
  const [activeCapability, setActiveCapability] = useState('edit')
  const [activeThinkingStage, setActiveThinkingStage] = useState('problem')
  const [activePriorityTier, setActivePriorityTier] = useState('P0')
  const [activePrimitive, setActivePrimitive] = useState('TEXT')
  const [activeIncidentStep, setActiveIncidentStep] = useState(0)
  const [activeQualityStep, setActiveQualityStep] = useState(0)
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false)
  const [activeRoadmapHorizon, setActiveRoadmapHorizon] = useState('NOW')

  return (
    <div className="py-10 sm:py-16 min-h-screen bg-[#FAFAF8] text-[#111318] selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ==============================================================================
            SECTION 01: CASE STUDY HERO & VISUAL ANIMATION
            ============================================================================== */}
        <section id="hero" className="space-y-8 sm:space-y-12">
          {/* Top Breadcrumb Navigation & Live Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#555B66] hover:text-[#2563EB] transition-colors group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <span>Return to Selected Work &amp; Ventures</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {hero.badge || 'LIVE MVP'} · {hero.statusText || 'Actively Evolving'}
              </span>
            </div>
          </div>

          {/* Hero Header + Layered Visual Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Typography & Strategic Framing */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {(hero.labels || ['Commercial Strategy & Execution', 'UX Strategy', '0→1 Architecture', 'Document Productivity']).map((label) => (
                  <span
                    key={label}
                    className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-[#2563EB] border border-blue-200"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#111318] leading-[1.05]">
                  {hero.headline || 'NUVIO'}
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2563EB] leading-snug">
                  {hero.subheadline || 'Reimagining PDF workflows around privacy, simplicity and control.'}
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal max-w-xl">
                {hero.supportingText || "A privacy-first PDF workspace designed to make everyday document work simpler while keeping files on the user's device."}
              </p>

              {/* High-Level Value Signal Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] block">PROCESSING</span>
                  <span className="text-xs font-bold text-[#111318]">100% Client-Side</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] block">INTEGRATION</span>
                  <span className="text-xs font-bold text-[#111318]">7 Unified Tools</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] block">DATA EGRESS</span>
                  <span className="text-xs font-bold text-emerald-700">Zero Server Upload</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Motion Graphic Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white via-slate-50/70 to-blue-50/30 border border-[#E5E7EB] shadow-sm overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
                {/* Subtle Radial Atmosphere Behind the Stage */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

                {/* Primary Visual: Laptop Workspace */}
                <div className="relative z-10 w-full max-w-[480px] transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/images/nuvio/extracted/nuvio-laptop-workspace.png"
                    alt="NUVIO Private Document Workspace on Laptop"
                    width={610}
                    height={435}
                    priority
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Floating Element 1: Glowing Privacy Shield (Top Right) */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 w-20 sm:w-28 animate-pulse-soft">
                  <Image
                    src="/images/nuvio/extracted/nuvio-privacy-shield.png"
                    alt="NUVIO 100% Private Shield"
                    width={395}
                    height={420}
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Floating Element 2: PDF Document Badge (Top Left) */}
                <div className="absolute top-6 sm:top-8 left-4 sm:left-6 z-20 w-14 sm:w-20 animate-float-slow">
                  <Image
                    src="/images/nuvio/extracted/nuvio-pdf-badge.png"
                    alt="NUVIO PDF Badge"
                    width={140}
                    height={140}
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>

                {/* Floating Element 3: Formatting Toolbar (Bottom Left) */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-28 sm:w-40 animate-float-medium">
                  <Image
                    src="/images/nuvio/extracted/nuvio-format-toolbar.png"
                    alt="NUVIO Formatting Controls"
                    width={230}
                    height={80}
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Floating Element 4: Stylus Pen (Middle Right) */}
                <div className="absolute bottom-12 sm:bottom-16 right-3 sm:right-5 z-20 w-16 sm:w-24 animate-float-slow rotate-6">
                  <Image
                    src="/images/nuvio/extracted/nuvio-stylus-pen.png"
                    alt="NUVIO Precision Stylus"
                    width={180}
                    height={120}
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>

                {/* Floating Element 5: Sign Badge (Bottom Center-Right) */}
                <div className="absolute bottom-3 right-20 sm:right-28 z-20 w-20 sm:w-28 animate-float-medium">
                  <Image
                    src="/images/nuvio/extracted/nuvio-sign-badge.png"
                    alt="NUVIO Signature Badge"
                    width={230}
                    height={150}
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Quick-Navigation Strip */}
          <div className="pt-2">
            <div className="p-3 sm:p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs flex items-center justify-between overflow-x-auto gap-3 text-xs font-mono text-[#555B66] no-scrollbar">
              <span className="font-bold text-[#111318] flex-shrink-0">CASE STUDY CHAPTERS:</span>
              <a href="#problem" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">01 Problem</a>
              <span className="text-slate-300">·</span>
              <a href="#opportunity" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">02 Opportunity</a>
              <span className="text-slate-300">·</span>
              <a href="#capabilities" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">03 Capabilities</a>
              <span className="text-slate-300">·</span>
              <a href="#privacy" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">04 Privacy by Design</a>
              <span className="text-slate-300">·</span>
              <a href="#pm-thinking" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">05 Product Thinking</a>
              <span className="text-slate-300">·</span>
              <a href="#prioritization" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">06 Prioritization</a>
              <span className="text-slate-300">·</span>
              <a href="#hard-problem" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">07 Hard Problem</a>
              <span className="text-slate-300">·</span>
              <a href="#document-model" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">08 Document Model</a>
              <span className="text-slate-300">·</span>
              <a href="#incident" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">09 Loading Incident</a>
              <span className="text-slate-300">·</span>
              <a href="#quality-loop" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">10 Quality Loop</a>
              <span className="text-slate-300">·</span>
              <a href="#roadmap" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">11 Roadmap</a>
              <span className="text-slate-300">·</span>
              <a href="#learnings" className="hover:text-[#2563EB] whitespace-nowrap px-2 py-1 rounded-lg hover:bg-slate-50 transition-colors">12 Product Learnings</a>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 02: THE PROBLEM
            ============================================================================== */}
        <section id="problem" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {problem.eyebrow || '01 · THE PROBLEM'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {problem.headline || "The PDF problem isn't PDFs."}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#DC2626]">
              {problem.subheadline || "It's fragmented workflows, complexity and trust."}
            </p>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {problem.supporting || 'Working with documents today forces users across dozens of disconnected single-purpose web utilities.'}
            </p>
          </div>

          {/* Interactive Flow Switcher: Traditional Utility Tax vs NUVIO Streamlined Loop */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-[#737984] uppercase">Workflow Comparison</span>
                <div className="text-sm font-bold text-[#111318]">
                  {activeProblemTab === 'nuvio' ? 'The NUVIO Direct Loop (Client Sovereignty)' : 'Traditional Web Utility Hopping (Friction & Exposure)'}
                </div>
              </div>

              {/* Tab Selector Buttons */}
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
                  ✓ NUVIO Direct Loop
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
                  ✕ Fragmented Tool Hopping
                </button>
              </div>
            </div>

            {/* Visual Workflow Steps Render */}
            {activeProblemTab === 'nuvio' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: '01', label: 'Open In-Memory', desc: 'Instant zero-upload ingestion straight into local browser sandbox.' },
                    { step: '02', label: 'Direct Edit & Sign', desc: 'In-place text adjustments, stamps, and signatures on one canvas.' },
                    { step: '03', label: 'Validate Preview', desc: 'Deterministic visual feedback matching canonical document structure.' },
                    { step: '04', label: 'Local Export', desc: 'Clean vector output generated locally without cloud latency or risk.' }
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2 relative group hover:border-emerald-400 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-700">{s.step}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-base font-bold text-[#111318]">{s.label}</div>
                      <p className="text-xs text-[#555B66] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-emerald-100/60 border border-emerald-300 text-xs text-emerald-950 font-medium flex items-center justify-between">
                  <span>✓ 100% Client-Side: Zero bytes uploaded to external servers. No temporary storage retention.</span>
                  <span className="font-mono font-bold text-emerald-700">Continuous Workspace</span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { step: '01', label: 'Search Online', desc: 'Find single-purpose conversion site' },
                    { step: '02', label: 'Upload File', desc: 'Send confidential PDF to remote server' },
                    { step: '03', label: 'Wait Processing', desc: 'Server queue latency and retention risk' },
                    { step: '04', label: 'Download File', desc: 'Save locally and seek next utility' },
                    { step: '05', label: 'Repeat Cycle', desc: 'Re-upload to separate tool to sign or compress' }
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2 relative group"
                    >
                      <span className="text-xs font-mono font-bold text-rose-600">{s.step}</span>
                      <div className="text-sm font-bold text-[#111318]">{s.label}</div>
                      <p className="text-xs text-[#555B66] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-rose-100/60 border border-rose-300 text-xs text-rose-950 font-medium flex items-center justify-between">
                  <span>⚠️ Unverified Privacy: File leaves device, queues on remote infrastructure, risking retention.</span>
                  <span className="font-mono font-bold text-rose-700">Context Friction</span>
                </div>
              </div>
            )}
          </div>

          {/* 3 Visual Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(problem.cards || [
              { num: '01', title: 'FRAGMENTED', desc: 'Different tools for different PDF tasks. Converting, signing, and editing live in disconnected silos.' },
              { num: '02', title: 'COMPLEX', desc: 'Upload → process → download → repeat. Each minor adjustment demands a full download cycle.' },
              { num: '03', title: 'TRUST', desc: "Sensitive documents often leave the user's device, creating continuous data anxiety." }
            ]).map((card) => (
              <div
                key={card.num}
                className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-3 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                    {card.num}
                  </span>
                  <span className="text-[11px] font-mono text-[#737984]">Problem Vector</span>
                </div>
                <h3 className="text-lg font-bold text-[#111318]">{card.title}</h3>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 03: THE PRODUCT OPPORTUNITY
            ============================================================================== */}
        <section id="opportunity" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {opportunity.eyebrow || '02 · THE PRODUCT OPPORTUNITY'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {opportunity.headline || 'What if working with PDFs felt like using a modern productivity app?'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {opportunity.supporting || 'Moving from disjointed utility hopping to a fluid, continuous editing lifecycle.'}
            </p>
          </div>

          {/* Visual Horizontal 4-Step Workflow */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {(opportunity.steps || [
                { step: '01', name: 'OPEN', desc: 'Instant local ingestion straight into memory without upload wait.' },
                { step: '02', name: 'EDIT', desc: 'In-place typographical edits, signatures, and markups without tool hopping.' },
                { step: '03', name: 'VALIDATE', desc: 'Real-time preview synchronized deterministically with the document model.' },
                { step: '04', name: 'EXPORT', desc: 'Clean, high-fidelity vector output generated locally without server latency.' }
              ]).map((item, idx) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {idx < 3 ? '→' : '✓'}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#111318]">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Supporting Micro-Visuals Strip */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-blue-900">
              <span className="font-semibold">💡 UX Transformation:</span>
              <span className="text-[#555B66]">Single Session · Zero Server Latency · 100% In-Place Feedback</span>
              <span className="font-bold text-[#2563EB]">Deterministic Output</span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 04: WHAT NUVIO DOES (CAPABILITY SHOWCASE)
            ============================================================================== */}
        <section id="capabilities" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {capabilities.eyebrow || '03 · WHAT NUVIO DOES'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {capabilities.headline || 'One unified workspace. Seven document capabilities.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {capabilities.supporting || 'Consolidating essential document operations into one intuitive interface.'}
            </p>
          </div>

          {/* Central Radial Capabilities Podium Visual Banner */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="max-w-md space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                CAPABILITY RADIAL ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-tight">
                Consolidated Operations Around a Unified Canvas
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Rather than treating editing, merging, and compression as isolated destinations, all operations anchor to the single underlying document representation.
              </p>
            </div>
            <div className="w-full max-w-[420px] flex items-center justify-center">
              <Image
                src="/images/nuvio/extracted/nuvio-capabilities-podium.png"
                alt="NUVIO Capability Podium with Edit, Merge, Convert, Compress, Annotate"
                width={480}
                height={425}
                loading="eager"
                className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.03] transition-transform duration-300"
              />
            </div>
          </div>

          {/* 7 Floating Capability Cards with Extracted 3D Graphics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(capabilities.items || [
              { id: 'edit', title: 'EDIT', desc: 'Change content directly inside the document.', img: '/images/nuvio/extracted/nuvio-edit-canvas.png' },
              { id: 'merge', title: 'MERGE', desc: 'Bring multiple PDFs together.', img: '/images/nuvio/extracted/nuvio-merge-flow.png' },
              { id: 'convert', title: 'CONVERT', desc: 'Move documents into editable formats.', img: '/images/nuvio/extracted/nuvio-convert-flow.png' },
              { id: 'compress', title: 'COMPRESS', desc: 'Reduce file size without another tool.', img: '/images/nuvio/extracted/nuvio-compress-flow.png' },
              { id: 'annotate', title: 'ANNOTATE', desc: 'Add highlights, marks, and notes.', img: '/images/nuvio/extracted/nuvio-stylus-pen.png' },
              { id: 'sign', title: 'SIGN', desc: 'Place verifiable signatures directly.', img: '/images/nuvio/extracted/nuvio-sign-badge.png' },
              { id: 'organize', title: 'ORGANIZE', desc: 'Reorder, rotate, and extract pages.', img: '/images/nuvio/extracted/nuvio-organize-flow.png' }
            ]).map((cap) => {
              const isSelected = activeCapability === cap.id
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveCapability(cap.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-blue-50/50 border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-400 hover-card-elevate shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-white px-2.5 py-1 rounded-full border border-blue-200">
                        {cap.title}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#2563EB]' : 'bg-slate-300'}`} />
                    </div>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">{cap.desc}</p>
                  </div>

                  <div className="pt-2 h-28 sm:h-32 flex items-center justify-center overflow-hidden">
                    <Image
                      src={cap.img}
                      alt={`NUVIO ${cap.title} capability graphic`}
                      width={240}
                      height={140}
                      loading="eager"
                      className="max-h-full w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 05: PRIVACY BY DESIGN (FEATURE SECTION WITH ARCHITECTURE VISUAL)
            ============================================================================== */}
        <section id="privacy" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {privacy.eyebrow || '04 · PRIVACY BY DESIGN'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {privacy.headline || "Privacy isn't a setting. It's part of the product."}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-emerald-700">
              {privacy.subheadline || 'NUVIO is designed around client-side document processing, reducing the need to send sensitive files to a server.'}
            </p>
          </div>

          {/* Visual Architecture Comparison Table: Traditional vs NUVIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Cloud Tax */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] space-y-6 shadow-xs">
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  TRADITIONAL CLOUD PROCESSING
                </span>
                <h3 className="text-xl font-bold text-[#111318]">Remote Server Queue</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['PDF', 'Upload', 'External Server', 'Process', 'Download'].map((s, idx) => (
                  <Fragment key={s}>
                    <span className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-800 font-semibold border border-rose-100">
                      {s}
                    </span>
                    {idx < 4 && <span className="text-rose-400 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Sensitive documents leave the local device, travel over public networks, queue on cloud infrastructure, and risk unintended retention or server inspection.
              </p>
            </div>

            {/* NUVIO Local Sandbox */}
            <div className="p-8 rounded-3xl bg-white border-2 border-emerald-500 space-y-6 shadow-xs relative overflow-hidden">
              <div className="space-y-2 pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
                  NUVIO CLIENT-SIDE ARCHITECTURE
                </span>
                <h3 className="text-xl font-bold text-[#111318]">In-Memory Device Sandbox</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['PDF', 'Browser', 'Process locally', 'Export'].map((s, idx) => (
                  <Fragment key={s}>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-300">
                      {s}
                    </span>
                    {idx < 3 && <span className="text-emerald-500 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Documents stay strictly inside the local device sandbox. Ingestion, glyph rendering, manipulation, and vector export execute entirely in local memory.
              </p>
            </div>
          </div>

          {/* Prominent Privacy Architecture Diagram Feature */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                  SYSTEM ARCHITECTURE DIAGRAM
                </span>
                <div className="text-sm font-bold text-[#111318]">
                  Dual-Path Architectural Model: Traditional Server Upload vs. NUVIO Local Execution
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsDiagramModalOpen(!isDiagramModalOpen)}
                className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-100 text-[#111318] hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                {isDiagramModalOpen ? 'Close Inspection' : '🔍 Inspect High-Res Diagram'}
              </button>
            </div>

            {/* Embedded Diagram Graphic */}
            <div className="w-full flex items-center justify-center p-2 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <Image
                src={privacy.diagram || '/images/nuvio/nuvio-privacy-diagram.png'}
                alt="NUVIO Privacy Architecture Comparison Diagram"
                width={2752}
                height={1536}
                loading="eager"
                className="w-full h-auto max-h-[520px] object-contain rounded-xl cursor-pointer"
                onClick={() => setIsDiagramModalOpen(true)}
              />
            </div>

            {/* Honest Architectural Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#555B66] leading-relaxed flex items-start gap-3">
              <span className="text-base">ℹ️</span>
              <div>
                <strong className="text-[#111318]">Honest Product Boundary: </strong>
                {privacy.disclaimer || 'NUVIO processes documents locally inside the browser session. Files remain on the device rather than uploading to remote servers. We make no exaggerated claims of magic invulnerability, just principled data isolation.'}
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 06: PRODUCT THINKING (DECISION FRAMEWORK)
            ============================================================================== */}
        <section id="pm-thinking" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {productThinking.eyebrow || '05 · PRODUCT THINKING'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {productThinking.headline || 'From problem to product.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {productThinking.supporting || 'A deliberate product decision framework connecting user frustration to production execution.'}
            </p>
          </div>

          {/* 4 Connected Stages: PROBLEM → HYPOTHESIS → MVP → ITERATION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(productThinking.stages || [
              { id: 'problem', title: 'PROBLEM', desc: 'PDF workflows are fragmented and force users onto untrusted servers.' },
              { id: 'hypothesis', title: 'HYPOTHESIS', desc: 'One workspace + local processing = simpler, more trustworthy workflow.' },
              { id: 'mvp', title: 'MVP', desc: 'Prioritize the highest-value document tasks — direct in-place editing first.' },
              { id: 'iteration', title: 'ITERATE', desc: 'Build → test → diagnose → improve based on real-world document edge cases.' }
            ]).map((stage, idx) => {
              const isSelected = activeThinkingStage === stage.id
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveThinkingStage(stage.id)}
                  className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer space-y-4 ${
                    isSelected
                      ? 'bg-blue-50/40 border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/15'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-[#2563EB]">STAGE 0{idx + 1}</span>
                    <span className="text-xs font-mono text-[#737984]">{idx < 3 ? '↓ NEXT' : '↺ LOOP'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111318]">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">{stage.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 07: MVP PRIORITIZATION
            ============================================================================== */}
        <section id="prioritization" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {prioritization.eyebrow || '06 · MVP PRIORITIZATION'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {prioritization.headline || 'Scoping for defensibility, not easy vanity features.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {prioritization.supporting || 'Why we built the hardest core editor first instead of quick utility wrappers.'}
            </p>
          </div>

          {/* Visual Scoping Hierarchy Cards (P0 Largest, P1 Medium, P2 Compact) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* P0 CORE EDITOR (Largest - 6 cols) */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border-2 border-[#2563EB] shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 text-white">
                    P0 · CORE EDITOR (FOUNDATION)
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">Primary Moat</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111318]">In-Place Visual PDF Editor</h3>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                    The hardest technical moat: direct in-place manipulation preserving exact coordinate geometry upon export.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {['Document Ingestion', 'Canvas Rendering', 'In-Place Text Editing', 'Local Vector Export'].map((item) => (
                    <div key={item} className="p-3 rounded-xl bg-blue-50/50 border border-blue-200 text-xs font-mono font-semibold text-blue-900">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#555B66] font-medium">
                💡 <strong className="text-[#111318]">Key Strategic Takeaway:</strong> Superficial utilities have low defensibility. Conquering the in-place editor solves the foundational hard problem.
              </div>
            </div>

            {/* P1 PRODUCTIVITY (Medium - 3 cols) */}
            <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-300">
                    P1 · PRODUCTIVITY
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#111318]">Multi-Tool Suite</h3>
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    High daily utility actions that become straightforward transformations once document state is stable.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {['Merge & Split', 'Format Convert', 'File Compress', 'Digital Signatures'].map((item) => (
                    <div key={item} className="p-2.5 rounded-lg bg-[#FAFAF8] border border-[#E5E7EB] text-xs font-mono text-slate-700">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#737984]">Downstream extension tier</span>
            </div>

            {/* P2 SUPPORT (Compact with Guides Graphic - 3 cols) */}
            <div className="lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-50 text-purple-800 border border-purple-200">
                    P2 · SUPPORT
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#111318]">Guides &amp; Templates</h3>
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    Interactive workflow playbooks and pre-configured templates accelerating day-one value.
                  </p>
                </div>

                <div className="w-full flex items-center justify-center py-2">
                  <Image
                    src="/images/nuvio/extracted/nuvio-guides-card.png"
                    alt="NUVIO Guides and Templates UI Card"
                    width={320}
                    height={345}
                    loading="eager"
                    className="w-28 h-auto object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#737984]">Onboarding acceleration tier</span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 08: THE HARD PRODUCT PROBLEM ("PREVIEW ≠ PRODUCT")
            ============================================================================== */}
        <section id="hard-problem" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {hardProblem.eyebrow || '07 · THE HARD PRODUCT PROBLEM'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {hardProblem.headline || 'Making a PDF editor that actually edits PDFs.'}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#2563EB]">
              {hardProblem.subheadline || 'The superficial overlay trap versus authentic document mutation.'}
            </p>
          </div>

          {/* Visual Side-by-Side: Looks Edited vs Actually Edited */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Looks Edited (Flawed Path) */}
            <div className="p-8 rounded-3xl bg-rose-50/30 border border-rose-200 space-y-6 shadow-xs">
              <div className="space-y-2 pb-4 border-b border-rose-100">
                <span className="text-xs font-mono font-bold text-rose-700 uppercase bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200">
                  LOOKS EDITED (FLAWED TRAP)
                </span>
                <h3 className="text-xl font-bold text-rose-950">Cosmetic Surface Overlay</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['PDF Canvas', 'Visual Overlay', 'User Sees Edit', 'Export Diverges'].map((s, idx) => (
                  <Fragment key={s}>
                    <span className="px-3 py-1.5 rounded-lg bg-rose-100/70 text-rose-900 font-semibold border border-rose-200">
                      {s}
                    </span>
                    {idx < 3 && <span className="text-rose-400 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-rose-200 text-xs text-rose-800 leading-relaxed">
                <strong>Failure mode: </strong>
                Preview appears edited on screen, but changes fail upon export. Text search breaks, kerning collapses, and annotations disappear on other viewers.
              </div>
            </div>

            {/* Right: Actually Edited (Canonical Path) */}
            <div className="p-8 rounded-3xl bg-emerald-50/30 border-2 border-emerald-500 space-y-6 shadow-xs">
              <div className="space-y-2 pb-4 border-b border-emerald-100">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                  ACTUALLY EDITED (NUVIO CANONICAL)
                </span>
                <h3 className="text-xl font-bold text-emerald-950">Deterministic Document Mutation</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['PDF Canvas', 'Document State', 'Editor', 'Exported PDF'].map((s, idx) => (
                  <Fragment key={s}>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-100/70 text-emerald-900 font-bold border border-emerald-300">
                      {s}
                    </span>
                    {idx < 3 && <span className="text-emerald-500 font-bold">→</span>}
                  </Fragment>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-800 leading-relaxed">
                <strong>Defensible outcome: </strong>
                The edit is written directly into the document structure. Searchable, selectable, and mathematically identical across all PDF readers.
              </div>
            </div>
          </div>

          {/* Highlight Callouts Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111318] text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">THE CORE PRINCIPLE</span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Preview ≠ Product
              </div>
            </div>
            <div className="text-sm sm:text-base text-slate-300 font-medium max-w-md">
              "The exported document must contain the edit. If the exported file doesn't match the screen, the product has failed."
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 09: CANONICAL DOCUMENT MODEL (ARCHITECTURE DIAGRAM)
            ============================================================================== */}
        <section id="document-model" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {documentModel.eyebrow || '08 · CANONICAL DOCUMENT MODEL'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {documentModel.headline || 'One document state powers both editing and export.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {documentModel.subheadline || 'A single source of truth ensuring what you see in the workspace is exactly what appears in the exported file.'}
            </p>
          </div>

          {/* Clean Architecture Concept Diagram (0 Developer Jargon) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-10">
            {/* Ingestion Source Node */}
            <div className="max-w-xs mx-auto p-4 rounded-2xl bg-slate-100 border border-slate-300 text-center space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984]">INGESTION POINT</span>
              <div className="text-sm font-bold text-[#111318]">ORIGINAL PDF FILE</div>
            </div>

            <div className="flex justify-center text-slate-400 text-xs font-mono">
              <span>↓ Document Ingestion</span>
            </div>

            {/* Central Document Model Core Node */}
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center space-y-2 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-200">CENTRAL SOURCE OF TRUTH</span>
              <div className="text-xl font-bold tracking-tight">CANONICAL DOCUMENT MODEL</div>
              <p className="text-xs text-blue-100">
                Single unified state holding text, vector coordinates, fonts, and annotations
              </p>
            </div>

            {/* Dual Fork Arrows */}
            <div className="grid grid-cols-2 max-w-lg mx-auto text-center text-xs font-mono text-[#2563EB]">
              <div>↙ Synchronized Read</div>
              <div>↘ Deterministic Write</div>
            </div>

            {/* Left & Right Consumer Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Left Pillar */}
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 text-center space-y-2">
                <span className="text-xs font-mono font-bold text-[#2563EB]">INTERACTIVE EDITOR</span>
                <div className="text-base font-bold text-[#111318]">WYSIWYG CANVAS PREVIEW</div>
                <p className="text-xs text-[#555B66]">Instant visual feedback for user edits</p>
              </div>

              {/* Right Pillar */}
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-center space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-700">EXPORT ENGINE</span>
                <div className="text-base font-bold text-[#111318]">FINAL VECTOR PDF FILE</div>
                <p className="text-xs text-[#555B66]">Pixel-accurate downstream document</p>
              </div>
            </div>

            {/* 3 Core Rationale Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {[
                { title: 'Zero Phantom Edits', desc: 'No desynchronization between what is rendered on screen and what is written to the document.' },
                { title: 'Coordinate Fidelity', desc: 'Edits maintain exact mathematical placement across zoom levels, window resizing, and re-export.' },
                { title: 'Preserved Metadata', desc: 'Original layers, font metrics, and document bookmarks remain preserved rather than flattened.' }
              ].map((r) => (
                <div key={r.title} className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-1">
                  <div className="text-xs font-bold text-[#111318]">✓ {r.title}</div>
                  <p className="text-xs text-[#555B66] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 10: PRODUCT OBJECTS (ATOMIC WORKSPACE PRIMITIVES)
            ============================================================================== */}
        <section id="primitives" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {productObjects.eyebrow || '09 · PRODUCT OBJECTS'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {productObjects.headline || 'Six atomic primitives that make up the editing canvas.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {productObjects.supporting || 'Every annotation, edit, and markup is modeled as a deterministic document object.'}
            </p>
          </div>

          {/* 6 Interactive Cards with Object Previews */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {(productObjects.items || [
              { name: 'TEXT', desc: 'In-place typographical edits preserving exact font styling and bounding boxes.' },
              { name: 'IMAGE', desc: 'Embedded vector and raster graphics with non-destructive aspect scaling.' },
              { name: 'SIGNATURE', desc: 'Vector signature placement with transparent backgrounds and pressure smoothing.' },
              { name: 'STAMP', desc: 'Status markers (Approved, Confidential, Draft) with customizable tint and angle.' },
              { name: 'WATERMARK', desc: 'Background opacity layers protecting sensitive distribution copies.' },
              { name: 'SHAPE', desc: 'Rectangles, callout clouds, and highlight markers for structured redlining.' }
            ]).map((prim) => {
              const isSelected = activePrimitive === prim.name
              return (
                <div
                  key={prim.name}
                  onClick={() => setActivePrimitive(prim.name)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-center space-y-3 ${
                    isSelected
                      ? 'bg-blue-50 border-[#2563EB] shadow-2xs ring-2 ring-[#2563EB]/20 scale-105'
                      : 'bg-white border-[#E5E7EB] hover:border-slate-300'
                  }`}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-sm font-bold text-[#2563EB]">
                    {prim.name.slice(0, 2)}
                  </div>
                  <div className="text-xs font-bold text-[#111318]">{prim.name}</div>
                  <span className="text-[10px] font-mono text-[#737984] block truncate">Inspect</span>
                </div>
              )
            })}
          </div>

          {/* Expanded Selected Primitive Detail Callout */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">
                PRIMITIVE FOCUS: {activePrimitive}
              </span>
              <p className="text-sm text-[#111318] font-medium">
                {(productObjects.items || []).find(p => p.name === activePrimitive)?.desc || 'Deterministic canvas primitive.'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
              Deterministic Output
            </span>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 11: REAL PRODUCT CHALLENGES
            ============================================================================== */}
        <section id="challenges" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {challenges.eyebrow || '10 · REAL PRODUCT CHALLENGES'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {challenges.headline || 'Four real-world problems that emerged during development.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {challenges.supporting || 'Building client-side document software requires solving four distinct challenges.'}
            </p>
          </div>

          {/* 4 Challenge Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(challenges.items || [
              {
                num: '01',
                title: 'PDF EDITING',
                desc: 'Existing PDF content is fundamentally harder to modify than a normal document. PDFs are Cartesian coordinate placements, not reflowable paragraphs.'
              },
              {
                num: '02',
                title: 'PREVIEW → EXPORT',
                desc: 'What users see must survive export. Text sizing, line breaks, and object positions must match at 100% precision.'
              },
              {
                num: '03',
                title: 'PERFORMANCE',
                desc: 'Document processing needs to remain usable in the browser. Handling multi-page files without memory spikes.'
              },
              {
                num: '04',
                title: 'PRODUCTION',
                desc: 'Real-world deployment exposed issues that required diagnosis beyond the initial error message.'
              }
            ]).map((item) => (
              <div
                key={item.num}
                className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-4 group transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                    CHALLENGE {item.num}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">Product Hurdle</span>
                </div>
                <h3 className="text-xl font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 12: PDF LOADING INCIDENT (AN OPERATIONAL RETROSPECTIVE)
            ============================================================================== */}
        <section id="incident" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {loadingIncident.eyebrow || '11 · PDF LOADING INCIDENT'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {loadingIncident.headline || 'Debugging in production: When "Failed to load PDF" isn\'t the whole story.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {loadingIncident.subheadline || 'How structured investigation uncovered the real root cause behind a deceptive error message.'}
            </p>
          </div>

          {/* Interactive 4-Stage Investigation Stepper */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(loadingIncident.steps || [
                { stage: 'USER SEES', text: 'Error banner: "Failed to load PDF". The document opened fine in desktop viewers but stalled in the web workspace.' },
                { stage: 'ASSUMPTION', text: 'Initial hypothesis: "Maybe the PDF is password protected, corrupt, or exceeds size limits."' },
                { stage: 'INVESTIGATION', text: 'Trace the document loading pipeline step-by-step to identify where execution halted.' },
                { stage: 'RESOLUTION', text: 'The actual loading issue was an asynchronous asset initialization timing mismatch in the local sandbox — identified and resolved.' }
              ]).map((step, idx) => {
                const isActive = activeIncidentStep === idx
                return (
                  <button
                    key={step.stage}
                    type="button"
                    onClick={() => setActiveIncidentStep(idx)}
                    className={`p-6 rounded-2xl text-left border transition-all space-y-3 ${
                      isActive
                        ? 'border-[#2563EB] bg-blue-50/50 ring-2 ring-[#2563EB]/15 shadow-2xs'
                        : 'border-[#E5E7EB] bg-[#FAFAF8] hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold text-[#2563EB] uppercase block">
                      PHASE 0{idx + 1}
                    </span>
                    <div className="text-base font-bold text-[#111318]">{step.stage}</div>
                    <p className="text-xs text-[#555B66] leading-relaxed line-clamp-3">{step.text}</p>
                  </button>
                )
              })}
            </div>

            {/* Active Incident Detail Spotlight Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-blue-400 font-bold uppercase">
                  INVESTIGATION RETROSPECTIVE · PHASE 0{activeIncidentStep + 1}
                </span>
                <span className="text-emerald-400">Pipeline Root-Cause Analysis</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {(loadingIncident.steps || [])[activeIncidentStep]?.text}
              </p>
            </div>

            {/* Key Engineering Takeaway Quote */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-semibold">
                💡 <strong className="text-amber-950">Core Takeaway: </strong>
                "{loadingIncident.takeaway || 'An error message is a clue, not always the root cause.'}"
              </span>
              <span className="text-xs font-mono font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-300 whitespace-nowrap">
                Diagnostic Rigor
              </span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 13: SHIPPING CHALLENGE & PRODUCT QUALITY LOOP
            ============================================================================== */}
        <section id="quality-loop" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {shippingQualityLoop.eyebrow || '12 · SHIPPING & QUALITY LOOP'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {shippingQualityLoop.headline || 'Shipping is part of the product.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {shippingQualityLoop.subheadline || 'Production verification uncovered routing and document-loading issues that required architectural fixes.'}
            </p>
          </div>

          {/* Animated / Interactive 5-Step Quality Loop */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {(shippingQualityLoop.loop || ['BUILD', 'VERIFY', 'DIAGNOSE', 'FIX', 'RE-TEST']).map((step, idx) => {
                const isSelected = activeQualityStep === idx
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setActiveQualityStep(idx)}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-sm ring-2 ring-blue-200'
                        : 'bg-[#FAFAF8] text-[#111318] border-[#E5E7EB] hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-75">STEP 0{idx + 1}</span>
                    <span className="text-sm font-bold block pt-0.5">{step}</span>
                  </button>
                )
              })}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-blue-900">
              <span>{shippingQualityLoop.note || 'Every change to the document parsing pipeline is verified against diverse PDF standards before deployment.'}</span>
              <span className="font-bold text-[#2563EB]">Zero-Regression Standard</span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 14: OUTCOME & CURRENT STATUS
            ============================================================================== */}
        <section id="outcome" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {outcome.eyebrow || '13 · OUTCOME & STATUS'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {outcome.headline || 'From disjointed PDF utilities to a privacy-first document workspace.'}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#2563EB]">
              {outcome.subheadline || 'NUVIO evolved from a collection of PDF utilities into a defined privacy-first document workspace.'}
            </p>
          </div>

          {/* Outcome Pillars & Showcase */}
          <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(outcome.pillars || [
                { title: 'Unified PDF Workflow', desc: 'One workspace replacing fragmented multi-tab utility hopping.' },
                { title: 'Client-Side Processing', desc: '100% in-browser document sandbox with zero external server upload.' },
                { title: 'Visual In-Place Editing', desc: 'Direct typographical modification synchronized with export.' },
                { title: 'Production MVP', desc: 'Usable, verifiable document pipeline running in real environments.' }
              ]).map((p) => (
                <div key={p.title} className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-700">✓ DELIVERED</div>
                  <h3 className="text-base font-bold text-[#111318]">{p.title}</h3>
                  <p className="text-xs text-[#555B66] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Clear, Honest Status Callout (0 Fake Metrics) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  PROJECT POSTURE
                </span>
                <div className="text-lg sm:text-xl font-bold">
                  {outcome.status || 'LIVE MVP · Actively evolving'}
                </div>
                <p className="text-xs text-slate-300">
                  Focusing on core engineering stability and user feedback rather than artificial vanity metrics.
                </p>
              </div>

              <span className="px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                In Active Iteration
              </span>
            </div>
          </div>
        </section>

        {/* ==============================================================================
            SECTION 15: ROADMAP (NOW · NEXT · FUTURE)
            ============================================================================== */}
        <section id="roadmap" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {roadmap.eyebrow || '14 · PRODUCT ROADMAP'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {roadmap.headline || 'Where NUVIO is going next.'}
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl font-normal">
              {roadmap.subheadline || 'Clear demarcation between what is live today, what is actively being built, and future research.'}
            </p>
          </div>

          {/* 3 Horizon Columns: NOW (Live MVP) vs NEXT (In Progress) vs FUTURE (Exploration) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(roadmap.columns || [
              {
                horizon: 'NOW',
                badge: 'LIVE MVP · Built',
                items: [
                  'Core PDF workflow (Open, Edit, Validate, Export)',
                  'In-place text modifications & annotations',
                  'Document merge, split, and compression',
                  '100% Client-side local processing'
                ]
              },
              {
                horizon: 'NEXT',
                badge: 'IN PROGRESS · Active Sprint',
                items: [
                  'Better multi-page visual drag-and-drop organize',
                  'Expanded typography controls & font matching',
                  'Form field fill-and-sign workflows',
                  'Undo/redo historical timeline state'
                ]
              },
              {
                horizon: 'FUTURE',
                badge: 'EXPLORATION · Conceptual Horizon',
                items: [
                  'On-device local AI document summarization',
                  'Smart automated redaction of sensitive data',
                  'Offline Optical Character Recognition (OCR)',
                  'Intelligent multi-document comparison & diffing'
                ]
              }
            ]).map((col) => (
              <div
                key={col.horizon}
                className={`p-7 rounded-3xl border shadow-xs space-y-6 flex flex-col justify-between ${
                  col.horizon === 'NOW'
                    ? 'bg-white border-emerald-500 ring-2 ring-emerald-100'
                    : col.horizon === 'NEXT'
                    ? 'bg-white border-[#2563EB] ring-2 ring-blue-100'
                    : 'bg-white border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-base font-extrabold text-[#111318]">{col.horizon}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                      col.horizon === 'NOW'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : col.horizon === 'NEXT'
                        ? 'bg-blue-50 text-[#2563EB] border border-blue-200'
                        : 'bg-purple-50 text-purple-800 border border-purple-200'
                    }`}>
                      {col.badge}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-[#555B66] leading-relaxed flex items-start gap-2">
                        <span className="text-[#2563EB] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="text-[11px] font-mono text-[#737984]">
                  {col.horizon === 'NOW' ? 'Production verified' : col.horizon === 'NEXT' ? 'Under active engineering' : 'R&D exploratory track'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 16: STRATEGIC LEARNINGS (4 LARGE EDITORIAL STATEMENTS)
            ============================================================================== */}
        <section id="learnings" className="space-y-8 scroll-mt-20">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {learnings.eyebrow || '15 · STRATEGIC LEARNINGS'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              {learnings.headline || 'Four core lessons from building NUVIO.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(learnings.cards || [
              {
                num: '01',
                title: 'Architecture can be a product decision.',
                desc: 'Choosing client-side processing was not just a technical choice — it became the primary value proposition, delivering speed and privacy without recurring server costs.'
              },
              {
                num: '02',
                title: 'Export is part of the editing experience.',
                desc: 'If the exported document does not match the workspace canvas down to the millimeter, the editor has failed — regardless of how sleek the UI appears.'
              },
              {
                num: '03',
                title: 'Error messages are clues, not always root causes.',
                desc: 'Surface errors often mask asynchronous timing discrepancies or format nuances. Diagnosing the entire pipeline is essential for durable reliability.'
              },
              {
                num: '04',
                title: 'Good UX hides complexity without hiding capability.',
                desc: 'The PDF format has three decades of geometric quirks. A good product insulates the user from coordinates and matrix math while giving them total creative control.'
              }
            ]).map((card) => (
              <div
                key={card.num}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-4 transition-all"
              >
                <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full">
                  LESSON {card.num}
                </span>
                <h3 className="text-xl font-bold text-[#111318] leading-snug">
                  "{card.title}"
                </h3>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================================
            SECTION 17: FINAL CALL TO ACTION & CROSS-NAVIGATION
            ============================================================================== */}
        <section id="cta" className="text-center space-y-6 py-12 border-t border-[#E5E7EB]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {cta.badge || 'LIVE MVP · Actively Evolving'}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318]">
            {cta.heading || 'Complex technology. Simple experience.'}
          </h2>

          <p className="text-sm sm:text-base text-[#555B66] max-w-lg mx-auto leading-relaxed font-normal">
            {cta.subheading || 'NUVIO is currently being designed and built as an independent product exploration.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#work"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#111318] border border-[#E5E7EB] hover:bg-slate-50 transition-colors"
            >
              ← Back to Selected Work
            </Link>
            <Link
              href="/work/hiresway"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#111318] text-white hover:bg-[#2563EB] transition-colors"
            >
              Explore Hiresway Flagship →
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
