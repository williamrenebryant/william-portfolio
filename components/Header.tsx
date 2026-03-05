'use client'

import { useState, useEffect } from 'react'
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
  { href: '/resume', label: 'RESUME' },
  { href: '/reel', label: 'REEL' },
  { href: '/#contact', label: 'CONTACT' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll to show/hide header on mobile + frosted glass on desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 60)

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.slice(1)
      const isHomePage = window.location.pathname === '/'
      if (isHomePage) {
        e.preventDefault()
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}
      style={{
        background: scrolled ? 'rgba(12,10,9,0.98)' : 'rgba(12,10,9,0.7)',
        
        
        borderBottom: scrolled ? '1px solid rgba(232,224,214,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1280px] mx-auto py-5 px-6 flex justify-between items-center">
        {/* Monogram */}
        <a
          href="/#home"
          onClick={(e) => handleClick(e, '/#home')}
          className="text-[13px] tracking-[4px] uppercase font-light transition-colors duration-300"
          style={{ color: 'var(--color-text)' }}
        >
          WRB
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 list-none items-center">
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
                className="text-[16px] tracking-[3px] uppercase font-medium transition-colors duration-300 flex items-center gap-1"
                style={{ color: 'var(--color-text-muted)', padding: '4px 0' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <ul
                    className="py-2 min-w-[250px] max-h-[400px] overflow-y-auto rounded-lg shadow-xl"
                    style={{
                      background: 'rgba(12,10,9,0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(232,224,214,0.06)',
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className="block px-4 py-2 text-base transition-colors duration-200"
                          style={{ color: 'var(--color-text-muted)' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-text)'
                            e.currentTarget.style.background = 'rgba(232,224,214,0.04)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--color-text-muted)'
                            e.currentTarget.style.background = 'transparent'
                          }}
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
        <button
          className="md:hidden p-2"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            if (isMenuOpen) setMobileExpanded(null)
          }}
          aria-label="Toggle menu"
          style={{ color: 'var(--color-text)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden max-h-[70vh] overflow-y-auto px-6 pb-6"
          style={{
            background: 'rgba(12,10,9,0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(232,224,214,0.06)',
          }}
        >
          <ul className="flex flex-col items-center gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(link.label)}
                      className="w-full py-3 text-[16px] tracking-[3px] uppercase font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {mobileExpanded === link.label && (
                      <ul className="rounded-lg py-2 mb-2" style={{ background: 'rgba(232,224,214,0.03)' }}>
                        {link.dropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              onClick={(e) => handleClick(e, item.href)}
                              className="block py-2 px-4 text-base transition-colors"
                              style={{ color: 'var(--color-text-subtle)' }}
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
                    className="block py-3 text-center text-[16px] tracking-[3px] uppercase font-medium transition-colors duration-300"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
