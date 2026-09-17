import type { MetadataRoute } from 'next'
import { getAllProjects } from './lib/sanityQueries'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://boubacarba.dev'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects()

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.slug?.current)
    .map((p) => ({
      url: `${BASE_URL}/projects/${p.slug.current}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectRoutes,
  ]
}
