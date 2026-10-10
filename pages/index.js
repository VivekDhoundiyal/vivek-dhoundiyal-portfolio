import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSiteContent } from '../lib/content'
import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import EntrepreneurialExperience from '../components/EntrepreneurialExperience'
import MyJourneyTimeline from '../components/MyJourneyTimeline'
import CorporateExperience from '../components/CorporateExperience'
import ExperienceSection from '../components/ExperienceSection'
import EducationCertificationsSection from '../components/EducationCertificationsSection'
import WhereIAmBuilding from '../components/WhereIAmBuilding'
import ThinkingNotes from '../components/ThinkingNotes'
import AboutBackground from '../components/AboutBackground'
import ContactSection from '../components/ContactSection'
import SkillsSection from '../components/SkillsSection'
import { useScrollReveal } from '../lib/useScrollReveal'

const DEFAULT_SECTIONS = [
  { id: 'hero', type: 'hero', name: 'Home', enabled: true },
  { id: 'capabilities', type: 'capabilities', name: 'Capabilities', enabled: true },
  { id: 'experience', type: 'experience', name: 'Experience', enabled: true },
  { id: 'education', type: 'education', name: 'Education', enabled: true },
  { id: 'work', type: 'work', name: 'Work', enabled: true },
  { id: 'blog', type: 'blog', name: 'Blog', enabled: true },
  { id: 'contact', type: 'contact', name: 'Contact', enabled: true }
]

export default function Home({ siteData: initialData }) {
  const router = useRouter()
  const [data, setData] = useState(initialData || {})
  useScrollReveal([data])

  // Support live preview in draft mode (?preview=true) or fresh published content
  useEffect(() => {
    if (router.query.preview === 'true') {
      fetch('/api/content?mode=draft', { credentials: 'include', cache: 'no-store' })
        .then(res => res.json())
        .then(draft => {
          if (draft && !draft.error) {
            setData(draft)
          }
        })
        .catch(() => {})
    } else {
      fetch('/api/content', { cache: 'no-store' })
        .then(res => res.json())
        .then(fresh => {
          if (fresh && !fresh.error && Object.keys(fresh).length > 0) {
            setData(fresh)
          }
        })
        .catch(() => {})
    }
  }, [router.query.preview])

  const {
    profile,
    hero,
    capabilities,
    projects,
    corporateExperience,
    experience,
    thinking,
    tools,
    skills,
    certifications,
    about,
    education,
    contact,
    social,
    whereIAmBuilding
  } = data || {}

  // Canonical 7 primary navigation sections in strict order
  const activeSections = DEFAULT_SECTIONS

  const renderSection = (sec) => {
    switch (sec.type) {
      case 'hero':
        return <Hero key={sec.id} profile={profile} hero={hero} contact={contact} social={social} />
      case 'capabilities':
        return <WhatIDo key={sec.id} capabilities={capabilities} />
      case 'experience':
      case 'timeline':
      case 'corporate':
        return <ExperienceSection key={sec.id} experience={experience} />
      case 'education':
      case 'education-certifications':
        return <EducationCertificationsSection key={sec.id} education={education} certifications={certifications} />
      case 'work':
      case 'entrepreneurial':
        return <EntrepreneurialExperience key={sec.id} projects={projects} />
      case 'blog':
      case 'thinking':
        return <ThinkingNotes key={sec.id} articles={thinking} />
      case 'contact':
      case 'about-contact':
        return <ContactSection key={sec.id} contact={contact} profile={profile} social={social} />
      case 'journey':
        return <MyJourneyTimeline key={sec.id} />
      case 'building':
        return <WhereIAmBuilding key={sec.id} data={whereIAmBuilding} />
      case 'skills':
        return <SkillsSection key={sec.id} skills={skills} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-0 selection:bg-blue-100 selection:text-blue-900">
      {(router.query.preview === 'true' || (router.asPath && router.asPath.includes('preview=true'))) && (
        <div className="bg-amber-500 text-black text-xs font-semibold py-1.5 px-4 text-center sticky top-0 z-50 shadow-sm flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>PREVIEW MODE ACTIVE: Viewing unreleased draft content.</span>
        </div>
      )}
      {activeSections.map(renderSection)}
    </div>
  )
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  const seo = siteData?.seo || {}

  return {
    props: {
      siteData,
      seoProps: {
        title: seo.siteTitle || "Vivek Dhoundiyal | Business Development, Growth & Partnerships",
        description: seo.siteDescription || "Explore Vivek Dhoundiyal’s work across business development, revenue growth, strategic partnerships, business operations, and commercial execution.",
        canonical: seo.canonicalUrl || "https://vivek-dhoundiyal-portfolio.pages.dev",
      }
    }
  }
}
