import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Website + Systems | Marketing for Local Service Businesses in CT',
  description:
    'High-converting website + full backend automation. AI chat agents, lead capture, appointment reminders, reputation management. Starting at $297/mo. EGL Solutions, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/website-and-systems' },
  openGraph: {
    title: 'Website + Systems — EGL Solutions',
    description: 'Your 24/7 sales engine. High-converting website + full marketing automation starting at $297/mo.',
    url: 'https://egl.solutions/services/website-and-systems',
  },
}

export default function Page() {
  const service = getServiceBySlug('website-and-systems')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
