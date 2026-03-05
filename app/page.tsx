import Hero from '@/components/Hero'
import CreditsList from '@/components/CreditsList'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { performances } from '@/data/performances'
import { designs } from '@/data/designs'
import { visuals } from '@/data/visuals'

const performanceCredits = performances.filter(p => !('placeholder' in p && p.placeholder)).map(p => ({
  title: p.title,
  date: p.description,
  note: p.role,
  color: '#C41E3A',
  href: `/performance/${p.id}`,
}))

const designCredits = designs.map(d => ({
  title: d.title,
  date: d.date,
  note: d.description || undefined,
  color: '#8B6D47',
  href: `/design/${d.id}`,
}))

const visualCredits = visuals.map(v => ({
  title: v.title,
  date: v.description,
  color: '#4A6741',
}))

export default function Home() {
  return (
    <main>
      <Hero />

      <CreditsList
        sectionId="performance"
        sectionTitle="Performance"
        items={performanceCredits}
      />

      <CreditsList
        sectionId="design"
        sectionTitle="Design"
        items={designCredits}
      />

      <CreditsList
        sectionId="visuals"
        sectionTitle="Visuals"
        items={visualCredits}
      />

      <About />
      <Contact />
    </main>
  )
}
