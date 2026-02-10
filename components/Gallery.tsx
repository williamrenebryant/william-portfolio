import GalleryItem from './GalleryItem'
import { Performance, Visual, DesignProject } from '@/data/types'

interface GalleryProps {
  items: (Performance | Visual | DesignProject)[]
  type: 'performance' | 'design' | 'visual'
}

// Gallery wall size patterns - creates varied, organic layout
const sizePatterns = [
  'col-span-2 row-span-2', // large feature
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-2', // tall
  'col-span-1 row-span-1', // standard
  'col-span-2 row-span-1', // wide
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-2', // tall
  'col-span-2 row-span-1', // wide
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
  'col-span-2 row-span-2', // large feature
  'col-span-1 row-span-1', // standard
  'col-span-1 row-span-1', // standard
]

export default function Gallery({ items, type }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px] gap-3 md:gap-4 mt-12">
      {items.map((item, index) => {
        const isDesign = 'heroImage' in item
        const image = isDesign ? (item as DesignProject).heroImage : (item as Performance | Visual).image
        const description = isDesign
          ? `${(item as DesignProject).date} · ${(item as DesignProject).description}`
          : (item as Performance | Visual).description

        let href: string | undefined
        if (!('placeholder' in item && item.placeholder)) {
          if (type === 'performance') {
            href = `/performance/${item.id}`
          } else if (type === 'design') {
            href = `/design/${item.id}`
          }
        }

        const sizeClass = sizePatterns[index % sizePatterns.length]

        return (
          <GalleryItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={description}
            image={image}
            placeholder={'placeholder' in item ? item.placeholder : false}
            href={href}
            sizeClass={sizeClass}
          />
        )
      })}
    </div>
  )
}
