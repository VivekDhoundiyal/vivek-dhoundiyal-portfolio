import Head from 'next/head'

export default function SeoHead({
  title = "Vivek Dhoundiyal | Business Growth, Partnerships & Product Building",
  description = "Explore Vivek Dhoundiyal’s work across business development, revenue growth, strategic partnerships, operations, and digital product building.",
  canonical = "https://vivek-dhoundiyal-portfolio.pages.dev",
  ogType = "website",
  ogImage = "/images/vivek-canonical.png",
  article = null,
  breadcrumbs = null,
  noIndex = false,
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${canonical}/#person`,
        "name": "Vivek Dhoundiyal",
        "jobTitle": "Commercial Operator & Digital Product Builder",
        "url": canonical,
        "image": `${canonical}/images/vivek-canonical.png`,
        "sameAs": [
          "https://www.linkedin.com/in/vivekdhoundiyal",
          "https://x.com/Vivek_Dh_",
          "https://github.com/VivekDhoundiyal"
        ],
        "description": "B2B sales, revenue growth, and partnerships professional with 8+ years across enterprise sales, operational systems, and practical software product building."
      },
      {
        "@type": "WebSite",
        "@id": `${canonical}/#website`,
        "url": canonical,
        "name": "Vivek Dhoundiyal Portfolio",
        "publisher": {
          "@id": `${canonical}/#person`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}/#webpage`,
        "url": canonical,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${canonical}/#website`
        }
      }
    ]
  }

  if (article) {
    structuredData["@graph"].push({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt || article.summary,
      "datePublished": article.date,
      "author": {
        "@id": `${canonical}/#person`
      },
      "publisher": {
        "@id": `${canonical}/#person`
      },
      "mainEntityOfPage": canonical
    })
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredData["@graph"].push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    })
  }

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

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
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${canonical}${ogImage}`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Vivek_Dh_" />
      <meta name="twitter:creator" content="@Vivek_Dh_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${canonical}${ogImage}`} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}
