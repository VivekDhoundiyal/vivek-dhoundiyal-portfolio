import React, { useState } from 'react'
import { ArrowUpRight } from './Icons'

function AcademicCapIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 6.002l7.74 4.145M12 6.002v11.996M4.26 10.147v4.706c0 2.21 3.465 4 7.74 4s7.74-1.79 7.74-4v-4.706M4.26 10.147L2.25 11.22M19.74 10.147l2.01 1.073v5.53" />
    </svg>
  )
}

function CertificateBadgeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  )
}

function DocumentIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

export default function EducationCertificationsSection({ education = {}, certifications = [] }) {
  const [expandedCertId, setExpandedCertId] = useState(null)

  const degree = education?.degree || 'B.Tech in Mechanical Engineering'
  const institution = education?.institution || 'Manav Rachna International University'
  const location = education?.location || 'Faridabad, India'
  const period = education?.period || '2014 – 2018'
  const summary = education?.summary || 'Rigorous engineering foundation grounded in physical systems, mathematical modeling, thermodynamics, and modular systems analysis.'
  const takeaway = education?.takeaway || 'Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems.'

  const toggleExpand = (id) => {
    setExpandedCertId(prev => prev === id ? null : id)
  }

  return (
    <section
      id="education-certifications"
      aria-label="Education & Certifications"
      className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative"
    >
      {/* Anchor alias for legacy links */}
      <div id="education" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ==================================================== */}
        {/* MAIN SECTION HEADER                                  */}
        {/* ==================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>06 · ACADEMIC FOUNDATION & CONTINUOUS LEARNING</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
              Education & Certifications
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              A dual foundation of rigorous mechanical engineering principles paired with continuous professional accreditation in modern project leadership and agile frameworks.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737984] bg-white px-3.5 py-2 rounded-xl border border-[#E5E7EB] self-start md:self-auto shadow-xs">
            [ Verified Academic & Professional Records ]
          </div>
        </div>

        {/* ==================================================== */}
        {/* SUBSECTION 01: EDUCATION                             */}
        {/* ==================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-[#E5E7EB]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              01 — EDUCATION
            </span>
            <span className="text-xs font-mono text-[#737984]">
              (Academic Grounding)
            </span>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-8 reveal-on-scroll">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                  <AcademicCapIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                    Undergraduate Degree · Education Only
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111318]">
                    {institution}
                  </h3>
                </div>
              </div>

              <div className="text-base font-semibold text-[#2563EB]">
                {degree}
              </div>

              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed pt-1">
                {summary}
              </p>
            </div>

            <div className="lg:border-l lg:border-[#E5E7EB] lg:pl-8 space-y-3 max-w-md flex-shrink-0">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#737984] uppercase">Tenure:</span>
                <span className="font-semibold text-[#111318]">{period}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#737984] uppercase">Location:</span>
                <span className="font-semibold text-[#111318]">{location}</span>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block mb-1">
                  Core Takeaway
                </span>
                <p className="text-xs text-[#555B66] italic leading-relaxed">
                  "{takeaway}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* SUBSECTION 02: CERTIFICATIONS                        */}
        {/* ==================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                02 — CERTIFICATIONS
              </span>
              <span className="text-xs font-mono text-[#737984]">
                (Continued Professional Development)
              </span>
            </div>
            <span className="text-xs font-mono text-[#737984]">
              {certifications.length} {certifications.length === 1 ? 'Credential' : 'Credentials'}
            </span>
          </div>

          {certifications && certifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {certifications.map((cert, idx) => {
                const isExpanded = expandedCertId === cert.id
                return (
                  <div
                    key={cert.id || idx}
                    className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-slate-300 shadow-xs flex flex-col justify-between space-y-6 transition-all duration-200 reveal-on-scroll delay-${(idx + 1) * 100}`}
                  >
                    <div className="space-y-4">
                      {/* Top Badge Strip */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <CertificateBadgeIcon className="w-4 h-4 text-emerald-600" />
                          <span className="text-[11px] font-mono font-semibold uppercase text-emerald-700">
                            {cert.status || 'Verified Credential'}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#737984]">
                          {cert.date ? `Completed ${cert.date}` : 'Completed'}
                        </span>
                      </div>

                      {/* Header & Issuer */}
                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111318] leading-snug">
                          {cert.name}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                          Issued by: {cert.issuer}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills / Topics Covered */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
                            Skills & Topics Covered:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {cert.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#111318]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Additional Details Toggle (Credential ID, Certificate File) */}
                      {(cert.credentialId || cert.certificateFile || cert.certificateUrl) && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => toggleExpand(cert.id)}
                            className="text-xs font-mono text-[#737984] hover:text-[#111318] transition-colors inline-flex items-center gap-1"
                          >
                            <span>{isExpanded ? 'Hide Credential Details −' : 'Show Credential Details +'}</span>
                          </button>

                          {isExpanded && (
                            <div className="mt-3 p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-2 text-xs font-mono">
                              {cert.credentialId && (
                                <div className="flex items-center justify-between text-[#555B66]">
                                  <span>Credential ID:</span>
                                  <span className="font-semibold text-[#111318] truncate max-w-[200px]">{cert.credentialId}</span>
                                </div>
                              )}
                              {(cert.certificateFile || cert.certificateUrl) && (
                                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                                  <span>Certificate File:</span>
                                  <a
                                    href={cert.certificateFile || cert.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#2563EB] hover:underline font-semibold"
                                  >
                                    <DocumentIcon className="w-3.5 h-3.5" />
                                    <span>View Certificate</span>
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer Action Links */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-700 transition-colors group"
                        >
                          <span>View Credential</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-[#737984]">
                          Credential on file
                        </span>
                      )}

                      {cert.credentialId && !isExpanded && (
                        <span className="text-[11px] font-mono text-[#737984] truncate max-w-[150px]">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="p-10 rounded-2xl bg-white border border-dashed border-[#E5E7EB] text-center space-y-2">
              <CertificateBadgeIcon className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-mono text-[#737984]">
                Professional certifications will be added here.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
