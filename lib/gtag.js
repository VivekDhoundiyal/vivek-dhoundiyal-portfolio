/**
 * Google Analytics 4 (GA4) Centralized Configuration and Tracking Utilities
 * 
 * Central Measurement ID configuration:
 * Can be overridden via NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

/**
 * Send a GA4 page_view event for SPA route navigation
 */
export const pageview = (url) => {
  if (typeof window === 'undefined') return;
  
  // Ensure dataLayer & gtag exist
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
};

/**
 * Send custom GA4 event
 */
export const event = (action, params = {}) => {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag('event', action, params);
};

/**
 * Track Call-to-Action button clicks
 * @param {'lets_talk' | 'view_resume' | 'explore_my_work'} ctaName
 * @param {string} location - UI section where CTA was clicked (e.g., 'navigation', 'hero')
 * @param {object} extra - Optional additional metadata
 */
export const trackCta = (ctaName, location = 'unknown', extra = {}) => {
  event('cta_click', {
    cta_name: ctaName,
    location,
    ...extra,
  });
};

/**
 * Track Social Profile link clicks
 * @param {'linkedin' | 'github' | 'x_twitter' | 'whatsapp'} platform
 * @param {string} url - Destination URL
 * @param {string} location - UI section (e.g., 'navigation', 'footer')
 */
export const trackSocial = (platform, url, location = 'unknown') => {
  event('social_click', {
    platform,
    url,
    location,
  });
};

/**
 * Track Project or Case Study interactions
 * @param {string} projectId - Project identifier slug (e.g., 'careeros', 'settlemycar')
 * @param {string} projectName - Human readable title
 * @param {string} url - Destination URL
 */
export const trackProject = (projectId, projectName, url) => {
  event('project_click', {
    project_id: projectId,
    project_name: projectName,
    link_url: url,
  });
};

/**
 * Track Blog & Article reading clicks
 * @param {string} articleSlug - Article slug
 * @param {string} articleTitle - Article title
 * @param {string} url - Destination URL
 */
export const trackArticle = (articleSlug, articleTitle, url) => {
  event('article_click', {
    article_slug: articleSlug,
    article_title: articleTitle,
    link_url: url,
  });
};

/**
 * Track Credential & Certification interactions
 * @param {string} credentialName - E.g. 'google_project_management'
 * @param {'lightbox_view' | 'verify_external' | 'download_pdf'} actionType
 * @param {string} url - Link URL or modal identifier
 */
export const trackCredential = (credentialName, actionType, url) => {
  event('credential_click', {
    credential_name: credentialName,
    action_type: actionType,
    link_url: url,
  });
};

/**
 * Track Outbound external link clicks
 * @param {string} url - Destination URL
 * @param {string} linkText - Link text
 */
export const trackOutbound = (url, linkText = '') => {
  let domain = '';
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    domain = url;
  }

  event('outbound_click', {
    link_url: url,
    link_domain: domain,
    link_text: linkText,
  });
};
