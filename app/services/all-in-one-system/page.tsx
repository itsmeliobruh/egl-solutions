import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'All-In-One Marketing System | Complete Growth System for Contractors CT',
  description:
    'The complete growth powerhouse for local service businesses. AI agents, pipeline automations, power dialers, email & SMS, content shoot, and a dedicated Client Success Manager. $2,499/mo.',
  alternates: { canonical: 'https://egl.solutions/services/all-in-one-system' },
  openGraph: {
    title: 'All-In-One System — EGL Solutions',
    description: 'Every marketing tool, every automation, every system combined. The complete growth powerhouse. $2,499/mo.',
    url: 'https://egl.solutions/services/all-in-one-system',
  },
}

export default function Page() {
  const service = getServiceBySlug('all-in-one-system')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
