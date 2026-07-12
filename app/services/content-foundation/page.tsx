import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Starter | Monthly Short-Form Video Content for Local Service Businesses',
  description:
    'Build trust and stay visible with monthly content. 1 filming day, 8–12 short-form videos, captions, and posting guidance. $997/mo. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/content-foundation' },
  openGraph: {
    title: 'Content Starter — EGL Marketing',
    description: '1 filming day/month, 8–12 short-form videos, captions, and posting guidance. $997/mo.',
    url: 'https://egl.solutions/services/content-foundation',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-foundation')) ?? getServiceBySlug('content-foundation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
