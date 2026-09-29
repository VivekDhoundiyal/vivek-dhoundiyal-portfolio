import { useEffect } from 'react'

/**
 * Lightweight GPU scroll reveal hook using IntersectionObserver.
 * Scans for .reveal-on-scroll elements and adds .is-revealed class.
 * Automatically unobserves elements once revealed to maximize FPS.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed')
      })
      return
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, dependencies)
}
