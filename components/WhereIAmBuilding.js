import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from './Icons'

function WindowTerminalIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3-3 3m4.5 0h4.5M3.75 4.5h16.5A1.5 1.5 0 0121.75 6v12a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 18V6a1.5 1.5 0 011.5-1.5z" />
    </svg>
  )
}

function WorkflowNodesIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h4.5m7.5 0h4.5m-12 0a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm12 0a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-6-6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-7.5v-3m0 6v3" />
    </svg>
  )
}

function ProcessGearsIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function WhereIAmBuilding() {
  const pillars = [
    {
      number: '01',
      title: 'Digital Products',
      subtitle: 'PRACTICAL SOFTWARE',
      description: 'Building tools that eliminate real operational friction.',
      highlight: 'Developing Hiresway (career intelligence platform) and NUVIO (private PDF workspace).',
      icon: WindowTerminalIcon,
      tags: ['Product Strategy', 'User Experience', 'High Performance', 'Data Reliability'],
      metric: 'Active Product Building',
      links: [
        { href: '/work/hiresway', label: 'Hiresway →' },
        { href: '/work/nuvio', label: 'NUVIO →' }
      ]
    },
    {
      number: '02',
      title: 'AI & Automation',
      subtitle: 'APPLIED WORKFLOWS',
      description: 'Event-driven automations reducing repetitive human tasks.',
      highlight: 'Automated data pipelines extracting CRM signals and market research.',
      icon: WorkflowNodesIcon,
      tags: ['n8n', 'Make.com', 'Applied AI', 'Workflow Automation'],
      metric: 'Automated Operations',
      link: null,
      linkText: null
    },
    {
      number: '03',
      title: 'Business Systems',
      subtitle: 'OPERATING SYSTEMS & SOPS',
      description: 'Repeatable playbooks connecting sales with fulfillment.',
      highlight: 'Standard operating procedures (SOPs) and SLA governance frameworks.',
      icon: ProcessGearsIcon,
      tags: ['SOP Playbooks', 'ClickUp Ops', 'SLA Dashboards', 'Unit Economics'],
      metric: 'Predictable Scale',
      link: null,
      linkText: null
    }
  ]

  return (
    <section
      id="building"
      aria-label="Where I Am Building"
      className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header with 3D Glass Innovation Lightbulb */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">07 · Forward Focus</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Where I Am Building
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              Applying commercial sales, operations, and entrepreneurship to practical software systems and AI automation.
            </p>
          </div>

          {/* Avatar with Laptop Typing Callout */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-laptop-typing.png"
                alt="Vivek actively coding and building systems on laptop"
                width={319}
                height={401}
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Active Building
              </span>
              <div className="text-xs font-bold text-[#111318]">
                Software &amp; AI Systems
              </div>
              <p className="text-[11px] text-[#737984]">
                Deterministic real-world execution
              </p>
            </div>
          </div>
        </div>

        {/* 3 Visual Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.number}
                className="p-7 sm:p-9 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 hover-card-elevate shadow-xs transition-all duration-300 flex flex-col justify-between space-y-6 reveal-on-scroll group"
              >
                <div className="space-y-5">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E7EB]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                      {p.number} · {p.subtitle}
                    </span>

                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#2563EB] shadow-2xs group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & 1-Sentence Description */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Spotlight Box */}
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] text-xs text-[#111318] space-y-1 shadow-2xs">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                      Active Execution
                    </span>
                    <p className="text-xs text-[#555B66] leading-relaxed">
                      {p.highlight}
                    </p>
                    {p.links && (
                      <div className="pt-1.5 flex flex-wrap items-center gap-3">
                        {p.links.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline"
                          >
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    {p.link && (
                      <div className="pt-1.5">
                        <Link
                          href={p.link}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline"
                        >
                          <span>{p.linkText}</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Note */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#737984]">
                  <span>{p.metric}</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#2563EB] transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
