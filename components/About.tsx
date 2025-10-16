'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

/**
 * About Section - "Approaching Planet"
 * Features scroll-triggered planet reveal with cinematic zoom effect
 */
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const planetRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Simplified parallax transformations for better performance
  const planetScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.3])
  const planetOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.6])
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0.3])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-32"
    >
      {/* Planet Visual - Background */}
      <motion.div
        ref={planetRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          scale: planetScale,
          opacity: planetOpacity,
        }}
      >
        {/* Planet sphere */}
        <div className="relative h-[600px] w-[600px]">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 blur-3xl" />

          {/* Planet surface */}
          <div className="absolute inset-16 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-950/40 backdrop-blur-sm">
            {/* Surface texture overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.2),transparent_40%)]" />

            {/* Atmospheric rings */}
            <div className="absolute -inset-4 rounded-full border border-cyan-400/20" />
            <div className="absolute -inset-8 rounded-full border border-purple-400/10" />

            {/* Data grid overlay */}
            <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Orbital indicator */}
          <motion.div
            className="absolute -right-12 top-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-cyan-400/30" />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-8"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Section Label */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
            Approaching — Identity Planet
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-12 text-5xl font-light tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* Bio Content */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            I'm an <span className="text-white font-medium">AI Engineer</span> and{' '}
            <span className="text-white font-medium">Creative Technologist</span> passionate about
            building intelligent systems that enhance human creativity and productivity.
          </p>

          <p>
            With expertise spanning machine learning, natural language processing, and human-centered
            design, I create solutions that bridge the gap between cutting-edge AI capabilities and
            real-world applications.
          </p>

          <p>
            My approach combines technical rigor with creative thinking, ensuring that every project
            not only solves complex problems but does so in an elegant and user-friendly way.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '20+', label: 'Happy Clients' },
            { value: '∞', label: 'Ideas Generated' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-light text-white">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
