import React, { useState } from 'react'

export default function HowIThink({ framework = [] }) {
  const [activeStage, setActiveStage] = useState(0)

  const stages = framework.length > 0 ? framework : [
    {
      id: 'understand',
      stage: '01',
      title: 'Understand',
      tagline: 'Root-cause diagnostics & stakeholder context',
      question: 'What problem are we actually solving, and who bears the economic pain?',
      lookFor: 'Customer context, commercial constraints, emotional & operational friction, economic incentives.',
      produce: 'Problem boundary document, stakeholder map, baseline friction audit.',
      behavior: 'Interview operators on the ground before reading executive decks.'
    },
    {
      id: 'frame',
      stage: '02',
      title: 'Frame',
      tagline: 'Unit economics & structural levers',
      question: 'What are the structural levers and unit economics that govern success?',
      lookFor: 'Incentive misalignments, bottleneck constraints, margin profiles, customer willingness to pay.',
      produce: 'Unit-economic thesis, decision boundaries, success criteria.',
      behavior: 'Model the downside risks before celebrating the upside projections.'
    },
    {
      id: 'explore',
      stage: '03',
      title: 'Explore',
      tagline: 'Alternative pathways & technical feasibility',
      question: 'What are the lowest-friction paths to resolution using modern tooling?',
      lookFor: 'Industry analogs, existing workarounds, leverage from APIs and automation.',
      produce: 'Opportunity matrix, trade-off comparison, technical feasibility notes.',
      behavior: 'Evaluate whether an existing API solves what we were about to code from scratch.'
    },
    {
      id: 'decide',
      stage: '04',
      title: 'Decide',
      tagline: 'Ruthless scoping & non-goals',
      question: 'What are we deliberately NOT doing to guarantee execution speed?',
      lookFor: 'Scope creep traps, asymmetric upside, critical path dependencies.',
      produce: 'Scoped PRD / build spec, explicit non-goals, milestone roadmap.',
      behavior: 'Write down what we will ignore for the next 90 days.'
    },
    {
      id: 'build',
      stage: '05',
      title: 'Build',
      tagline: 'Rapid modular execution & delivery cadence',
      question: 'How fast can we put a real mechanism into user hands to validate assumptions?',
      lookFor: 'Execution drag, manual edge cases, speed to first feedback loop.',
      produce: 'Working system, operational SOPs, telemetry instrumentation.',
      behavior: 'Deploy an imperfect working system over an endlessly debated wireframe.'
    },
    {
      id: 'learn',
      stage: '06',
      title: 'Learn',
      tagline: 'Behavioral reality & systematic iteration',
      question: 'What did actual behavior teach us about commercial reality?',
      lookFor: 'Unexpected drop-offs, user workarounds, margin deviations, customer retention.',
      produce: 'Iterative feedback log, system optimization playbook, v2 backlog.',
      behavior: 'Trust customer payment and repeated usage over polite survey responses.'
    }
  ]

  const current = stages[activeStage] || stages[0]

  return (
    <section id="how-i-think" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
            <span>08 · OPERATING PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
            How I Think & Execute
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            A 6-stage diagnostic framework for breaking down ambiguous commercial problems, engineering solutions, and iterating based on reality.
          </p>
        </div>

        {/* VISUAL PROCESS FLOW TRACK */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#E5E7EB] -translate-y-1/2 z-0" />

          {/* Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {stages.map((stg, idx) => {
              const isSelected = idx === activeStage
              return (
                <button
                  key={stg.id || idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-[#111318] text-white border-[#111318] shadow-card'
                      : 'bg-white text-[#111318] border-[#E5E7EB] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#3B82F6]' : 'text-[#737984]'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#3B82F6]' : 'bg-slate-200'}`} />
                  </div>
                  <div className="text-sm font-semibold tracking-tight">
                    {stg.title}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* ACTIVE STAGE DEEP-DIVE CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-xs space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                STAGE 0{activeStage + 1} · {current.title.toUpperCase()}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111318] pt-1">
                {current.tagline}
              </h3>
            </div>

            <div className="text-xs font-mono text-[#737984] bg-white px-3 py-1.5 rounded-lg border border-[#E5E7EB]">
              Framework Step {activeStage + 1} of 6
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Core Question */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
              <span className="text-xs font-mono uppercase text-[#2563EB] font-semibold block">
                Core Diagnostic Question
              </span>
              <p className="text-base sm:text-lg text-[#111318] font-medium leading-relaxed">
                "{current.question}"
              </p>
            </div>

            {/* Practical Behavior */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
              <span className="text-xs font-mono uppercase text-[#111318] font-semibold block">
                Practical Execution Rule
              </span>
              <p className="text-base text-[#555B66] leading-relaxed">
                {current.behavior || current.lookFor}
              </p>
            </div>

            {/* What to inspect */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
              <span className="text-xs font-mono uppercase text-[#737984] font-semibold block">
                Signals & Levers Inspected
              </span>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                {current.lookFor}
              </p>
            </div>

            {/* Tangible Artifact */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
              <span className="text-xs font-mono uppercase text-[#737984] font-semibold block">
                Tangible Operational Artifact
              </span>
              <p className="text-xs sm:text-sm text-[#111318] font-mono leading-relaxed">
                {current.produce}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
