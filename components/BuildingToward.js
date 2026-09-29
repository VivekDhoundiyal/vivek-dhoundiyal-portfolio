import React from 'react'

export default function BuildingToward({ buildingToward = {} }) {
  const eyebrow = buildingToward.eyebrow || "STRATEGIC HORIZONS"
  const title = buildingToward.title || "Where I'm Heading"
  const narrative = buildingToward.narrative || "My foundation began in engineering and evolved through 8+ years of 0→1 entrepreneurship, enterprise B2B sales, revenue architecture, and commercial operations. Today, I am channeling that commercial leverage into technology, automated business systems, AI workflows, and digital software products."
  
  const focusAreas = buildingToward.focusAreas || [
    {
      title: 'Commercial Software & Products',
      desc: 'Architecting utility products like CareerOS that eliminate friction in complex human workflows through intuitive interfaces and intelligent automation.'
    },
    {
      title: 'Applied AI & Workflow Automation',
      desc: 'Deploying LLM prompt chaining, webhook automations (n8n, Make), and deterministic schemas to eradicate repetitive commercial drag.'
    },
    {
      title: 'Scalable Business Systems',
      desc: 'Engineering repeatable commercial machines where revenue generation, partner onboarding, and customer retention run with predictable velocity.'
    }
  ]

  return (
    <section id="building-toward" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            {narrative}
          </p>
        </div>

        {/* 3 Strategic Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-4 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between reveal-on-scroll delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <span className="text-xs font-mono font-semibold text-[#2563EB]">
                    HORIZON 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#111318]">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] text-[11px] font-mono text-[#737984]">
                Active Technical Evolution
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
