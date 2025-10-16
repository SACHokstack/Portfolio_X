'use client'

import { useEffect, useRef } from 'react'

/**
 * Enhanced Starfield with Parallax Layers and Nebula Effects
 * Features multiple depth layers, cosmic dust, and scroll-reactive parallax
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nebulaCanvasRef = useRef<HTMLCanvasElement>(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const nebulaCanvas = nebulaCanvasRef.current
    if (!canvas || !nebulaCanvas) return

    const ctx = canvas.getContext('2d')
    const nebulaCtx = nebulaCanvas.getContext('2d')
    if (!ctx || !nebulaCtx) return

    // Set canvas sizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      nebulaCanvas.width = window.innerWidth
      nebulaCanvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Track scroll for parallax
    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    // Create stars with multiple depth layers
    interface Star {
      x: number
      y: number
      baseY: number
      z: number
      size: number
      speed: number
      color: string
      layer: number
      twinkleOffset: number
    }

    const stars: Star[] = []
    const numStars = 800 // Reduced from 2000 for better performance

    // Premium color palette - realistic space colors
    const colors = [
      'rgba(255, 255, 255, 0.9)',    // White stars
      'rgba(245, 240, 230, 0.8)',    // Off-white/beige
      'rgba(200, 220, 255, 0.7)',    // Pale blue
      'rgba(255, 240, 220, 0.6)',    // Warm white
      'rgba(147, 51, 234, 0.5)',     // Distant purple
      'rgba(59, 130, 246, 0.5)',     // Distant blue
    ]

    // Create stars across multiple depth layers
    for (let i = 0; i < numStars; i++) {
      const layer = Math.floor(Math.random() * 3) // 3 depth layers
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        baseY: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        layer,
        twinkleOffset: Math.random() * Math.PI * 2,
      })
    }

    // Create cosmic dust particles
    interface DustParticle {
      x: number
      y: number
      baseY: number
      size: number
      opacity: number
      driftSpeed: number
    }

    const dust: DustParticle[] = []
    const numDust = 100 // Reduced from 300 for better performance

    for (let i = 0; i < numDust; i++) {
      dust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseY: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
        driftSpeed: Math.random() * 0.3 + 0.1,
      })
    }

    // Draw nebula background
    const drawNebula = () => {
      nebulaCtx.clearRect(0, 0, nebulaCanvas.width, nebulaCanvas.height)

      // Create multiple nebula gradients
      const nebulas = [
        { x: nebulaCanvas.width * 0.3, y: nebulaCanvas.height * 0.2, color1: 'rgba(147, 51, 234, 0.08)', color2: 'rgba(59, 130, 246, 0.05)' },
        { x: nebulaCanvas.width * 0.7, y: nebulaCanvas.height * 0.6, color1: 'rgba(59, 130, 246, 0.06)', color2: 'rgba(147, 51, 234, 0.04)' },
        { x: nebulaCanvas.width * 0.5, y: nebulaCanvas.height * 0.8, color1: 'rgba(88, 28, 135, 0.05)', color2: 'rgba(30, 64, 175, 0.03)' },
      ]

      nebulas.forEach(nebula => {
        const gradient = nebulaCtx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebulaCanvas.width * 0.6
        )
        gradient.addColorStop(0, nebula.color1)
        gradient.addColorStop(0.5, nebula.color2)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        nebulaCtx.fillStyle = gradient
        nebulaCtx.fillRect(0, 0, nebulaCanvas.width, nebulaCanvas.height)
      })
    }

    drawNebula()

    // Animation loop
    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas instead of fade for better performance
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw cosmic dust with parallax
      dust.forEach((particle) => {
        const parallaxFactor = 0.5
        const yOffset = scrollYRef.current * parallaxFactor * 0.2

        particle.y = particle.baseY + yOffset + Math.sin(time + particle.x * 0.001) * 10

        // Wrap around
        if (particle.y > canvas.height + 50) {
          particle.y = -50
          particle.baseY = -50
        }

        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = 'rgba(200, 200, 255, 0.3)'
        ctx.shadowBlur = particle.size * 4
        ctx.shadowColor = 'rgba(200, 200, 255, 0.5)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw stars with parallax layers
      stars.forEach((star) => {
        // Forward motion
        star.z -= star.speed * 30

        // Reset star when it goes past camera
        if (star.z <= 0) {
          star.z = canvas.width
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.baseY = Math.random() * canvas.height - canvas.height / 2
        }

        // Parallax based on layer depth and scroll
        const parallaxFactor = (star.layer + 1) * 0.3
        const yOffset = scrollYRef.current * parallaxFactor
        star.y = star.baseY + yOffset

        // Project 3D position to 2D
        const k = 128.0 / star.z
        const px = star.x * k + centerX
        const py = star.y * k + centerY

        // Skip stars outside viewport
        if (px < -50 || px > canvas.width + 50 || py < -50 || py > canvas.height + 50) return

        // Calculate size and opacity based on depth
        const size = (1 - star.z / canvas.width) * star.size * 2.5
        const opacity = Math.pow(1 - star.z / canvas.width, 1.5)

        // Subtle twinkle effect
        const twinkle = Math.sin(time * 2 + star.twinkleOffset) * 0.2 + 0.8

        // Draw light trail only for very near stars (reduced for performance)
        if (star.z < canvas.width / 6) {
          ctx.save()
          ctx.globalAlpha = opacity * 0.2
          ctx.strokeStyle = star.color
          ctx.lineWidth = size * 0.3
          ctx.beginPath()
          const trailLength = (1 - star.z / canvas.width) * 10
          ctx.moveTo(px, py)
          ctx.lineTo(px - (star.x / star.z) * trailLength, py - (star.y / star.z) * trailLength)
          ctx.stroke()
          ctx.restore()
        }

        // Draw main star with reduced glow for performance
        ctx.save()
        ctx.globalAlpha = opacity * twinkle
        ctx.fillStyle = star.color
        // Only add shadow to near stars
        if (star.z < canvas.width / 3) {
          ctx.shadowBlur = size * 2
          ctx.shadowColor = star.color
        }
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Nebula layer - static background */}
      <canvas
        ref={nebulaCanvasRef}
        className="fixed inset-0 w-full h-full -z-20"
        style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a1a 50%, #000000 100%)' }}
      />

      {/* Starfield layer - animated */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
      />
    </>
  )
}
