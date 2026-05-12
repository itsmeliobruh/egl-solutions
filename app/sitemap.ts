import type { MetadataRoute } from 'next'
import { getAllServiceAreas } from '@/lib/serviceAreas'
import { services } from '@/lib/services'

const BASE_URL = 'https://egl.solutions'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const areaPages: MetadataRoute.Sitemap = getAllServiceAreas().map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...areaPages]
}
