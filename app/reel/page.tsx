'use client'

import type { Metadata } from 'next'

// Note: Client components can't export metadata, so this is handled in a wrapper or layout
// For now, the page title will use the template from root layout

export default function ReelPage() {
  const videos = [
    {
      id: 'gIkX2Yo40AM',
      title: 'Musical Theatre Reel',
      description: 'A showcase of musical theatre performances'
    },
    {
      id: 'E7vvthj4c8U',
      title: 'Dramatic Monologue',
      description: 'Contrasting monologue performance'
    },
    {
      id: '6eAhNDk-y0s',
      title: 'Contemporary Monologue',
      description: 'Contrasting monologue performance'
    }
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 text-text-primary tracking-wider">
            DEMO REELS
          </h1>
          <p className="text-text-muted text-lg">
            Musical Theatre & Monologue Performances
          </p>
        </div>

        {/* Video Grid */}
        <div className="space-y-12 md:space-y-16">
          {videos.map((video, index) => (
            <div key={video.id} className="max-w-5xl mx-auto">
              {/* Video Title */}
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-text-primary text-center md:text-left">
                {video.title}
              </h2>

              {/* YouTube Embed */}
              <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(180,60,0,0.2)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
