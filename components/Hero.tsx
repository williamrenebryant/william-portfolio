'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '-20% -10%',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(139,109,71,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(74,55,40,0.06) 0%, transparent 50%)',
        }}
      />

      <div
        className="text-center px-6"
        style={{
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          opacity: loaded ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <h1
          className="font-light"
          style={{
            fontSize: 'clamp(42px, 8vw, 96px)',
            letterSpacing: '0.02em',
            lineHeight: 1.05,
            color: 'var(--color-text)',
          }}
        >
          William René
          <br />
          <span style={{ fontStyle: 'italic', opacity: 0.85 }}>Bryant</span>
        </h1>

        <div
          className="flex gap-4 md:gap-10 justify-center mt-6 md:mt-8"
          style={{
            opacity: loaded ? 0.5 : 0,
            transition: 'opacity 1.4s ease 0.3s',
          }}
        >
          {['Performance', 'Design', 'Visuals'].map((label) => (
            <span
              key={label}
              className="text-[13px] md:text-[17px] tracking-[2px] md:tracking-[4px] uppercase font-normal"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: '40px',
          opacity: loaded ? 0.3 : 0,
          transition: 'opacity 2s ease 1s',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--color-text))',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
