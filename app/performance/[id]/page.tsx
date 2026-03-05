import { performances } from '@/data/performances'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import LightboxGallery from '@/components/LightboxGallery'

// Map performance IDs to their full gallery images
const performanceGalleries: Record<string, string[]> = {
  'rocky-horror': [
    '/images/RockyHorror1.jpg',
    '/images/RockyHorror2.jpg',
    '/images/RockyHorror3.jpg',
    '/images/RockyHorror4.jpg',
    '/images/RockyHorror5.jpg',
    '/images/RockyHorror6.jpg',
    '/images/RockyHorror7.jpg',
    '/images/RockyHorror8.jpg',
    '/images/RockyHorror9.jpg',
  ],
  'jcs-performance': [
    '/images/JesusChristSuperstar1.jpg',
    '/images/JesusChristSuperstar2.jpg',
    '/images/JesusChristSuperstar3.jpg',
    '/images/JesusChristSuperstar4.jpg',
    '/images/JesusChristSuperstar5.jpg',
    '/images/JesusChristSuperstar6.jpg',
    '/images/JesusChristSuperstar7.jpg',
    '/images/JesusChristSuperstar8.jpg',
    '/images/JesusChristSuperstar9.jpg',
    '/images/JesusChristSuperstar10.jpg',
    '/images/JesusChristSuperstar11.jpg',
  ],
  'angels-millennium': [
    '/images/AiApOne1.jpg',
    '/images/AiApOne2.jpg',
    '/images/AiApOne3.jpg',
    '/images/AiApOne4.jpg',
    '/images/AiApOne5.jpg',
    '/images/AiApOne6.jpg',
    '/images/AiApOne7.jpg',
    '/images/AiApOne8.jpg',
  ],
  'angels-perestroika': [
    '/images/AiApTwo1.jpg',
    '/images/AiApTwo2.jpg',
    '/images/AiApTwo3.jpg',
    '/images/AiApTwo4.jpg',
    '/images/AiApTwo5.jpg',
    '/images/AiApTwo6.jpg',
    '/images/AiApTwo7.jpg',
    '/images/AiApTwo8.jpg',
    '/images/AiApTwo9.jpg',
  ],
  'into-the-woods': [
    '/images/IntoTheWoods1.jpg',
    '/images/IntoTheWoods2.jpg',
    '/images/IntoTheWoods3.jpg',
    '/images/IntoTheWoods4.jpg',
    '/images/IntoTheWoods5.jpg',
    '/images/IntoTheWoods6.jpg',
  ],
  'sunday-in-the-park': [
    '/images/SundayInThePark1.jpg',
    '/images/SundayInThePark2.jpg',
  ],
}

// Gallery wall patterns for detail pages
const detailSizePatterns = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
]

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return performances
    .filter((p) => !p.placeholder)
    .map((performance) => ({
      id: performance.id,
    }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const performance = performances.find((p) => p.id === id)
  return {
    title: performance ? `${performance.title} - William René Bryant` : 'Not Found',
  }
}

export default async function PerformancePage({ params }: Props) {
  const { id } = await params
  const performance = performances.find((p) => p.id === id)

  if (!performance || performance.placeholder) {
    notFound()
  }

  const images = performanceGalleries[performance.id] || (performance.image ? [performance.image] : [])

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Back Button */}
        <Link
          href="/#performance"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-text-primary text-center">
          {performance.title}
        </h1>

        {/* Role and Company */}
        {(performance.role || performance.company) && (
          <div className="text-center mb-2">
            {performance.role && (
              <p className="text-xl md:text-2xl text-text-primary font-light">
                {performance.role}
              </p>
            )}
            {performance.company && (
              <p className="text-lg text-text-muted">
                {performance.company}
              </p>
            )}
          </div>
        )}

        {/* Date */}
        <p className="text-center text-text-muted mb-12">
          {performance.description}
        </p>

        {/* Gallery with Lightbox */}
        <LightboxGallery
          images={images}
          title={performance.title}
          sizePatterns={detailSizePatterns}
        />
      </div>
    </main>
  )
}
