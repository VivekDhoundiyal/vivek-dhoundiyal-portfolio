import '../styles/globals.css'
import Layout from '../components/Layout'
import Analytics from '../components/Analytics'

export default function MyApp({ Component, pageProps }) {
  // Allow per-page layout or fallback to global Layout
  const getLayout = Component.getLayout || ((page) => (
    <Layout siteData={pageProps.siteData} seoProps={pageProps.seoProps}>
      {page}
    </Layout>
  ))

  return (
    <>
      <Analytics />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
