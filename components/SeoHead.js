import Head from 'next/head'

export default function SeoHead({
  title = "Vivek Dhoundiyal — Revenue, Business Development & Commercial Builder",
  description = "B2B sales and business development professional with 8+ years across revenue generation, partnerships, entrepreneurship and commercial operations. Building technology, AI workflows and CareerOS.",
  canonical = "https://vivekdhoundiyal.com",
  ogType = "website",
  ogImage = "/images/vivek-canonical.png",
  article = null,
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vivekdhoundiyal.com/#person",
        "name": "Vivek Dhoundiyal",
        "jobTitle": "Revenue, Business Development & Commercial Builder",
        "url": "https://vivekdhoundiyal.com",
        "image": "https://vivekdhoundiyal.com/images/vivek-canonical.png",
        "sameAs": [
          "https://www.linkedin.com/in/vivekdhoundiyal",
          "https://x.com/Vivek_Dh_",
          "https://github.com/VivekDhoundiyal"
        ],
        "description": "B2B sales and business development professional with 8+ years across revenue generation, partnerships, entrepreneurship and commercial operations. Building technology, AI workflows and CareerOS."
      },
      {
        "@type": "WebSite",
        "@id": "https://vivekdhoundiyal.com/#website",
        "url": "https://vivekdhoundiyal.com",
        "name": "Vivek Dhoundiyal",
        "publisher": {
          "@id": "https://vivekdhoundiyal.com/#person"
        }
      }
    ]
  }

  if (article) {
    structuredData["@graph"].push({
      "@type": "Article",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "author": {
        "@id": "https://vivekdhoundiyal.com/#person"
      }
    })
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Font Preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Vivek Dhoundiyal" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Vivek_Dh_" />
      <meta name="twitter:creator" content="@Vivek_Dh_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}
