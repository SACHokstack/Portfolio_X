'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

/**
 * Navigation Component - Floating holographic controls
 * Features social icons and CTA button styled for space theme
 */
export default function Navigation() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SACHokstack', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachiv-c', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/c_sachiv', label: 'Twitter' },
  ]

  const handleBookCall = () => {
    // Replace with your booking link or contact method
    window.open('https://cal.com/c_sachiv', '_blank')
  }

  return (
    <>
      {/* Top Right - Social Icons */}
      <motion.nav
        className="fixed top-8 right-8 z-50 flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Holographic glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <link.icon
                className="relative h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-white"
                strokeWidth={1.5}
              />
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Top Left - CTA Button */}
      <motion.div
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          onClick={handleBookCall}
          className="group relative overflow-hidden rounded-none border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-xl"
          whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Holographic scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            initial={{ y: '-100%' }}
            animate={{ y: '200%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          />

          <span className="relative flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Launch Mission
          </span>
        </motion.button>
      </motion.div>

      {/* Optional: Floating Navigation Menu (Section Links) */}
      <motion.div
        className="fixed left-1/2 bottom-8 z-50 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
          {['About', 'Skills', 'Projects', 'Contact'].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase())
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-4 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Orbital point indicator */}
              <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="text-xs font-medium uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:text-white">
                {section}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
