'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

/**
 * CursorPet — a tiny cat that WALKS along the bottom of your screen,
 * following your cursor's x position. Oneko-style, but grounded.
 * - Click anywhere and it hops with joy
 * - Sits when idle, sleeps (with Zzz) after ~6s of no mouse movement
 * - Kicks up little dust puffs while walking
 * - Theme-aware, desktop-only, off for prefers-reduced-motion
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
    const fit = () => {
      el.width = window.innerWidth * dpr
      el.height = window.innerHeight * dpr
    }
    fit()
    window.addEventListener('resize', fit)

    const floor = () => window.innerHeight - 26

    let x = window.innerWidth - 120
    let targetX = x
    let lastMouseMove = performance.now()
    let dir = -1
    let step = 0
    let jy = 0 // jump height (px above floor)
    let vy = 0
    let raf = 0
    let running = true
    let frame = 0

    type Puff = { x: number; y: number; vx: number; life: number }
    let puffs: Puff[] = []

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      lastMouseMove = performance.now()
    }
    const onClick = () => {
      // hop! only when grounded
      if (jy === 0) vy = 6.5
      lastMouseMove = performance.now()
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onClick)

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
      frame++

      const dx = targetX - x
      const idleFor = now - lastMouseMove
      const sleeping = idleFor > 6000
      // leisurely pace: slow base, slight hurry when far
      const speed = Math.min(3, 1.3 + Math.abs(dx) / 400)
      const moving = !sleeping && Math.abs(dx) > 12 && jy === 0

      if (moving) {
        dir = dx > 0 ? 1 : -1
        x += Math.sign(dx) * Math.min(speed, Math.abs(dx))
        step += speed / 4
        // dust puff every few frames
        if (frame % 5 === 0) {
          puffs.push({
            x: x - dir * 14,
            y: floor() - 2,
            vx: -dir * (0.5 + Math.random() * 0.5),
            life: 1,
          })
        }
      }

      // jump physics
      if (vy !== 0 || jy > 0) {
        jy += vy
        vy -= 0.55
        if (jy <= 0) {
          jy = 0
          vy = 0
          // landing poof
          for (let i = 0; i < 4; i++) {
            puffs.push({
              x: x + (Math.random() - 0.5) * 20,
              y: floor() - 2,
              vx: (Math.random() - 0.5) * 1.5,
              life: 1,
            })
          }
        }
      }

      puffs = puffs.filter((p) => p.life > 0)
      for (const p of puffs) {
        p.x += p.vx
        p.y -= 0.4
        p.life -= 0.04
      }

      draw(now, moving, sleeping)
      raf = requestAnimationFrame(loop)
    }

    function draw(now: number, moving: boolean, sleeping: boolean) {
      const dark = themeRef.current === 'dark'
      const color = dark ? '#e7e5e4' : '#1c1917'
      const soft = dark ? '#a8a29e' : '#78716c'
      g.setTransform(dpr, 0, 0, dpr, 0, 0)
      g.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // dust puffs
      for (const p of puffs) {
        g.globalAlpha = Math.max(0, p.life) * 0.5
        g.fillStyle = soft
        g.beginPath()
        g.arc(p.x, p.y, 2.5 + (1 - p.life) * 2.5, 0, Math.PI * 2)
        g.fill()
      }
      g.globalAlpha = 1

      g.fillStyle = color
      g.strokeStyle = color
      g.lineWidth = 2
      g.lineCap = 'round'

      const fy = floor() - jy
      const squash = jy > 0 ? 1 + Math.min(0.18, Math.abs(vy) * 0.02) : 1

      g.save()
      g.translate(x, fy)
      g.scale(dir * (2 - squash), squash)

      if (sleeping) {
        // curled loaf on the floor
        g.beginPath()
        g.ellipse(0, -8, 15, 8, 0, 0, Math.PI * 2)
        g.fill()
        g.beginPath()
        g.arc(10, -14, 8, 0, Math.PI * 2)
        g.fill()
        // ears
        g.beginPath()
        g.moveTo(4, -19)
        g.lineTo(5, -26)
        g.lineTo(10, -20)
        g.closePath()
        g.fill()
        g.beginPath()
        g.moveTo(12, -20)
        g.lineTo(15, -26)
        g.lineTo(17, -19)
        g.closePath()
        g.fill()
        // tail wrapped across front
        g.beginPath()
        g.moveTo(-14, -6)
        g.quadraticCurveTo(0, 0, 16, -8)
        g.stroke()
        // closed eye
        g.lineWidth = 1.6
        g.beginPath()
        g.moveTo(8, -14)
        g.lineTo(13, -14)
        g.stroke()
        g.restore()

        // floating Z's
        const t = (now % 2400) / 2400
        g.fillStyle = color
        g.globalAlpha = 0.9 * (1 - t)
        g.font = 'bold 11px system-ui, sans-serif'
        g.fillText('z', x + 8 + t * 10, fy - 34 - t * 14)
        g.globalAlpha = 0.6 * (1 - t)
        g.font = 'bold 8px system-ui, sans-serif'
        g.fillText('z', x + 12 + t * 8, fy - 28 - t * 10)
        g.globalAlpha = 1
        return
      }

      const bob = moving ? Math.abs(Math.sin(step * 2)) * -2 : Math.sin(now / 600) * 0.5
      const swing = moving ? Math.sin(step * 2) * 3.5 : 0

      // tail (wags while walking, slow sway when sitting)
      const wag = Math.sin(now / (moving ? 110 : 400)) * (moving ? 5 : 3)
      g.beginPath()
      g.moveTo(-13, -10)
      g.quadraticCurveTo(-23, -14 + wag, -21, -24 + wag)
      g.stroke()

      // legs — alternate strides when walking, planted when sitting
      if (moving) {
        g.fillRect(-9, -8 + Math.max(0, swing) * 0.6, 4.5, 8)
        g.fillRect(4, -8 + Math.max(0, -swing) * 0.6, 4.5, 8)
      } else {
        // sitting: haunches
        g.beginPath()
        g.ellipse(-4, -6, 9, 6, 0, 0, Math.PI * 2)
        g.fill()
      }

      // body
      g.beginPath()
      g.ellipse(0, -14 + bob, 14, 8, 0, 0, Math.PI * 2)
      g.fill()

      // head
      g.beginPath()
      g.arc(11, -20 + bob, 8.5, 0, Math.PI * 2)
      g.fill()

      // ears (perk up while walking)
      const perk = moving ? -1.5 : 0
      g.beginPath()
      g.moveTo(5, -25 + bob + perk)
      g.lineTo(6, -33 + bob + perk)
      g.lineTo(11, -26 + bob)
      g.closePath()
      g.fill()
      g.beginPath()
      g.moveTo(13, -26 + bob)
      g.lineTo(16, -33 + bob + perk)
      g.lineTo(18, -25 + bob)
      g.closePath()
      g.fill()

      // eye (blinks every ~4s)
      const blink = now % 4200 < 150
      const eyeColor = dark ? '#0c0a09' : '#fafaf9'
      g.lineWidth = 1.8
      if (blink) {
        g.strokeStyle = eyeColor
        g.beginPath()
        g.moveTo(11, -20 + bob)
        g.lineTo(15, -20 + bob)
        g.stroke()
      } else {
        g.fillStyle = eyeColor
        g.beginPath()
        g.arc(13, -20.5 + bob, 1.4, 0, Math.PI * 2)
        g.fill()
      }

      g.restore()
    }

    raf = requestAnimationFrame(loop)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onClick)
      window.removeEventListener('resize', fit)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  )
}
