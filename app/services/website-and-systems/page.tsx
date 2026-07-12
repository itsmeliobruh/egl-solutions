import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Growth Foundation | Website, CRM & Follow-Up System for Local Service Businesses',
  description:
    'Build the system before you buy more traffic. Website, CRM, lead capture, follow-up automations, review system, and tracking. $1,000 setup + $297/mo. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/website-and-systems' },
  openGraph: {
    title: 'Growth Foundation — EGL Marketing',
    description: 'Build the system before you buy more traffic. Website, CRM, follow-up, and reviews. $1,000 setup + $297/mo.',
    url: 'https://egl.solutions/services/website-and-systems',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('website-and-systems')) ?? getServiceBySlug('website-and-systems')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
