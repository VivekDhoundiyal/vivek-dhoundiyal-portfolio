import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  WorkIcon,
  JourneyIcon,
  CapabilitiesIcon,
  ToolsIcon,
  BlogIcon,
  BuildingIcon,
  ExperienceIcon,
  EducationIcon,
  AboutIcon,
  MoreHorizontalIcon,
  DocumentIcon
} from './Icons'

export default function Navigation({ onOpenSearch, onOpenContact, profile }) {
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
          'work',
          'journey',
          'what-i-do',
          'tools',
          'thinking',
          'building',
          'experience',
          'education-certifications',
          'about-contact'
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

  // Rail navigation items (Desktop Sidebar)
  const railNavItems = [
    { label: 'Home', href: '/#hero', sectionId: 'hero', icon: HomeIcon },
    { label: 'Work', href: '/#work', sectionId: 'work', icon: WorkIcon },
    { label: 'Journey', href: '/#journey', sectionId: 'journey', icon: JourneyIcon },
    { label: 'Skills', href: '/#what-i-do', sectionId: 'what-i-do', icon: CapabilitiesIcon },
    { label: 'Tools', href: '/#tools', sectionId: 'tools', icon: ToolsIcon },
    { label: 'Blog', href: '/blog', sectionId: 'thinking', icon: BlogIcon },
    { label: 'Build', href: '/#building', sectionId: 'building', icon: BuildingIcon },
    { label: 'Exp', href: '/#experience', sectionId: 'experience', icon: ExperienceIcon },
    { label: 'Degree', href: '/#education-certifications', sectionId: 'education-certifications', icon: EducationIcon },
    { label: 'About', href: '/#about-contact', sectionId: 'about-contact', icon: AboutIcon }
  ]

  // Mobile Bottom Bar primary 4 destinations + More
  const mobileBottomItems = [
    { label: 'Home', href: '/#hero', sectionId: 'hero', icon: HomeIcon },
    { label: 'Work', href: '/#work', sectionId: 'work', icon: WorkIcon },
    { label: 'Blog', href: '/blog', sectionId: 'thinking', icon: BlogIcon },
    { label: 'Building', href: '/#building', sectionId: 'building', icon: BuildingIcon }
  ]

  // Secondary items in the "More" bottom sheet
  const moreSheetItems = [
    { label: 'My Journey', href: '/#journey', desc: 'Interactive career timeline', icon: JourneyIcon },
    { label: 'Core Capabilities', href: '/#what-i-do', desc: 'Revenue, partnerships & ops', icon: CapabilitiesIcon },
    { label: 'Tools I Use', href: '/#tools', desc: 'AI, workflows & software stack', icon: ToolsIcon },
    { label: 'Experience', href: '/#experience', desc: 'Commercial & corporate roles', icon: ExperienceIcon },
    { label: 'Education & Credentials', href: '/#education-certifications', desc: 'B.Tech & Google PM certification', icon: EducationIcon },
    { label: 'About Me', href: '/#about-contact', desc: 'Operator background & principles', icon: AboutIcon },
    { label: 'NUVIO Case Study', href: '/work/nuvio', desc: 'Private PDF workspace teardown', icon: WorkIcon },
    { label: 'Public Resume', href: '/resume', desc: 'Inspect full verified CV', icon: DocumentIcon }
  ]

  return (
    <>
      {/* ==================================================== */}
      {/* 1. DESKTOP LEFT APP RAIL (Fixed, 80px / w-20)        */}
      {/* ==================================================== */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 z-40 w-20 flex-col items-center justify-between bg-white border-r border-[#E5E7EB] py-3.5 select-none shadow-[1px_0_4px_rgba(0,0,0,0.02)]"
        aria-label="App Navigation Rail"
      >
        {/* Rail Top: VD Brand Mark Monogram */}
        <div className="flex flex-col items-center">
          <Link
            href="/#hero"
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-extrabold text-sm flex items-center justify-center shadow-sm hover:scale-105 hover:shadow-md transition-all group"
            title="Vivek Dhoundiyal — Home"
          >
            <span className="tracking-tighter font-mono">VD</span>
          </Link>
        </div>

        {/* Rail Center: Navigation Icon Stack */}
        <nav className="flex flex-col items-center gap-1 my-auto overflow-y-auto no-scrollbar py-2 max-h-[calc(100vh-170px)]">
          {railNavItems.map((item) => {
            const Icon = item.icon
            const isActive = isHome
              ? activeSection === item.sectionId
              : router.pathname === item.href || (item.href === '/blog' && router.pathname.startsWith('/blog'))

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative group w-14 py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50/90 text-[#2563EB] font-bold shadow-2xs'
                    : 'text-[#555B66] hover:text-[#111318] hover:bg-slate-50'
                }`}
                title={item.label}
              >
                {/* Active Indicator Bar (Left Edge) */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#2563EB] rounded-r-full" />
                )}

                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-[#2563EB]' : 'text-slate-600 group-hover:text-slate-900'}`} />
                <span className={`text-[9.5px] tracking-tight leading-tight mt-0.5 truncate max-w-full ${isActive ? 'font-bold text-[#2563EB]' : 'font-medium'}`}>
                  {item.label}
                </span>

                {/* Hover Tooltip (App Shell Style) */}
                <div className="absolute left-full ml-2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md z-50">
                  {item.label}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Rail Bottom: Search + Profile Thumbnail + Let's Talk Trigger */}
        <div className="flex flex-col items-center gap-2 pt-2 border-t border-slate-100 w-full px-2">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#2563EB] border border-slate-200/80 flex items-center justify-center transition-colors shadow-2xs group relative"
            title="Search (Hotkey: /)"
            aria-label="Search portfolio"
          >
            <SearchIcon className="w-4 h-4" />
            <span className="absolute left-full ml-2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-sm z-50 whitespace-nowrap">
              Search (/)
            </span>
          </button>

          {/* Profile Thumbnail with Online Indicator */}
          <button
            onClick={onOpenContact}
            className="relative w-10 h-10 rounded-full ring-2 ring-blue-500/30 hover:ring-[#2563EB] transition-all p-0.5 group"
            title="Vivek Dhoundiyal — Open contact"
            aria-label="Open contact with Vivek"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
              <Image
                src="/images/vivek-portrait.png"
                alt="Vivek Dhoundiyal thumbnail"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            {/* Green Online Dot */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          </button>
        </div>
      </aside>

      {/* ==================================================== */}
      {/* 2. DESKTOP TOP UTILITY BAR (Fixed, Left-20 to Right-0)*/}
      {/* ==================================================== */}
      <header
        className={`hidden lg:flex fixed top-0 left-20 right-0 h-16 z-30 px-6 items-center justify-between border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl border-[#E5E7EB] shadow-xs'
            : 'bg-white/75 backdrop-blur-md border-[#E5E7EB]/60'
        }`}
        aria-label="Desktop Utility Header"
      >
        {/* Left: Interactive App Search Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-500 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer group"
          >
            <SearchIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB]" />
            <span className="font-medium text-[11.5px]">Search projects, tools, insights, experience...</span>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-400 group-hover:text-slate-600">
              /
            </kbd>
          </button>
        </div>

        {/* Center / Right: Availability Badge + Socials + CTAs */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Availability Pill */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Open to strategic growth &amp; advisory roles</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1 border-l border-slate-200/80 pl-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-[#2563EB] hover:bg-blue-50/60 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="X (Twitter)"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              title="WhatsApp Direct"
              aria-label="WhatsApp Direct"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Quick Link */}
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#111318] hover:text-[#2563EB] bg-white hover:bg-slate-50 border border-[#E5E7EB] shadow-2xs transition-colors"
          >
            <DocumentIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Resume</span>
          </Link>

          {/* Primary "LET'S TALK" Pill Button */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-normal bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            aria-label="Let's Talk — Open contact dialog"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 3. MOBILE TOP HEADER (Fixed, 56px / h-14)            */}
      {/* ==================================================== */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 h-14 z-40 px-4 flex items-center justify-between border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-[#E5E7EB] shadow-xs'
            : 'bg-white/85 backdrop-blur-md border-[#E5E7EB]/70'
        }`}
        aria-label="Mobile Header"
      >
        {/* Left: VD Monogram + Name */}
        <Link href="/#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-mono font-bold text-xs flex items-center justify-center shadow-2xs">
            VD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[#111318] leading-tight">
              Vivek Dhoundiyal
            </span>
            <span className="text-[10px] text-[#737984] font-medium leading-none">
              Business · Growth · Partnerships
            </span>
          </div>
        </Link>

        {/* Right: Search + Let's Talk CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 shadow-2xs transition-colors"
            aria-label="Search"
          >
            <SearchIcon className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2563EB] text-white hover:bg-blue-700 shadow-2xs transition-colors cursor-pointer"
          >
            <span>Let's Talk</span>
          </button>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 4. MOBILE BOTTOM NAVIGATION BAR (Fixed, 64px / h-16)  */}
      {/* ==================================================== */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 h-16 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E5E7EB] px-2 flex items-center justify-around shadow-lg pb-safe select-none"
        aria-label="Mobile Bottom Navigation"
      >
        {mobileBottomItems.map((item) => {
          const Icon = item.icon
          const isActive = isHome
            ? activeSection === item.sectionId
            : router.pathname === item.href || (item.href === '/blog' && router.pathname.startsWith('/blog'))

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex-1 py-1 flex flex-col items-center justify-center transition-colors relative ${
                isActive ? 'text-[#2563EB]' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className="w-5 h-5 transition-transform active:scale-95" />
              <span className={`text-[10.5px] tracking-tight mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-0.5" />
              )}
            </Link>
          )
        })}

        {/* 5th Action: "More" Menu Button (opens bottom sheet drawer) */}
        <button
          onClick={() => setMoreDrawerOpen(true)}
          className={`flex-1 py-1 flex flex-col items-center justify-center transition-colors ${
            moreDrawerOpen ? 'text-[#2563EB]' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Open portfolio more menu"
        >
          <MoreHorizontalIcon className="w-5 h-5" />
          <span className="text-[10.5px] tracking-tight font-medium mt-0.5">
            More
          </span>
        </button>
      </nav>

      {/* ==================================================== */}
      {/* 5. SLIDE-UP "MORE" BOTTOM SHEET / DRAWER (Mobile)    */}
      {/* ==================================================== */}
      {moreDrawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex flex-col justify-end animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Explore Portfolio Navigation"
          onClick={() => setMoreDrawerOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl border-t border-slate-200 p-6 max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grabber Handle */}
            <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white font-mono font-bold text-xs flex items-center justify-center">
                  VD
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111318]">
                    Explore Portfolio
                  </h3>
                  <span className="text-[11px] text-[#737984]">
                    Interactive app index &amp; contact
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMoreDrawerOpen(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of Navigation Destinations */}
            <div className="grid grid-cols-2 gap-2.5">
              {moreSheetItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMoreDrawerOpen(false)}
                    className="p-3 rounded-2xl bg-[#FAFAF8] hover:bg-blue-50/60 border border-[#E5E7EB] hover:border-blue-200 transition-all flex flex-col space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#2563EB] shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="text-xs font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors pt-1">
                      {item.label}
                    </span>
                    <span className="text-[10.5px] text-[#737984] leading-tight line-clamp-1">
                      {item.desc}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-bold block">
                Direct Channels
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={`tel:${cleanPhone}`}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 flex items-center gap-2 transition-colors"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span className="truncate">{phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 flex items-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Socials & Primary CTA */}
            <div className="pt-2 border-t border-slate-100 flex flex-col space-y-3">
              <div className="flex items-center justify-center gap-6 text-slate-500 py-1">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB]" aria-label="LinkedIn">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a href={xUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900" aria-label="X">
                  <XIcon className="w-5 h-5" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900" aria-label="GitHub">
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${email}`} className="hover:text-[#2563EB]" aria-label="Email">
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMoreDrawerOpen(false)
                  onOpenContact()
                }}
                className="w-full py-3 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Let's Talk — Open Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
