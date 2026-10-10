import React, { useState } from 'react'
import Link from 'next/link'
import { DownloadIcon, ArrowUpRight, CheckIcon } from './Icons'

export default function DigitalResume({ siteData = {} }) {
  const profile = siteData?.profile || {}
  const experience = siteData?.experience || {}
  const nodes = experience?.nodes || []
  const resumes = siteData?.resumes || []

  // Active accordion section states (default open first two)
  const [openSections, setOpenSections] = useState({
    capabilities: true,
    experience: true,
    entrepreneurship: true,
    education: false,
  })

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }))
  }

  const b2bResume = resumes.find(r => r.id === 'b2b-sales') || resumes[0] || {
    url: '/resumes/Vivek_Dhoundiyal_B2B_Sales_Resume.pdf',
    title: 'B2B Sales Resume'
  }
  const pgResume = resumes.find(r => r.id === 'program-operations') || resumes[1] || {
    url: '/resumes/Vivek_Resume_PG.pdf',
    title: 'Program & Operations Resume'
  }

  const coreCapabilities = [
    { title: 'Enterprise B2B Sales & Consultative Selling', desc: 'Leading high-ticket enterprise discovery, value mapping, RFP responses, and multi-stakeholder contract closing.' },
    { title: 'Outbound GTM & Lead Generation', desc: 'Structuring multi-channel outbound architectures via Apollo, Lusha, cold email cadences, and personalized LinkedIn sequences.' },
    { title: 'Commercial Negotiation & Deal Structuring', desc: 'Navigating institutional procurement, pricing matrix negotiations, credit terms, and annual contract agreements.' },
    { title: 'Key Account Management & Retention', desc: 'Post-sales relationship stewardship, recurring revenue expansion, sponsor ROI delivery, and renewal management.' },
    { title: '0→1 Operations & Venture Execution', desc: 'Partner network onboarding, physical supply chain fulfillment, unit-economics governance, and rapid operational problem-solving.' },
    { title: 'CRM & Systems Engineering', desc: 'Pipeline state machine modeling in Zoho CRM and HubSpot, with agentic workflow automation via n8n and Make.' }
  ]

  const corporateRoles = nodes.filter(n => ['supersurge', 'kreedon', 'collegedunia'].includes(n.id))
  const entrepreneurialRoles = nodes.filter(n => n.id === 'entrepreneurship')

  return (
    <section id="profile-resume" className="py-24 sm:py-32 border-t border-white/10 bg-ink-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ==================================================== */}
        {/* SECTION HEADER & PDF DOWNLOADS                       */}
        {/* ==================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-signal-cyan font-bold">
              <span>07</span>
              <span>//</span>
              <span>Verified Dossier</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Professional Profile
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Interactive digital curriculum vitae. Inspect full career history directly or download verified PDFs.
            </p>
          </div>

          {/* Quick PDF Download Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={b2bResume.url}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-[#070B14] hover:bg-[#2563EB] hover:text-white transition-all shadow-md"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>B2B Sales (PDF)</span>
            </a>

            <a
              href={pgResume.url}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Ops / PG (PDF)</span>
            </a>
          </div>
        </div>

        {/* ==================================================== */}
        {/* EXECUTIVE SUMMARY & CORE POSITIONING                 */}
        {/* ==================================================== */}
        <div className="p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono tracking-widest uppercase text-signal-cyan font-bold">
              Executive Positioning Summary
            </span>
            <span className="text-xs font-mono text-slate-400">
              8+ Years Experience · India / Remote
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            B2B Sales, Business Development, and Commercial Operations professional with over 8 years of cross-functional experience across venture building, high-ticket consultative selling, and revenue pipeline architecture. Demonstrated history of closing enterprise partnerships at CollegeDunia and KreedOn, co-founding SettleMyCar (50+ garage partners, 1,000+ customer transactions), and operating B2B food supply distribution. Currently consulting B2B ventures via SuperSurge while applying commercial leverage to technology, AI workflows, and software products like Hiresway.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="text-slate-400 uppercase">Current Focus</div>
              <div className="text-white font-bold">Revenue & Growth</div>
            </div>
            <div>
              <div className="text-slate-400 uppercase">Evolving</div>
              <div className="text-signal-cyan font-bold">Systems & AI Workflows</div>
            </div>
            <div>
              <div className="text-slate-400 uppercase">Target Horizon</div>
              <div className="text-purple-400 font-bold">Commercial Products & Systems</div>
            </div>
            <div>
              <div className="text-slate-400 uppercase">Education</div>
              <div className="text-white font-bold">B.Tech Mechanical</div>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* ACCORDION 1: CORE CAPABILITIES                       */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-ink-900 border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('capabilities')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-signal-blue" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Core Capabilities & Commercial Competencies
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {openSections.capabilities ? 'Collapse −' : 'Expand +'}
            </span>
          </button>

          {openSections.capabilities && (
            <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5">
              {coreCapabilities.map((cap, i) => (
                <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-signal-cyan flex-shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-5">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================================================== */}
        {/* ACCORDION 2: PROFESSIONAL CAREER HISTORY             */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-ink-900 border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('experience')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-signal-cyan" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Commercial Career History (Corporate & Advisory)
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {openSections.experience ? 'Collapse −' : 'Expand +'}
            </span>
          </button>

          {openSections.experience && (
            <div className="px-6 sm:px-8 pb-8 pt-2 space-y-6 border-t border-white/5">
              {corporateRoles.map((role) => (
                <div key={role.id} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-lg font-bold text-white">{role.role}</h4>
                      <div className="text-xs font-mono text-signal-cyan">{role.company}</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {role.summary}
                  </p>
                  <div className="text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                    <span className="text-slate-300 font-bold">Key Takeaway:</span> {role.takeaway}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================================================== */}
        {/* ACCORDION 3: ENTREPRENEURIAL TRACK RECORD            */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-ink-900 border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('entrepreneurship')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-signal-violet" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Entrepreneurial Track Record (0→1 Ventures)
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {openSections.entrepreneurship ? 'Collapse −' : 'Expand +'}
            </span>
          </button>

          {openSections.entrepreneurship && (
            <div className="px-6 sm:px-8 pb-8 pt-2 space-y-4 border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-signal-cyan">SettleMyCar</span>
                    <span className="text-[10px] font-mono text-slate-400">2018–2021</span>
                  </div>
                  <div className="text-xs font-bold text-white">Co-founder</div>
                  <p className="text-xs text-slate-300">
                    Onboarded 50+ garage partners, fulfilled 1,000+ consumer transactions, and built vehicle inspection workflows.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-signal-cyan">Dark Kitchen</span>
                    <span className="text-[10px] font-mono text-slate-400">2020–2023</span>
                  </div>
                  <div className="text-xs font-bold text-white">Founder</div>
                  <p className="text-xs text-slate-300">
                    B2B commercial food supply system with farm procurement, daily recurring delivery SLAs, and zero-stockout fulfillment.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-signal-cyan">Fixins</span>
                    <span className="text-[10px] font-mono text-slate-400">2017–2020</span>
                  </div>
                  <div className="text-xs font-bold text-white">Co-founder / Partner</div>
                  <p className="text-xs text-slate-300">
                    Managed regional commercial distribution channels, wholesale account terms, and multi-point fulfillment.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================================================== */}
        {/* ACCORDION 4: EDUCATION & LANGUAGES                   */}
        {/* ==================================================== */}
        <div className="rounded-3xl bg-ink-900 border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('education')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-signal-green" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Background & Languages
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {openSections.education ? 'Collapse −' : 'Expand +'}
            </span>
          </button>

          {openSections.education && (
            <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 uppercase">Degree</div>
                <div className="text-sm font-bold text-white">B.Tech in Mechanical Engineering</div>
                <div className="text-slate-300">Manav Rachna International University (2014–2018)</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 uppercase">Languages</div>
                <div className="text-sm font-bold text-white">English (Professional) · Hindi (Native)</div>
                <div className="text-slate-300">Full professional proficiency in commercial negotiations</div>
              </div>
            </div>
          )}
        </div>

        {/* Link to dedicated Experience Page */}
        <div className="text-center pt-4">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-xs font-mono text-signal-cyan hover:underline"
          >
            <span>View Dedicated Chronological Experience Page</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
