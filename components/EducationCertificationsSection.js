import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function CheckCircleIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ArrowUpRightIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}

function CloseIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function EyeIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function GraduationCapIcon({ className = "w-7 h-7", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557q0 .02.001.04" />
    </svg>
  )
}

const DEFAULT_CERTIFICATIONS = [
  {
    id: 'google-pm',
    name: 'Google Project Management Professional Certificate',
    issuer: 'Google · Coursera',
    date: 'August 22, 2026',
    credentialId: '3QGWMKPNG7ZR',
    credentialUrl: 'https://coursera.org/verify/professional-cert/3QGWMKPNG7ZR',
    status: 'Verified Credential',
    image: '/images/google-project-management-certificate.png',
    badge: 'GOOGLE · COURSERA',
    description: 'Comprehensive seven-course professional curriculum developed by Google, covering agile sprint planning, scrum ceremonies, project charters, risk mitigation matrices, and stakeholder communication cadences.',
    skills: ['Agile & Scrum', 'Project Planning', 'Risk Mitigation', 'Stakeholder Cadences']
  },
  {
    id: 'innovation-management-leeds',
    name: 'Innovation Management: Winning in the Age of Disruption',
    issuer: 'University of Leeds · FutureLearn',
    date: 'December 4, 2017',
    credentialId: 'qrf9auc',
    credentialUrl: 'https://www.futurelearn.com/certificates/qrf9auc',
    status: 'Verified Credential',
    image: '/images/innovation-management-certificate.png',
    badge: 'UNIVERSITY OF LEEDS · FUTURELEARN',
    description: 'CPD certified executive program on leading innovation initiatives, managing disruptive business models, and building structured value propositions in competitive markets.',
    skills: ['Disruptive Innovation', 'Business Models', 'Value Propositions', 'Strategy Execution']
  },
  {
    id: 'data-science-101-ibm',
    name: 'Data Science 101',
    issuer: 'Cognitive Class · IBM',
    date: 'January 2, 2018',
    credentialId: '9f04e63a-1e2c-4c6e-997f-821d12350f1f',
    credentialUrl: 'https://www.credly.com/badges/9f04e63a-1e2c-4c6e-997f-821d12350f1f/linked_in_profile',
    status: 'Verified Credential',
    image: '/images/data-science-101-certificate.png',
    badge: 'COGNITIVE CLASS · IBM',
    description: 'Foundational curriculum covering data science methodologies, exploratory data analysis, machine learning taxonomies, predictive modeling, and data-backed business decisions.',
    skills: ['Data Science', 'Exploratory Analysis', 'Machine Learning', 'Predictive Modeling']
  }
]

