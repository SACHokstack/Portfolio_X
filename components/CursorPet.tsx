'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

/**
 * CursorPet — a tiny cat that chases your cursor, oneko-style.
 * - Desktop only (pointer: fine), disabled with prefers-reduced-motion
 * - Sits when idle, sleeps (with Zzz) after ~5s of no mouse movement
 * - Theme-aware: dark cat on light mode, light cat on dark mode
 */
export default function CursorPet() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)
  themeRef.current = resolvedTheme

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const el = canvas
    const g: CanvasRenderingContext2D = ctx

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const BOX = 64
    canvas.width = BOX * dpr
    canvas.height = BOX * dpr

    let x = window.innerWidth - 100
    let y = window.innerHeight - 100
    let tx = x
    let ty = y
    let lastMouseMove = performance.now()
    let dir = 1
    let step = 0
    let raf = 0
    let running = true

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      lastMouseMove = performance.now()
    }
    window.addEventListener('mousemove', onMove)

    const onVis = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        lastMouseMove = performance.now()
        raf = requestAnimationFrame(loop)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    function loop(now: number) {
      if (!running) return

      const dx = tx - x
      const dy = ty - y
      const dist = Math.hypot(dx, dy)
      const idleFor = now - lastMouseMove
      const sleeping = idleFor > 5000 && dist < 40
      const moving = !sleeping && dist > 28

      if (moving) {
        if (Math.abs(dx) > 4) dir = dx > 0 ? 1 : -1
        const speed = Math.min(7, dist / 6)
        x += (dx / dist) * speed
        y += (dy / dist) * speed
        step += speed / 3
      }

      el.style.transform = `translate(${x - 20}px, ${y - 20}px)`
      draw(now, moving, sleeping)

      raf = requestAnimationFrame(loop)
    }

    function draw(now: number, moving: boolean, sleeping: boolean) {
      const color = themeRef.current === 'dark' ? '#e7e5e4' : '#1c1917'
      g.setTransform(dpr, 0, 0, dpr, 0, 0)
      g.clearRect(0, 0, BOX, BOX)
      g.fillStyle = color
      g.strokeStyle = color
      g.lineWidth = 2
      g.lineCap = 'round'

      // local coords: cat faces +x, flip by dir
      g.save()
      g.translate(32, 34)
      g.scale(dir, 1)

      if (sleeping) {
        // curled loaf: body ellipse + wrapped tail + closed eye + Zzz
        g.beginPath()
        g.ellipse(0, 8, 15, 8, 0, 0, Math.PI * 2)
        g.fill()
        // head resting on body
        g.beginPath()
        g.arc(10, 2, 8, 0, Math.PI * 2)
        g.fill()
        // ears
        g.beginPath()
        g.moveTo(4, -3)
        g.lineTo(5, -10)
        g.lineTo(10, -4)
        g.closePath()
        g.fill()
        g.beginPath()
        g.moveTo(12, -4)
        g.lineTo(15, -10)
        g.lineTo(17, -3)
        g.closePath()
        g.fill()
        // tail wrapped across front
        g.beginPath()
        g.moveTo(-14, 10)
        g.quadraticCurveTo(0, 16, 16, 8)
        g.stroke()
        // closed eye
        g.lineWidth = 1.6
        g.beginPath()
        g.moveTo(8, 2)
        g.lineTo(13, 2)
        g.stroke()
        g.restore()

        // floating Z's
        const t = (now % 2400) / 2400
        g.fillStyle = color
        g.globalAlpha = 0.9 * (1 - t)
        g.font = 'bold 11px system-ui, sans-serif'
        g.fillText('z', 40 + t * 10, 18 - t * 14)
        g.globalAlpha = 0.6 * (1 - t)
        g.font = 'bold 8px system-ui, sans-serif'
        g.fillText('z', 44 + t * 8, 24 - t * 10)
        g.globalAlpha = 1
        return
      }

      const bob = moving ? Math.sin(step * 2) * 1.2 : Math.sin(now / 600) * 0.5
      const swing = moving ? Math.sin(step * 2) * 3 : 0

      // tail (wags faster when running)
      const wagSpeed = moving ? 90 : 350
      const wag = Math.sin(now / wagSpeed) * (moving ? 5 : 3)
      g.beginPath()
      g.moveTo(-13, 6 + bob * 0.4)
      g.quadraticCurveTo(-22, 2 + wag, -20, -8 + wag)
      g.stroke()

      // legs (alternate when moving)
      g.fillRect(-9, 8 + swing * 0.5, 4.5, 8 - swing * 0.3)
      g.fillRect(4, 8 - swing * 0.5, 4.5, 8 + swing * 0.3)

      // body
      g.beginPath()
      g.ellipse(0, 2 + bob, 14, 8, 0, 0, Math.PI * 2)
      g.fill()

      // head
      g.beginPath()
      g.arc(11, -4 + bob, 8.5, 0, Math.PI * 2)
      g.fill()

      // ears
      g.beginPath()
      g.moveTo(5, -9 + bob)
      g.lineTo(6, -17 + bob)
      g.lineTo(11, -10 + bob)
      g.closePath()
      g.fill()
      g.beginPath()
      g.moveTo(13, -10 + bob)
      g.lineTo(16, -17 + bob)
      g.lineTo(18, -9 + bob)
      g.closePath()
      g.fill()

      // eye (blinks every ~4s)
      const blink = now % 4200 < 150
      g.strokeStyle = themeRef.current === 'dark' ? '#0c0a09' : '#fafaf9'
      g.lineWidth = 1.8
      if (blink) {
        g.beginPath()
        g.moveTo(11, -4 + bob)
        g.lineTo(15, -4 + bob)
        g.stroke()
      } else {
        g.fillStyle = themeRef.current === 'dark' ? '#0c0a09' : '#fafaf9'
        g.beginPath()
        g.arc(13, -4.5 + bob, 1.4, 0, Math.PI * 2)
        g.fill()
      }

      g.restore()
    }

    raf = requestAnimationFrame(loop)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-10 w-10"
    />
  )
}
