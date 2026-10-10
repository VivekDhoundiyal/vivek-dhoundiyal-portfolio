import React from 'react'
import { getSiteContent } from '../lib/content'
import NuvioCaseStudy from '../components/nuvio/NuvioCaseStudy'

export default function NuvioDirectPage({ siteData }) {
  return <NuvioCaseStudy siteData={siteData} />
}

export async function getStaticProps() {
  const siteData = getSiteContent()
  const nuvio = siteData?.nuvio || {}

  return {
    props: {
      siteData,
      seoProps: {
        title: nuvio.seo?.title || 'NUVIO: Private PDF Editing, Reimagined — Product Case Study | Vivek Dhoundiyal',
        description: nuvio.seo?.description || 'Comprehensive product case study for NUVIO: private client-side PDF editing workspace.',
        canonical: 'https://vivek-dhoundiyal-portfolio.pages.dev/work/nuvio/',
      }
    }
  }
}
