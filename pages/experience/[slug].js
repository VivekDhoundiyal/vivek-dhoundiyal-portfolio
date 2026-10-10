import React from 'react'
import { getCorporateExperience, getCorporateExperienceBySlug } from '../../lib/content'
import CaseStudyEngine from '../../components/CaseStudyEngine'

export default function CorporateExperiencePage({ experience, allExperiences }) {
  if (!experience) return null

  const validExperiences = allExperiences.filter(e => ['collegedunia', 'kreedon'].includes(e.slug))
  const currentIndex = validExperiences.findIndex(e => e.slug === experience.slug)
  const nextExp = currentIndex >= 0 
    ? validExperiences[(currentIndex + 1) % validExperiences.length] 
    : validExperiences[0]

  return (
    <CaseStudyEngine
      item={experience}
      parentLabel="Corporate Experience"
      parentHref="/#corporate"
      nextItem={nextExp}
      type="corporate"
    />
  )
}

export async function getStaticPaths() {
  const experiences = getCorporateExperience().filter(e => ['collegedunia', 'kreedon'].includes(e.slug))
  const paths = experiences.map(e => ({
    params: { slug: e.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const experience = getCorporateExperienceBySlug(params.slug)
  const allExperiences = getCorporateExperience()

  if (!experience) {
    return { notFound: true }
  }

  return {
    props: {
      experience,
      allExperiences,
      seoProps: {
        title: `${experience.role} at ${experience.company} | Vivek Dhoundiyal`,
        description: experience.tagline || experience.summary,
        canonical: `https://vivek-dhoundiyal-portfolio.pages.dev/experience/${experience.slug}/`,
      }
    }
  }
}
