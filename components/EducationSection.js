import React from 'react'

export default function EducationSection({ education = {} }) {
  const degree = education.degree || 'B.Tech in Mechanical Engineering'
  const institution = education.institution || 'Manav Rachna International University'
  const location = education.location || 'Faridabad, India'
  const period = education.period || '2014 – 2018'
  const summary = education.summary || 'Rigorous engineering foundation grounded in physical systems, mathematical modeling, thermodynamics, and modular systems analysis.'
  const takeaway = education.takeaway || 'Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems.'

  return (
    <section id="education" aria-label="Education Background" className="py-16 sm:py-20 border-t border-[#E5E7EB] bg-white text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-8 reveal-on-scroll">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>13 · ACADEMIC GROUNDING</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111318]">
              {degree}
            </h3>

            <div className="text-sm font-semibold text-[#555B66]">
              {institution} · {location}
            </div>

            <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
              {summary}
            </p>
          </div>

          <div className="md:border-l md:border-[#E5E7EB] md:pl-8 space-y-2 max-w-md">
            <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
              Analytical Foundation ({period})
            </span>
            <p className="text-xs text-[#555B66] italic leading-relaxed">
              "{takeaway}"
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
