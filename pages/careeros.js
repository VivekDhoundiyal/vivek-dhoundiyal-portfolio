import React from 'react'
import { getSiteContent } from '../lib/content'
import CareerOSCaseStudy from '../components/careeros/CareerOSCaseStudy'

export default function CareerOSDirectPage({ siteData }) {
  return <CareerOSCaseStudy siteData={siteData} />
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  const careeros = siteData?.careeros || {}

  return {
    props: {
      siteData,
      seoProps: {
        title: careeros.seo?.title || 'CareerOS: The AI-Powered Career Operating System — Product Case Study | Vivek Dhoundiyal',
        description: careeros.seo?.description || 'Comprehensive product case study and operational blueprint for CareerOS: inverting job discovery into an active, profile-driven intelligence engine.',
        canonical: careeros.seo?.canonical || 'https://vivekdhoundiyal.com/careeros',
      }
    }
  }
}
