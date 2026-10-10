import Head from 'next/head'

const SITE_URL = 'https://vivek-dhoundiyal-portfolio.pages.dev'

export default function SeoHead({
  title = "Vivek Dhoundiyal | Business Development, Growth & Partnerships",
  description = "Explore Vivek Dhoundiyal’s work across business development, revenue growth, strategic partnerships, business operations, and commercial execution.",
  canonical = "https://vivek-dhoundiyal-portfolio.pages.dev/",
  ogType = "website",
  ogImage = "/images/vivek-canonical.png",
  article = null,
  breadcrumbs = null,
  noIndex = false,
}) {
  // Normalize canonical URL
  let normalizedCanonical = canonical
  if (normalizedCanonical && !noIndex) {
    if (!normalizedCanonical.startsWith('http')) {
      normalizedCanonical = `${SITE_URL}${normalizedCanonical.startsWith('/') ? '' : '/'}${normalizedCanonical}`
    }
    normalizedCanonical = normalizedCanonical.replace('https://vivekdhoundiyal.com', SITE_URL)
    // Ensure trailing slash for paths (avoid file extensions like .png, .xml, .pdf)
    try {
      const parsed = new URL(normalizedCanonical)
      const hasExtension = /\.[a-z0-9]+$/i.test(parsed.pathname)
      if (!hasExtension && !parsed.pathname.endsWith('/')) {
        parsed.pathname = `${parsed.pathname}/`
        normalizedCanonical = parsed.toString()
      }
    } catch {
      if (!normalizedCanonical.endsWith('/') && !/\.[a-z0-9]+$/i.test(normalizedCanonical)) {
        normalizedCanonical = `${normalizedCanonical}/`
      }
    }
  }

  // Absolute OpenGraph image URL
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

  const isHome = normalizedCanonical === `${SITE_URL}/` || normalizedCanonical === SITE_URL

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Vivek Dhoundiyal",
        "jobTitle": "Business Development & Growth Leader",
        "url": `${SITE_URL}/`,
        "image": `${SITE_URL}/images/vivek-canonical.png`,
        "sameAs": [
          "https://www.linkedin.com/in/vivekdhoundiyal",
          "https://x.com/Vivek_Dh_",
          "https://github.com/VivekDhoundiyal"
        ],
        "description": "B2B sales, revenue growth, and partnerships professional with 8+ years across enterprise sales, operational systems, and business building."
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}/`,
        "name": "Vivek Dhoundiyal Portfolio",
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  }

  if (!noIndex && normalizedCanonical) {
    const pageSchema = {
      "@type": isHome ? ["WebPage", "ProfilePage"] : "WebPage",
      "@id": `${normalizedCanonical}#webpage`,
      "url": normalizedCanonical,
      "name": title,
      "description": description,
      "isPartOf": {
        "@id": `${SITE_URL}/#website`
      }
    }
    if (isHome) {
      pageSchema["mainEntity"] = {
        "@id": `${SITE_URL}/#person`
      }
    }
    structuredData["@graph"].push(pageSchema)
  }

  if (article && !noIndex && normalizedCanonical) {
    structuredData["@graph"].push({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt || article.summary,
      "datePublished": article.date,
      "author": {
        "@id": `${SITE_URL}/#person`
      },
      "publisher": {
        "@id": `${SITE_URL}/#person`
      },
      "mainEntityOfPage": normalizedCanonical
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
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      {!noIndex && normalizedCanonical && (
        <link key="canonical" rel="canonical" href={normalizedCanonical} />
      )}
      <meta key="robots" name="robots" content={robotsContent} />

      {/* Font Preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Open Graph */}
      <meta key="og:site_name" property="og:site_name" content="Vivek Dhoundiyal" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:type" property="og:type" content={ogType} />
      {!noIndex && normalizedCanonical && (
        <meta key="og:url" property="og:url" content={normalizedCanonical} />
      )}
      <meta key="og:image" property="og:image" content={absoluteOgImage} />

      {/* Twitter Cards */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content="@Vivek_Dh_" />
      <meta key="twitter:creator" name="twitter:creator" content="@Vivek_Dh_" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={absoluteOgImage} />

      {/* Structured Data */}
      {!noIndex && (
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

