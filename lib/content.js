import staticSiteContent from '../data/siteContent.json'

let fsModule = null
let pathModule = null

if (typeof window === 'undefined') {
  try {
    fsModule = require('fs')
    pathModule = require('path')
  } catch (e) {
    // browser or environment without fs
  }
}

function getDataFilePath() {
  if (pathModule) {
    return pathModule.join(process.cwd(), 'data', 'siteContent.json')
  }
  return null
}

/**
 * Read the complete site content from JSON storage with static fallback.
 */
export function getSiteContent() {
  if (typeof window === 'undefined' && fsModule) {
    try {
      const filePath = getDataFilePath()
      if (filePath && fsModule.existsSync(filePath)) {
        const raw = fsModule.readFileSync(filePath, 'utf8')
        return JSON.parse(raw)
      }
    } catch (err) {
      console.error('Failed reading siteContent.json from disk, falling back to static:', err)
    }
  }
  return staticSiteContent
}

/**
 * Sanitize strings to prevent malicious script injection in CMS input.
 */
function sanitizeValue(value) {
  if (typeof value === 'string') {
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
  }
  if (Array.isArray(value)) {
    return value.map(sanitizeValue)
  }
  if (value !== null && typeof value === 'object') {
    const sanitizedObj = {}
    for (const [k, v] of Object.entries(value)) {
      sanitizedObj[k] = sanitizeValue(v)
    }
    return sanitizedObj
  }
  return value
}

/**
 * Save updated site content to JSON storage after sanitization.
 */
export function saveSiteContent(data) {
  if (typeof window !== 'undefined' || !fsModule) {
    return { success: false, error: 'File system not accessible in this runtime' }
  }
  try {
    const sanitized = sanitizeValue(data)

    // Synchronize profile shortcuts
    if (sanitized.contact?.email) {
      if (!sanitized.profile) sanitized.profile = {}
      sanitized.profile.email = sanitized.contact.email
    }
    if (sanitized.hero?.title) {
      if (!sanitized.profile) sanitized.profile = {}
      sanitized.profile.heroHeadline = sanitized.hero.title
    }
    if (sanitized.hero?.eyebrow) {
      if (!sanitized.profile) sanitized.profile = {}
      sanitized.profile.heroEyebrow = sanitized.hero.eyebrow
    }
    if (sanitized.hero?.description) {
      if (!sanitized.profile) sanitized.profile = {}
      sanitized.profile.heroDescription = sanitized.hero.description
    }

    const filePath = getDataFilePath()
    if (!filePath) {
      return { success: false, error: 'Could not determine content file path' }
    }

    fsModule.writeFileSync(filePath, JSON.stringify(sanitized, null, 2), 'utf8')
    return { success: true }
  } catch (err) {
    console.error('Failed saving siteContent.json:', err)
    return { success: false, error: err.message }
  }
}

export function getProfile() {
  const content = getSiteContent()
  return content?.profile || {}
}

export function getContact() {
  const content = getSiteContent()
  return content?.contact || {}
}

export function getModalContact() {
  const content = getSiteContent()
  return content?.modalContact || {
    title: "Let's connect.",
    subtitle: "Choose the easiest way to reach me.",
    call: { label: "Call Me", display: "+91 75030 16766", action: "tel:+917503016766" },
    whatsapp: { label: "WhatsApp", display: "+91 75030 16766", action: "https://wa.me/917503016766" },
    linkedin: { label: "LinkedIn", display: "in/vivekdhoundiyal", action: "https://www.linkedin.com/in/vivekdhoundiyal" },
    email: { label: "Email", display: "vivekdhoundiyal2901@gmail.com", action: "mailto:vivekdhoundiyal2901@gmail.com" }
  }
}

export function getResumes() {
  const content = getSiteContent()
  return content?.resumes || []
}

export function getSocial() {
  const content = getSiteContent()
  return content?.social || {}
}

export function getSiteSettings() {
  const content = getSiteContent()
  return content?.site || {}
}

export function getHero() {
  const content = getSiteContent()
  return content?.hero || {}
}

export function getProjects() {
  const content = getSiteContent()
  return content?.projects || []
}

export function getProjectBySlug(slug) {
  const projects = getProjects()
  return projects.find(p => p.slug === slug) || null
}

export function getThinkingPosts() {
  const content = getSiteContent()
  return content?.thinking || []
}

export function getThinkingPostBySlug(slug) {
  const posts = getThinkingPosts()
  return posts.find(p => p.slug === slug) || null
}

export function getHowIThink() {
  const content = getSiteContent()
  return content?.howIThink || []
}

export function getCurrentlyBuilding() {
  const content = getSiteContent()
  return content?.currentlyBuilding || []
}

export function getTools() {
  const content = getSiteContent()
  return content?.tools || []
}

export function getExperience() {
  const content = getSiteContent()
  return content?.experience || {}
}

export function getWhatIDo() {
  const content = getSiteContent()
  return content?.whatIDo || {}
}

export function getWhereImGoing() {
  const content = getSiteContent()
  return content?.whereImGoing || {}
}

export function getProof() {
  const content = getSiteContent()
  return content?.proof || {}
}

export function getCapabilities() {
  const content = getSiteContent()
  return content?.capabilities || []
}

export function getCapabilityBySlug(slug) {
  const list = getCapabilities()
  return list.find(c => c.slug === slug) || null
}

export function getCorporateExperience() {
  const content = getSiteContent()
  return content?.corporateExperience || []
}

export function getCorporateExperienceBySlug(slug) {
  const list = getCorporateExperience()
  return list.find(c => c.slug === slug) || null
}

export function getCertifications() {
  const content = getSiteContent()
  return content?.certifications || []
}

export function getEducation() {
  const content = getSiteContent()
  return content?.education || {}
}

export function getBuildingToward() {
  const content = getSiteContent()
  return content?.buildingToward || {}
}

export function getHiresway() {
  const content = getSiteContent()
  return content?.hiresway || content?.careeros || null
}

export function getCareerOS() {
  return getHiresway()
}



