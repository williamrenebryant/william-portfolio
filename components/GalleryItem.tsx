'use client'

import Link from 'next/link'
import PlaceholderImage from './PlaceholderImage'

interface GalleryItemProps {
  id: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
  href?: string
  sizeClass?: string
}

export default function GalleryItem({ id, title, description, image, placeholder, href, sizeClass }: GalleryItemProps) {
  const content = (
    <>
      {/* Image or Placeholder - edge to edge, no borders */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center bg-black/20">
        {placeholder ? (
          <PlaceholderImage />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Info panel that slides up */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <h3 className="text-lg font-semibold mb-1 text-text-primary drop-shadow-lg">{title}</h3>
        <p className="text-sm text-text-muted drop-shadow-lg line-clamp-2">{description}</p>
      </div>
    </>
  )

  const className = `${sizeClass || ''} relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_15px_35px_rgba(180,60,0,0.4)] hover:z-10 group block`

  if (href && !placeholder) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <div className={className}>
      {content}
    </div>
  )
}
