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

  const title = contact?.title || "Let's build something useful."
  const description = contact?.description || "Open to conversations around revenue generation, enterprise business development, commercial growth, partnerships and technology."

  const email = contact?.email || profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = contact?.phone || '+91 75030 16766'
  const cleanPhone = phone.replace(/[^0-9+]/g, '') || '+917503016766'
  
  // Gmail web compose URL with prefilled recipient and subject
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
    <section id="contact" className="py-24 sm:py-32 border-t border-[#E5E7EB] bg-[#FAFAF8] text-[#111318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Statement with Coffee Let's Talk Avatar */}
        <div className="text-center space-y-4 reveal-on-scroll flex flex-col items-center">
          <div className="relative w-28 h-36 sm:w-32 sm:h-40 mb-1 animate-float-medium">
            <Image
              src="/images/avatars/avatar-coffee-letstalk.png"
              alt="Vivek with coffee mug inviting Let's Talk"
              fill
              sizes="150px"
              className="object-contain drop-shadow-md"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-wider">Direct Channels &amp; Contact</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#111318]">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] max-w-xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-normal bg-[#111318] text-white hover:bg-[#2563EB] transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-normal bg-white hover:bg-slate-50 text-[#111318] border border-[#E5E7EB] shadow-xs transition-colors duration-200"
            >
              <DocumentIcon className="w-4 h-4 text-[#737984]" />
              <span>View Public Resume</span>
            </Link>
          </div>
        </div>

        {/* PRIMARY DIRECT CONTACT CHANNELS HUB (Email, WhatsApp, Phone) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8 reveal-on-scroll">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs uppercase tracking-widest text-[#555B66] font-semibold">
              Three Direct Connection Methods
            </span>
            <span className="text-xs font-mono text-[#2563EB] font-semibold">
              Zero Dead Forms · Direct Communication
            </span>
          </div>

          {/* 3 Distinct Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* METHOD 1: EMAIL */}
            <div className="p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:bg-white transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shadow-2xs">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
                    Method 01
                  </div>
                  <h3 className="text-lg font-bold text-[#111318]">
                    Email Me
                  </h3>
                  <p className="text-xs text-[#555B66] mt-1 break-all font-mono">
                    {email}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-full text-xs font-semibold bg-[#2563EB] text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Open Gmail Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 py-1.5 px-2 rounded-full text-[11px] font-mono text-center border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#555B66]"
                  >
                    Mailto App
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-full text-[11px] font-mono border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#555B66] flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckIcon className="w-3 h-3 text-emerald-600" /> : <CopyIcon className="w-3 h-3 text-slate-400" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* METHOD 2: WHATSAPP */}
            <div className="p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-2xs">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
                    Method 02
                  </div>
                  <h3 className="text-lg font-bold text-[#111318]">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-[#555B66] mt-1">
                    Direct conversation with prefilled context.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5E7EB]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-full text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Start WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* METHOD 3: PHONE */}
            <div className="p-7 rounded-3xl bg-[#FAFAF8] border border-[#E5E7EB] hover:border-amber-300 hover:bg-white transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shadow-2xs">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
                    Method 03
                  </div>
                  <h3 className="text-lg font-bold text-[#111318]">
                    Phone Call
                  </h3>
                  <p className="text-xs text-[#555B66] mt-1 font-mono">
                    {phone}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full py-2.5 px-3 rounded-full text-xs font-semibold bg-[#111318] text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Direct Call (Dialer)</span>
                  <PhoneIcon className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="w-full py-1.5 px-2 rounded-full text-[11px] font-mono border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#555B66] flex items-center justify-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? <CheckIcon className="w-3 h-3 text-emerald-600" /> : <CopyIcon className="w-3 h-3 text-slate-400" />}
                  <span>{copiedPhone ? 'Number Copied!' : 'Copy Phone Number'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Social Profiles Row */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#737984]">
              Professional Networks:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66] hover:text-[#2563EB] hover:border-[#2563EB]/40 transition-colors shadow-2xs"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66] hover:text-[#111318] hover:border-slate-400 transition-colors shadow-2xs"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#555B66] hover:text-[#111318] hover:border-slate-400 transition-colors shadow-2xs"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
