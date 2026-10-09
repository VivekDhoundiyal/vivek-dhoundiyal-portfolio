import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  MailIcon,
  DocumentIcon
} from './Icons'

export default function Footer({ profile, onOpenContact }) {
  const email = profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile?.x || 'https://x.com/Vivek_Dh_'
  const github = profile?.github || 'https://github.com/VivekDhoundiyal'

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Education & Credentials', href: '/#education' },
    { label: 'Featured Work', href: '/#work' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Contact', href: '/#contact' }
  ]

  return (
    <footer className="w-full bg-white text-[#111318] border-t border-[#E5E7EB] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Clean Horizontal 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-[#E5E7EB] items-start">
          
          {/* 1. Identity Column (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <span className="text-base font-bold tracking-tight text-[#111318]">
                Vivek Dhoundiyal
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 text-[#2563EB] border border-blue-100 font-semibold">
              <span>Revenue · Growth · Business Development</span>
            </div>

            <p className="text-xs text-[#555B66] max-w-sm leading-relaxed font-normal">
              Building commercial revenue engines, forging high-trust partnerships, and executing scalable business operations.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to strategic growth &amp; advisory roles</span>
              </div>
            </div>
          </div>

          {/* 2. Navigation Column (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
              Navigation
            </span>
            <nav aria-label="Footer Navigation">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1.5 text-xs text-[#555B66]">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#2563EB] transition-colors py-0.5 block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 3. Connect Column with Single Small Lower-Right Avatar (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between h-full">
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737984] font-semibold block">
                Connect
              </span>
              <ul className="space-y-2 text-xs text-[#555B66]">
                <li>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-slate-400" width={14} height={14} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5"
                  >
                    <XIcon className="w-3.5 h-3.5 text-slate-400" width={14} height={14} />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-slate-400" width={14} height={14} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5 break-all"
                  >
                    <MailIcon className="w-3.5 h-3.5 text-slate-400" width={14} height={14} />
                    <span>{email}</span>
                  </a>
                </li>
                <li className="pt-0.5">
                  <Link
                    href="/resume"
                    className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5 font-medium text-[#2563EB]"
                  >
                    <DocumentIcon className="w-3.5 h-3.5 text-[#2563EB]" width={14} height={14} />
                    <span>Curriculum Vitae</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Single small supporting avatar near lower-right corner */}
            <div className="pt-3 flex items-center gap-2.5">
              <div className="relative w-10 h-12 flex-shrink-0">
                <Image
                  src="/images/avatars/avatar-confident-standing.png"
                  alt="Vivek Dhoundiyal avatar"
                  width={315}
                  height={460}
                  className="object-contain w-full h-full drop-shadow-xs"
                />
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Let&apos;s build something exceptional.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#737984]">
          <div className="font-mono">
            © 2026 Vivek Dhoundiyal. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/admin" prefetch={false} className="hover:text-[#111318] transition-colors font-mono">
              System Admin
            </Link>
            <a href="#hero" className="hover:text-[#2563EB] transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
