import React from 'react'

export default function ProofStrip({ proof = {} }) {
  const items = proof.items || [
    { value: '8+ Years', label: 'Commercial Execution', sub: 'B2B sales, revenue architecture & deal closing' },
    { value: '3+ Ventures', label: 'Built & Operated', sub: 'Automotive marketplace, B2B food supply & distribution' },
    { value: 'Enterprise BD', label: 'Consultative Selling', sub: 'CollegeDunia & KreedOn institutional accounts' },
    { value: 'Operations', label: 'Supply Systems', sub: 'Farm-to-kitchen routes & workshop networks' },
    { value: 'AI Workflows', label: 'Systems & Tools', sub: 'Agentic pipelines, n8n automations & CareerOS' }
  ]

  return (
    <section aria-label="Credentials & Track Record" className="border-y border-[#E5E7EB] bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-1 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111318]">
                {item.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                {item.label}
              </div>
              <p className="text-xs text-[#555B66] leading-relaxed pt-0.5">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
