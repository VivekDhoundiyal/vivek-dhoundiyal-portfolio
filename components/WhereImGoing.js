import React from 'react'

export default function WhereImGoing({ whereImGoing = {} }) {
  const eyebrow = whereImGoing?.eyebrow || 'FUTURE DIRECTION'
  const title = whereImGoing?.title || "Where I'm going next"
  const narrative = whereImGoing?.narrative || "My career has moved from engineering and commercial execution into business development, entrepreneurship, growth and operations. I'm now increasingly focused on technology, AI and product building — using my commercial background to approach products from both the customer and business side."

  const stages = whereImGoing?.stages || [
    {
      label: 'Current',
      role: 'Revenue / Business Development / Growth / Operations',
      desc: 'Ground-level customer acquisition, commercial negotiation, partnership structures, and operational execution.',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200'
    },
    {
      label: 'Evolving',
      role: 'Technology / AI Workflows / Products',
      desc: 'Building software tools like CareerOS and automating operational workflows through modern systems.',
      badgeColor: 'bg-blue-50 text-signal-blue border-blue-200'
    },
    {
      label: 'Future Horizon',
      role: 'Commercial Software Products & Applied AI Systems',
      desc: 'Applying commercial rigor, systems design, and AI automation to high-impact business products.',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ]

  return (
    <section id="where-im-going" className="py-24 sm:py-32 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-600 font-semibold">
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            {narrative}
          </p>
        </div>

        {/* 3-Stage Evolution Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stg, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-card hover:border-blue-500/40 flex flex-col justify-between space-y-6 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider border ${stg.badgeColor}`}>
                    {stg.label}
                  </span>
                  <span className="text-xs font-mono text-[#737984]">PHASE 0{idx + 1}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111318]">
                  {stg.role}
                </h3>

                <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                  {stg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#737984]">
                {idx === 0 ? 'Verified Foundation' : idx === 1 ? 'Active Building' : 'Future Horizon'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
