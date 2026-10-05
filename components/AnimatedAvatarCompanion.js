import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

// Mapping of sections to their dedicated avatar poses and micro-animation classes
const SECTION_AVATAR_MAP = {
  hero: {
    src: '/images/avatars/avatar_waving.png',
    alt: 'Vivek welcoming you',
    animationClass: 'animate-avatar-home'
  },
  'what-i-do': {
    src: '/images/avatars/avatar_pointing_right.png',
    alt: 'Vivek pointing to capabilities',
    animationClass: 'animate-avatar-work'
  },
  capabilities: {
    src: '/images/avatars/avatar_pointing_right.png',
    alt: 'Vivek pointing to capabilities',
    animationClass: 'animate-avatar-work'
  },
  work: {
    src: '/images/avatars/avatar_presenting_growth.png',
    alt: 'Vivek presenting work and achievements',
    animationClass: 'animate-avatar-work'
  },
  corporate: {
    src: '/images/avatars/avatar_presenting_growth.png',
    alt: 'Vivek presenting commercial leadership',
    animationClass: 'animate-avatar-work'
  },
  experience: {
    src: '/images/avatars/avatar_thinking.png',
    alt: 'Vivek reflecting on experience and strategy',
    animationClass: 'animate-avatar-experience'
  },
  'education-certifications': {
    src: '/images/avatars/avatar_education.png',
    alt: 'Vivek academic and education background',
    animationClass: 'animate-avatar-education'
  },
  education: {
    src: '/images/avatars/avatar_education.png',
    alt: 'Vivek academic and education background',
    animationClass: 'animate-avatar-education'
  },
  building: {
    src: '/images/avatars/avatar_pointing_growth.png',
    alt: 'Vivek pointing to upward growth and ventures',
    animationClass: 'animate-avatar-building'
  },
  thinking: {
    src: '/images/avatars/avatar_laptop_working.png',
    alt: 'Vivek researching and writing on laptop',
    animationClass: 'animate-avatar-blog'
  },
  blog: {
    src: '/images/avatars/avatar_laptop_working.png',
    alt: 'Vivek writing strategy notes on laptop',
    animationClass: 'animate-avatar-blog'
  },
  tools: {
    src: '/images/avatars/avatar_laptop_thumbs.png',
    alt: 'Vivek with systems and tools',
    animationClass: 'animate-avatar-blog'
  },
  skills: {
    src: '/images/avatars/avatar_pointing_right.png',
    alt: 'Vivek pointing to capabilities',
    animationClass: 'animate-avatar-work'
  },
  about: {
    src: '/images/avatars/avatar_arms_crossed.png',
    alt: 'Vivek confident professional identity',
    animationClass: 'animate-avatar-about'
  },
  'about-contact': {
    src: '/images/avatars/avatar_arms_crossed.png',
    alt: 'Vivek confident professional identity',
    animationClass: 'animate-avatar-about'
  },
  contact: {
    src: '/images/avatars/avatar_coffee_talk.png',
    alt: "Vivek holding coffee mug inviting Let's Talk",
    animationClass: 'animate-avatar-contact'
  },
  resume: {
    src: '/images/avatars/avatar_thumbs_up.png',
    alt: 'Vivek professional resume and credentials',
    animationClass: 'animate-avatar-resume'
  }
}

const ALL_AVATAR_SOURCES = [
  '/images/avatars/avatar_waving.png',
  '/images/avatars/avatar_pointing_right.png',
  '/images/avatars/avatar_presenting_growth.png',
  '/images/avatars/avatar_thinking.png',
  '/images/avatars/avatar_education.png',
  '/images/avatars/avatar_pointing_growth.png',
  '/images/avatars/avatar_laptop_working.png',
  '/images/avatars/avatar_laptop_thumbs.png',
  '/images/avatars/avatar_arms_crossed.png',
  '/images/avatars/avatar_coffee_talk.png',
  '/images/avatars/avatar_thumbs_up.png'
]

