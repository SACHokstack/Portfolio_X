'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface Person {
  id: string
  name: string
  role: string
  relationship: string
  caption: string
  imageUrl: string
  orbitRadius?: number
  angle?: number
  speed?: number
}

interface HallOfFameProps {
  people: Person[]
  centerImageUrl?: string
}

export default function HallOfFame({ people, centerImageUrl }: HallOfFameProps) {
  return (
    <section id="hall-of-fame" className="relative border-t border-white/10 bg-[#050608] px-8 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-cyan-300" />
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-300">
                Collaborators
              </span>
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
              People I have built and learned with.
            </h2>
          </div>

          <div className="flex items-center gap-5 border border-white/10 bg-white/[0.035] p-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white/5">
              {centerImageUrl ? (
                <Image src={centerImageUrl} alt="Sachiv C" fill sizes="80px" className="object-cover" />
              ) : (
                <div className="h-full w-full bg-cyan-300/10" />
              )}
            </div>
            <p className="leading-7 text-gray-300">
              A compact view of mentors, collaborators, teammates, and people who shaped the work
              behind the portfolio.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, index) => (
            <motion.article
              key={person.id}
              className="border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.055]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-white/5">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </div>
              <div className="mb-4 inline-block border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-200">
                {person.relationship}
              </div>
              <p className="text-sm leading-7 text-gray-300">{person.caption}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
