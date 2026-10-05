import React from 'react'
import Link from 'next/link'

export default function Footer({ profile }) {
  const email = profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile?.x || 'https://x.com/Vivek_Dh_'
  const github = profile?.github || 'https://github.com/VivekDhoundiyal'

  return (
    <footer className="w-full bg-white text-[#111318] border-t border-[#E5E7EB] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid: Identity, Narrative & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Identity & Closing Statement (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <span className="text-xl font-bold tracking-tight text-[#111318]">
                Vivek Dhoundiyal
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-[#2563EB] border border-blue-100 font-semibold">
              <span>Revenue • Growth • Business Development</span>
            </div>

            <p className="text-sm text-[#555B66] max-w-md leading-relaxed font-normal">
              Building commercial revenue engines, forging high-trust partnerships, and executing scalable business operations.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Leadership, Business Development & Growth Opportunities</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-[#737984] font-semibold block tracking-wider">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#555B66]">
              <li><Link href="/#what-i-do" className="hover:text-[#2563EB] transition-colors">What I Do</Link></li>
              <li><Link href="/#work" className="hover:text-[#2563EB] transition-colors">Entrepreneurial Ventures</Link></li>
              <li><Link href="/#corporate" className="hover:text-[#2563EB] transition-colors">Corporate Experience</Link></li>
              <li><Link href="/#experience" className="hover:text-[#2563EB] transition-colors">Executive Timeline</Link></li>
              <li><Link href="/#building" className="hover:text-[#2563EB] transition-colors">Where I Am Building</Link></li>
              <li><Link href="/blog" className="hover:text-[#2563EB] transition-colors">Blog & Insights</Link></li>
              <li><Link href="/#about-contact" className="hover:text-[#2563EB] transition-colors">About Vivek</Link></li>
            </ul>
          </div>

          {/* Social & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-[#737984] font-semibold block tracking-wider">
              Connect
            </span>
            <ul className="space-y-2 text-sm text-[#555B66]">
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1">
                  <span>LinkedIn</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href={xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1">
                  <span>X (Twitter)</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors inline-flex items-center gap-1">
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-[#2563EB] transition-colors break-all">
                  {email}
                </a>
              </li>
              <li className="pt-1">
                <Link href="/resume" className="hover:text-[#2563EB] transition-colors font-semibold text-[#2563EB] inline-flex items-center gap-1">
                  <span>Curriculum Vitae</span>
                  <span className="text-xs">↗</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Subtle Copyright & Admin */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737984]">
          <div className="font-mono text-xs">
            Designed & Engineered with Intentionality · Vivek Dhoundiyal
          </div>

          <div className="flex items-center gap-6">
            <Link href="/admin" prefetch={false} className="hover:text-[#111318] transition-colors font-mono text-xs">
              System Guard (Admin)
            </Link>
            <span>© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
