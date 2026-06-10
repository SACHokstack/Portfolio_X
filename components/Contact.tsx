'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'

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
      className="relative w-full border-t border-white/10 bg-[#07080b] py-28"
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
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-400">
            Contact
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mb-14 text-4xl font-medium tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="border border-white/10 bg-white/[0.035] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-300"
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
                    className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-300"
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
                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="group relative w-full border border-cyan-300/30 bg-cyan-300/10 py-4 transition-all hover:border-cyan-300 hover:bg-cyan-300/15"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-white">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border border-white/10 bg-white/[0.035] p-8">
              <h3 className="mb-4 text-2xl font-medium text-white">Build something useful.</h3>
              <p className="leading-7 text-gray-300">
                I am open to AI engineering work around agents, medical AI prototypes, RAG systems,
                and research-to-product builds.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-400">Email</div>
                    <a
                      href="mailto:sachiv.csv@gmail.com"
                      className="text-white transition-colors hover:text-cyan-400"
                    >
                      sachiv.csv@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono uppercase text-gray-400">Location</div>
                    <div className="text-white">Chennai</div>
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
            © {new Date().getFullYear()} Sachiv C.
          </p>
          <p className="mt-2 text-xs font-mono text-gray-600">
            Built with Next.js, Framer Motion & GSAP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
