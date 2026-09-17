import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url'

// Configuration du client Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // À ajouter dans .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Date du jour pour les dernières fonctionnalités
  useCdn: process.env.NODE_ENV === 'production', // CDN pour la production
  token: process.env.SANITY_API_TOKEN, // Token pour les écritures (optionnel)
})

// Builder pour les URLs d'images
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types TypeScript pour les données Sanity
export interface SanitySkill {
  _id: string
  _type: 'skill'
  name: string
  category: 'web' | 'data' | 'ai' | 'saas' | 'tools'
  level: number // 0-100
  icon?: string
  description?: string
  order?: number
}

export interface SanityProject {
  _id: string
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  description: string
  category: 'web' | 'data' | 'ai' | 'saas'
  tags: string[]
  coverImage: string
  gallery?: string[]
  demoUrl?: string
  sourceCodeUrl?: string
  featured: boolean
  metrics?: {
    users?: string
    performance?: string
    impact?: string
  }
  technologies: string[]
  publishedAt: string
  order?: number
}

export interface SanityExperience {
  _id: string
  _type: 'experience'
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  skills: string[]
  order?: number
}

export interface SanitySAAS {
  _id: string
  _type: 'saasProduct'
  name: string
  slug: {
    current: string
  }
  tagline: string
  description: string
  logo: string
  screenshots: Array<{
    image: string
    caption?: string
  }>
  features: Array<{
    title: string
    description: string
    icon?: string
  }>
  metrics?: {
    users?: string
    revenue?: string
    growth?: string
  }
  websiteUrl: string
  status: 'active' | 'development' | 'archived'
  technologies: string[]
  testimonials?: Array<{
    author: string
    role: string
    content: string
    avatar?: string
  }>
  order?: number
}

export interface SanityDataProject {
  _id: string
  _type: 'dataProject'
  title: string
  slug: {
    current: string
  }
  description: string
  category: 'sql' | 'excel' | 'looker' | 'python' | 'automation'
  coverImage: string
  dashboardUrl?: string
  embedCode?: string
  insights: string[]
  tools: string[]
  datasets?: string
  publishedAt: string
  order?: number
}

export interface SanityAIProject {
  _id: string
  _type: 'aiProject'
  title: string
  slug: {
    current: string
  }
  description: string
  category: 'prompt-engineering' | 'ai-integration' | 'automation' | 'chatbot'
  coverImage: string
  demoUrl?: string
  githubUrl?: string
  prompts?: Array<{
    title: string
    prompt: string
    result: string
  }>
  technologies: string[]
  aiModels: string[]
  publishedAt: string
  order?: number
}
