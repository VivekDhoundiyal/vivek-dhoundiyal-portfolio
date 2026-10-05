import React, { useState } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SearchModal from './SearchModal'
import ContactModal from './ContactModal'
import SeoHead from './SeoHead'
import AnimatedAvatarCompanion from './AnimatedAvatarCompanion'
import { useRouter } from 'next/router'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function Layout({ children, siteData, seoProps }) {
  const router = useRouter()
  useScrollReveal([router.asPath])

  const [searchOpen, setSearchOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const profile = siteData?.profile || {}
  const modalContact = siteData?.modalContact || {}

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#111318] selection:bg-blue-600/10 selection:text-[#111318] font-sans antialiased overflow-x-hidden w-full">
      <SeoHead {...seoProps} />

      <Navigation
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        profile={profile}
      />

      <main className="flex-1 w-full pt-16 lg:pt-[70px] overflow-x-hidden">
        {children}
      </main>

      <Footer profile={profile} onOpenContact={() => setContactOpen(true)} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        siteData={siteData}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        modalData={modalContact}
      />

      <AnimatedAvatarCompanion />
    </div>
  )
}
