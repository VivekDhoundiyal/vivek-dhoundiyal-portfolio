import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
  WhatsAppIcon,
  ArrowRight,
  PhoneIcon,
  MailIcon
} from './Icons'

export default function Navigation({ onOpenSearch, onOpenContact, profile }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const router = useRouter()

  const isHome = router.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      if (isHome) {
        const sections = [
          'hero',
          'what-i-do',
          'work',
          'corporate',
          'experience',
          'education-certifications',
          'building',
          'thinking',
          'tools',
          'skills',
          'about',
          'contact'
        ]
        const scrollPosition = window.scrollY + 200

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId)
          if (el) {
            const top = el.offsetTop
            const height = el.offsetHeight
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileDrawerOpen])

  // Global '/' hotkey for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        onOpenSearch()
      }
      if (e.key === 'Escape' && mobileDrawerOpen) {
        setMobileDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onOpenSearch, mobileDrawerOpen])

  const navLinks = [
    { label: 'Home', href: '/#hero', sectionId: 'hero' },
    { label: 'Work', href: '/#work', sectionId: 'work' },
    { label: 'Thinking', href: '/#thinking', sectionId: 'thinking' },
    { label: 'Building', href: '/#building', sectionId: 'building' },
    { label: 'About', href: '/#about-contact', sectionId: 'about' },
    { label: 'Experience', href: '/#experience', sectionId: 'experience' },
    { label: 'Resume', href: '/resume', sectionId: 'resume' },
  ]

  const email = profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = profile?.phone || '+91 75030 16766'
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile?.x || 'https://x.com/Vivek_Dh_'
  const github = profile?.github || 'https://github.com/VivekDhoundiyal'
  const whatsappUrl = 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 lg:h-[72px] flex items-center ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-[#E5E7EB]/80 shadow-xs'
            : 'bg-white/70 backdrop-blur-md border-b border-[#E5E7EB]/40'
        }`}
        aria-label="Main Navigation"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* ========================================= */}
            {/* LEFT: Wordmark + Status Descriptor        */}
            {/* ========================================= */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[#111318] hover:text-[#2563EB] transition-colors group flex-shrink-0"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-xs flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                  Vivek Dhoundiyal
                </span>
                <span className="text-[11px] text-[#737984] font-medium hidden sm:inline -mt-0.5">
                  Business · Growth · Systems
                </span>
              </div>
            </Link>

            {/* ========================================= */}
            {/* CENTER: Segmented Pill Navigation (Desktop)*/}
            {/* ========================================= */}
            <div className="hidden lg:flex items-center gap-0.5 sm:gap-1 px-3 py-1.5 rounded-full bg-white/90 border border-[#E5E7EB] shadow-xs backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = isHome ? activeSection === link.sectionId : router.pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-200 flex flex-col items-center ${
                      isActive
                        ? 'text-[#111318] font-semibold'
                        : 'text-[#555B66] hover:text-[#111318] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-0.5" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* ========================================= */}
            {/* RIGHT: Socials + Search + LET'S TALK CTA  */}
            {/* ========================================= */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex p-2 rounded-xl text-slate-500 hover:text-[#2563EB] hover:bg-blue-50/60 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              {/* X */}
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp (Green icon matching reference) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex p-2 rounded-xl text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                title="WhatsApp Direct"
                aria-label="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              {/* SEARCH TRIGGER BUTTON */}
              <button
                onClick={onOpenSearch}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
                title="Search (Hotkey: /)"
                aria-label="Search"
              >
                <SearchIcon className="w-4 h-4" />
              </button>

              {/* "LET'S TALK" BUTTON (Vibrant Electric Blue Pill) */}
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold tracking-normal bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xs hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label="Let's Talk — Open contact dialog"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </nav>

      {/* ==================================================== */}
      {/* PREMIUM FULL-SCREEN MOBILE NAVIGATION DRAWER         */}
      {/* ==================================================== */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl text-slate-900 flex flex-col justify-between p-6 sm:p-10 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar of Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-base font-semibold tracking-tight text-slate-900">
                Vivek Dhoundiyal
              </span>
            </div>

            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Large Editorial Nav Links */}
          <div className="flex flex-col space-y-4 py-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center justify-between py-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800 hover:text-blue-600 transition-colors group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-blue-600">
                  0{idx + 1} →
                </span>
              </Link>
            ))}
          </div>

          {/* Drawer Footer & Direct Channels */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Direct Communication
              </span>
              <button
                onClick={() => {
                  setMobileDrawerOpen(false)
                  onOpenContact()
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-950 text-white hover:bg-signal-blue font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Let's Talk
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center gap-2 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-amber-500" />
                <span className="truncate">{phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 flex items-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-2 text-slate-500">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900" aria-label="LinkedIn">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href={xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900" aria-label="X">
                <XIcon className="w-5 h-5" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900" aria-label="GitHub">
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${email}`} className="hover:text-slate-900" aria-label="Email">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  )
}
