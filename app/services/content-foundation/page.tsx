import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Foundation | Social Media Video for Contractors CT',
  description:
    'Professional short-form video content for local service businesses. 1 filming day, 10–12 videos per month, editing and posting guidance. $997/mo. EGL Solutions, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/content-foundation' },
  openGraph: {
    title: 'Content Foundation — EGL Solutions',
    description: '1 filming day/month, 10–12 short-form videos, posting guidance. Establish your brand presence. $997/mo.',
    url: 'https://egl.solutions/services/content-foundation',
  },
}

export default function Page() {
  const service = getServiceBySlug('content-foundation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
