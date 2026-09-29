import React from 'react'
import Link from 'next/link'
import { DownloadIcon, ArrowUpRight, CheckIcon } from './Icons'

export default function ResumeSection({ resumes = [] }) {
  const salesResume = resumes.find(r => r.id === 'b2b-sales') || resumes[0] || {
    id: 'b2b-sales',
    title: 'B2B Sales & Business Development Resume',
    subtitle: 'B2B Sales · Enterprise Development · Revenue Operations · Partnerships',
    filename: 'Vivek_Dhoundiyal_B2B_Sales_Resume.pdf',
    url: '/resumes/Vivek_Dhoundiyal_B2B_Sales_Resume.pdf',
    description: 'Detailed record of 8+ years driving commercial revenue, consultative B2B sales cycles, client negotiation, and outbound pipeline architecture.',
    focusAreas: [
      'Enterprise B2B Sales & Consultative Selling',
      'Lead Generation & Multi-Channel Outbound',
      'Commercial Negotiation & Contract Closing',
      'Key Account Management & Revenue Retention',
      'CRM Pipeline Architecture (Zoho, Apollo, Lusha)'
    ]
  }

  return (
    <section id="resume" className="py-20 sm:py-28 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
            <span>RESUME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111318] leading-tight">
            Curriculum Vitae
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            A comprehensive, verified record of 8+ years across enterprise B2B sales, revenue architecture, commercial negotiations, and business development.
          </p>
        </div>

        {/* SINGLE APPROVED SALES RESUME CARD */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-card transition-all duration-300 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                VERIFIED POSITIONING DOCUMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111318]">
                {salesResume.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#737984]">
                {salesResume.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={salesResume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[#E5E7EB] bg-[#FAFAF8] hover:bg-slate-100 text-[#111318] shadow-xs transition-colors"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={salesResume.url}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-xs"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <p className="text-sm text-[#555B66] leading-relaxed">
            {salesResume.description}
          </p>

          {salesResume.focusAreas && (
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
                Core Domains Documented:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {salesResume.focusAreas.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#555B66]">
                    <CheckIcon className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
