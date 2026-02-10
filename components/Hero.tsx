import { siteConfig } from '@/data/siteConfig'

export default function Hero() {
  return (
    <div id="home" className="h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 hero-overlay animate-pulse-overlay" />

      {/* Content */}
      <div className="text-center z-10 px-8">
        <h1 className="text-4xl md:text-7xl font-light tracking-[0.3rem] mb-4 gradient-text">
          {siteConfig.name}
        </h1>
        <p className="text-base md:text-2xl text-text-muted tracking-[0.2rem] mb-12">
          {siteConfig.subtitle}
        </p>
      </div>
    </div>
  )
}
