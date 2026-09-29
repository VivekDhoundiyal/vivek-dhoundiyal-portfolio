import React from 'react'
import { ArrowUpRight, CheckIcon } from './Icons'

export default function CertificationsSection({ certifications = [] }) {
  const list = certifications.length > 0 ? certifications : [
    {
      id: 'google-pm',
      name: 'Google Project Management Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2024',
      credentialId: 'Verified Professional Credential',
      credentialUrl: 'https://coursera.org/share/67ea64a2fef42c262142277d33b497fe',
      status: 'Verified',
      description: 'Comprehensive professional curriculum covering project initiation, planning, execution, Agile and Scrum frameworks, documentation, risk mitigation, and stakeholder management.',
      skills: ['Agile & Scrum', 'Project Planning', 'Risk Mitigation', 'Stakeholder Alignment', 'Documentation & PRDs', 'Sprint Cadences']
    }
  ]

  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-white text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal-on-scroll">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span>11 · VERIFIED CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Certifications & Continuous Learning
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Structured professional certifications reinforcing systems thinking, cross-functional project execution, and operational discipline.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984]">
            [ Cryptographically verified credentials ]
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((cert, idx) => (
            <div
              key={cert.id}
              className={`p-8 sm:p-10 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-slate-300 shadow-xs flex flex-col justify-between space-y-6 reveal-on-scroll delay-${(idx + 1) * 100}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-semibold uppercase text-emerald-700">
                      {cert.status || 'Verified Credential'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#737984]">
                    Completed {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111318]">
                    {cert.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#2563EB]">
                    Issuing Authority: {cert.issuer}
                  </div>
                </div>

                <p className="text-sm text-[#555B66] leading-relaxed font-normal">
                  {cert.description}
                </p>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
                      Core Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white border border-[#E5E7EB] text-[#111318]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    <span>Inspect Verified Certificate Record</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#737984]">Certificate on file</span>
                )}
                <span className="text-xs font-mono text-[#737984]">
                  {cert.credentialId}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
