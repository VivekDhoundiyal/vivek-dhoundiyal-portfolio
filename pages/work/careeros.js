import React from 'react'
import { getSiteContent } from '../../lib/content'
import HireswayCaseStudy from '../../components/hiresway/HireswayCaseStudy'

export default function CareerOSWorkPage({ siteData }) {
  return <HireswayCaseStudy siteData={siteData} />
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  const hiresway = siteData?.hiresway || siteData?.careeros || {}

  return {
    props: {
      siteData,
      seoProps: {
        title: hiresway.seo?.title || 'Hiresway: The AI-Powered Career Platform — Case Study | Vivek Dhoundiyal',
        description: hiresway.seo?.description || 'Comprehensive case study and operational blueprint for Hiresway: inverting job discovery into an active, profile-driven intelligence engine.',
        canonical: 'https://vivek-dhoundiyal-portfolio.pages.dev/work/hiresway',
      }
    }
  }
}
