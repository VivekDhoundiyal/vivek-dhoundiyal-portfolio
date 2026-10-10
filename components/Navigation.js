import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  SearchIcon,
  CloseIcon,
  WhatsAppIcon,
  ArrowRight,
  PhoneIcon,
  MailIcon,
  HomeIcon,
  TargetIcon,
  BriefcaseIcon,
  EducationIcon,
  WorkIcon,
  BlogIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  DocumentIcon
} from './Icons'

export default function Navigation({
  onOpenSearch,
  onOpenContact,
  profile
}) {
  const [scrolled, setScrolled] = useState(false)
  const [moreDrawerOpen, setMoreDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const router = useRouter()

  const isHome = router.pathname === '/'

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (isHome) {
        const sections = [
          'hero',
          'capabilities',
          'experience',
          'education',
          'work',
          'blog',
          'contact'
        ]
        const scrollPosition = window.scrollY + 180

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

  // Prevent background scroll when mobile more drawer is open
  useEffect(() => {
    if (moreDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [moreDrawerOpen])

  // Global '/' and 'Escape' hotkeys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        onOpenSearch()
      }
      if (e.key === 'Escape' && moreDrawerOpen) {
        setMoreDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onOpenSearch, moreDrawerOpen])

  const email = profile?.email || 'vivekdhoundiyal2901@gmail.com'
  const phone = profile?.phone || '+91 75030 16766'
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/vivekdhoundiyal'
  const xUrl = profile?.x || 'https://x.com/Vivek_Dh_'
  const github = profile?.github || 'https://github.com/VivekDhoundiyal'
  const whatsappUrl = 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.'

  // EXACTLY 7 PRIMARY NAVIGATION DESTINATIONS IN STRICT CANONICAL ORDER
  const primaryNavItems = [
    { label: 'Home', href: '/#hero', sectionId: 'hero', icon: HomeIcon },
    { label: 'Capabilities', href: '/#capabilities', sectionId: 'capabilities', icon: TargetIcon },
    { label: 'Experience', href: '/#experience', sectionId: 'experience', icon: BriefcaseIcon },
    { label: 'Education', href: '/#education', sectionId: 'education', icon: EducationIcon },
    { label: 'Work', href: '/#work', sectionId: 'work', icon: WorkIcon },
    { label: 'Blog', href: '/blog', sectionId: 'blog', icon: BlogIcon },
    { label: 'Contact', href: '/#contact', sectionId: 'contact', icon: MessageSquareIcon }
  ]

  // Mobile Bottom Bar: Exactly 4 visible destinations + More
  const mobileBottomItems = [
    { label: 'Home', href: '/#hero', sectionId: 'hero', icon: HomeIcon },
    { label: 'Capabilities', href: '/#capabilities', sectionId: 'capabilities', icon: TargetIcon },
    { label: 'Experience', href: '/#experience', sectionId: 'experience', icon: BriefcaseIcon },
    { label: 'Work', href: '/#work', sectionId: 'work', icon: WorkIcon }
  ]

  // Secondary items in the "More" bottom sheet (in agreed relative order: Education, Blog, Contact, Case Study, Resume)
  const moreSheetItems = [
    { label: 'Education', href: '/#education', desc: 'B.Tech & Google Project Management Certification', icon: EducationIcon },
    { label: 'Blog', href: '/blog', desc: 'Ideas, insights and writing', icon: BlogIcon },
    { label: 'Contact', href: '/#contact', desc: 'Connect, collaborate or discuss', icon: MessageSquareIcon },
    { label: 'NUVIO Case Study', href: '/work/nuvio', desc: 'Private PDF workspace teardown', icon: WorkIcon },
    { label: 'Public Resume', href: '/resume', desc: 'Inspect full verified CV', icon: DocumentIcon }
  ]

  return (
    <>
      {/* ==================================================== */}
      {/* 1. SLIM STICKY TOP HEADER (DESKTOP & MOBILE)        */}
      {/* ==================================================== */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/90 backdrop-blur-[16px] border-b border-[#E5E7EB] shadow-[0_4px_20px_-4px_rgba(17,19,24,0.06)]'
            : 'bg-white/80 backdrop-blur-[16px] border-b border-[#E5E7EB]/80 shadow-none'
        }`}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
        aria-label="Portfolio Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: Brand mark & Name */}
          <Link
            href="/#hero"
            className="flex items-center gap-2.5 flex-shrink-0 group focus:outline-none"
            title="Vivek Dhoundiyal — Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform font-mono flex-shrink-0">
              VD
            </div>
            <div className="flex flex-col leading-tight overflow-hidden">
              <span className="text-xs sm:text-[13px] font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors truncate">
                Vivek Dhoundiyal
              </span>
              <span className="hidden sm:block text-[10px] text-[#737984] font-medium truncate">
                Business · Growth · Partnerships
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Canonical 7 items in strict order) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Primary Navigation">
            {primaryNavItems.map((item) => {
              const Icon = item.icon
              const isActive = isHome
                ? activeSection === item.sectionId
                : router.pathname === item.href || (item.href === '/blog' && router.pathname.startsWith('/blog'))

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-[#2563EB] font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0 text-current" width={14} height={14} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right: Utility & Action Stack (Search, Social, Resume, Let's Talk) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs text-slate-500 transition-colors cursor-pointer group"
              aria-label="Open search dialog"
            >
              <SearchIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" width={14} height={14} />
              <span className="hidden xl:inline text-xs text-slate-500">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-400 font-semibold shadow-2xs">
                /
              </kbd>
            </button>

            {/* Social Channels (Visible xl+) */}
            <div className="hidden xl:flex items-center gap-1 text-slate-500">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:text-[#2563EB] hover:bg-slate-50 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5" width={14} height={14} />
              </a>
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:text-slate-900 hover:bg-slate-50 transition-colors"
                title="X (Twitter)"
                aria-label="X Profile"
              >
                <XIcon className="w-3.5 h-3.5" width={14} height={14} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:text-slate-900 hover:bg-slate-50 transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-3.5 h-3.5" width={14} height={14} />
              </a>
            </div>

            <div className="hidden xl:block h-3.5 w-px bg-slate-200" />

            {/* Resume Link */}
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 transition-colors"
            >
              <DocumentIcon className="w-3.5 h-3.5 text-slate-500" width={14} height={14} />
              <span>Resume</span>
            </Link>

            {/* Primary Let's Talk CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] text-white hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="Open contact dialog"
            >
              <MessageSquareIcon className="w-3.5 h-3.5 sm:hidden" width={14} height={14} />
              <span>Let&apos;s Talk</span>
              <ArrowRight className="hidden sm:inline-block w-3 h-3" width={12} height={12} />
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 2. MOBILE FIXED BOTTOM NAVIGATION (5 ITEMS)          */}
      {/* Home, Capabilities, Experience, Work, More           */}
      {/* ==================================================== */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] grid grid-cols-5 items-center px-1 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]"
        aria-label="Mobile Bottom Navigation"
      >
        {mobileBottomItems.map((item) => {
          const Icon = item.icon
          const isActive = isHome ? activeSection === item.sectionId : false

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 transition-colors ${
                isActive ? 'text-[#2563EB]' : 'text-[#737984] hover:text-[#111318]'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className={`text-[10px] tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-0.5" />
              )}
            </Link>
          )
        })}

        {/* 5th Mobile Tab: More (Overflow Sheet) */}
        <button
          onClick={() => setMoreDrawerOpen(true)}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            moreDrawerOpen ? 'text-[#2563EB]' : 'text-[#737984] hover:text-[#111318]'
          }`}
          aria-label="Open portfolio more menu"
        >
          <MoreHorizontalIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">More</span>
        </button>
      </nav>

      {/* ==================================================== */}
      {/* 3. MOBILE "MORE" SLIDE-UP DRAWER SHEET               */}
      {/* ==================================================== */}
      {moreDrawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setMoreDrawerOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 space-y-5 shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
            aria-label="Explore Portfolio Navigation"
          >
            {/* Drawer Drag Handle & Header */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center font-mono">
                    VD
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111318]">Explore Portfolio</h3>
                    <p className="text-[11px] text-[#737984]">Education, Blog &amp; Direct Contact</p>
                  </div>
                </div>

                <button
                  onClick={() => setMoreDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation Grid (Education, Blog, Contact, Case Study, Resume) */}
            <div className="grid grid-cols-2 gap-2.5">
              {moreSheetItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMoreDrawerOpen(false)}
                    className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2563EB]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#737984] truncate">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Direct Communication Channels */}
            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#737984] block font-semibold">
                Direct Channels
              </span>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span>{phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 hover:bg-emerald-100 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center justify-around pt-1 text-slate-500">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#2563EB]"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-slate-900"
                  title="X (Twitter)"
                  aria-label="X Profile"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-slate-900"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-2 hover:text-blue-600"
                  title="Email"
                  aria-label="Email"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
