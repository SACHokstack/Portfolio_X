'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Smooth Scroll Wrapper using Lenis & GSAP
 * Provides cinematic scrolling with momentum and physics
 */

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll with performance optimizations
    const lenis = new Lenis({
      duration: 0.8, // Reduced from 1.2 for snappier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly increased for more responsive scroll
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Add Lenis to GSAP ticker for smooth animation
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Create scroll-triggered animations
    createScrollAnimations()

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}

/**
 * Creates GSAP ScrollTrigger animations for cinematic effects
 */
function createScrollAnimations() {
  // Example: Scroll lock/pause at certain sections (optional)
  // You can customize these based on your section IDs

  // Add parallax to specific elements if needed
  gsap.utils.toArray<HTMLElement>('.parallax-element').forEach((element) => {
    const speed = element.dataset.speed ? parseFloat(element.dataset.speed) : 0.5

    gsap.to(element, {
      y: () => element.offsetHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // Fade in elements on scroll
  gsap.utils.toArray<HTMLElement>('.fade-in-scroll').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    })
  })

  // Scale in elements on scroll
  gsap.utils.toArray<HTMLElement>('.scale-in-scroll').forEach((element) => {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    })
  })

  // Optional: Cinematic scroll lock at key sections
  // This creates a brief "pause" effect before scrolling continues
  const lockSections = ['#about', '#skills', '#projects']

  lockSections.forEach((selector) => {
    const element = document.querySelector(selector)
    if (element) {
      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'top center-=100',
        scrub: 1,
        // Uncomment below to enable scroll lock effect
        // pin: false,
        // pinSpacing: false,
      })
    }
  })
}
