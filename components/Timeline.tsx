'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Rocket } from 'lucide-react'

/**
 * Timeline Section - Vertical Journey Through Time
 * Interactive timeline with expandable events and scroll animations
 */

interface TimelineEvent {
  id: string
  date: string
  title: string
  organization?: string
  location?: string
  description: string
  type: 'education' | 'work' | 'achievement' | 'project'
  tags?: string[]
}

const timelineData: TimelineEvent[] = [
  {
    id: '8',
    date: 'Nov 2022',
    title: 'B.Tech in AI&DS',
    organization: 'Anna University Regional Campus Coimbatore',
    location: 'Coimbatore, TN',
    description: 'Graduated with honors. Focus on systems programming and algorithms. Built autonomous robotics projects.',
    type: 'education',
    tags: ['Robotics', 'Algorithms', 'Systems'],
  },
  {
    id: '7',
    date: 'Sep 2022',
    title: 'B.S. Data Science ',
    organization: 'IIT Madras',
    location: 'Remote, TN',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on neural architecture search optimization.',
    type: 'education',
    tags: ['AI/ML', 'Research', 'Academia'],
  },
  {
    id: '6',
    date: 'October 2024',
    title: 'Top Ten in Hackathon(Wells Fargo)',
    organization: 'TensorFlow',
    description: 'Made Realtime Dashboard for Stock Market Predictions.',
    type: 'project',
    tags: ['Open Source', 'TensorFlow', 'Python'],
  },
  {
    id: '5',
    date: 'Jan 2025',
    title: 'Top Ten in hackathon(Amrita Vidhyapeetham)',
    organization: 'GenderXAI',
    location: 'Remote',
    description: 'Gathered DOcuments about government to empower women added multi language speechbots.',
    type: 'work',
    tags: ['Computer Vision', 'PyTorch', 'AWS'],
  },
  {
    id: '4',
    date: 'Mar 2025',
    title: 'Top Ten in Hackathon(Amrita Vidhyapeetham)',
    organization: 'Delta Headlines',
    location: 'Virtual',
    description: 'Created a pipeline from ocr to News SPEECH.',
    type: 'achievement',
    tags: ['NLP', 'Optimization', 'Award'],
  },
  {
    id: '3',
    date: 'Jun 2025',
    title: 'Hackathon Winner(15000$)',
    organization: 'BioProtocol.',
    location: 'San Francisco, CA',
    description: 'Made Chronos an image to Hypotheseis genreating engine.',
    type: 'work',
    tags: ['Machine Learning', 'Team Leadership', 'Knowledge Graphs'],
  },
  {
    id: '2',
    date: 'Jul 2025',
    title: 'Jr Researcher',
    organization: 'IEEE.',
    location: 'Remote',
    description: 'Predicting Breath Cancer using DCE-MRI Images.',
    type: 'work',
    tags: ['Machine Learning', 'Deep Learning', 'Knowledge Graphs'],
  },
  {
    id: '1',
    date: 'Sep 2025',
    title: 'Jr Ai Engineer',
    organization: 'SpineDAO.',
    location: 'Remote',
    description: 'BUilding Social Network for Spine Surgeons.',
    type: 'work',
    tags: ['Machine Learning', 'Team Leadership', 'Knowledge Graphs'],
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  })

  // Animate the timeline line as user scrolls
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const [expandedId, setExpandedId] = useState<string | null>(null)

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return GraduationCap
      case 'work':
        return Briefcase
      case 'achievement':
        return Award
      case 'project':
        return Rocket
      default:
        return Calendar
    }
  }

  const getColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return 'from-purple-500 to-purple-600'
      case 'work':
        return 'from-cyan-500 to-blue-500'
      case 'achievement':
        return 'from-yellow-500 to-orange-500'
      case 'project':
        return 'from-pink-500 to-purple-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-32"
    >
      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-8">
        {/* Section Label */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
            Temporal Coordinates — Journey Timeline
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-20 text-5xl font-light tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2"
          >
            {/* Animated progress line */}
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-500"
              style={{ height: lineHeight }}
            />

            {/* Glowing dot at the end */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: lineHeight }}
            >
              <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(102,252,241,0.8)]" />
            </motion.div>
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineData.map((event, index) => (
              <TimelineEventCard
                key={event.id}
                event={event}
                index={index}
                isExpanded={expandedId === event.id}
                onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                getIcon={getIcon}
                getColor={getColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Timeline Event Card
 */
interface TimelineEventCardProps {
  event: TimelineEvent
  index: number
  isExpanded: boolean
  onToggle: () => void
  getIcon: (type: TimelineEvent['type']) => any
  getColor: (type: TimelineEvent['type']) => string
}

function TimelineEventCard({
  event,
  index,
  isExpanded,
  onToggle,
  getIcon,
  getColor,
}: TimelineEventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.5 })

  const Icon = getIcon(event.type)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex items-center ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Mobile/Tablet Layout: All cards on right */}
      <div className="ml-16 w-full md:ml-0 md:w-[calc(50%-3rem)]">
        <motion.button
          onClick={onToggle}
          className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Holographic scan effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2,
            }}
          />

          <div className="relative">
            {/* Date Badge */}
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                {event.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-xl font-medium text-white md:text-2xl">
              {event.title}
            </h3>

            {/* Organization */}
            {event.organization && (
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                <Icon className="h-4 w-4" />
                <span>{event.organization}</span>
              </div>
            )}

            {/* Location */}
            {event.location && (
              <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
            )}

            {/* Description - Expandable */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '0' }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                {event.description}
              </p>

              {/* Tags */}
              {event.tags && (
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Expand/Collapse Indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400">
              <span>{isExpanded ? 'Show less' : 'Show more'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.div>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Timeline Node - Positioned absolutely for desktop */}
      <motion.div
        className="absolute left-8 z-10 md:left-1/2 md:-translate-x-1/2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <div className="relative">
          {/* Outer pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br opacity-30 blur-lg"
            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Node circle */}
          <div
            className={`relative h-12 w-12 rounded-full border-2 border-white/20 bg-gradient-to-br ${getColor(
              event.type
            )} p-2.5 shadow-lg`}
          >
            <Icon className="h-full w-full text-white" />
          </div>

          {/* Connection line to card (desktop only) */}
          <div
            className={`absolute top-1/2 hidden h-[2px] w-8 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent md:block ${
              isLeft ? 'left-full' : 'right-full rotate-180'
            }`}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
