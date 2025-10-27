'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export interface Person {
  id: string
  name: string
  role: string
  relationship: string
  caption: string
  imageUrl: string
  orbitRadius?: number // Custom orbit distance (default: random)
  angle?: number // Starting angle in degrees (default: random)
  speed?: number // Orbit speed multiplier (default: 1)
}

interface HallOfFameProps {
  people: Person[]
  centerImageUrl?: string // Optional image for center "you"
}

export default function HallOfFame({ people, centerImageUrl }: HallOfFameProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Calculate container size based on number of people and their orbits
  const maxOrbitRadius = Math.max(
    ...people.map((person, index) => person.orbitRadius || (150 + (index % 3) * 120 + 60))
  )
  const containerPadding = 200 // Extra space for avatars and UI
  const minContainerSize = 600 // Minimum container size
  const containerSize = Math.max(maxOrbitRadius * 2 + containerPadding, minContainerSize)

  // Generate orbital positions for each person
  const getOrbitalPosition = (index: number, person: Person) => {
    // Use custom values or generate random ones, but constrain within container
    const radius = person.orbitRadius || (150 + (index % 3) * 120 + Math.random() * 60)
    const angle = person.angle !== undefined ? person.angle : (index * 360) / people.length + Math.random() * 45
    const speed = person.speed || 1

    return { radius, angle, speed }
  }

  return (
    <section id="hall-of-fame" className="relative min-h-screen overflow-hidden py-32 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-5xl font-light tracking-tight text-white md:text-6xl">
            Mission Allies
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500" />
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Amazing humans I've crossed paths with on this cosmic journey
          </p>
        </motion.div>

        {/* Cosmic Orbit Container */}
        <div
          className="relative mx-auto flex items-center justify-center md:max-w-6xl"
          style={{
            minHeight: containerSize,
            minWidth: containerSize,
          }}
        >
          {/* Center Avatar - "You" */}
          <motion.div
            className="relative z-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="relative">
              {/* Center glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-30 blur-2xl" />

              {/* Center image */}
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm">
                {centerImageUrl ? (
                  <img src={centerImageUrl} alt="You" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl">
                    🚀
                  </div>
                )}
              </div>

              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Orbiting People */}
          {people.map((person, index) => {
            const { radius, angle, speed } = getOrbitalPosition(index, person)
            const isHovered = hoveredId === person.id

            return (
              <motion.div
                key={person.id}
                className="absolute"
                initial={{ opacity: 0, scale: 0, rotate: angle }}
                whileInView={{ opacity: 1, scale: 1, rotate: angle }}
                viewport={{ once: true }}
                animate={{
                  rotate: [angle, angle + 360],
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 0',
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  scale: { duration: 0.6, delay: index * 0.1 },
                  rotate: {
                    duration: 40 / speed,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              >
                <motion.div
                  className="relative"
                  style={{
                    x: radius,
                    y: 0,
                  }}
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    rotate: {
                      duration: 40 / speed,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                  onMouseEnter={() => setHoveredId(person.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Connection line to center (subtle) */}
                  {isHovered && (
                    <motion.div
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[2px] origin-left bg-gradient-to-r from-cyan-400/50 to-transparent"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: radius, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      style={{
                        transform: `rotate(${180 + angle}deg)`,
                      }}
                    />
                  )}

                  {/* Avatar bubble */}
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.15 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {/* Avatar glow */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Avatar image */}
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/30 bg-gray-800 shadow-xl transition-all duration-300 hover:border-cyan-400/60">
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Relationship emoji badge */}
                    <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/50 bg-gradient-to-br from-cyan-500 to-purple-600 text-xs shadow-lg">
                      {person.relationship === 'Mentor' && '🎯'}
                      {person.relationship === 'Collaborator' && '🤝'}
                      {person.relationship === 'Hackathon Teammate' && '⚡'}
                      {person.relationship === 'Inspiring Encounter' && '✨'}
                      {person.relationship === 'Academic Advisor' && '📚'}
                      {person.relationship === 'Workshop Instructor' && '🔧'}
                      {!['Mentor', 'Collaborator', 'Hackathon Teammate', 'Inspiring Encounter', 'Academic Advisor', 'Workshop Instructor'].includes(person.relationship) && '⭐'}
                    </div>

                    {/* Info card on hover */}
                    {isHovered && (
                      <motion.div
                        className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-lg border border-white/20 bg-black/95 p-4 shadow-2xl backdrop-blur-md"
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Arrow pointer */}
                        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-white/20 bg-black/95" />

                        <div className="relative">
                          <h3 className="mb-1 text-lg font-semibold text-white">
                            {person.name}
                          </h3>
                          <p className="mb-2 text-xs font-medium text-purple-400">
                            {person.role}
                          </p>
                          <div className="mb-3 inline-block rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-400">
                            {person.relationship}
                          </div>
                          <p className="text-sm leading-relaxed text-gray-300">
                            {person.caption}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Decorative orbit paths (static) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[300px] w-[300px] rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          </div>
        </div>

        {/* Fun instruction text */}
        <motion.p
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          Hover over the orbiting avatars to learn more about these awesome humans
        </motion.p>
      </div>
    </section>
  )
}
