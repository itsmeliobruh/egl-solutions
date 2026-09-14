import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Local Authority Content | Dominate CT Remodeling with Project Content',
  description:
    '3 filming days max, 25–30 remodeling project videos per month, founder content, client testimonials, and campaign themes. Become the known remodeler in your CT market. EGL Marketing.',
  alternates: { canonical: 'https://eglmarketing.co/services/content-authority' },
  openGraph: {
    title: 'Local Authority Content — EGL Marketing',
    description: '3 filming days, 25–30 remodeling videos/month — dominate your Connecticut local market.',
    url: 'https://eglmarketing.co/services/content-authority',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-authority')) ?? getServiceBySlug('content-authority')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
