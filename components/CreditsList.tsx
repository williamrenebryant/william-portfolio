'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Credit {
  title: string
  date: string
  note?: string
  color: string
  href?: string
  image?: string
}

interface CreditsListProps {
  sectionId: string
  sectionTitle: string
  items: Credit[]
}

export default function CreditsList({ sectionId, sectionTitle, items }: CreditsListProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id={sectionId} className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <span
          className="block text-[15px] tracking-[6px] uppercase font-medium mb-3"
          style={{ color: 'var(--color-text-subtle)' }}
        >
          Selected Work
        </span>
        <h2
          className="font-light leading-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--color-text)' }}
        >
          {sectionTitle}
        </h2>
      </div>

      {/* Credits list */}
      <div className="flex flex-col">
        {items.map((item, idx) => {
          const inner = (
            <div
              className="grid items-baseline py-5"
              style={{
                gridTemplateColumns: '1fr auto',
                borderBottom: '1px solid var(--color-border)',
                transition: 'opacity 0.4s ease',
                opacity: hoveredIdx !== null && hoveredIdx !== idx ? 0.3 : 1,
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-baseline gap-4">
                {/* Color dot */}
                <div
                  className="flex-shrink-0 rounded-full"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: item.color,
                    transition: 'transform 0.3s ease',
                    transform: hoveredIdx === idx ? 'scale(1.5)' : 'scale(1)',
                    marginTop: '4px',
                  }}
                />
                <h3
                  className="font-normal m-0"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    transform: hoveredIdx === idx ? 'translateX(12px)' : 'translateX(0)',
                    color: 'var(--color-text)',
                  }}
                >
                  {item.title}
                  {item.note && (
                    <span
                      className="ml-4 text-[16px] tracking-[2px] uppercase font-normal"
                      style={{ color: 'var(--color-text-subtle)' }}
                    >
                      {item.note}
                    </span>
                  )}
                </h3>
              </div>
              <span
                className="text-lg font-normal tracking-wide"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {item.date}
              </span>
            </div>
          )

          if (item.href) {
            return (
              <Link
                key={idx}
                href={item.href}
                className="no-underline"
                style={{ color: 'inherit' }}
              >
                {inner}
              </Link>
            )
          }

          return <div key={idx}>{inner}</div>
        })}
      </div>
    </section>
  )
}
