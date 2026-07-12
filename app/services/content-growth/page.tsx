import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Growth | Monthly Video Content & Strategy for Local Service Businesses',
  description:
    '2 filming days, 15–20 short-form videos, hooks, scripts, content calendar, and posting support. Build consistent local authority. $1,997/mo. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/content-growth' },
  openGraph: {
    title: 'Content Growth — EGL Marketing',
    description: '2 filming days, 15–20 videos/month, scripts, strategy, and posting support. $1,997/mo.',
    url: 'https://egl.solutions/services/content-growth',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-growth')) ?? getServiceBySlug('content-growth')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
