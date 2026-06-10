'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Capability {
  name: string
  category: string
  description: string
  tools: string[]
}

const capabilities: Capability[] = [
  {
    name: 'Medical AI',
    category: 'Applied ML',
    description:
      'Audio and vision models for screening workflows, including cough-based TB risk and oral-cancer visual identification.',
    tools: ['Google HeAR', 'Gemma', 'PyTorch', 'Hugging Face'],
  },
  {
    name: 'Agent Systems',
    category: 'AI Agents',
    description:
      'Autonomous research flows, multi-step tool use, and graph-based orchestration for practical AI systems.',
    tools: ['LangGraph', 'MCP', 'Python', 'Tool Use'],
  },
  {
    name: 'RAG & NLP',
    category: 'LLM Engineering',
    description:
      'Retrieval pipelines, document understanding, semantic search, and LLM-backed product workflows.',
    tools: ['RAG', 'Embeddings', 'FastAPI', 'Vector Search'],
  },
  {
    name: 'AI Inference',
    category: 'Model Serving',
    description:
      'Turning trained models into usable APIs and demos with practical latency, batching, and deployment constraints in mind.',
    tools: ['Inference APIs', 'FastAPI', 'Vercel', 'Hugging Face'],
  },
  {
    name: 'DevOps',
    category: 'Deployment',
    description:
      'Shipping AI projects with reproducible environments, containerized services, backend deployment, and reliable project handoff.',
    tools: ['Docker', 'Railway', 'GitHub Actions', 'Linux'],
  },
  {
    name: 'Product Prototypes',
    category: 'Build & Ship',
    description:
      'Working demos, dashboards, bots, and web apps that make models usable outside notebooks.',
    tools: ['Next.js', 'React', 'Docker', 'PostgreSQL'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full border-t border-white/10 bg-[#07080b] py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-purple-300" />
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-purple-300">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
            Focused on AI systems that can be trained, served, used, and shipped.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.name}
              className="border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.055]"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-gray-500">
                  {capability.category}
                </span>
                <span className="h-2 w-2 bg-cyan-300" />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-white">{capability.name}</h3>
              <p className="mb-6 leading-7 text-gray-300">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-white/10 bg-black/30 px-3 py-1 text-xs font-mono text-gray-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
