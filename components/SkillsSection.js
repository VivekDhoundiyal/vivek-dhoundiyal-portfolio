import React from 'react'
import {
  ChartIcon,
  TargetIcon,
  VenturesIcon,
  DocumentIcon,
  ArrowRight
} from './Icons'

const DEFAULT_DOMAINS = [
  {
    id: 'bizdev',
    title: 'Business Development',
    tag: 'Commercial Deals',
    summary: 'Enterprise consultative sales, institutional partnerships, and commercial deal structuring.',
    skills: [
      'Business Development',
      'Revenue Generation',
      'Partnerships',
      'B2B Sales',
      'Account Management',
      'Client Relationships'
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Commercial',
    tag: 'GTM Strategy',
    summary: 'Data-driven GTM strategy, outbound pipeline architecture, and revenue operations.',
    skills: [
      'Growth Strategy',
      'Go-to-Market Thinking',
      'Revenue Operations',
      'Market Research',
      'Lead Generation',
      'Commercial Strategy'
    ]
  },
  {
    id: 'operations',
    title: 'Operations & Systems',
    tag: 'Execution',
    summary: 'Repeatable process design, supplier SLA governance, and operational bottleneck removal.',
    skills: [
      'Business Operations',
      'Process Design',
      'Workflow Optimization',
      'Cross-functional Coordination',
      'Execution',
      'Systems Thinking'
    ]
  },
  {
    id: 'product',
    title: 'Product Thinking',
    tag: 'Product Architecture',
    summary: 'User problem discovery, systems architecture, spec critique, and product-led operating loops.',
    skills: [
      'Product Thinking',
      'Product Strategy',
      'Product Discovery',
      'User Problem Analysis',
      'Product Operations',
      'AI Product Thinking'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    tag: 'Modern Leverage',
    summary: 'AI-assisted workflows, agentic experimentation, prompt engineering, and low-code integrations.',
    skills: [
      'AI-assisted workflows',
      'AI research',
      'Workflow automation',
      'Prompt engineering',
      'AI product experimentation',
      'No-code/low-code automation'
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    tag: '0→1 Building',
    summary: 'Rapid hypothesis validation, hands-on commercial execution, and scaling from zero to cash-flow.',
    skills: [
      'Startup Building',
      'Business Validation',
      'Commercial Execution',
      'Problem Solving',
      '0→1 Execution'
    ]
  }
]

const CORE_PILL_CAPABILITIES = [
  'Business Development',
  'Partnerships',
  'Growth Strategy',
  'Revenue Operations',
  'Product Thinking',
  'AI & Automation',
  'Business Operations',
  '0→1 Entrepreneurship'
]

export default function SkillsSection({ skills = {} }) {
  const domains = skills?.domains && skills.domains.length > 0 ? skills.domains : DEFAULT_DOMAINS
  const intro = skills?.intro || 'I work across commercial strategy, growth, operations and product thinking — using technology and AI to turn ideas into executable systems.'

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">09.1 · Skills & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
              Skills & What I Can Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            {intro}
          </p>
        </div>

        {/* Executive Core Capability Pill Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] shadow-2xs reveal-on-scroll">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold mb-4">
            Core Capability Focus Areas
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {CORE_PILL_CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs hover:border-[#2563EB]/40 hover:bg-blue-50/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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
              className="p-6 sm:p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover-card-elevate transition-all duration-200 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E5E7EB] text-[#737984]">
                    {domain.tag || `Domain 0${idx + 1}`}
                  </span>
                  <span className="text-[11px] font-mono text-[#2563EB] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                  {domain.title}
                </h3>

                {domain.summary && (
                  <p className="text-xs text-[#555B66] leading-relaxed">
                    {domain.summary}
                  </p>
                )}
              </div>

              {/* Skills Pill Cloud for this Domain */}
              <div className="pt-4 border-t border-[#E5E7EB]/80">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold mb-3">
                  Applied Competencies
                </div>
                <div className="flex flex-wrap gap-2">
                  {(domain.skills || []).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs hover:border-[#2563EB]/40 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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
