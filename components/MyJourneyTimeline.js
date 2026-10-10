import React, { useState } from 'react'
import Image from 'next/image'

export default function MyJourneyTimeline() {
  const [activeMilestone, setActiveMilestone] = useState(3) // Default to Product / NUVIO

  const milestones = [
    {
      id: 'engineering',
      step: '01',
      period: '2012–2016',
      title: 'Engineering',
      subtitle: 'B.Tech in Mechanical Engineering',
      category: 'TECHNICAL FOUNDATION',
      description: 'Built first-principles rigor, thermodynamic systems modeling, and an understanding of physical constraints that still shapes my systems thinking today.',
      tags: ['First Principles', 'System Modeling', 'Analytical Rigor'],
      accent: 'blue'
    },
    {
      id: 'corporate',
      step: '02',
      period: '2016–2018',
      title: 'Corporate',
      subtitle: 'Enterprise Sales & GTM Partnerships',
      category: 'COMMERCIAL RIGOR',
      description: 'Led consultative enterprise business development at Collegedunia. Closed complex multi-stakeholder institutional contracts and built repeatable outbound pipelines.',
      tags: ['Enterprise Sales', 'Complex Deals', 'Pipeline Velocity'],
      accent: 'indigo'
    },
    {
      id: 'entrepreneurship',
      step: '03',
      period: '2018–2023',
      title: 'Entrepreneurship',
      subtitle: 'Founder & Venture Operator',
      category: '0→1 VENTURE SCALING',
      description: 'Founded and operated SettleMyCar, Dark Kitchen, and Fixins. Managed 4:00 AM procurement dispatch, partner garage networks, SLA governance, and unit economics.',
      tags: ['Ground Operations', 'Unit Economics', 'Execution Playbooks'],
      accent: 'purple'
    },
    {
      id: 'product',
      step: '04',
      period: '2024–Present',
      title: 'Product',
      subtitle: 'NUVIO & Applied AI Systems',
      category: 'ACTIVE PRODUCT BUILDING',
      description: 'Architecting NUVIO (private PDF workspace) and Hiresway (AI career platform) — combining commercial insight with modern software design.',
      tags: ['Entrepreneurship & Business Building', 'Local Sandbox', '0→1 Product'],
      accent: 'emerald',
      isCurrent: true
    },
    {
      id: 'next',
      step: '05',
      period: 'Looking Ahead',
      title: "What's Next",
      subtitle: 'Bigger Commercial Impact',
      category: 'FUTURE HORIZON',
      description: 'Focused on scaling technology-enabled commercial systems, high-trust enterprise partnerships, and category-defining productivity products.',
      tags: ['Compounding Scale', 'Strategic GTM', 'Global Reach'],
      accent: 'amber'
    }
  ]

  const current = milestones[activeMilestone]

  return (
    <section id="journey" className="py-14 sm:py-20 bg-white text-[#111318] border-t border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>02 · CAREER TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318]">
              My Journey
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] font-normal max-w-xl">
              From engineering curiosity to corporate sales, venture building, and product development.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#737984]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Interactive Career Track · Click any milestone</span>
          </div>
        </div>

        {/* Dashboard Card Container */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FAFAF8] to-slate-50 border border-[#E5E7EB] p-6 sm:p-10 shadow-xs space-y-10">
          
          {/* Horizontal Milestone Connector Track (Desktop) */}
          <div className="hidden lg:grid grid-cols-5 gap-3 relative pt-4">
            {/* Glowing Horizontal Connecting Line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-amber-300 -z-0" />

            {milestones.map((m, idx) => {
              const isActive = activeMilestone === idx
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveMilestone(idx)}
                  className={`relative z-10 p-4 rounded-2xl text-center transition-all duration-200 flex flex-col items-center space-y-2.5 ${
                    isActive
                      ? 'bg-white border-2 border-[#2563EB] shadow-md ring-4 ring-blue-50 scale-105'
                      : 'bg-white/80 border border-[#E5E7EB] hover:bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {/* Milestone Node Circle */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : m.isCurrent
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {m.step}
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#737984] block font-semibold">
                      {m.period}
                    </span>
                    <span className="text-sm font-bold text-[#111318] block">
                      {m.title}
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full block truncate max-w-full ${
                    isActive
                      ? 'bg-blue-50 text-[#2563EB] font-bold'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {m.category.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile Vertical Milestone Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 lg:hidden">
            {milestones.map((m, idx) => {
              const isActive = activeMilestone === idx
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                    isActive
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-sm font-semibold'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-mono block opacity-80">{m.period}</span>
                  <span className="font-bold block pt-0.5">{m.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Milestone Highlight Card with Avatar Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200">
                    PHASE {current.step} · {current.category}
                  </span>
                  {current.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Phase
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-[#737984] font-semibold">
                  {current.period}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111318]">
                  {current.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#555B66] leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAFAF8] text-slate-700 border border-slate-200"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Graphic Column: Avatar with Upward Launch Arrow */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-blue-50/60 to-indigo-50/40 border border-blue-100 text-center relative overflow-hidden">
              <div className="relative w-44 sm:w-52 h-48 sm:h-56 flex items-center justify-center">
                <Image
                  src="/images/avatars/avatar-launch-arrow.png"
                  alt="Vivek pointing toward ambitious milestones"
                  width={320}
                  height={406}
                  loading="eager"
                  priority
                  className="max-h-full w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-2 space-y-0.5">
                <span className="text-xs font-bold text-[#111318] block">
                  Continuous Trajectory
                </span>
                <span className="text-[11px] text-[#737984] font-mono block">
                  Compounding skills &amp; scalable systems
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
