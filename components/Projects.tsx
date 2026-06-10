'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

/**
 * Projects Section - case-study style featured work
 */

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  highlights?: string[]
  link?: string
  github?: string
  extraLinks?: {
    label: string
    href: string
  }[]
  image?: string
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Sample projects - customize with your own
  const projects: Project[] = [
    {
      title: 'Prometheus Lab - Autonomous AI Research Lab',
      category: 'AI Research',
      description: 'Cutting-edge autonomous AI research laboratory capable of conducting independent research, generating hypotheses, and executing experiments with minimal human intervention.',
      tech: ['Python', 'LangGraph', 'Multi-Agent Systems', 'Research Automation'],
      github: 'https://github.com/SACHokstack/Autonomous_AI_Research_Lab.git',
    },
    {
      title: 'HeAR-TB - TB Cough Screening with Google HeAR',
      category: 'Medical AI',
      description: 'Domain-aware dual-head model for tuberculosis cough screening. It keeps Google HeAR frozen, trains separate experts for natural and forced coughs, then averages patient-level risk scores for a final TB screening signal.',
      tech: ['Google HeAR', 'Python', 'Audio ML', 'Medical AI', 'Hugging Face'],
      highlights: ['Patient AUC 0.7476 +/- 0.0932', 'Sensitivity ~0.78-0.83', 'Accuracy 0.728 +/- 0.060'],
      link: 'https://big-tb6.vercel.app/',
      github: 'https://github.com/SACHokstack/Hear--Cough-Finetuning',
      extraLinks: [
        {
          label: 'Video Demo',
          href: 'https://youtu.be/ubBDRxCwaeE',
        },
        {
          label: 'Model',
          href: 'https://huggingface.co/sach3v/Domain_aware_dual_head_HEar',
        },
        {
          label: 'Dataset',
          href: 'https://zenodo.org/records/10431329',
        },
      ],
    },
    {
      title: 'Gemma 4 E2B Oral Cancer Vision Fine-Tuning',
      category: 'Medical Vision AI',
      description: 'Fine-tuned Gemma 4 E2B for oral-cancer visual identification using a custom oral YOLO dataset, focused on supporting medical image screening workflows.',
      tech: ['Gemma 4 E2B', 'Vision Fine-Tuning', 'YOLO Dataset', 'Medical AI', 'Hugging Face'],
      highlights: ['Oral cancer visual screening', 'Custom dataset pipeline', 'Model hosted on Hugging Face'],
      extraLinks: [
        {
          label: 'Model',
          href: 'https://huggingface.co/sach3v/Gemma-4-e2b-custom-oral_cancer/tree/main',
        },
        {
          label: 'Dataset',
          href: 'https://huggingface.co/datasets/sach3v/oral-yolo-dataset',
        },
      ],
    },
    {
      title: 'Autonomous Chronos Discord Bot',
      category: 'AI/ML',
      description: 'Production-ready Chronos bassed discord chatbot with text,image and voice capabilities.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Docker'],
      github: 'https://github.com/SACHokstack/DISCORDxCHRONOS',
      image: '/discord.jpeg',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full border-t border-white/10 bg-[#050608] py-28"
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
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-blue-400">
            Selected Work
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-16 text-4xl font-medium tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Featured Work
        </motion.h2>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectStation key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/SACHokstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-8 py-4 transition-all hover:border-white/35 hover:bg-white/[0.07]"
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

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={stationRef}
      className="relative"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2 md:items-center">
        <div className={`${isEven ? '' : 'md:order-2'}`}>
          <div className="border border-white/10 bg-white/[0.035] p-3">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} visual`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950/60 via-slate-950 to-purple-950/50">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_55%)]" />
                      <div className="relative flex h-28 items-end gap-2">
                        {[42, 70, 52, 96, 64, 84, 48, 76, 56].map((height, barIndex) => (
                          <motion.div
                            key={barIndex}
                            className="w-2 rounded-full bg-cyan-300/70 shadow-[0_0_16px_rgba(103,232,249,0.35)]"
                            style={{ height }}
                            animate={{ scaleY: [0.65, 1, 0.72] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: barIndex * 0.08,
                            }}
                          />
                        ))}
                      </div>
                      <div className="absolute bottom-4 left-4 border border-cyan-300/20 bg-black/60 px-3 py-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-200">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
          </div>
        </div>

        {/* Project Details */}
        <motion.div
          className={`space-y-6 ${isEven ? '' : 'md:order-1'}`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Category Badge */}
          <div className="inline-block border border-blue-400/20 bg-blue-400/5 px-3 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl font-medium leading-tight text-white md:text-4xl">{project.title}</h3>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-300">{project.description}</p>

          {/* Proof Highlights */}
          {project.highlights && (
            <div className="grid gap-3 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-2"
                >
                  <span className="text-xs font-mono leading-relaxed text-cyan-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-mono text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap items-center gap-4">
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

            {project.extraLinks?.map((extraLink) => (
              <motion.a
                key={extraLink.href}
                href={extraLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
                whileHover={{ x: 5 }}
              >
                <span>{extraLink.label}</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            ))}

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
    </motion.div>
  )
}
