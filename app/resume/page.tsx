'use client'

import { credits, resumeStats, training, skills } from '@/data/credits'
import Link from 'next/link'
import { useState, useRef } from 'react'

// Note: Metadata must be exported from a Server Component
// Since this is a Client Component, metadata is handled in layout.tsx

export default function ResumePage() {
  const featuredCredits = credits.filter((credit) => credit.featured)
  const printResumeCredits = credits.slice(0, 12) // Top 12 for downloadable resume
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [scrollOffset, setScrollOffset] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const offset = scrollRef.current.scrollLeft
      setScrollOffset(offset)
    }
  }

  const opacity = Math.max(0, 1 - scrollOffset / 200)
  const translateX = -scrollOffset

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 text-text-primary tracking-wider">
            WILLIAM RENÉ BRYANT
          </h1>

          {/* Contact & Stats */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-4 text-text-muted mb-4 text-sm md:text-base">
            <span>{resumeStats.phone}</span>
            <span className="hidden md:inline">•</span>
            <a href={`mailto:${resumeStats.email}`} className="hover:text-accent-orange transition-colors break-all">
              {resumeStats.email}
            </a>
            <span className="hidden md:inline">•</span>
            <span>{resumeStats.union}</span>
          </div>

          {/* Physical Stats */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-text-muted text-xs md:text-sm">
            <span>Height: {resumeStats.height}</span>
            <span>•</span>
            <span>Hair: {resumeStats.hair}</span>
            <span>•</span>
            <span>Eyes: {resumeStats.eyes}</span>
            <span>•</span>
            <span>Voice: {resumeStats.voice}</span>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6 md:mt-8">
            <button
              onClick={() => window.print()}
              className="inline-block px-6 py-2 md:px-8 md:py-3 border border-[rgba(232,224,214,0.2)] text-text-primary font-normal rounded-lg hover:border-[rgba(232,224,214,0.5)] hover:bg-[rgba(232,224,214,0.05)] transition-colors text-sm md:text-base"
            >
              Download Resume (PDF)
            </button>
          </div>
        </div>

        {/* Headshots */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[1, 5, 3, 4, 2, 6].map((num) => (
              <div
                key={num}
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-[0_20px_60px_rgba(180,60,0,0.3)] transition-all duration-300 group"
              >
                <img
                  src={`/images/Headshot${num}.jpg`}
                  alt={`William René Bryant - Headshot ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Download button on hover */}
                <a
                  href={`/images/Headshot${num}.jpg`}
                  download={`William-Bryant-Headshot-${num}.jpg`}
                  className="absolute bottom-4 right-4 p-3 bg-[rgba(12,10,9,0.8)] border border-[rgba(232,224,214,0.3)] text-text-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[rgba(232,224,214,0.1)] z-10"
                  title="Download Headshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Productions */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-text-primary text-center">
            Featured Productions
          </h2>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden relative -mx-8">
            {/* Swipe indicator - animates with scroll */}
            <div
              className="text-center text-text-muted text-sm mb-4 flex items-center justify-center gap-2 transition-transform pointer-events-none px-8"
              style={{
                opacity: opacity,
                transform: `translateX(${translateX}px)`,
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              Swipe to explore
            </div>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-20 scrollbar-hide px-8 gap-4"
            >
              {featuredCredits.map((credit) => (
                <Link
                  key={credit.id}
                  href={`/performance/${credit.id}`}
                  className="group relative overflow-hidden rounded-lg flex-shrink-0 w-[280px] h-[400px] cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(180,60,0,0.3)]"
                >
                  <img
                    src={credit.images?.[0]}
                    alt={credit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-1 text-text-primary">{credit.title}</h3>
                    <p className="text-sm text-text-muted mb-1">{credit.role}</p>
                    <p className="text-xs text-text-muted">{credit.company} • {credit.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredCredits.map((credit) => (
              <Link
                key={credit.id}
                href={`/performance/${credit.id}`}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(180,60,0,0.3)]"
              >
                <img
                  src={credit.images?.[0]}
                  alt={credit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-1 text-text-primary">{credit.title}</h3>
                  <p className="text-sm text-text-muted mb-1">{credit.role}</p>
                  <p className="text-xs text-text-muted">{credit.company} • {credit.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Full Credits Table */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-text-primary text-center">
            Theatre Credits
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent-orange/30">
                  <th className="py-3 px-4 text-text-primary font-semibold">Production</th>
                  <th className="py-3 px-4 text-text-primary font-semibold">Role</th>
                  <th className="py-3 px-4 text-text-primary font-semibold">Company</th>
                  <th className="py-3 px-4 text-text-primary font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {credits.map((credit) => (
                  <tr
                    key={credit.id}
                    className={`border-b border-bg-secondary/50 hover:bg-bg-secondary/30 transition-colors ${
                      credit.featured ? 'font-semibold' : ''
                    }`}
                  >
                    <td className="py-3 px-4 text-text-primary">{credit.title}</td>
                    <td className="py-3 px-4 text-text-muted">{credit.role}</td>
                    <td className="py-3 px-4 text-text-muted">{credit.company}</td>
                    <td className="py-3 px-4 text-text-muted whitespace-nowrap">{credit.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List Layout */}
          <div className="md:hidden flex flex-col max-h-[60vh] overflow-y-auto pr-2">
            {credits.map((credit) => (
              <div
                key={credit.id}
                className="flex flex-col py-4 gap-1"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <div className="flex items-baseline gap-3">
                  <div
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      background: credit.type === 'musical' ? '#C41E3A' : credit.type === 'opera' ? '#8B6D47' : '#4A6741',
                      marginTop: '4px',
                    }}
                  />
                  <div>
                    <h3
                      className="font-normal m-0"
                      style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: 'var(--color-text)' }}
                    >
                      {credit.title}
                    </h3>
                    <span
                      className="block text-[13px] tracking-[2px] uppercase font-normal mt-1"
                      style={{ color: 'var(--color-text-subtle)' }}
                    >
                      {credit.role}
                    </span>
                  </div>
                </div>
                <span
                  className="text-sm font-normal tracking-wide ml-5"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {credit.company} · {credit.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Education */}
        <section className="mb-12 md:mb-16">
          {/* Desktop: Always expanded */}
          <div className="hidden md:block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-text-primary text-center">
              Training & Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {training.map((section) => (
                <div key={section.category} className="bg-bg-secondary/20 rounded-lg p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-text-primary">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-text-muted text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Collapsible */}
          <div className="md:hidden">
            <button
              onClick={() => toggleSection('training')}
              className="w-full flex items-center justify-between p-4 bg-bg-secondary/20 rounded-lg mb-4"
            >
              <h2 className="text-2xl font-light text-text-primary">
                Training & Education
              </h2>
              <svg
                className={`w-6 h-6 text-accent-orange transition-transform duration-200 ${
                  expandedSection === 'training' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === 'training' && (
              <div className="space-y-4 mb-4">
                {training.map((section) => (
                  <div key={section.category} className="bg-bg-secondary/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-text-primary">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="text-text-muted text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 md:mb-16">
          {/* Desktop: Always expanded */}
          <div className="hidden md:block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-text-primary text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-bg-secondary/20 rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-text-primary">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 md:px-3 bg-accent-orange/20 text-text-primary text-xs md:text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Collapsible */}
          <div className="md:hidden">
            <button
              onClick={() => toggleSection('skills')}
              className="w-full flex items-center justify-between p-4 bg-bg-secondary/20 rounded-lg mb-4"
            >
              <h2 className="text-2xl font-light text-text-primary">
                Skills
              </h2>
              <svg
                className={`w-6 h-6 text-accent-orange transition-transform duration-200 ${
                  expandedSection === 'skills' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === 'skills' && (
              <div className="space-y-4 mb-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-bg-secondary/20 rounded-lg p-4">
                    <h3 className="text-base font-semibold mb-2 text-text-primary">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent-orange/20 text-text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Print-Friendly Resume - Hidden on Mobile */}
        <section id="print-resume" className="hidden md:block mb-16 bg-bg-secondary/20 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-text-primary text-center">
            Resume
          </h2>
          <div className="max-w-4xl mx-auto bg-white text-black p-12 rounded-lg shadow-2xl">
            {/* Resume Header */}
            <div className="text-center mb-6 border-b-2 border-black pb-4">
              <h1 className="text-4xl font-bold tracking-widest mb-2">
                WILLIAM RENÉ BRYANT
              </h1>
              <div className="text-sm space-x-2">
                <span>{resumeStats.phone}</span>
                <span>|</span>
                <span>{resumeStats.email}</span>
                <span>|</span>
                <span>{resumeStats.union}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {resumeStats.height} • {resumeStats.hair} Hair • {resumeStats.eyes} Eyes • {resumeStats.voice}
              </div>
            </div>

            {/* Theatre Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-black mb-3">THEATRE EXPERIENCE</h2>
              <table className="w-full text-sm">
                <tbody>
                  {printResumeCredits.map((credit) => (
                    <tr key={credit.id} className="border-b border-gray-300">
                      <td className="py-1 font-semibold align-top w-1/3">{credit.title}</td>
                      <td className="py-1 align-top w-1/4">{credit.role}</td>
                      <td className="py-1 text-right align-top w-5/12">{credit.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Training */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b border-black mb-3">TRAINING & EDUCATION</h2>
              <div className="text-sm space-y-1">
                <div><span className="font-semibold">Education:</span> BM Vocal Performance, University of Delaware, 2016</div>
                <div><span className="font-semibold">Voice:</span> Andre Vermeulen, Harold Evans, Blake Smith, Noélia Archambeault Hernández</div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-bold border-b border-black mb-3">SKILLS</h2>
              <div className="text-sm space-y-1">
                <div><span className="font-semibold">Vocal Styles:</span> Musical Theater, Opera, Pop, Folk, Jazz</div>
                <div><span className="font-semibold">Instruments:</span> Piano, Ukulele</div>
                <div><span className="font-semibold">Dance:</span> Ballet, Jazz, Contemporary</div>
                <div><span className="font-semibold">Accents/Dialects:</span> British, French, German, Irish, Spanish, New England, New York, Southern</div>
                <div><span className="font-semibold">Special Skills:</span> Stage Combat, Intimacy Training, Athletic</div>
              </div>
            </div>
          </div>

          {/* Print Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.print()}
              className="px-8 py-3 border border-[rgba(232,224,214,0.2)] text-text-primary font-normal rounded-lg hover:border-[rgba(232,224,214,0.5)] hover:bg-[rgba(232,224,214,0.05)] transition-colors"
            >
              Print / Save as PDF
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
