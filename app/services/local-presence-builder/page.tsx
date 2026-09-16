import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Local Presence Builder | Website, Google & Lead System for Local Service Businesses',
  description:
    'Get found online, look professional, and capture every lead automatically. Website, Google Business Profile, CRM, and review system built for local service businesses in Connecticut. EGL Marketing.',
  alternates: { canonical: 'https://eglmarketing.co/services/local-presence-builder' },
  openGraph: {
    title: 'Local Presence Builder — EGL Marketing',
    description: 'Get found online, look professional, and capture every lead automatically.',
    url: 'https://eglmarketing.co/services/local-presence-builder',
  },
}

export default function Page() {
  const service = getServiceBySlug('local-presence-builder')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
