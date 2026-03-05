import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import GrainOverlay from '@/components/GrainOverlay'
import Script from 'next/script'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://williamrenebryant.com'),
  title: {
    default: 'William René Bryant - Actor, Designer & Visual Artist',
    template: '%s | William René Bryant',
  },
  description: 'Professional actor and multidisciplinary artist specializing in musical theatre, dramatic performance, scenic design, and visual arts. Based in the Mid-Atlantic region.',
  keywords: ['William René Bryant', 'actor', 'musical theatre', 'theatre performer', 'scenic designer', 'visual artist', 'performance artist', 'Delaware actor', 'Mid-Atlantic theatre'],
  authors: [{ name: 'William René Bryant' }],
  creator: 'William René Bryant',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://williamrenebryant.com',
    siteName: 'William René Bryant',
    title: 'William René Bryant - Actor, Designer & Visual Artist',
    description: 'Professional actor and multidisciplinary artist specializing in musical theatre, dramatic performance, scenic design, and visual arts.',
    images: [
      {
        url: '/images/Headshot1.jpg',
        width: 1200,
        height: 1600,
        alt: 'William René Bryant - Professional Actor Headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William René Bryant - Actor, Designer & Visual Artist',
    description: 'Professional actor and multidisciplinary artist specializing in musical theatre, dramatic performance, scenic design, and visual arts.',
    images: ['/images/Headshot1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here once you set it up
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable}`}>
      <head>
        {/* Google Analytics - Replace G-BY2T6S7Q3J with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BY2T6S7Q3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BY2T6S7Q3J');
          `}
        </Script>

        {/* Structured Data - Person Schema */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "William René Bryant",
              "url": "https://williamrenebryant.com",
              "image": "https://williamrenebryant.com/images/Headshot1.jpg",
              "sameAs": [
                "https://instagram.com/william_renatus"
              ],
              "jobTitle": "Actor and Scenic Designer",
              "description": "Professional actor and multidisciplinary artist specializing in musical theatre, dramatic performance, scenic design, and visual arts.",
              "knowsAbout": ["Musical Theatre", "Acting", "Scenic Design", "Visual Arts", "Performance Art"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Delaware"
              }
            }
          `}
        </Script>
      </head>
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
        <GrainOverlay />
        <Header />
        <div className="relative z-[1]">
          {children}
        </div>
      </body>
    </html>
  )
}
