import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'William René Bryant - Performance & Design Portfolio',
  description: 'Multidisciplinary artist specializing in performance, scenic design, and digital art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Dynamic animated background orbs */}
        <div className="dynamic-bg" aria-hidden="true">
          {/* Star cluster: orb 1 (top-right) */}
          <div className="star-cluster star-cluster-tr">
            <div className="sc-dust" />
            <div className="sc-stars" />
            <div className="sc-bright" />
            <div className="sc-feature" />
          </div>
          {/* Star cluster: orb 2 (bottom-left) */}
          <div className="star-cluster star-cluster-bl">
            <div className="sc-dust-alt" />
            <div className="sc-stars-alt" />
            <div className="sc-bright-alt" />
            <div className="sc-feature-alt" />
          </div>
          {/* Star cluster: orb 3 (center) */}
          <div className="star-cluster star-cluster-c">
            <div className="sc-dust" />
            <div className="sc-stars-alt" />
            <div className="sc-bright" />
            <div className="sc-feature-alt" />
          </div>
          {/* Star cluster: orb 4 (upper-right) */}
          <div className="star-cluster star-cluster-ur">
            <div className="sc-dust-alt" />
            <div className="sc-stars" />
            <div className="sc-bright-alt" />
            <div className="sc-feature" />
          </div>
          {/* Sparse dark-zone stars */}
          <div className="stars-sparse" />
          <div className="nebula-dust" />
          <div className="shooting-star" />
          <div className="shooting-star shooting-star-2" />
          <div className="dynamic-bg-orb-3" />
          <div className="dynamic-bg-orb-4" />
        </div>
        <Header />
        <div className="relative z-[1]">
          {children}
        </div>
      </body>
    </html>
  )
}
