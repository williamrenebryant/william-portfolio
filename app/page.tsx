import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { performances } from '@/data/performances'
import { designs } from '@/data/designs'
import { visuals } from '@/data/visuals'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Performance Section */}
      <section id="performance" className="py-40 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-[0.2rem] text-text-primary">
          PERFORMANCE
        </h2>
        <p className="text-center text-text-muted mb-8">Click to view gallery</p>
        <Gallery items={performances} type="performance" />
      </section>

      {/* Design Section */}
      <section id="design" className="py-40 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-[0.2rem] text-text-primary">
          DESIGN
        </h2>
        <p className="text-center text-text-muted mb-8">Click to view gallery</p>
        <Gallery items={designs} type="design" />
      </section>

      {/* Visuals Section */}
      <section id="visuals" className="py-40 px-8 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-[0.2rem] text-text-primary">
          VISUALS
        </h2>
        <Gallery items={visuals} type="visual" />
      </section>

      <About />
      <Contact />
    </main>
  )
}
