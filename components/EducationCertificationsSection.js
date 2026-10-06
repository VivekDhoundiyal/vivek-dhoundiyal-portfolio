import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight, DocumentIcon } from './Icons'

function CheckBadgeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  )
}

function AcademicCapIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 6.002l7.74 4.145M12 6.002v11.996M4.26 10.147v4.706c0 2.21 3.465 4 7.74 4s7.74-1.79 7.74-4v-4.706M4.26 10.147L2.25 11.22M19.74 10.147l2.01 1.073v5.53" />
    </svg>
  )
}

function ExpandIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
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

export default function EducationCertificationsSection({ education = {}, certifications = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('courses')

  // Certificate source of truth
  const cert = (certifications && certifications[0]) || {}
  const certName = cert.name || 'Google Project Management Professional Certificate'
  const certIssuer = cert.issuer || 'Google · Coursera'
  const certDate = cert.date || 'August 22, 2026'
  const certVerifyUrl = cert.credentialUrl || 'https://coursera.org/verify/professional-cert/3QGWMKPNG7ZR'
  const certId = cert.credentialId || '3QGWMKPNG7ZR'
  const certPdfUrl = cert.pdfUrl || '/certificates/google-project-management-professional-certificate.pdf'
  const certImage = cert.image || '/images/google-project-management-certificate.png'

  const courses = cert.courses || [
    'Foundations of Project Management',
    'Project Initiation: Starting a Successful Project',
    'Project Planning: Putting It All Together',
    'Project Execution: Running the Project',
    'Agile Project Management',
    'Capstone: Applying Project Management in the Real World',
    'Accelerate Your Job Search with AI'
  ]

  const skills = cert.skills || [
    'Traditional & Agile Methodologies',
    'Scrum & Sprint Frameworks',
    'Project Planning & Work Breakdown',
    'Risk Mitigation & Governance',
    'Stakeholder Communication',
    'Resource & Budget Management'
  ]

  // Education data
  const degree = education?.degree || 'B.Tech in Mechanical Engineering'
  const institution = education?.institution || 'Manav Rachna International University'
  const location = education?.location || 'Faridabad, India'
  const period = education?.period || '2014 – 2018'
  const takeaway = education?.takeaway || 'Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems.'

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <section
      id="education-certifications"
      aria-label="Education & Certifications"
      className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative"
    >
      <div id="education" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Editorial & Scannable                */}
        {/* ==================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider">06 · Education &amp; Verified Credentials</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Credentials &amp; Foundation
            </h2>

            <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
              Continuous professional accreditation in modern project leadership and agile frameworks, anchored by a rigorous first-principles engineering background.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#737984] bg-white px-4 py-2 rounded-full border border-[#E5E7EB] shadow-xs self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Professional Credential</span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* SHOWCASE GRID: Primary Certificate + Academic Degree  */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PRIMARY SHOWCASE: Google Project Management Certificate (7 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-9 lg:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-card transition-all duration-300 space-y-8 reveal-on-scroll">
            
            {/* Top Credential Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Credential
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-mono text-[#737984]">ID: {certId}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#555B66] font-medium">Completed: {certDate}</span>
              </div>
            </div>

            {/* Certificate Header & Issuer */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#2563EB]">
                <span>{certIssuer}</span>
                <span>·</span>
                <span>7-Course Professional Program</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                {certName}
              </h3>

              <p className="text-sm text-[#555B66] leading-relaxed">
                Seven-course professional curriculum developed by Google and delivered through Coursera, demonstrating competencies in traditional project frameworks, Agile/Scrum sprints, risk mitigation, and execution governance.
              </p>
            </div>

            {/* Certificate Visual Showcase Preview with Inspect Overlay */}
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Inspect Google Project Management Professional Certificate"
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 border border-[#E5E7EB] shadow-xs cursor-pointer group hover:border-[#2563EB] transition-all duration-300 block text-left"
              title="Click to inspect full certificate in high-resolution modal"
            >
              <Image
                src={certImage}
                alt="Google Project Management Professional Certificate — Vivek Dhoundiyal"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />

              {/* Hover Inspect CTA Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111318] text-xs font-semibold shadow-lg group-hover:scale-105 transition-transform duration-200">
                  <ExpandIcon className="w-4 h-4 text-[#2563EB]" />
                  <span>Inspect Full Certificate (High Resolution)</span>
                </div>
              </div>

              {/* Verified Badge Stamp at Bottom-Right */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-[#E5E7EB] rounded-xl px-3 py-1.5 shadow-xs flex items-center gap-2 pointer-events-none">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-mono font-semibold text-[#111318]">Authentic Google Credential</span>
              </div>
            </button>

            {/* Interactive Curriculum & Competency Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('courses')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'courses'
                      ? 'bg-blue-50 text-[#2563EB] border border-blue-100'
                      : 'text-[#555B66] hover:text-[#111318]'
                  }`}
                >
                  7-Course Curriculum Breakdown
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('skills')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'skills'
                      ? 'bg-blue-50 text-[#2563EB] border border-blue-100'
                      : 'text-[#555B66] hover:text-[#111318]'
                  }`}
                >
                  Core Competencies
                </button>
              </div>

              {activeTab === 'courses' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {courses.map((course, idx) => (
                    <div 
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-[#E5E7EB] flex items-start gap-2.5 hover:border-slate-300 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2563EB] text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-medium text-[#111318] leading-snug">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 pt-1">
                  {skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-50 border border-[#E5E7EB] text-[#111318]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111318] hover:bg-[#2563EB] text-white text-xs font-semibold shadow-xs transition-colors duration-200 cursor-pointer"
              >
                <ExpandIcon className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={certVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-blue-700 transition-colors group"
                >
                  <span>Verify on Coursera</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="text-slate-300">·</span>

                <a
                  href={certPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#555B66] hover:text-[#111318] transition-colors"
                >
                  <DocumentIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>PDF Document</span>
                </a>
              </div>
            </div>

          </div>

          {/* SECONDARY SHOWCASE: Academic Education (4 Cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-card space-y-6 reveal-on-scroll delay-100">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-100">
                ACADEMIC DEGREE
              </span>
              <span className="text-xs font-mono text-[#737984]">{period}</span>
            </div>

            {/* University & Degree */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shadow-2xs">
                <AcademicCapIcon className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-bold tracking-tight text-[#111318]">
                  {degree}
                </h4>
                <div className="text-sm font-semibold text-[#2563EB] pt-0.5">
                  {institution}
                </div>
                <div className="text-xs font-mono text-[#737984] pt-0.5">
                  {location}
                </div>
              </div>
            </div>

            {/* Engineering Takeaway */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-[#E5E7EB] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                Engineering Principle
              </span>
              <p className="text-xs text-[#555B66] leading-relaxed italic">
                "{takeaway}"
              </p>
            </div>

            {/* Verification Note */}
            <div className="pt-2 text-[11px] font-mono text-[#737984] flex items-center justify-between border-t border-slate-100">
              <span>Degree Status</span>
              <span className="text-emerald-700 font-semibold">Graduated / Verified</span>
            </div>

          </div>

        </div>

      </div>

      {/* ==================================================== */}
      {/* FULL-SCREEN LIGHTBOX MODAL: Inspect Certificate       */}
      {/* ==================================================== */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Google Project Management Certificate Lightbox"
        >
          <div 
            className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-700/30 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between flex-shrink-0 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold leading-tight">
                    {certName}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Issued to Vivek Dhoundiyal · Completed {certDate} · ID: {certId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={certVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  <span>Verify on Coursera</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Scroll Area */}
            <div className="p-4 sm:p-8 bg-[#F3F4F6] overflow-auto flex items-center justify-center flex-1">
              <div className="relative w-full max-w-4xl rounded-xl shadow-xl overflow-hidden bg-white border border-slate-200">
                <Image
                  src={certImage}
                  alt="Google Project Management Certificate — Full High Resolution View"
                  width={2200}
                  height={1700}
                  className="w-full h-auto object-contain select-none"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-white border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#555B66] flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Verification URL: <a href={certVerifyUrl} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline font-semibold">{certVerifyUrl}</a></span>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href={certPdfUrl} 
                  download="Google-Project-Management-Certificate-Vivek-Dhoundiyal.pdf"
                  className="text-[#2563EB] hover:underline font-semibold"
                >
                  Download Official PDF
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#111318] font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
