'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * About Section - compact profile and proof points
 */
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full border-t border-white/10 bg-[#050608] py-28"
    >
      <motion.div
        className="mx-auto grid max-w-6xl gap-12 px-8 md:grid-cols-[0.9fr_1.1fr] md:items-start"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-cyan-300" />
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-300">
              Profile
            </span>
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
            AI engineer building practical medical and agentic systems.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
          <p>
            I'm an <span className="text-white font-medium">AI Engineer</span> and{' '}
            <span className="text-white font-medium">Creative Technologist</span> passionate about
            building intelligent systems that enhance human creativity and productivity.
          </p>

          <p>
            My work spans medical AI, audio screening, vision fine-tuning, autonomous agents,
            RAG systems, and product prototypes that turn research ideas into working tools.
          </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { value: '10+', label: 'AI Models Tinkered' },
            { value: '5+', label: 'Projects Deployed' },
            { value: '25+', label: 'Technologies Mastered' },
            { value: '100%', label: 'Dedication Level' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/[0.03] p-5"
            >
                <div className="mb-2 text-3xl font-medium text-white">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
            </div>
          ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
