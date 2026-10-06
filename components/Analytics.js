import React, { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import {
  GA_MEASUREMENT_ID,
  pageview,
  trackCta,
  trackSocial,
  trackProject,
  trackArticle,
  trackCredential,
  trackOutbound,
} from '../lib/gtag';

/**
 * Determine the semantic location/section of an element in the DOM
 */
function getElementLocation(el) {
  try {
    const section = el.closest('header, nav, footer, section, [id]');
    if (section) {
      if (section.id) return section.id;
      const tag = section.tagName.toLowerCase();
      if (tag === 'nav' || tag === 'header') return 'navigation';
      if (tag === 'footer') return 'footer';
    }
  } catch (e) {
    // fallback
  }
  return 'general';
}

export default function Analytics() {
  const router = useRouter();

  // 1. Single Page Application (SPA) Route Change Tracking (No Duplicate Pageviews)
  useEffect(() => {
    // Track initial pageview on client load
    const initialPath = window.location.pathname + window.location.search;
    pageview(initialPath);

    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // 2. Global Passive Click Event Delegation for Portfolio CTAs & Key Interactions
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find closest interactive element
      const el = e.target && e.target.closest ? e.target.closest('a, button, [role="button"]') : null;
      if (!el) return;

      const href = el.getAttribute('href') || el.dataset?.href || '';
      const text = (el.innerText || el.textContent || '').trim();
      const ariaLabel = el.getAttribute('aria-label') || '';
      const combined = `${text} ${ariaLabel}`.toLowerCase();
      const location = getElementLocation(el);

      // A. "Let's Talk" CTA
      if (
        combined.includes("let's talk") ||
        combined.includes('lets talk') ||
        href.includes('/contact') ||
        el.getAttribute('data-action') === 'contact'
      ) {
        trackCta('lets_talk', location, {
          link_url: href || '#contact',
          cta_text: text || "Let's Talk",
        });
        return;
      }

      // B. "View Resume" CTA
      if (
        combined.includes('view resume') ||
        combined.includes('inspect full resume') ||
        href === '/resume' ||
        href.startsWith('/resume/') ||
        (href.endsWith('.pdf') && href.toLowerCase().includes('resume'))
      ) {
        trackCta('view_resume', location, {
          link_url: href || '/resume',
          cta_text: text || 'View Resume',
        });
        return;
      }

      // C. "Explore My Work" CTA
      if (
        combined.includes('explore my work') ||
        combined.includes('explore work') ||
        href === '#work'
      ) {
        trackCta('explore_my_work', location, {
          link_url: href || '#work',
          cta_text: text || 'Explore My Work',
        });
        return;
      }

      // D. Social Profiles (LinkedIn, GitHub, X/Twitter, WhatsApp)
      if (href.includes('linkedin.com')) {
        trackSocial('linkedin', href, location);
        return;
      }
      if (href.includes('github.com')) {
        trackSocial('github', href, location);
        return;
      }
      if (href.includes('x.com') || href.includes('twitter.com')) {
        trackSocial('x_twitter', href, location);
        return;
      }
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackSocial('whatsapp', href, location);
        return;
      }

      // E. Certificate / Credential Interactions
      if (
        combined.includes('certificate') ||
        combined.includes('coursera') ||
        ariaLabel.includes('Google Project Management Professional Certificate') ||
        href.includes('coursera.org/verify') ||
        (href.endsWith('.pdf') && href.toLowerCase().includes('certificate'))
      ) {
        const actionType = href.includes('coursera.org')
          ? 'verify_external'
          : href.endsWith('.pdf')
          ? 'download_pdf'
          : 'lightbox_view';
        trackCredential('google_project_management', actionType, href || '#lightbox');
        return;
      }

      // F. Individual Project / Case Study Clicks
      if (
        href.startsWith('/work/') ||
        href === '/careeros' ||
        href.startsWith('/projects/')
      ) {
        const slug = href.replace(/^(\/work\/|\/projects\/|\/)/, '').split('/')[0] || 'work';
        const title = el.querySelector('h3, h4')?.textContent?.trim() || text || slug;
        trackProject(slug, title, href);
        return;
      }

      // G. Blog / Article Clicks
      if (
        href.startsWith('/blog/') ||
        href.startsWith('/thinking/')
      ) {
        const slug = href.replace(/^(\/blog\/|\/thinking\/)/, '').split('/')[0] || 'blog';
        const title = el.querySelector('h3, h4')?.textContent?.trim() || text || slug;
        trackArticle(slug, title, href);
        return;
      }

      // H. Outbound External Link Clicks
      if (href.startsWith('http://') || href.startsWith('https://')) {
        try {
          const urlObj = new URL(href);
          if (urlObj.hostname !== window.location.hostname) {
            trackOutbound(href, text);
          }
        } catch (err) {
          // Ignore invalid URL parsing
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      {/* 1. Official Google tag (gtag.js) script loaded asynchronously */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* 2. Global dataLayer & gtag initialization with SPA-safe configuration */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />
    </>
  );
}
