export interface Performance {
  id: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
}

export interface DesignProject {
  id: string
  title: string
  description: string
  date: string
  heroImage?: string
  galleryImages?: string[]
  placeholder?: boolean
}

export interface Visual {
  id: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
}

export interface SiteConfig {
  name: string
  subtitle: string
  aboutText: string
  instagram: string
  email: string
}
