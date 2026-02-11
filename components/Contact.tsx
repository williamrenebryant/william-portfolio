import { siteConfig } from '@/data/siteConfig'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 text-center">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-[0.2rem] text-text-primary">
          GET IN TOUCH
        </h2>
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-br from-teal-accent to-accent-orange-dark text-white no-underline rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(180,60,0,0.6)] inline-block"
          >
            INSTAGRAM
          </a>
          <a
            href={siteConfig.email}
            className="px-10 py-4 bg-gradient-to-br from-teal-accent to-accent-orange-dark text-white no-underline rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(180,60,0,0.6)] inline-block"
          >
            EMAIL
          </a>
        </div>
      </div>
    </section>
  )
}
