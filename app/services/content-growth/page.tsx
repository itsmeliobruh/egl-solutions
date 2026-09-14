import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Growth | Remodeling Project Video Content for Connecticut Contractors',
  description:
    '2 filming days/month, 15–20 remodeling project videos, full strategy, scripting, and posting support. Build your CT remodeling brand on social media. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/content-growth' },
  openGraph: {
    title: 'Content Growth — EGL Marketing',
    description: '2 filming days, 15–20 remodeling videos/month, strategy, and posting support for CT contractors.',
    url: 'https://eglmarketing.co/services/content-growth',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-growth')) ?? getServiceBySlug('content-growth')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
