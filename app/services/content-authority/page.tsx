import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Authority | Dominate Your Local Market with Video CT',
  description:
    '3–4 filming days, 30–40 videos per month, CRM lead nurture, and full market domination strategy. Become the #1 brand in your trade locally. $4,997/mo. EGL Solutions.',
  alternates: { canonical: 'https://egl.solutions/services/content-authority' },
  openGraph: {
    title: 'Content Authority — EGL Solutions',
    description: '3–4 filming days, 30–40 videos/month. Dominate your local market with unmatched content volume. $4,997/mo.',
    url: 'https://egl.solutions/services/content-authority',
  },
}

export default function Page() {
  const service = getServiceBySlug('content-authority')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
