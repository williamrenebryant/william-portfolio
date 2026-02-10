import { siteConfig } from '@/data/siteConfig'

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center tracking-[0.2rem] text-text-primary">
          ABOUT
        </h2>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xl md:text-2xl leading-9 text-[#d0d0d0]">
            {siteConfig.aboutText}
          </p>
        </div>
      </div>
    </section>
  )
}
