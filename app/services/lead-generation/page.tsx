import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Lead Flow System | Meta & Google Ads for Connecticut Home Remodeling Contractors',
  description:
    'Meta ads that get in front of homeowners actively planning a remodel. Never lose a $20K kitchen job to a missed call again. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/lead-generation' },
  openGraph: {
    title: 'Lead Flow System — EGL Marketing',
    description: 'Meta and Google ads built for CT remodeling contractors. Stop losing kitchen and bath jobs to competitors.',
    url: 'https://eglmarketing.co/services/lead-generation',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('lead-generation')) ?? getServiceBySlug('lead-generation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
