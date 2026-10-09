import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getToolBrandLogo } from './BrandLogos'

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

function GraduationCapIcon({ className = "w-7 h-7", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557q0 .02.001.04" />
    </svg>
  )
}

export default function EducationCertificationsSection({ education = {}, certifications = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeToolTab, setActiveToolTab] = useState('All')

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

  // Tool categories grouped by practical use
  const toolGroups = [
    {
      group: 'AI & Reasoning',
      tools: [
        { id: 'chatgpt', name: 'ChatGPT' },
        { id: 'claude', name: 'Claude' },
        { id: 'gemini', name: 'Gemini' },
        { id: 'perplexity', name: 'Perplexity' },
        { id: 'claude-code', name: 'Cursor / Claude Code' }
      ]
    },
    {
      group: 'Sales & CRM',
      tools: [
        { id: 'hubspot', name: 'HubSpot' },
        { id: 'zoho-crm', name: 'Zoho CRM' },
        { id: 'linkedin', name: 'LinkedIn Sales Nav' },
        { id: 'apollo', name: 'Apollo.io' }
      ]
    },
    {
      group: 'Automation & Ops',
      tools: [
        { id: 'make', name: 'Make' },
        { id: 'zapier', name: 'Zapier' },
        { id: 'n8n', name: 'n8n' },
        { id: 'airtable', name: 'Airtable' }
      ]
    },
    {
      group: 'Productivity & Design',
      tools: [
        { id: 'notion', name: 'Notion' },
        { id: 'clickup', name: 'ClickUp' },
        { id: 'figma', name: 'Figma' },
        { id: 'slack', name: 'Slack' },
        { id: 'google-workspace', name: 'Google Workspace' }
      ]
    },
    {
      group: 'Systems & Analytics',
      tools: [
        { id: 'python', name: 'Python' },
        { id: 'web-systems', name: 'Web Applications' },
        { id: 'design-systems', name: 'Design Systems' },
        { id: 'analytics', name: 'Google Analytics 4' },
        { id: 'microsoft-excel', name: 'Advanced Excel' }
      ]
    }
  ]

  // ESC handler for certificate modal
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
      id="education"
      aria-label="Education & Credentials"
      className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative scroll-mt-16"
    >
      <div id="education-certifications" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
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
              <span className="text-[#2563EB]">Foundation, accreditation &amp; tooling.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              A rigorous engineering background complemented by official Google Project Management certification and modern tooling systems.
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
                B.Tech + Google PM
              </div>
              <p className="text-[11px] text-[#737984]">
                Engineering foundation &amp; agile leadership
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* CARD 1: B.TECH MECHANICAL ENGINEERING (PROMINENT HORIZONTAL) */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all duration-300 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
          <div className="space-y-3 max-w-xl">
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
              Trained in thermodynamic systems modeling, analytical calculus, and physical manufacturing constraints. Instilled a disciplined first-principles mindset and systems decomposition rigor that guides software and business architecture today.
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
        {/* CARD 2: GOOGLE PM PROFESSIONAL CERTIFICATE CARD     */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
          <div className="space-y-2.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                PROFESSIONAL CERTIFICATION · 2024
              </span>
              <span className="text-xs font-mono text-[#737984]">
                Credential ID: 3QGWMKPNG7ZR
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                Google Project Management Professional Certificate
              </h3>
              <p className="text-xs font-semibold text-slate-700">
                Issued by Google · Authorized via Coursera
              </p>
            </div>

            <p className="text-xs text-[#555B66] leading-relaxed">
              6-course specialization covering agile sprint planning, scrum ceremonies, project charters, risk mitigation matrices, and stakeholder communication cadences.
            </p>
          </div>

          {/* Certificate Action & Preview */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-[#2563EB] border border-slate-200/90 font-semibold text-xs flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <span>View Certificate</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </button>

            <a
              href={certVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-500 hover:text-slate-900 underline"
            >
              Verify Online →
            </a>
          </div>
        </div>

        {/* ==================================================== */}
        {/* SUBSECTION 3: TOOLS & TECHNOLOGIES STACK             */}
        {/* Grouped by practical use: AI, Sales, Automation, etc */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-9 shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <h3 className="text-xl font-bold text-[#111318]">
                  Tools &amp; Operating Systems
                </h3>
              </div>
              <p className="text-xs text-[#737984] pt-0.5">
                Software stack grouped by practical commercial and engineering utility.
              </p>
            </div>

            {/* Speech bubble avatar callout */}
            <div className="flex items-center gap-3 bg-blue-50/70 border border-blue-200/80 px-3.5 py-2 rounded-2xl">
              <div className="relative w-8 h-10 flex-shrink-0">
                <Image
                  src="/images/avatars/avatar-laptop-thumbsup.png"
                  alt="Vivek thumbs up with laptop"
                  width={298}
                  height={435}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xs font-medium text-blue-900">
                Tools that help me build faster ⚡
              </span>
            </div>
          </div>

          {/* 5 Group Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {toolGroups.map((tg) => (
              <div
                key={tg.group}
                className="p-4 rounded-2xl bg-[#FAFAF8] border border-slate-200/70 space-y-3"
              >
                <div className="text-xs font-bold text-[#111318] border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>{tg.group}</span>
                  <span className="text-[10px] font-mono text-[#737984]">{tg.tools.length}</span>
                </div>

                <div className="space-y-1.5">
                  {tg.tools.map((tool) => (
                    <div
                      key={tool.id}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/60 text-xs font-medium text-slate-700 shadow-2xs hover:border-blue-300 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-[#111318]">
                  Google Project Management Professional Certificate
                </h3>
                <p className="text-xs text-[#737984]">
                  Official verified credential document
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={certVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-blue-50 text-[#2563EB] text-xs font-semibold hover:bg-blue-100"
                >
                  Verify URL
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
              <Image
                src={certImage}
                alt="Google Project Management Certificate"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
