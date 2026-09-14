import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Revenue Engine | Complete Done-For-You Marketing for CT Home Remodeling Contractors',
  description:
    'The complete done-for-you system for Connecticut home remodeling contractors: website, CRM, ads, AI follow-up, reviews, before/after content, and reporting. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/all-in-one-system' },
  openGraph: {
    title: 'Revenue Engine — EGL Marketing',
    description: 'The complete done-for-you growth system for CT home remodeling contractors.',
    url: 'https://eglmarketing.co/services/all-in-one-system',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('all-in-one-system')) ?? getServiceBySlug('all-in-one-system')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
