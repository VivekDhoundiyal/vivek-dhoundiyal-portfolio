import React from 'react'

const DEFAULT_DOMAINS = [
  {
    id: 'sales-strategy',
    title: 'Sales Strategy & Enterprise Deals',
    tag: 'Enterprise Sales',
    summary: 'Enterprise consultative sales, institutional partnerships, pipeline governance, and high-ticket deal closing.',
    outcome: 'Institutional Deal Closing & Executive Consensus',
    skills: [
      'Sales Strategy',
      'Enterprise Sales',
      'Revenue Generation',
      'Deal Execution',
      'Pipeline Management',
      'Account Management'
    ]
  },
  {
    id: 'bizdev-partnerships',
    title: 'Business Development & Partnerships',
    tag: 'Strategic Alliances',
    summary: 'Strategic partnerships, co-distribution channels, commercial negotiation, and market expansion.',
    outcome: 'Partner Channel Scale & Strategic Alliances',
    skills: [
      'Business Development',
      'Strategic Partnerships',
      'Negotiation',
      'Market Expansion',
      'Client Relationships',
      'Distribution Channels'
    ]
  },
  {
    id: 'growth-gtm',
    title: 'Revenue & Go-To-Market',
    tag: 'GTM Strategy',
    summary: 'Go-to-market strategy, outbound prospecting architecture, lead generation, and commercial growth.',
    outcome: 'Outbound Sourcing Cadences & Pipeline Velocity',
    skills: [
      'Go-To-Market Strategy',
      'Commercial Strategy',
      'Growth Strategy',
      'Lead Generation',
      'Revenue Operations',
      'Market Research'
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & 0→1 Building',
    tag: '0→1 Execution',
    summary: 'Rapid business validation, hands-on commercial execution, and scaling from zero to sustainable revenue.',
    outcome: 'Rapid 0→1 Validation & Positive Unit Economics',
    skills: [
      'Entrepreneurship',
      'Founder/Business Execution',
      'Commercial Execution',
      '0→1 Building',
      'Business Validation',
      'Unit Economics'
    ]
  },
  {
    id: 'operations-process',
    title: 'Operations & Process Improvement',
    tag: 'Execution & Scale',
    summary: 'Business operations, process improvement, workflow optimization, and building repeatable business systems.',
    outcome: 'Deterministic SOPs & SLA Governance',
    skills: [
      'Business Operations',
      'Process Improvement',
      'Workflow Optimization',
      'Execution',
      'Cross-functional Coordination',
      'SLA Governance'
    ]
  },
  {
    id: 'modern-leverage',
    title: 'Commercial Strategy & Modern Tooling',
    tag: 'Modern Leverage',
    summary: 'AI-assisted workflows, market intelligence, automation tooling, and data-driven commercial decision making.',
    outcome: 'Event-Driven Automations & AI Pipelines',
    skills: [
      'Commercial Strategy',
      'AI-assisted Workflows',
      'Market Intelligence',
      'Workflow Automation',
      'CRM Optimization',
      'Data Analysis'
    ]
  }
]

const CORE_PILL_CAPABILITIES = [
  'Sales Strategy',
  'Business Development',
  'Enterprise Sales',
  'Strategic Partnerships',
  'Revenue Generation',
  'Go-To-Market (GTM)',
  'Commercial Strategy',
  'Deal Execution',
  'Business Operations',
  'Process Improvement',
  '0→1 Entrepreneurship',
  'AI-Assisted Workflows'
]

export default function SkillsSection({ skills = {} }) {
  const domains = skills?.domains && skills.domains.length > 0 ? skills.domains : DEFAULT_DOMAINS
  const intro = skills?.intro || 'I work across commercial sales strategy, business development, revenue generation, partnerships, and operations — applying hands-on execution and modern tools to drive measurable business outcomes.'

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">09.1 · Skills &amp; Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              Skills &amp; What I Can Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            {intro}
          </p>
        </div>

        {/* Executive Core Capability Pill Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-2xs reveal-on-scroll">
          <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] font-semibold mb-4">
            Core Capability Focus Areas
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {CORE_PILL_CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs hover:border-[#2563EB]/40 hover:bg-blue-50/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Structured Functional Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {domains.map((domain, idx) => (
            <div
              key={domain.id || idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover-card-elevate transition-all duration-200 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E5E7EB] text-[#2563EB]">
                    {domain.tag || `Domain 0${idx + 1}`}
                  </span>
                  <span className="text-[11px] font-mono text-[#737984] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {domain.title}
                </h3>

                {domain.summary && (
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    {domain.summary}
                  </p>
                )}

                {/* Outcome Callout Pill */}
                {domain.outcome && (
                  <div className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] space-y-0.5 shadow-2xs">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                      Target Outcome
                    </span>
                    <span className="text-xs font-medium text-[#111318] block leading-snug">
                      {domain.outcome}
                    </span>
                  </div>
                )}
              </div>

              {/* Skills Pill Cloud for this Domain */}
              <div className="pt-4 border-t border-[#E5E7EB]/80 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold">
                  Applied Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(domain.skills || []).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-[10.5px] font-medium bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs hover:border-[#2563EB]/40 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
