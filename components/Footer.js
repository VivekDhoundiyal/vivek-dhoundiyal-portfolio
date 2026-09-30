import React from 'react'
import Link from 'next/link'

export default function Footer({ profile }) {
  const email = profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile?.x || 'https://x.com/Vivek_Dh_'
  const github = profile?.github || 'https://github.com/VivekDhoundiyal'

  return (
    <footer className="w-full bg-white text-[#111318] border-t border-[#E5E7EB] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid: Identity, Narrative & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          
          {/* Identity & Closing Statement (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xl font-semibold tracking-tight text-[#111318]">
              Vivek Dhoundiyal
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
              Revenue • Growth • Business Development
            </div>
            <p className="text-sm text-[#555B66] max-w-md leading-relaxed font-normal pt-1">
              Building commercial revenue engines, operating physical systems, and engineering software products that solve real friction.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs text-[#555B66]">
              <li><Link href="/#capabilities" className="hover:text-[#2563EB] transition-colors">Capabilities</Link></li>
              <li><Link href="/#work" className="hover:text-[#2563EB] transition-colors">Entrepreneurial Ventures</Link></li>
              <li><Link href="/#corporate" className="hover:text-[#2563EB] transition-colors">Corporate Experience</Link></li>
              <li><Link href="/#building" className="hover:text-[#2563EB] transition-colors">Live Build Lab</Link></li>
              <li><Link href="/#thinking" className="hover:text-[#2563EB] transition-colors">Thinking & Writing</Link></li>
              <li><Link href="/#about" className="hover:text-[#2563EB] transition-colors">About Vivek</Link></li>
            </ul>
          </div>

          {/* Social & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#737984] font-semibold block">
              Connect
            </span>
            <ul className="space-y-1.5 text-xs text-[#555B66]">
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  X (Twitter) ↗
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-[#2563EB] transition-colors">
                  {email}
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#2563EB] transition-colors font-medium">
                  Curriculum Vitae ↗
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Subtle Copyright & Admin */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737984]">
          <div className="font-mono text-[11px]">
            Designed & Engineered with Intentionality · Vivek Dhoundiyal
          </div>

          <div className="flex items-center gap-6">
            <Link href="/admin" prefetch={false} className="hover:text-[#111318] transition-colors font-mono text-[11px]">
              System Guard (Admin)
            </Link>
            <span>© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
