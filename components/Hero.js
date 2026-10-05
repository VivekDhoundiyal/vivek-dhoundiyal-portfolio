import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  DocumentIcon,
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  ChartIcon,
  VenturesIcon,
  TargetIcon
} from './Icons'

export default function Hero({ profile = {}, hero = {}, contact = {}, social = {} }) {
  const eyebrow = hero?.eyebrow || profile?.heroEyebrow || 'REVENUE • PARTNERSHIPS • OPERATIONS • AI & SYSTEMS'
  const title = hero?.title || profile?.heroHeadlineAlt || profile?.heroHeadline || 'I help businesses grow and run better.'
  const description = hero?.description || profile?.heroDescription || "I'm Vivek Dhoundiyal — a business and growth professional with 8+ years of experience in sales, partnerships, entrepreneurship and operations. I work at the intersection of commercial opportunities, systems and technology, and I'm currently focused on building and scaling impactful projects while moving deeper into product and AI-driven solutions."
  const portrait = profile?.portraitImage || '/images/vivek-canonical.png'
  const primaryButtonText = hero?.primaryButtonText || 'Explore My Work'
  const primaryButtonUrl = hero?.primaryButtonUrl || '#work'
  const secondaryButtonText = hero?.secondaryButtonText || 'View Resume'
  const secondaryButtonUrl = hero?.secondaryButtonUrl || '/resume'

  const email = profile?.email || contact?.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = profile?.phone || contact?.phone || '+91 75030 16766'
  const phoneClean = phone.replace(/[^0-9+]/g, '')
  const whatsappUrl = 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.'
  const linkedinUrl = social?.linkedin || profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = social?.x || profile?.x || 'https://x.com/Vivek_Dh_'
  const githubUrl = social?.github || profile?.github || 'https://github.com/VivekDhoundiyal'

  const renderTitle = (text) => {
    if (!text) return null

    // Format "grow" and "run" if in title
    if (text.includes('grow') && text.includes('run')) {
      const parts = text.split(/(grow|run)/gi)
      return parts.map((part, idx) => {
        if (part.toLowerCase() === 'grow' || part.toLowerCase() === 'run') {
          return (
            <span key={idx} className="text-[#2563EB]">
              {part}
            </span>
          )
        }
        return part
      })
    }

    // Format "relationships" if in title
    if (text.includes('relationships')) {
      const parts = text.split('relationships')
      return (
        <>
          {parts[0]}
          <span className="text-[#2563EB]">
            relationships
          </span>
          {parts.slice(1).join('relationships')}
        </>
      )
    }

    return text
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white text-[#111318] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Ambient Radial Atmospheric Glow behind Portrait on right */}
      <div className="absolute top-10 right-4 sm:right-12 lg:right-20 w-[380px] sm:w-[520px] lg:w-[620px] h-[380px] sm:h-[520px] lg:h-[620px] bg-gradient-to-tr from-[#2563EB]/20 via-sky-400/15 to-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: Eyebrow, Headline, Description, Buttons */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center animate-hero-entrance z-10">
            
            {/* Professional Eyebrow Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold text-[#555B66]">
                {eyebrow}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.1rem] font-bold tracking-tight text-[#111318] leading-[1.08] break-words">
              {renderTitle(title)}
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#555B66] leading-relaxed font-normal max-w-xl">
              {description}
            </p>

            {/* Two Primary Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={primaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111318] text-white hover:bg-[#1F242D] shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-2xs transition-colors duration-200"
              >
                <DocumentIcon className="w-4 h-4 text-[#555B66]" />
                <span>{secondaryButtonText}</span>
              </Link>
            </div>

            {/* Quick Connect Ribbon (Directly below buttons as in reference) */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
                
                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">Email</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">{email.split('@')[0]}</span>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={`tel:${phoneClean}`}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">Call</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">{phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">WhatsApp</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">Chat on WhatsApp</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">LinkedIn</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">/vivekdhoundiyal</span>
                  </div>
                </a>

                {/* X (Twitter) */}
                <a
                  href={xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#111318] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <XIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">X (Twitter)</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">/Vivek_Dh_</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#111318] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#737984] block font-semibold">GitHub</span>
                    <span className="text-xs text-[#111318] font-medium truncate block">/VivekDhoundiyal</span>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: Freestanding Portrait + Arrow + 3 Cards*/}
          {/* ==================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Composition Wrapper */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
              
              {/* Playful Hand-drawn Purple Callout Arrow + Text (Reference Image Element) */}
              <div className="absolute -top-4 right-2 sm:right-6 lg:-right-4 z-20 hidden sm:flex items-start gap-2 pointer-events-none select-none">
                <svg className="w-14 h-14 text-purple-400 transform -rotate-12 -scale-x-100" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 10,40 Q 30,30 35,12" />
                  <polyline points="28,14 36,12 37,20" />
                </svg>
                <div className="text-[11px] font-mono leading-tight text-purple-700 tracking-tight pt-1 italic font-medium bg-purple-50/80 px-2.5 py-1.5 rounded-lg border border-purple-200/60 backdrop-blur-xs">
                  Business<br />
                  Growth<br />
                  Partnerships<br />
                  Operations<br />
                  <span className="font-semibold text-purple-900 not-italic">Future → Product</span>
                </div>
              </div>

              {/* Centered Cutout Portrait */}
              <div className="relative w-full aspect-[4/5] max-h-[520px] flex items-end justify-center z-10 animate-portrait-emerge">
                <Image
                  src={portrait}
                  alt="Vivek Dhoundiyal — Commercial Operator & Builder"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  unoptimized
                  className="object-contain object-bottom filter contrast-[1.02] brightness-[1.01]"
                />
              </div>

              {/* Stack of 3 Floating Stat/Focus Glass Cards on Right (Reference Image Element) */}
              <div className="absolute right-0 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5 sm:gap-3 w-[190px] sm:w-[215px] hidden sm:flex">
                
                {/* Card 1: 8+ Years */}
                <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-[#2563EB]/40 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                      <ChartIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-[#111318]">8+ Years</div>
                      <div className="text-[10px] text-[#737984] leading-tight font-medium">Sales · Partnerships</div>
                      <div className="text-[9.5px] text-[#737984] leading-tight">Operations · 0→1</div>
                    </div>
                  </div>
                </div>

                {/* Card 2: 3+ Ventures */}
                <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-purple-400/40 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <VenturesIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-[#111318]">3+ Ventures</div>
                      <div className="text-[10px] text-[#737984] leading-tight font-medium">Built · Operated · Scaled</div>
                      <div className="text-[9.5px] text-[#737984] leading-tight">SettleMyCar · Kitchen · Fixins</div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Next Chapter */}
                <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-card hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <TargetIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-[#111318]">Next Chapter</div>
                      <div className="text-[10px] text-emerald-700 font-semibold leading-tight">Product · AI · Systems</div>
                      <div className="text-[9.5px] text-[#737984] leading-tight">Commercial Leverage</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile Fallback Grid of the 3 Cards (visible only on mobile) */}
            <div className="sm:hidden grid grid-cols-1 gap-2.5 w-full mt-6 z-20">
              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <ChartIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111318]">8+ Years Experience</div>
                  <div className="text-[11px] text-[#555B66]">Sales · Partnerships · Operations · Entrepreneurship</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                  <VenturesIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111318]">3+ Real Ventures</div>
                  <div className="text-[11px] text-[#555B66]">Built · Operated · Scaled Ground-Up</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <TargetIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111318]">Next Chapter: Product & AI Systems</div>
                  <div className="text-[11px] text-[#555B66]">Applying commercial leverage to technology</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
