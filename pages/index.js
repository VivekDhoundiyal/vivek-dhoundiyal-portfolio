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
import ToolsSystems from '../components/ToolsSystems'
import AboutBackground from '../components/AboutBackground'
import ContactSection from '../components/ContactSection'
import SkillsSection from '../components/SkillsSection'
import { useScrollReveal } from '../lib/useScrollReveal'

const DEFAULT_SECTIONS = [
  { id: 'hero', type: 'hero', name: 'Hero Section', enabled: true },
  { id: 'work', type: 'entrepreneurial', name: 'Selected Work & Ventures', enabled: true },
  { id: 'journey', type: 'journey', name: 'My Journey', enabled: true },
  { id: 'what-i-do', type: 'capabilities', name: 'What I Do', enabled: true },
  { id: 'tools', type: 'tools', name: 'Tools & Systems', enabled: true },
  { id: 'thinking', type: 'thinking', name: 'Thinking & Writing', enabled: true },
  { id: 'building', type: 'building', name: 'Where I Am Building', enabled: true },
  { id: 'experience', type: 'timeline', name: 'Professional Experience Summary', enabled: true },
  { id: 'education-certifications', type: 'education-certifications', name: 'Education & Certifications', enabled: true },
  { id: 'about-contact', type: 'about-contact', name: 'About & Contact', enabled: true }
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
    whereIAmBuilding,
    sections: configuredSections
  } = data || {}

  const activeSections = (configuredSections && configuredSections.length > 0)
    ? configuredSections.filter(s => s.enabled)
    : DEFAULT_SECTIONS

  const hasExplicitSkills = activeSections.some(s => s.type === 'skills')

  const renderSection = (sec) => {
    switch (sec.type) {
      case 'hero':
        return <Hero key={sec.id} profile={profile} hero={hero} contact={contact} social={social} />
      case 'capabilities':
        return <WhatIDo key={sec.id} capabilities={capabilities} />
      case 'entrepreneurial':
        return <EntrepreneurialExperience key={sec.id} projects={projects} />
      case 'journey':
        return <MyJourneyTimeline key={sec.id} />
      case 'corporate':
        return <CorporateExperience key={sec.id} corporateExperience={corporateExperience} />
      case 'timeline':
        return <ExperienceSection key={sec.id} experience={experience} />
      case 'education-certifications':
        return <EducationCertificationsSection key={sec.id} education={education} certifications={certifications} />
      case 'building':
        return <WhereIAmBuilding key={sec.id} data={whereIAmBuilding} />
      case 'thinking':
        return <ThinkingNotes key={sec.id} articles={thinking} />
      case 'tools':
        return (
          <React.Fragment key={sec.id}>
            <ToolsSystems tools={tools} />
            {!hasExplicitSkills && <SkillsSection skills={skills} />}
          </React.Fragment>
        )
      case 'skills':
        return <SkillsSection key={sec.id} skills={skills} />
      case 'about-contact':
        return (
          <div key={sec.id} id="about-contact" className="space-y-0">
            <AboutBackground experience={experience} about={about} />
            <ContactSection contact={contact} profile={profile} social={social} />
          </div>
        )
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
        title: seo.siteTitle || "Vivek Dhoundiyal — Commercial Operator & Builder",
        description: seo.siteDescription || "B2B sales and business development professional with 8+ years across revenue generation, partnerships, entrepreneurship and commercial operations. Building technology, AI workflows and practical software products.",
        canonical: seo.canonicalUrl || "https://vivekdhoundiyal.com",
      }
    }
  }
}
