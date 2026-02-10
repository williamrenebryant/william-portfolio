'use client'

import { useState } from 'react'
import Link from 'next/link'
import { performances } from '@/data/performances'
import { designs } from '@/data/designs'
import { visuals } from '@/data/visuals'

interface DropdownItem {
  id: string
  title: string
  href: string
}

interface NavLink {
  href: string
  label: string
  dropdown?: DropdownItem[]
}

const navLinks: NavLink[] = [
  { href: '/#home', label: 'HOME' },
  {
    href: '/#performance',
    label: 'PERFORMANCE',
    dropdown: performances.filter(p => !p.placeholder).map(p => ({
      id: p.id,
      title: p.title,
      href: `/performance/${p.id}`
    }))
  },
  {
    href: '/#design',
    label: 'DESIGN',
    dropdown: designs.map(d => ({
      id: d.id,
      title: d.title,
      href: `/design/${d.id}`
    }))
  },
  {
    href: '/#visuals',
    label: 'VISUALS',
    dropdown: visuals.map(v => ({
      id: v.id,
      title: v.title,
      href: '/#visuals'
    }))
  },
  { href: '/#about', label: 'ABOUT' },
  { href: '/#contact', label: 'CONTACT' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.slice(1) // e.g. "#home"
      const isHomePage = window.location.pathname === '/'
      if (isHomePage) {
        e.preventDefault()
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // If not on homepage, let the default <a> navigation handle it
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label)
  }

  return (
    <nav className="fixed top-0 w-full bg-dark-primary/90 backdrop-blur-md py-6 z-[1000] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-12 list-none">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-text-secondary text-base tracking-wider transition-colors duration-300 hover:text-accent-orange flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <ul className="bg-dark-primary/95 backdrop-blur-md border border-white/10 rounded-lg py-2 min-w-[250px] max-h-[400px] overflow-y-auto shadow-xl">
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className="block px-4 py-2 text-text-secondary text-sm hover:text-accent-orange hover:bg-white/5 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              if (isMenuOpen) setMobileExpanded(null)
            }}
            className="text-text-secondary p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 max-h-[70vh] overflow-y-auto">
            <ul className="flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  {link.dropdown ? (
                    <>
                      {/* Section header - tappable to expand */}
                      <button
                        onClick={() => toggleMobileSection(link.label)}
                        className="w-full py-3 text-text-secondary text-base tracking-wider transition-colors duration-300 hover:text-accent-orange flex items-center justify-center gap-2"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Expandable dropdown items */}
                      {mobileExpanded === link.label && (
                        <ul className="bg-white/5 rounded-lg py-2 mb-2">
                          {link.dropdown.map((item) => (
                            <li key={item.id}>
                              <Link
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="block py-2 px-4 text-text-muted text-sm hover:text-accent-orange transition-colors"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="block py-3 text-center text-text-secondary text-base tracking-wider transition-colors duration-300 hover:text-accent-orange"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
