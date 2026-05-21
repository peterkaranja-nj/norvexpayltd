'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // ── 1. Fade + slide-up (IntersectionObserver, threshold 0.15) ─────────────
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'))

    reveals.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect()
      const alreadyVisible = top < window.innerHeight * 0.88 && bottom > 0
      if (!alreadyVisible) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = parseInt(el.dataset.delay ?? '0')
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    reveals.forEach((el) => {
      if (el.style.opacity === '0') observer.observe(el)
    })

    // ── 2. Parallax backgrounds (0.4x scroll speed) ───────────────────────────
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let rafId = 0

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? '0.4')
          el.style.transform = `translateY(${window.scrollY * speed}px)`
          el.style.willChange = 'transform'
        })
      })
    }

    if (parallaxEls.length > 0) {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return null
}
