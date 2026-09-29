import React from 'react'
import { getProjects, getProjectBySlug } from '../../lib/content'
import CaseStudyEngine from '../../components/CaseStudyEngine'

export default function CaseStudyPage({ project, allProjects }) {
  if (!project) return null

  // Filter only legitimate entrepreneurial ventures for next item
  const validProjects = allProjects.filter(p => ['settlemycar', 'dark-kitchen', 'fixins'].includes(p.slug))
  const currentIndex = validProjects.findIndex(p => p.slug === project.slug)
  const nextProject = currentIndex >= 0 
    ? validProjects[(currentIndex + 1) % validProjects.length] 
    : validProjects[0]

  return (
    <CaseStudyEngine
      item={project}
      parentLabel="Entrepreneurial Experience"
      parentHref="/#work"
      nextItem={nextProject}
      type="venture"
    />
  )
}

export async function getStaticPaths() {
  const projects = getProjects().filter(p => ['settlemycar', 'dark-kitchen', 'fixins'].includes(p.slug))
  const paths = projects.map(p => ({
    params: { slug: p.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug)
  const allProjects = getProjects()

  if (!project) {
    return { notFound: true }
  }

  return {
    props: {
      project,
      allProjects,
      seoProps: {
        title: `${project.title} — Case Study | Vivek Dhoundiyal`,
        description: project.summary || project.tagline,
        canonical: `https://vivekdhoundiyal.com/work/${project.slug}`,
      }
    }
  }
}
