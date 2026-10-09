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
  TargetIcon,
  BriefcaseIcon,
  EducationIcon,
  WorkIcon,
  BlogIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  DocumentIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from './Icons'

export default function Navigation({
  onOpenSearch,
  onOpenContact,
  profile,
  sidebarCollapsed = false,
  onToggleSidebar
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

  // EXACTLY 7 PRIMARY NAVIGATION DESTINATIONS IN AGREED ORDER
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

  // Secondary items in the "More" bottom sheet (in agreed relative order: Education, Blog, Contact)
  const moreSheetItems = [
    { label: 'Education', href: '/#education', desc: 'B.Tech & Google PM certification', icon: EducationIcon },
    { label: 'Blog', href: '/blog', desc: 'Ideas, insights and writing', icon: BlogIcon },
    { label: 'Contact', href: '/#contact', desc: 'Connect, collaborate or discuss', icon: MessageSquareIcon },
    { label: 'NUVIO Case Study', href: '/work/nuvio', desc: 'Private PDF workspace teardown', icon: WorkIcon },
    { label: 'Public Resume', href: '/resume', desc: 'Inspect full verified CV', icon: DocumentIcon }
  ]

  return (
    <>
      {/* ==================================================== */}
      {/* 1. DESKTOP LEFT APP SIDEBAR (250px Expanded / 72px Collapsed) */}
      {/* ==================================================== */}
      <aside
        className={`hidden lg:flex fixed top-0 left-0 bottom-0 z-40 flex-col justify-between bg-white border-r border-[#E5E7EB] select-none shadow-[1px_0_4px_rgba(0,0,0,0.02)] transition-[width] duration-200 ${
          sidebarCollapsed ? 'w-[72px] items-center' : 'w-[250px]'
        }`}
        aria-label="App Navigation Rail"
      >
        {/* Sidebar Top: Brand Mark + Name */}
        <div className="w-full h-16 border-b border-[#E5E7EB] flex items-center px-4">
          <Link
            href="/#hero"
            className={`flex items-center gap-3 w-full group ${sidebarCollapsed ? 'justify-center' : ''}`}
            title="Vivek Dhoundiyal — Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-extrabold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="tracking-tighter font-mono">VD</span>
            </div>

            {!sidebarCollapsed && (
              <div className="overflow-hidden leading-tight">
                <div className="text-[13px] font-bold text-[#111318] truncate">
                  Vivek Dhoundiyal
                </div>
                <div className="text-[11px] text-[#737984] font-normal truncate">
                  Commercial Operator
                </div>
              </div>
            )}
          </Link>
        </div>

        {/* Sidebar Center: 7 Navigation Links in EXACT AGREED ORDER */}
        <nav className="flex-1 w-full flex flex-col gap-1 py-3 px-3 overflow-y-auto no-scrollbar">
          {primaryNavItems.map((item) => {
            const Icon = item.icon
            const isActive = isHome
              ? activeSection === item.sectionId
              : router.pathname === item.href || (item.href === '/blog' && router.pathname.startsWith('/blog'))

            if (sidebarCollapsed) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative group h-[44px] w-[44px] mx-auto rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#2563EB] font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  title={item.label}
                >
                  <Icon className="w-[18px] h-[18px]" width={18} height={18} />
                  {/* Collapsed Tooltip */}
                  <div className="absolute left-full ml-2.5 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md z-50">
                    {item.label}
                  </div>
                </Link>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative h-[44px] w-full rounded-xl transition-all duration-150 flex items-center gap-3 pr-3 text-[13px] ${
                  isActive
                    ? 'bg-blue-50/90 text-[#2563EB] font-semibold border-l-[3px] border-[#2563EB] pl-2.5 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80 pl-3 font-medium'
                }`}
              >
                <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-current">
                  <Icon className="w-[18px] h-[18px]" width={18} height={18} />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Bottom: Let's Talk CTA + Collapse Toggle */}
        <div className="w-full p-3 border-t border-[#E5E7EB] flex flex-col gap-2 bg-white">
          <button
            onClick={onOpenContact}
            className={`w-full h-10 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer ${
              sidebarCollapsed ? 'px-0' : 'px-3'
            }`}
            title="Let's Talk"
            aria-label="Open contact with Vivek"
          >
            <MessageSquareIcon className="w-4 h-4 flex-shrink-0" width={16} height={16} />
            {!sidebarCollapsed && <span>Let&apos;s Talk</span>}
          </button>

          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className={`flex items-center justify-center py-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer ${
                sidebarCollapsed ? 'w-9 h-8 mx-auto' : 'w-full gap-1.5 text-[11px]'
              }`}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {sidebarCollapsed ? (
                <ChevronRightIcon className="w-4 h-4" width={16} height={16} />
              ) : (
                <>
                  <ChevronLeftIcon className="w-3.5 h-3.5" width={14} height={14} />
                  <span>Collapse sidebar</span>
                </>
              )}
            </button>
          )}
        </div>
      </aside>

      {/* ==================================================== */}
      {/* 2. DESKTOP TOP UTILITY BAR (Fixed, Adapts to Sidebar) */}
      {/* ==================================================== */}
      <header
        className={`hidden lg:flex fixed top-0 right-0 z-30 h-16 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] items-center justify-between px-6 transition-[left] duration-200 ${
          sidebarCollapsed ? 'left-[72px]' : 'left-[250px]'
        }`}
        aria-label="Desktop Utility Header"
      >
        {/* Search Trigger Bar */}
        <div className="flex items-center gap-3 w-72">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs text-slate-500 transition-colors cursor-pointer group"
            aria-label="Open search dialog"
          >
            <div className="flex items-center gap-2">
              <SearchIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" width={14} height={14} />
              <span className="truncate">Search capabilities, work, credentials...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-400 font-semibold shadow-2xs">
              /
            </kbd>
          </button>
        </div>

        {/* Right Utility Stack */}
        <div className="flex items-center gap-3">
          {/* Live Availability Status Pill */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[11px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to strategic growth &amp; advisory roles</span>
          </div>

          <div className="hidden xl:block h-4 w-px bg-slate-200" />

          {/* Social Channels */}
          <div className="flex items-center gap-1 text-slate-500">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:text-[#2563EB] hover:bg-slate-50 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5" width={14} height={14} />
            </a>
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors"
              title="X (Twitter)"
              aria-label="X Profile"
            >
              <XIcon className="w-3.5 h-3.5" width={14} height={14} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-3.5 h-3.5" width={14} height={14} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp Contact"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" width={14} height={14} />
            </a>
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Resume Link */}
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 transition-colors"
          >
            <DocumentIcon className="w-3.5 h-3.5 text-slate-500" width={14} height={14} />
            <span>Resume</span>
          </Link>

          {/* Primary Let's Talk CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB] text-white hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3 h-3" width={12} height={12} />
          </button>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 3. MOBILE COMPACT TOP APP BAR                        */}
      {/* ==================================================== */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] flex items-center justify-between px-4"
        aria-label="Mobile Application Top Bar"
      >
        <Link href="/#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
            <span className="font-mono">VD</span>
          </div>
          <div>
            <div className="text-xs font-bold text-[#111318] leading-tight">Vivek Dhoundiyal</div>
            <div className="text-[10px] text-[#737984] leading-tight font-medium">Business · Growth · Partnerships</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Open search"
          >
            <SearchIcon className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-3 py-1 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors"
          >
            Let&apos;s Talk
          </button>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 4. MOBILE FIXED BOTTOM NAVIGATION (5 VISIBLE ITEMS)  */}
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
      {/* 5. MOBILE "MORE" SLIDE-UP DRAWER SHEET               */}
      {/* Lists Education, Blog, Contact in agreed relative order*/}
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
            {/* Drawer Drag Pill & Header */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs flex items-center justify-center">
                    VD
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111318]">Explore Portfolio</h3>
                    <p className="text-[11px] text-[#737984]">Education, Blog &amp; Direct Contact</p>
                  </div>
                </div>

                <button
                  onClick={() => setMoreDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
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
