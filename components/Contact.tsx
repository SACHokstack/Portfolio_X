'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Calendar } from 'lucide-react'

/**
 * Contact Section - Final Destination Satellite
 * The journey's end - where visitors can initiate contact
 */
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your form submission logic here
    console.log('Form submitted:', formState)
  }

  return (
    <section
      id="contact"
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
            Final Destination — Communications Satellite
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-20 text-5xl font-light tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              {/* Holographic scan effect - optimized */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 5,
                }}
              />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="group relative w-full overflow-hidden border border-cyan-400/30 bg-cyan-400/10 py-4 backdrop-blur-sm transition-all hover:border-cyan-400 hover:bg-cyan-400/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <span className="relative flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-white">
                    Transmit Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info & Satellite Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Satellite Visualization */}
            <div className="relative">
              <div className="group relative">
                {/* Outer glow */}
                <div className="absolute -inset-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl transition-all duration-500 group-hover:blur-[80px]" />

                {/* Satellite Container */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-12 backdrop-blur-sm">
                  {/* Satellite Core */}
                  <div className="relative mx-auto h-48 w-48">
                    {/* Central sphere */}
                    <div className="absolute inset-8 rounded-full border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-900/40 to-blue-900/40">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <div className="mb-2 text-xs font-mono uppercase text-gray-400">
                            SAT-COMM
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            <span className="text-xs font-mono text-cyan-400">ONLINE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rotating orbital ring - slowed for performance */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-white/10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-400 bg-purple-400/50" />
                    </motion.div>

                    {/* Signal waves - reduced count */}
                    {[0, 1].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border border-cyan-400/30"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5 + i * 0.3, opacity: 0 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 1.5,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </div>

                  {/* Grid overlay */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="satellite-grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#satellite-grid)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-400">Email</div>
                    <a
                      href="mailto:your@email.com"
                      className="text-white transition-colors hover:text-cyan-400"
                    >
                      your@email.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-400">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-400">
                      Schedule a Call
                    </div>
                    <a
                      href="https://cal.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-cyan-400"
                    >
                      Book a meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sachiv C. Designed for the interstellar journey.
          </p>
          <p className="mt-2 text-xs font-mono text-gray-600">
            Built with Next.js, Framer Motion & GSAP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
