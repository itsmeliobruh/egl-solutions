import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Revenue Engine | Complete Done-For-You Growth System for Local Service Businesses',
  description:
    'Website, CRM, ads, AI follow-up, content, reviews, reporting, and optimization — all done for you. $5,000 setup + $2,997/mo. Ad spend separate. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/all-in-one-system' },
  openGraph: {
    title: 'Revenue Engine — EGL Marketing',
    description: 'The complete done-for-you growth system. Ads, AI, content, and reporting. $5,000 setup + $2,997/mo.',
    url: 'https://egl.solutions/services/all-in-one-system',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('all-in-one-system')) ?? getServiceBySlug('all-in-one-system')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
