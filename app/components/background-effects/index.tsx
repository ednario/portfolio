'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`)
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={
        {
          '--mouse-x': '50vw',
          '--mouse-y': '30vh',
        } as React.CSSProperties
      }
    >
      {/* Dynamic Cursor Spotlight - discreet, elegant and smooth */}
      <div
        className="hidden md:block absolute inset-0 transition-opacity duration-500 opacity-70"
        style={{
          background:
            'radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.12), transparent 75%)',
        }}
      />

      {/* Grid Pattern Overlay with Radial Mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]"
      />

      {/* Ambient Blue Glow Orbs - subtle and soft */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] bg-sky-500/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[70%] -right-40 w-[600px] h-[600px] bg-indigo-600/6 blur-[150px] rounded-full pointer-events-none" />
    </div>
  )
}
