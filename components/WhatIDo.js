import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from './Icons'

export default function WhatIDo() {
  const capabilities = [
    {
      number: '01',
      title: 'REVENUE',
      subtitle: 'Commercial Engine & Enterprise Sales',
      description: 'Building predictable outbound pipelines and closing high-ticket enterprise contracts.',
      flow: ['Pipeline', 'Deals', 'Growth'],
      tags: ['Enterprise Sales', 'Pipeline Velocity', 'Deal Strategy'],
      metric: 'Predictable Pipeline Engine',
      slug: 'revenue-business-development',
      accent: 'blue',
      illustration: '/illustrations/analytics-illustration.png',
      illustrationAlt: 'Analytics & Revenue Dashboard 3D Glass Illustration',
      anim: 'animate-float-fast'
    },
    {
      number: '02',
      title: 'PARTNERSHIPS',
      subtitle: 'Strategic Alliances & Distribution',
      description: 'Forging co-distribution alliances and commercial partner networks that unlock compounding scale.',
      flow: ['Network', 'Distribution', 'Scale'],
      tags: ['Strategic Alliances', 'Channel Scale', 'GTM Strategy'],
      metric: 'Co-Distribution Network',
      slug: 'partnerships-growth',
      accent: 'purple',
      illustration: '/illustrations/partnerships-illustration.png',
      illustrationAlt: 'Strategic Partnerships & Alliances 3D Glass Illustration',
      anim: 'animate-float-medium'
    },
    {
      number: '03',
      title: 'OPERATIONS',
      subtitle: 'Systems, Playbooks & Execution',
      description: 'Engineering disciplined SOPs, escalation protocols, and unit economics accountability.',
      flow: ['Process', 'Systems', 'Repeatability'],
      tags: ['SOP Playbooks', 'Unit Economics', 'SLA Governance'],
      metric: 'Repeatable Execution',
      slug: 'business-operations',
      accent: 'emerald',
      illustration: '/illustrations/operations-illustration.png',
      illustrationAlt: 'Systems & Operations 3D Glass Illustration',
      anim: 'animate-float-slow'
    }
  ]

  const accentStyles = {
    blue: {
      text: 'text-[#2563EB]',
      badge: 'bg-blue-50 text-[#2563EB] border-blue-200',
      borderHover: 'hover:border-[#2563EB]/50',
      flowBg: 'bg-blue-50/70 border-blue-100 text-[#111318]',
      flowActive: 'bg-[#2563EB] text-white',
      arrow: 'text-[#2563EB]'
    },
    purple: {
      text: 'text-purple-600',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      borderHover: 'hover:border-purple-400/50',
      flowBg: 'bg-purple-50/70 border-purple-100 text-[#111318]',
      flowActive: 'bg-purple-600 text-white',
      arrow: 'text-purple-600'
    },
    emerald: {
      text: 'text-emerald-600',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      borderHover: 'hover:border-emerald-400/50',
      flowBg: 'bg-emerald-50/70 border-emerald-100 text-[#111318]',
      flowActive: 'bg-emerald-600 text-white',
      arrow: 'text-emerald-600'
    }
  }

  return (
    <section id="what-i-do" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] border-t border-[#E5E7EB] relative">
      <div id="capabilities" className="sr-only" tabIndex={-1} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header: Crisp, Bold, 3-second Scan with Growth Illustration */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                01 · CAPABILITY SYSTEM
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              From commercial opportunity<br />
              <span className="text-[#2563EB]">to verifiable outcome.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              A three-pillar execution framework connecting front-end commercial deal-making with robust back-end operational systems.
            </p>
          </div>

          {/* Right: 3D Glass Growth Illustration Feature */}
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-[#2563EB]/40 transition-all">
            <div className="relative w-20 h-18 sm:w-24 sm:h-20 flex-shrink-0 animate-float-medium illustration-tilt">
              <Image
                src="/illustrations/growth-illustration.png"
                alt="Growth Chart & Commercial Scalability 3D Glass Illustration"
                width={120}
                height={100}
                className="object-contain w-full h-full drop-shadow-md"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Growth Engine
              </span>
              <div className="text-xs font-semibold text-[#111318]">
                Opportunity → Revenue → Scale
              </div>
              <p className="text-[11px] text-[#737984]">
                Compounding commercial velocity
              </p>
            </div>
          </div>
        </div>

        {/* 3 Visual Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap) => {
            const style = accentStyles[cap.accent]
            return (
              <div
                key={cap.number}
                className={`p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] ${style.borderHover} hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between group space-y-6 reveal-on-scroll`}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar: Large Number & External Arrow */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-[#111318]/25 group-hover:text-[#111318] transition-colors">
                      {cap.number}
                    </span>

                    <Link
                      href={`/capabilities/${cap.slug}`}
                      className="p-1 rounded-lg text-slate-400 hover:text-[#111318] transition-colors"
                      title="Inspect detailed capability dossier"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Title & 1-Line Description */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      <Link href={`/capabilities/${cap.slug}`}>
                        {cap.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
                      {cap.description}
                    </p>
                  </div>

                  {/* 3D Glassmorphism Pillar Illustration */}
                  <div className="relative w-full h-24 sm:h-28 flex items-center justify-center my-1 pointer-events-none">
                    <div className={`relative w-28 h-20 sm:w-32 sm:h-24 ${cap.anim} illustration-tilt`}>
                      <Image
                        src={cap.illustration}
                        alt={cap.illustrationAlt}
                        fill
                        sizes="140px"
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Visual Pipeline Flow Diagram */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block mb-2">
                      Execution Flow
                    </span>
                    <div className="flex items-center justify-between gap-1 p-2 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB]">
                      {cap.flow.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <div className={`px-2.5 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-transform group-hover:scale-[1.02] text-center flex-1 ${
                            sIdx === cap.flow.length - 1 ? style.flowActive : style.flowBg
                          }`}>
                            {step}
                          </div>
                          {sIdx < cap.flow.length - 1 && (
                            <span className={`text-xs font-bold ${style.arrow} px-0.5`}>→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* 3 Tags */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[10.5px] font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="text-xs font-semibold text-[#2563EB] group-hover:underline flex items-center gap-1.5"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10.5px] font-mono text-[#737984]">
                    {cap.metric}
                  </span>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

