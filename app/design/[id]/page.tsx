import { designs } from '@/data/designs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import LightboxGallery from '@/components/LightboxGallery'

interface Props {
  params: { id: string }
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

export function generateStaticParams() {
  return designs.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const project = designs.find((p) => p.id === id)
  return {
    title: project ? `${project.title} - William René Bryant` : 'Not Found',
  }
}

export default async function DesignPage({ params }: Props) {
  const { id } = await params
  const project = designs.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const allImages = [
    ...(project.heroImage ? [project.heroImage] : []),
    ...(project.galleryImages || []),
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Back Button */}
        <Link
          href="/#design"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-orange transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-text-primary text-center">
          {project.title}
        </h1>

        {/* Date & Description */}
        <p className="text-center text-text-muted mb-12 text-lg max-w-3xl mx-auto">
          {project.description ? `${project.date} · ${project.description}` : project.date}
        </p>

        {/* Gallery with Lightbox */}
        <LightboxGallery
          images={allImages}
          title={project.title}
          sizePatterns={detailSizePatterns}
        />
      </div>
    </main>
  )
}
