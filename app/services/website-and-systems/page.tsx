import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Growth Foundation | Website & CRM for Connecticut Home Remodeling Contractors',
  description:
    'A website built to convert homeowners researching remodels in your area — plus CRM, AI follow-up, review capture, and lead tracking. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/website-and-systems' },
  openGraph: {
    title: 'Growth Foundation — EGL Marketing',
    description: 'Website, CRM, follow-up, and reviews built for CT home remodeling contractors.',
    url: 'https://eglmarketing.co/services/website-and-systems',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('website-and-systems')) ?? getServiceBySlug('website-and-systems')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
