'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

/**
 * Projects Section - Space Stations
 * Each project appears as a space station with cinematic scroll transitions
 */

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Sample projects - customize with your own
  const projects: Project[] = [
    {
      title: 'AI-Powered Content Generator',
      category: 'Machine Learning',
      description: 'Advanced NLP system generating human-quality content across multiple formats using state-of-the-art language models and custom fine-tuning.',
      tech: ['Python', 'GPT-4', 'FastAPI', 'React'],
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      category: 'Full-Stack',
      description: 'Enterprise-grade analytics platform processing millions of events per second with real-time visualizations and predictive insights.',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis'],
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project',
    },
    {
      title: 'Computer Vision Pipeline',
      category: 'AI/ML',
      description: 'Production-ready object detection and tracking system deployed at scale for autonomous systems with 99.2% accuracy.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Docker'],
      github: 'https://github.com/yourusername/project',
    },
    {
      title: 'Distributed Training Framework',
      category: 'Infrastructure',
      description: 'Cloud-native distributed training orchestration system reducing model training time by 10x with automatic resource optimization.',
      tech: ['Kubernetes', 'TensorFlow', 'Go', 'AWS'],
      link: 'https://example.com',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-32"
    >
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Section Label */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-blue-400 to-transparent" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400">
            Space Stations — Project Archive
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-20 text-5xl font-light tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Featured Work
        </motion.h2>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectStation key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-white">
              Explore More Projects
            </span>
            <ExternalLink className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Individual Project Station Component
 */
function ProjectStation({ project, index }: { project: Project; index: number }) {
  const stationRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(stationRef, { once: false, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: stationRef,
    offset: ['start end', 'end start'],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={stationRef}
      className="relative"
      style={{ opacity }}
    >
      <div
        className={`flex flex-col gap-12 md:flex-row md:items-center ${
          isEven ? '' : 'md:flex-row-reverse'
        }`}
      >
        {/* Space Station Visual */}
        <motion.div
          className="flex-1"
          style={{ y, scale }}
        >
          <div className="group relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-8 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Station Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm">
              {/* Holographic scan lines */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 2,
                }}
              />

              {/* Station Grid Pattern */}
              <svg
                className="absolute inset-0 h-full w-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={`station-grid-${index}`}
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#station-grid-${index})`} />
              </svg>

              {/* Station Details */}
              <div className="relative space-y-4">
                {/* Status Indicators */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono text-gray-400">ACTIVE</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/20" />
                  <span className="text-xs font-mono text-gray-500">
                    STATION-{String(index + 1).padStart(3, '0')}
                  </span>
                </div>

                {/* Placeholder Project Visual */}
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-gray-600">Project Visual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Category Badge */}
          <div className="inline-block rounded border border-blue-400/30 bg-blue-400/10 px-3 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl font-light text-white md:text-4xl">{project.title}</h3>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-300">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex items-center gap-4">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-400"
                whileHover={{ x: 5 }}
              >
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                whileHover={{ x: 5 }}
              >
                <span>Source Code</span>
                <Github className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Connection Line to Next Station */}
      {index < 3 && (
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 0.3, scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </motion.div>
      )}
    </motion.div>
  )
}
