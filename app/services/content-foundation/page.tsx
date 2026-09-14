import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Starter | Before & After Remodeling Videos for Connecticut Contractors',
  description:
    'Before/after content from your own job sites turned into short-form video. 1 filming day, 8–12 videos/month. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/content-foundation' },
  openGraph: {
    title: 'Content Starter — EGL Marketing',
    description: 'Remodeling project content filmed on your job sites, turned into 8–12 short-form videos monthly.',
    url: 'https://eglmarketing.co/services/content-foundation',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('content-foundation')) ?? getServiceBySlug('content-foundation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
