import '../styles/globals.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  // Allow per-page layout or fallback to global Layout
  const getLayout = Component.getLayout || ((page) => (
    <Layout siteData={pageProps.siteData} seoProps={pageProps.seoProps}>
      {page}
    </Layout>
  ))

  return getLayout(<Component {...pageProps} />)
}
