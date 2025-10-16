'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Skills Section - Orbital Carousel
 * Features rotating skill planets around a central core
 */

interface Skill {
  name: string
  category: string
  level: number
  description: string
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [activeIndex, setActiveIndex] = useState(0)

  // Skill data - customize with your own skills
  const skills: Skill[] = [
    {
      name: 'Machine Learning',
      category: 'AI/ML',
      level: 95,
      description: 'Deep learning, neural networks, model optimization',
    },
    {
      name: 'Natural Language Processing',
      category: 'AI/ML',
      level: 90,
      description: 'LLMs, text generation, semantic analysis',
    },
    {
      name: 'Python',
      category: 'Languages',
      level: 95,
      description: 'TensorFlow, PyTorch, Scikit-learn, FastAPI',
    },
    {
      name: 'TypeScript/JavaScript',
      category: 'Languages',
      level: 90,
      description: 'React, Next.js, Node.js, full-stack development',
    },
    {
      name: 'Cloud Architecture',
      category: 'Infrastructure',
      level: 85,
      description: 'AWS, GCP, Docker, Kubernetes, serverless',
    },
    {
      name: 'UI/UX Design',
      category: 'Design',
      level: 80,
      description: 'Human-centered design, prototyping, design systems',
    },
  ]

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1))
  }

  const activeSkill = skills[activeIndex]

  return (
    <section
      id="skills"
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
          <div className="h-[1px] w-16 bg-gradient-to-r from-purple-400 to-transparent" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-purple-400">
            Skills Constellation
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-20 text-5xl font-light tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Expertise
        </motion.h2>

        {/* Orbital Visualization */}
        <div className="relative mx-auto mb-20 flex h-[500px] w-full max-w-4xl items-center justify-center md:h-[600px]">
          {/* Center Core */}
          <motion.div
            className="absolute z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Core glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 blur-3xl" />

              {/* Core sphere */}
              <div className="relative h-32 w-32 rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-900/60 via-blue-900/40 to-indigo-950/60 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-center text-xs font-mono uppercase tracking-wider text-gray-300">
                    Core
                    <br />
                    System
                  </span>
                </div>

                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-cyan-400/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Orbital Paths */}
          {[300, 400, 500].map((size, index) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-white/5"
              style={{ width: size, height: size }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            />
          ))}

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
            const radius = 200 + (index % 2) * 50
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const isActive = index === activeIndex

            return (
              <motion.button
                key={skill.name}
                className="absolute z-10"
                style={{ x, y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: isActive ? 1.3 : 1,
                        opacity: 1,
                      }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: isActive ? 1.4 : 1.1 }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Skill Planet */}
                <div
                  className={`relative h-16 w-16 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/40 to-purple-500/40'
                      : 'border-white/20 bg-gradient-to-br from-purple-500/20 to-blue-500/20'
                  } backdrop-blur-sm`}
                >
                  {/* Glow effect for active skill */}
                  {isActive && (
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl" />
                  )}

                  {/* Skill icon/initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-sm font-bold ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {skill.name.charAt(0)}
                    </span>
                  </div>

                  {/* Orbital indicator */}
                  <motion.div
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-cyan-400/50"
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Active Skill Details Panel */}
        <motion.div
          className="mx-auto max-w-3xl"
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {/* Holographic scan effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />

            <div className="relative">
              {/* Category Badge */}
              <div className="mb-4 inline-block rounded border border-purple-400/30 bg-purple-400/10 px-3 py-1">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  {activeSkill.category}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="mb-4 text-3xl font-light text-white md:text-4xl">
                {activeSkill.name}
              </h3>

              {/* Description */}
              <p className="mb-6 text-gray-300">{activeSkill.description}</p>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-mono text-gray-400">Proficiency Level</span>
                  <span className="font-mono text-cyan-400">{activeSkill.level}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${activeSkill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={handlePrevious}
              className="rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-cyan-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
