import React, { useState } from 'react'
import { getSiteContent } from '../lib/content'
import { LinkedInIcon, XIcon, GitHubIcon, MailIcon, CopyIcon, CheckIcon, ArrowRight, PhoneIcon, WhatsAppIcon } from '../components/Icons'

export default function ContactPage({ siteData }) {
  const profile = siteData?.profile || {}
  const [copied, setCopied] = useState(false)

  const email = profile.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = profile.phone || '+91 75030 16766'
  const cleanPhone = phone.replace(/[^0-9+]/g, '') || '+917503016766'
  const whatsappUrl = 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.'
  const linkedin = profile.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile.x || 'https://x.com/Vivek_Dh_'
  const github = profile.github || 'https://github.com/VivekDhoundiyal'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAF8] text-[#111318] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <span className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            Direct Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111318] mt-2">
            Let's Talk
          </h1>
          <p className="text-base sm:text-lg text-[#555B66] max-w-xl mt-4 leading-relaxed font-normal">
            Open to conversations around revenue leadership, business development, partnerships, growth advisory, and modern technology workflows.
          </p>
        </div>

        {/* Primary Direct Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984]">Email</span>
              <span className="text-xs font-mono text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Inbox</span>
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#111318] truncate">{email}</div>
              <div className="text-xs text-[#555B66] mt-1">Direct response within 24 hours</div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#F4F5F7] hover:bg-slate-100 text-[#111318] border border-[#E5E7EB] flex items-center gap-1.5 transition-colors"
              >
                {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${email}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#111318] text-white hover:bg-blue-600 transition-colors"
              >
                Compose
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-emerald-300 shadow-xs hover:shadow-card transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984]">WhatsApp</span>
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4" />
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-emerald-700">Chat on WhatsApp</div>
              <div className="text-xs text-[#555B66] mt-1">Fast direct communication</div>
            </div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 group-hover:underline">
              <span>Send Message</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Direct Phone */}
          <a
            href={`tel:${cleanPhone}`}
            className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-amber-300 shadow-xs hover:shadow-card transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984]">Direct Call</span>
              <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <PhoneIcon className="w-4 h-4" />
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#111318]">{phone}</div>
              <div className="text-xs text-[#555B66] mt-1">Urgent matters & discussions</div>
            </div>
            <div className="text-xs font-semibold text-amber-600 flex items-center gap-1 group-hover:underline">
              <span>Call Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-xs hover:shadow-card transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737984]">LinkedIn</span>
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <LinkedInIcon className="w-4 h-4" />
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#111318]">Vivek Dhoundiyal</div>
              <div className="text-xs text-[#555B66] mt-1">Professional track record</div>
            </div>
            <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Social Links Row */}
        <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#737984]">
          <span>Additional Profiles:</span>
          <div className="flex items-center gap-6 text-[#555B66]">
            <a href={xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#111318] flex items-center gap-1.5 transition-colors">
              <XIcon className="w-3.5 h-3.5" />
              <span>X / Twitter</span>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#111318] flex items-center gap-1.5 transition-colors">
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
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
      siteData,
      seoProps: {
        title: "Contact Vivek Dhoundiyal — Revenue, Business Development & Commercial Builder",
        description: "Get in touch with Vivek Dhoundiyal for commercial leadership, B2B sales advisory, partnerships, and ventures.",
        canonical: "https://vivekdhoundiyal.com/contact",
      }
    }
  }
}
