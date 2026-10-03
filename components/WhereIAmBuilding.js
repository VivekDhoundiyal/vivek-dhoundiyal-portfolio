import React from 'react'
import Link from 'next/link'

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

function CheckBulletIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function WhereIAmBuilding({ data = {} }) {
  const defaultCards = [
    {
      category: '01 — DIGITAL PRODUCTS',
      badge: 'Active Exploration',
      title: 'Practical Software & Digital Products',
      icon: WindowTerminalIcon,
      accentColor: '#2563EB',
      badgeStyle: 'bg-blue-50 text-[#2563EB] border-blue-200/80',
      iconContainerStyle: 'bg-blue-50 text-[#2563EB] border-blue-100',
      description:
        'Focus on building practical software and digital products that solve real workflow and business problems. Rather than designing around speculative assumptions, I approach product development from an operator’s perspective—identifying friction in everyday professional execution and translating it into clean, responsive software.',
      spotlight:
        'Currently developing CareerOS as a personal career infrastructure utility built locally with Next.js, SQLite, and Tailwind CSS to streamline opportunity discovery, pipeline organization, and preparation workflows.',
      capabilities: [
        'Direct utility and intuitive, lightweight interfaces',
        'Local-first architecture and deterministic state management',
        'Products grounded in genuine commercial and user bottlenecks'
      ],
      footerNote: 'Active Technical Building · Next.js, SQLite & Tailwind'
    },
    {
      category: '02 — AI & AUTOMATION',
      badge: 'Applied Workflows',
      title: 'AI-Assisted Workflows & Intelligent Systems',
      icon: WorkflowNodesIcon,
      accentColor: '#059669',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconContainerStyle: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      description:
        'Focus on exploring AI-assisted workflows, automation and intelligent systems that reduce repetitive work and improve execution. By connecting modern orchestration platforms like n8n and Make with structured prompt design and API connectors, I evaluate practical ways to accelerate day-to-day operations.',
      spotlight:
        'Designing event-driven automations that parse unstructured data, automate qualification steps, and bridge disconnected CRM tools without requiring bloated software overhead.',
      capabilities: [
        'Webhook orchestration and automated multi-platform sync',
        'Structured prompt engineering for document summarization & research',
        'Targeted automation that reduces manual administrative friction'
      ],
      footerNote: 'Workflow Architecture · n8n, Make & LLM Workflows'
    },
    {
      category: '03 — BUSINESS SYSTEMS',
      badge: 'Operating Architecture',
      title: 'Repeatable Operating Processes & Systems',
      icon: ProcessGearsIcon,
      accentColor: '#4F46E5',
      badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      iconContainerStyle: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      description:
        'Focus on designing repeatable processes and operating systems that connect commercial execution, operations and growth. A company cannot scale sustainably on ad-hoc effort alone; it requires structured standard operating procedures (SOPs), clear escalation paths, and robust SLA governance.',
      spotlight:
        'Drawing from ground-level experience across 50+ garage supply partners, daily restaurant supply logistics, and enterprise edtech sales to build operational systems that run with predictable quality.',
      capabilities: [
        'Comprehensive SOP playbooks and exception-handling frameworks',
        'Cross-functional handoff protocols between sales and fulfillment',
        'Unit economics accountability and vendor governance'
      ],
      footerNote: 'Operational Systems · Playbooks, SOPs & Governance'
    }
  ]

  const intro = data.intro || 'I’m continuing to build at the intersection of business, technology, automation and digital products — applying my experience in revenue, operations and entrepreneurship to practical systems and products.'
  const title = data.title || 'Where I Am Building'
  const eyebrow = data.eyebrow || '07 · FORWARD FOCUS & SYSTEMS'

  const cards = defaultCards.map((card, idx) => {
    const override = data.cards?.[idx] || {}
    return {
      ...card,
      ...override,
      capabilities: override.capabilities || card.capabilities,
      icon: card.icon // keep bespoke SVG
    }
  })

  return (
    <section
      id="building"
      aria-label="Where I Am Building"
      className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* ==================================================== */}
        {/* SECTION HEADER                                       */}
        {/* ==================================================== */}
        <div className="max-w-3xl space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            {intro}
          </p>
        </div>

        {/* ==================================================== */}
        {/* 3 DIFFERENTIATED FOCUS CARDS                         */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={card.category}
                className={`p-7 sm:p-8 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-slate-300 hover:shadow-card hover-card-elevate transition-all duration-300 flex flex-col justify-between space-y-6 reveal-on-scroll delay-${(idx + 1) * 100} group`}
              >
                <div className="space-y-5">
                  {/* Card Header: Category & Visual Marker */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111318]">
                      {card.category}
                    </span>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${card.iconContainerStyle} transition-transform group-hover:scale-105 duration-200`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10.5px] font-mono font-semibold uppercase tracking-wider border shadow-2xs ${card.badgeStyle}">
                      {card.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111318] leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Primary Narrative */}
                  <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Context / Spotlight Card */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111318] font-normal leading-relaxed">
                    <span className="font-semibold block text-[10px] uppercase font-mono tracking-wider text-[#2563EB] mb-1">
                      Practical Application
                    </span>
                    <p>{card.spotlight}</p>
                    {card.category.includes('01') && (
                      <div className="pt-2">
                        <Link
                          href="/work/careeros"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:underline"
                        >
                          <span>Explore CareerOS Case Study</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Structured Core Capabilities */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                      Core Principles
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#555B66]">
                      {card.capabilities.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckBulletIcon className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-[#737984]">
                  <span>{card.footerNote}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#2563EB] transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