export default function EducationCertificationsSection({ education = {}, certifications = [] }) {
  const [activeModalCert, setActiveModalCert] = useState(null)

  const certList = (certifications && certifications.length >= 3)
    ? certifications
    : DEFAULT_CERTIFICATIONS

  // ESC key handler for certificate lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalCert(null)
    }
    if (activeModalCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeModalCert])

  return (
    <section
      id="education"
      aria-label="Education & Credentials"
      className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative scroll-mt-16"
    >
      <div id="education-certifications" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + Winking Thumbs-up Avatar     */}
        {/* ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">04 · EDUCATION &amp; CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
              Education &amp; Credentials<br />
              <span className="text-[#2563EB]">Foundation, accreditation &amp; continuous learning.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-2xl leading-relaxed font-normal pt-1">
              A disciplined mechanical engineering degree combined with verified executive credentials across agile project leadership from Google, disruptive innovation from the University of Leeds, and foundational data science from IBM.
            </p>
          </div>

          {/* Right Callout: Winking Thumbs-up Avatar */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-blue-300 transition-all">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 animate-float-medium">
              <Image
                src="/images/avatars/avatar-thumbsup-winking.png"
                alt="Vivek giving winking thumbs up for credentials"
                width={284}
                height={465}
                className="object-contain w-full h-full drop-shadow-sm"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Verified Credentials
              </span>
              <div className="text-xs font-bold text-[#111318]">
                B.Tech + 3 Accreditations
              </div>
              <p className="text-[11px] text-[#737984]">
                Engineering, Agile, Strategy &amp; Data
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* DEGREE CARD: B.TECH MECHANICAL ENGINEERING           */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all duration-300 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                UNDERGRADUATE DEGREE · 2014–2018
              </span>
              <span className="text-xs font-mono text-[#737984]">
                Faridabad, India
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                B.Tech in Mechanical Engineering
              </h3>
              <p className="text-sm font-semibold text-slate-700 pt-0.5">
                Manav Rachna International University
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
              Trained in thermodynamic systems modeling, analytical calculus, and physical manufacturing constraints. Instilled a disciplined first-principles mindset and systems decomposition rigor that guides business architecture and commercial execution today.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shadow-xs">
              <GraduationCapIcon className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#111318] block">4-Year Degree</span>
              <span className="text-[11px] font-mono text-[#737984] block">Systems &amp; Thermodynamics</span>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* SUBSECTION: VERIFIED CERTIFICATES & ACCREDITATIONS   */}
        {/* ==================================================== */}
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E7EB] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111318]">
                Verified Certifications &amp; Accreditations
              </h3>
            </div>
            <span className="text-xs font-mono text-[#737984]">
              3 Industry Certifications · Verifiable Online
            </span>
          </div>

          {/* 3-CARD RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certList.map((cert) => {
              const badgeText = cert.badge || cert.issuer.toUpperCase()
              return (
                <div
                  key={cert.id}
                  className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between p-6 group"
                >
                  <div className="space-y-4">
                    {/* Card Header: Category & Verified Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 truncate">
                        {badgeText}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                        <CheckCircleIcon className="w-3 h-3 text-emerald-600" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Interactive Certificate Thumbnail */}
                    <div
                      onClick={() => setActiveModalCert(cert)}
                      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 flex items-center justify-center cursor-pointer group/thumb hover:border-blue-300 transition-all shadow-xs"
                      title="Click to view full certificate"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain p-2 group-hover/thumb:scale-[1.03] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover/thumb:bg-slate-900/30 transition-colors flex items-center justify-center opacity-0 group-hover/thumb:opacity-100">
                        <span className="px-3 py-1.5 rounded-xl bg-white/95 text-[#111318] text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-1 group-hover/thumb:translate-y-0 transition-transform">
                          <EyeIcon className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>View Certificate</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-700 pt-1">
                        {cert.issuer}
                      </p>
                      {cert.date && (
                        <p className="text-[11px] font-mono text-[#737984] pt-0.5">
                          {cert.date}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#555B66] leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills / Key Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Bar (Pinned to Card Foot) */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalCert(cert)}
                      className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-[#2563EB] border border-slate-200 hover:border-blue-200 font-semibold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <EyeIcon className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#2563EB] hover:underline transition-colors group/link"
                      >
                        <span>Verify Credential</span>
                        <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* ==================================================== */}
      {/* INTERACTIVE CERTIFICATE LIGHTBOX MODAL               */}
      {/* ==================================================== */}
      {activeModalCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalCert.name}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl p-5 sm:p-7 flex flex-col space-y-4 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
              <div className="space-y-1 pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    {activeModalCert.issuer}
                  </span>
                  {activeModalCert.credentialId && (
                    <span className="text-[11px] font-mono text-[#737984]">
                      ID: {activeModalCert.credentialId}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#111318] leading-snug">
                  {activeModalCert.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {activeModalCert.credentialUrl && (
                  <a
                    href={activeModalCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-[52vh] sm:h-[62vh] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-3">
              <Image
                src={activeModalCert.image}
                alt={activeModalCert.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer: Quick Switcher Between All 3 Certificates */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] font-mono text-slate-400 mr-1 flex-shrink-0">Switch:</span>
                {certList.map((c) => {
                  const isActive = c.id === activeModalCert.id
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveModalCert(c)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex-shrink-0 ${
                        isActive
                          ? 'bg-[#2563EB] text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {c.name.includes('Google')
                        ? 'Google PM'
                        : c.name.includes('Innovation')
                        ? 'Innovation Mgmt'
                        : 'Data Science 101'}
                    </button>
                  )
                })}
              </div>

              {activeModalCert.credentialUrl && (
                <a
                  href={activeModalCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-500 hover:text-[#2563EB] underline truncate"
                >
                  {activeModalCert.credentialUrl}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
