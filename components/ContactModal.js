import React, { useEffect } from 'react'
import { PhoneIcon, WhatsAppIcon, LinkedInIcon, MailIcon, CloseIcon, ArrowUpRight, CopyIcon, CheckIcon } from './Icons'

export default function ContactModal({ isOpen, onClose, modalData }) {
  const [copiedEmail, setCopiedEmail] = React.useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const title = modalData?.title || "Let's connect."
  const subtitle = modalData?.subtitle || "Choose the easiest way to reach me."

  const channels = [
    {
      id: 'call',
      title: 'CALL',
      label: '+91 75030 16766',
      sub: 'Direct phone conversation',
      badge: 'Immediate',
      href: 'tel:+917503016766',
      icon: PhoneIcon,
      accent: 'amber',
      hoverBorder: 'hover:border-amber-400',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      id: 'whatsapp',
      title: 'WHATSAPP',
      label: 'WhatsApp Message',
      sub: 'Fast encrypted chat',
      badge: 'Active Now',
      href: 'https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.',
      icon: WhatsAppIcon,
      accent: 'emerald',
      hoverBorder: 'hover:border-emerald-500',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: 'linkedin',
      title: 'LINKEDIN',
      label: 'LinkedIn Profile',
      sub: 'Professional network & track record',
      badge: 'Network',
      href: 'https://www.linkedin.com/in/vivekdhoundiyal',
      icon: LinkedInIcon,
      accent: 'blue',
      hoverBorder: 'hover:border-signal-blue',
      iconBg: 'bg-blue-50 text-signal-blue border-blue-200'
    },
    {
      id: 'email',
      title: 'EMAIL',
      label: 'vivekdhoundiyal2901@gmail.com',
      sub: 'Asynchronous in-depth inquiries',
      badge: 'Detailed',
      href: 'mailto:vivekdhoundiyal2901@gmail.com?subject=Contact%20from%20your%20website&body=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.',
      icon: MailIcon,
      accent: 'indigo',
      hoverBorder: 'hover:border-indigo-500',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
  ]

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('vivekdhoundiyal2901@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-[#111318] overflow-hidden">
        {/* Subtle Ambient Aura */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] uppercase tracking-widest text-blue-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Direct Channels</span>
            </div>
            <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111318] pt-1">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#555B66]">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#111318] transition-colors flex-shrink-0"
            aria-label="Close dialog"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <a
                key={ch.id}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-4 rounded-xl bg-[#F4F5F7] hover:bg-white border border-[#E5E7EB] ${ch.hoverBorder} transition-all duration-200 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ch.iconBg} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737984] font-semibold px-2 py-0.5 rounded bg-white border border-[#E5E7EB] shadow-xs">
                    {ch.badge}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono tracking-wider text-[#737984] uppercase font-semibold">
                    {ch.title}
                  </div>
                  <div className="text-sm font-semibold text-[#111318] group-hover:text-blue-600 transition-colors truncate">
                    {ch.label}
                  </div>
                  <div className="text-[11px] text-[#555B66]">
                    {ch.sub}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-semibold text-[#555B66] group-hover:text-blue-600">
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Quick Email Copy Strip */}
        <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
          <div className="flex items-center gap-2 truncate">
            <MailIcon className="w-4 h-4 text-signal-blue flex-shrink-0" />
            <span className="truncate">{channels.find(c => c.id === 'email')?.label}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-mono text-[11px] transition-colors flex items-center gap-1.5 flex-shrink-0 shadow-xs"
          >
            {copiedEmail ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center text-[11px] font-mono text-slate-400">
          Typically responds within 24 hours · IST (UTC+5:30)
        </div>
      </div>
    </div>
  )
}
