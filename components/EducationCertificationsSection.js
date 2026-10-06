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

function MechanicalCompassIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="7" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v2m-5 9l3.5-7m6.5 7l-3.5-7m-5 3h7" />
    </svg>
  )
}

function TechnicalGearIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function EducationCertificationsSection({ education = {}, certifications = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const googleCert = (certifications && certifications.length > 0)
    ? certifications[0]
    : {
        id: 'google-project-management',
        name: 'Google Project Management Professional Certificate',
        issuer: 'Google · Coursera',
        date: 'Completed 2024',
        credentialId: '3QGWMKPNG7ZR',
        credentialUrl: 'https://coursera.org/verify/professional-cert/3QGWMKPNG7ZR',
        image: '/images/google-project-management-certificate.png',
        pdfUrl: '/certificates/google-project-management-professional-certificate.pdf'
      }

  const certImage = googleCert.image || '/images/google-project-management-certificate.png'
  const certVerifyUrl = googleCert.credentialUrl || 'https://coursera.org/verify/professional-cert/3QGWMKPNG7ZR'
  const certPdfUrl = googleCert.pdfUrl || '/certificates/google-project-management-professional-certificate.pdf'

  const courses = [
    'Foundations of Project Management',
    'Project Initiation: Starting a Successful Project',
    'Project Planning: Putting It All Together',
    'Project Execution: Running the Project',
    'Agile Project Management',
    'Capstone: Applying Project Management in the Real World'
  ]

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
        setZoomLevel(1)
      }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Editorial & Scannable                */}
        {/* ==================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">06 · Credentials &amp; Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Credentials &amp; Foundation
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#555B66] max-w-md leading-relaxed font-normal">
            Continuous professional accreditation in modern project leadership and agile frameworks, anchored by a rigorous first-principles engineering background.
          </p>
        </div>

        {/* ==================================================== */}
        {/* ROW 1: B.TECH MECHANICAL ENGINEERING (FULL WIDTH)    */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all duration-300 overflow-hidden relative reveal-on-scroll bg-blueprint-grid">
          
          {/* Subtle Technical Engineering Accent Watermark */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block">
            <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
              <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <path d="M25 25 L75 75 M25 75 L75 25" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="p-7 sm:p-9 lg:p-10 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left: Engineering Identity & Institution */}
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  UNDERGRADUATE DEGREE · 2014–2018
                </span>
                <span className="text-xs font-mono text-[#737984]">
                  Faridabad, India
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]">
                  B.Tech in Mechanical Engineering
                </h3>
                <p className="text-sm font-semibold text-[#555B66] mt-0.5">
                  Manav Rachna International University
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#737984] leading-relaxed">
                Trained in mechanical systems, thermodynamics, and physical constraints. Established a baseline of first-principles logic and system decomposition.
              </p>
            </div>

            {/* Center: Engineering Focus Tags & Schematic Icon */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0 shadow-2xs">
                <MechanicalCompassIcon className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  Core Engineering Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
                    Systems Logic
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
                    Mechanics
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-[#E5E7EB] text-[#111318] shadow-2xs">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Graduated Verified Stamp */}
            <div className="lg:border-l lg:border-slate-200/80 lg:pl-8 flex items-center lg:flex-col lg:items-end justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-2xs">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                <span>GRADUATED ✓</span>
              </div>
              <span className="text-[10.5px] font-mono text-[#737984]">
                Verified 4-Year B.Tech
              </span>
            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* ROW 2: GOOGLE PROJECT MANAGEMENT CERTIFICATE (HERO)  */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all duration-300 p-6 sm:p-9 lg:p-10 reveal-on-scroll">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: LARGE CERTIFICATE IMAGE (Takes 58% of width on lg screens) */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden glass-frame transition-all duration-300 hover:scale-[1.015] hover:shadow-xl hover:border-[#2563EB]/50"
                title="Click to inspect full Google Project Management certificate in fullscreen lightbox"
              >
                <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-2 sm:p-3">
                  <Image
                    src={certImage}
                    alt="Google Project Management Professional Certificate — Vivek Dhoundiyal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                  
                  {/* Subtle Glass Hover Inspect Badge */}
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111318] text-xs font-semibold shadow-lg group-hover:scale-105 transition-transform duration-200">
                      <ExpandIcon className="w-4 h-4 text-[#2563EB]" />
                      <span>Click to Inspect Fullscreen (Zoom &amp; Verify)</span>
                    </div>
                  </div>

                  {/* Corner Authentic Beacon */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-[#E5E7EB] rounded-xl px-2.5 py-1 shadow-xs flex items-center gap-1.5 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-[#111318]">Authentic Google Credential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CREDENTIAL METADATA & ACTIONS (Takes 42% of width) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Credential ✓</span>
                </div>
                <span className="text-xs font-mono text-[#737984]">
                  Completed 2024
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                  Google · Coursera Professional Certificate
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] leading-tight">
                  Google Project Management Certificate
                </h3>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                  Demonstrating competencies in project initiation, Agile and Scrum sprints, risk mitigation, and executive documentation governance.
                </p>
              </div>

              {/* 7-Course Curriculum Preview */}
              <div className="space-y-2 pt-1">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  7-Course Professional Curriculum
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FAFAF8] border border-[#E5E7EB] text-[11px] text-[#111318] flex items-center gap-2 truncate"
                    >
                      <span className="text-[9.5px] font-mono text-[#2563EB] font-bold">0{idx + 1}</span>
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credential ID & Actions */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#737984] p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span>ID: <strong className="text-[#111318]">{googleCert.credentialId}</strong></span>
                  <a
                    href={certVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Verify on Coursera</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Inspect Google Project Management Professional Certificate"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111318] hover:bg-[#2563EB] text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <ExpandIcon className="w-3.5 h-3.5" />
                    <span>View Certificate Fullscreen</span>
                  </button>

                  <a
                    href={certPdfUrl}
                    download="Google-Project-Management-Professional-Certificate-Vivek-Dhoundiyal.pdf"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-slate-50 text-xs font-semibold text-[#111318] transition-colors"
                  >
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ==================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL WITH ZOOM & VERIFY         */}
      {/* ==================================================== */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Inspector Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setIsModalOpen(false)
            setZoomLevel(1)
          }}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-700/50 flex flex-col overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    Google Project Management Professional Certificate
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Issued to Vivek Dhoundiyal · ID: {googleCert.credentialId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.2))}
                    className="px-2 py-0.5 text-xs text-slate-300 hover:text-white rounded"
                    title="Zoom Out"
                  >
                    −
                  </button>
                  <span className="text-[11px] font-mono text-slate-300 px-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(prev => Math.min(2.0, prev + 0.2))}
                    className="px-2 py-0.5 text-xs text-slate-300 hover:text-white rounded"
                    title="Zoom In"
                  >
                    +
                  </button>
                </div>

                <a
                  href={certVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] hover:bg-blue-600 text-white transition-colors"
                >
                  <span>Verify on Coursera</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    setZoomLevel(1)
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: High Resolution Certificate Image */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center min-h-[350px]">
              <div 
                className="relative max-w-full transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={certImage}
                  alt="Official Google Project Management Certificate — Full Resolution"
                  className="max-h-[70vh] w-auto rounded-lg shadow-md border border-slate-300"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3 bg-white border-t border-slate-200 text-xs">
              <span className="font-mono text-slate-500">
                Official Credential Verification: <a href={certVerifyUrl} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline font-bold">{googleCert.credentialId}</a>
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={certPdfUrl}
                  download="Google-Project-Management-Professional-Certificate-Vivek-Dhoundiyal.pdf"
                  className="text-slate-700 hover:text-[#2563EB] font-medium"
                >
                  Download PDF Copy
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    setZoomLevel(1)
                  }}
                  className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
