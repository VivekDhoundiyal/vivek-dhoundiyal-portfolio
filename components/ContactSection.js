import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
  ArrowRight,
  ArrowUpRight,
  DocumentIcon
} from './Icons'

export default function ContactSection({ contact, profile, social, onOpenContact }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const title = contact?.title || "Let's connect and create opportunities."
  const description = contact?.description || "Open to conversations around revenue generation, enterprise business development, commercial growth, partnerships and technology."

  const email = contact?.email || profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = contact?.phone || '+91 75030 16766'
  const cleanPhone = phone.replace(/[^0-9+]/g, '') || '+917503016766'
  
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent('Connecting with Vivek Dhoundiyal')}`
  const whatsappUrl = 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.'
  const linkedin = social?.linkedin || profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = social?.x || profile?.x || 'https://x.com/Vivek_Dh_'
  const github = social?.github || profile?.github || 'https://github.com/VivekDhoundiyal'

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  const handleCopyPhone = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(phone)
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative scroll-mt-16">
      <div id="about-contact" className="sr-only" tabIndex={-1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* ==================================================== */}
        {/* SECTION HEADER: Title + Coffee Let's Talk Avatar     */}
        {/* ==================================================== */}
        <div className="text-center space-y-3 reveal-on-scroll flex flex-col items-center">
          <div className="relative w-16 h-20 sm:w-20 sm:h-24 mb-1 animate-float-medium">
            <Image
              src="/images/avatars/avatar-coffee-letstalk.png"
              alt="Vivek with coffee mug inviting Let's Talk"
              fill
              sizes="100px"
              className="object-contain drop-shadow-sm"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-wider">07 · CONNECT &amp; DISCUSS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111318] leading-[1.1]">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#555B66] max-w-xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all shadow-xs cursor-pointer"
            >
              <span>Send a Message</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-medium bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-2xs transition-colors"
            >
              <DocumentIcon className="w-4 h-4 text-slate-500" />
              <span>View Public Resume</span>
            </Link>
          </div>
        </div>

        {/* ==================================================== */}
        {/* DIRECT CHANNELS CARD HUB (Email, LinkedIn, Schedule) */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-on-scroll">
          
          {/* Email Card */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  Direct Inquiries
                </span>
                <h3 className="text-base font-bold text-[#111318]">
                  Email Me
                </h3>
                <p className="text-xs text-[#555B66] font-mono mt-1 break-all">
                  {email}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Gmail Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full py-1.5 px-2 rounded-xl text-[11px] font-mono text-center border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center gap-1 cursor-pointer"
              >
                {copiedEmail ? <CheckIcon className="w-3 h-3 text-emerald-600" /> : <CopyIcon className="w-3 h-3 text-slate-400" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  Professional Network
                </span>
                <h3 className="text-base font-bold text-[#111318]">
                  LinkedIn
                </h3>
                <p className="text-xs text-[#555B66] mt-1">
                  Connect on LinkedIn for enterprise discussions.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Schedule a Call / WhatsApp Card */}
          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] hover:border-emerald-300 shadow-xs transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                  Quick Communication
                </span>
                <h3 className="text-base font-bold text-[#111318]">
                  Schedule a Call
                </h3>
                <p className="text-xs text-[#555B66] mt-1">
                  Connect directly on WhatsApp or voice call.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="w-full py-1.5 px-2 rounded-xl text-[11px] font-mono text-center border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center gap-1 cursor-pointer"
              >
                {copiedPhone ? <CheckIcon className="w-3 h-3 text-emerald-600" /> : <PhoneIcon className="w-3 h-3 text-slate-400" />}
                <span>{copiedPhone ? 'Copied' : phone}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
