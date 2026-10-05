import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSiteContent } from '../lib/content'
import { DownloadIcon, ArrowUpRight, CheckIcon } from '../components/Icons'

export default function ResumePage({ siteData }) {
  const resumes = siteData?.resumes || []
  const profile = siteData?.profile || {}
  const experience = siteData?.experience || {}

  const currentResume = resumes.find(r => r.id === 'b2b-sales') || resumes[0] || {
    title: 'B2B Sales & Business Development Resume',
    subtitle: 'B2B Sales · Enterprise Development · Revenue Operations · Partnerships',
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
    <div className="py-12 sm:py-20 min-h-screen bg-[#FAFAF8] text-[#111318]">
      <Head>
        <title>B2B Sales & Business Development Resume — Vivek Dhoundiyal</title>
        <meta name="description" content="Verified B2B Sales and Business Development resume of Vivek Dhoundiyal. 8+ years driving commercial revenue, consultative sales, and partnerships." />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Breadcrumb & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#555B66] hover:text-[#2563EB] transition-colors"
          >
            <span>← Return to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={currentResume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#111318] shadow-xs transition-colors"
            >
              <span>View Original PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
            </a>

            <a
              href={currentResume.url}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-xs"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="uppercase tracking-wider">Verified Positioning Document</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318]">
            {currentResume.title}
          </h1>

          <p className="text-sm sm:text-base text-[#555B66] max-w-2xl leading-relaxed font-normal">
            A comprehensive record of 8+ years driving enterprise B2B sales cycles, consultative client negotiation, revenue pipeline architecture, and commercial operations.
          </p>
        </div>

        {/* EMBEDDED RESUME INSPECTION SHEET */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-8 sm:p-12 shadow-xs space-y-12">
          
          {/* Header of Active Resume */}
          <div className="pb-8 border-b border-slate-100 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111318]">
                  Vivek Dhoundiyal
                </h2>
                <div className="text-sm font-semibold text-[#2563EB] pt-1">
                  Revenue · Growth · Business Development
                </div>
              </div>
              <div className="text-xs font-mono text-[#737984] space-y-0.5 sm:text-right">
                <div>vivekdhoundiyal2901@gmail.com</div>
                <div>+91 75030 16766 · India / Remote</div>
              </div>
            </div>

            <p className="text-sm text-[#555B66] leading-relaxed pt-2">
              Commercial operator and business development professional with 8+ years of experience across consultative sales, revenue generation, partnerships, entrepreneurship, and operations. Grounded in first-principles engineering logic and hands-on execution.
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
              Core Competencies & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(currentResume.focusAreas || []).map((area, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] text-xs text-[#111318]">
                  <CheckIcon className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chronological Work History */}
          <div className="space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
              Professional Work History
            </h3>

            <div className="space-y-8 border-l border-[#E5E7EB] ml-2 pl-6 sm:pl-8">
              
              {/* SuperSurge */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2563EB]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-base font-semibold text-[#111318]">Growth & Revenue Consultant</div>
                  <div className="text-xs font-mono text-[#737984]">Oct 2024 – Present</div>
                </div>
                <div className="text-xs font-semibold text-[#2563EB]">SuperSurge Consulting · Remote</div>
                <p className="text-xs text-[#555B66] leading-relaxed">
                  Advising B2B startups and commercial ventures on go-to-market structure, ICP segmentation, multichannel outbound architecture, and conversion funnel optimization.
                </p>
              </div>

              {/* KreedOn */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2563EB]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-base font-semibold text-[#111318]">Media Sales Manager</div>
                  <div className="text-xs font-mono text-[#737984]">Dec 2023 – Oct 2024</div>
                </div>
                <div className="text-xs font-semibold text-[#2563EB]">KreedOn (Voice of Indian Sports) · India</div>
                <p className="text-xs text-[#555B66] leading-relaxed">
                  Led B2B brand sponsorships and media monetization; formulated tailored proposals for corporate brands and advertising agencies. Managed full-cycle sales from prospecting to campaign execution.
                </p>
              </div>

              {/* CollegeDunia */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2563EB]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-base font-semibold text-[#111318]">Senior Manager – Business Development</div>
                  <div className="text-xs font-mono text-[#737984]">Apr 2023 – Sep 2023</div>
                </div>
                <div className="text-xs font-semibold text-[#2563EB]">CollegeDunia Web Pvt Ltd · India</div>
                <p className="text-xs text-[#555B66] leading-relaxed">
                  Spearheaded enterprise consultative sales cycles, pitching CXO/Dean-level stakeholders, negotiating contracts, and ensuring delivery fulfillment for digital marketing solutions and student recruitment pipelines.
                </p>
              </div>

              {/* Ventures */}
              <div className="relative space-y-2">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-400" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-base font-semibold text-[#111318]">Founder / Co-Founder</div>
                  <div className="text-xs font-mono text-[#737984]">2017 – 2023</div>
                </div>
                <div className="text-xs font-semibold text-[#555B66]">SettleMyCar · Dark Kitchen · Fixins</div>
                <p className="text-xs text-[#555B66] leading-relaxed">
                  Founded and scaled multiple 0-to-1 ventures in automotive marketplace logistics, B2B food supply, and commercial distribution. Accountable for P&L, supplier onboarding, and daily operations.
                </p>
              </div>

            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                Education
              </span>
              <div className="text-sm font-semibold text-[#111318]">B.Tech in Mechanical Engineering</div>
              <div className="text-xs text-[#555B66]">Manav Rachna International University (2014–2018)</div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                Verified Certification
              </span>
              <div className="text-sm font-semibold text-[#111318]">Google Project Management Professional</div>
              <div className="text-xs text-[#2563EB]">Google / Coursera (Verified Credential)</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  return {
    props: {
      siteData
    }
  }
}
