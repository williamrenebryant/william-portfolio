import { siteConfig } from '@/data/siteConfig'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <span
          className="block text-[15px] tracking-[6px] uppercase font-medium mb-3"
          style={{ color: 'var(--color-text-subtle)' }}
        >
          Biography
        </span>
        <h2
          className="font-light leading-tight mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--color-text)' }}
        >
          About
        </h2>
        <div className="max-w-[800px]">
          <p
            className="font-light leading-relaxed"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              lineHeight: 1.7,
              color: 'rgba(232,224,214,0.75)',
            }}
          >
            {siteConfig.aboutText}
          </p>
        </div>
      </div>
    </section>
  )
}