export default function AnimatedAvatarCompanion() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('hero')
  
  // Track avatar state for smooth crossfade transitions
  const targetAvatar = SECTION_AVATAR_MAP[activeSection] || SECTION_AVATAR_MAP.hero
  const [currentAvatar, setCurrentAvatar] = useState(targetAvatar)
  const [outgoingAvatar, setOutgoingAvatar] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimeoutRef = useRef(null)

  // 1. Preload all avatar poses on mount to prevent any flash or decode delay
  useEffect(() => {
    if (typeof window === 'undefined') return
    ALL_AVATAR_SOURCES.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  // 2. Route-based fallback mapping for dedicated subpages
  useEffect(() => {
    if (router.pathname.startsWith('/admin')) return

    if (router.pathname === '/resume') {
      setActiveSection('resume')
    } else if (router.pathname.startsWith('/blog') || router.pathname.startsWith('/thinking')) {
      setActiveSection('thinking')
    } else if (router.pathname.startsWith('/work')) {
      setActiveSection('work')
    } else if (router.pathname.startsWith('/experience')) {
      setActiveSection('experience')
    } else if (router.pathname.startsWith('/contact')) {
      setActiveSection('contact')
    } else if (router.pathname === '/') {
      setActiveSection('hero')
    }
  }, [router.pathname])

  // 3. Scroll-aware Section Detection using lightweight IntersectionObserver on Homepage
  useEffect(() => {
    if (router.pathname !== '/' || typeof window === 'undefined') return

    const sectionIds = [
      'hero',
      'what-i-do',
      'work',
      'corporate',
      'experience',
      'education-certifications',
      'education',
      'building',
      'thinking',
      'tools',
      'skills',
      'about-contact',
      'about',
      'contact'
    ]

    // Hero top-of-page fast-path
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observedElements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (observedElements.length === 0) {
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Observe which section has dominance in the reading viewport zone
    const observer = new IntersectionObserver(
      (entries) => {
        // If at top of page, hero always wins
        if (window.scrollY < 100) {
          setActiveSection('hero')
          return
        }

        const visibleEntries = entries.filter(e => e.isIntersecting)
        if (visibleEntries.length > 0) {
          // Sort by intersectionRatio descending
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          const dominant = visibleEntries[0]
          if (dominant?.target?.id) {
            setActiveSection(dominant.target.id)
          }
        }
      },
      {
        root: null,
        rootMargin: '-15% 0px -30% 0px',
        threshold: [0.15, 0.35, 0.6]
      }
    )

    observedElements.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [router.pathname])

  // 4. Smooth 380-420ms Enter/Exit Transition without layout shift
  useEffect(() => {
    if (targetAvatar.src === currentAvatar.src) return

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }

    setOutgoingAvatar(currentAvatar)
    setIsTransitioning(true)

    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentAvatar(targetAvatar)
      setOutgoingAvatar(null)
      setIsTransitioning(false)
    }, 400)

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [targetAvatar, currentAvatar])

  // Hide on admin console
  if (router.pathname.startsWith('/admin')) {
    return null
  }

  return (
    <aside
      aria-label="Personal companion"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-7 lg:right-8 z-30 pointer-events-none select-none"
    >
      {/* Outer bounding box ensures fixed alignment with bottom ground plane */}
      <div className="relative w-[68px] sm:w-[82px] md:w-[94px] lg:w-[110px] xl:w-[120px] h-[96px] sm:h-[116px] md:h-[132px] lg:h-[154px] xl:h-[168px] flex items-end justify-center">
        
        {/* OUTGOING AVATAR (Smooth exit: opacity 1 -> 0, scale 1 -> 0.96) */}
        {isTransitioning && outgoingAvatar && (
          <div
            key={`outgoing-${outgoingAvatar.src}`}
            className="absolute inset-0 flex items-end justify-center avatar-transition-exit will-change-transform"
          >
            <img
              src={outgoingAvatar.src}
              alt=""
              aria-hidden="true"
              className="max-h-full max-w-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(17,19,24,0.08)] pointer-events-none"
            />
          </div>
        )}

        {/* ACTIVE / INCOMING AVATAR (Smooth enter: opacity 0 -> 1, scale 0.96 -> 1, then continuous float) */}
        <div
          key={`current-${isTransitioning ? targetAvatar.src : currentAvatar.src}`}
          className={`absolute inset-0 flex items-end justify-center will-change-transform ${
            isTransitioning
              ? 'avatar-transition-enter'
              : (currentAvatar.animationClass || 'animate-avatar-home')
          }`}
        >
          <img
            src={isTransitioning ? targetAvatar.src : currentAvatar.src}
            alt={isTransitioning ? targetAvatar.alt : currentAvatar.alt}
            className="max-h-full max-w-full object-contain object-bottom drop-shadow-[0_8px_20px_rgba(17,19,24,0.08)] pointer-events-none"
          />
        </div>

      </div>
    </aside>
  )
}
