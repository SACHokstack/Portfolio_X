'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import dynamic from 'next/dynamic'

const Starfield = dynamic(() => import('./Starfield'), { ssr: false })

/**
 * Hero Section - Space-Themed Journey Entry Point
 * Features split-name horizon layout, centered portrait hologram, and cinematic entrance
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  // Mouse parallax effect for depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15
      const y = (e.clientY / window.innerHeight - 0.5) * 15
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Start animations on mount
  useEffect(() => {
    controls.start('visible')
  }, [controls])

  // Animation variants - optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const nameVariantsRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Starfield />

      {/* Cosmic glow effect following mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(147, 51, 234, 0.12), rgba(59, 130, 246, 0.08) 40%, transparent 70%)`,
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-8"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Status indicator */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
            System Active — Ready for Mission
          </span>
        </motion.div>

        {/* Split Name Horizon Layout */}
        <div className="relative mb-8 flex w-full max-w-7xl items-center justify-between gap-8 md:gap-16">
          {/* First Name - Left */}
          <motion.h1
            variants={nameVariants}
            className="flex-1 text-right text-6xl font-light tracking-tight text-white md:text-8xl lg:text-9xl"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            Sachiv
          </motion.h1>

          {/* Portrait Hologram - Center */}
          <motion.div
            variants={portraitVariants}
            className="relative flex-shrink-0"
            style={{
              transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
            }}
          >
            {/* Hologram container with glow */}
            <div className="group relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-2xl transition-all duration-500 group-hover:blur-3xl" />

              {/* Holographic scan lines - optimized */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                />
              </div>

              {/* Portrait container */}
              <div className="relative h-48 w-36 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm md:h-64 md:w-48">
                <img
                  src="/image copy 9.png"
                  alt="Sachiv C"
                  className="h-full w-full object-cover"
                />

                {/* Corner indicators */}
                <div className="absolute top-2 left-2 h-3 w-3 border-l-2 border-t-2 border-cyan-400/60" />
                <div className="absolute top-2 right-2 h-3 w-3 border-r-2 border-t-2 border-cyan-400/60" />
                <div className="absolute bottom-2 left-2 h-3 w-3 border-l-2 border-b-2 border-cyan-400/60" />
                <div className="absolute bottom-2 right-2 h-3 w-3 border-r-2 border-b-2 border-cyan-400/60" />
              </div>

              {/* Holographic data label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-cyan-400/30 bg-black/60 px-3 py-1 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-xs font-mono text-cyan-400">ID: SACHIV_C</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Last Name - Right */}
          <motion.h1
            variants={nameVariantsRight}
            className="flex-1 text-left text-6xl font-light tracking-tight text-white md:text-8xl lg:text-9xl"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            C
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mb-12 mt-12 max-w-2xl text-center text-lg font-light leading-relaxed text-gray-400 md:text-xl"
        >
          AI Engineer & Creative Technologist
          <br />
          <span className="text-base text-gray-500">
            Specializing in intelligent systems and human-centered design
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative overflow-hidden border border-white bg-white px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-black transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">Explore Projects</span>
          </motion.button>

          <motion.button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative overflow-hidden border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-white/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">Initiate Contact</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 text-gray-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Begin Journey</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-gray-500 via-cyan-400/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
