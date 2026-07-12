import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Local Authority Content | Dominate Your Local Market with Content',
  description:
    '3 filming days max, 25–30 short-form videos per month, founder content, testimonials, and monthly campaign themes. $3,997/mo. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/content-authority' },
  openGraph: {
    title: 'Local Authority Content — EGL Marketing',
    description: '3 filming days max, 25–30 videos/month, founder content, testimonials, and campaign themes. $3,997/mo.',
    url: 'https://egl.solutions/services/content-authority',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-authority')) ?? getServiceBySlug('content-authority')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
