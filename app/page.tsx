import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import PainSection from '@/components/home/PainSection'
import ServicesSection from '@/components/home/ServicesSection'
import TradesSection from '@/components/home/TradesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ServiceAreaMap from '@/components/home/ServiceAreaMap'
import FAQSection from '@/components/home/FAQSection'
import {
  getPayloadHero,
  getPayloadProcessSteps,
  getPayloadFAQ,
} from '@/lib/payload/queries'

export const metadata: Metadata = {
  title: 'EGL Marketing | Done-For-You Growth Systems for Local Service Businesses',
  description:
    'EGL Marketing helps local service businesses generate more leads, follow up faster, and book more jobs with done-for-you growth systems — website, CRM, ads, AI follow-up, reviews, and content. Based in Wethersfield, CT. Call (860) 200-3455.',
  alternates: { canonical: 'https://eglmarketing.co' },
  openGraph: {
    title: 'EGL Marketing | Done-For-You Growth Systems for Local Service Businesses',
    description: 'Turn more attention into booked jobs. Website, CRM, ads, AI follow-up, reviews, and content for local service businesses in Connecticut.',
    url: 'https://eglmarketing.co',
    images: [{ url: 'https://eglmarketing.co/og-image.png', width: 1200, height: 630 }],
  },
}

export default async function HomePage() {
  const [hero, processSteps, faqs] = await Promise.all([
    getPayloadHero(),
    getPayloadProcessSteps(),
    getPayloadFAQ('homepage'),
  ])

  return (
    <>
      <Hero data={hero} />
      <TrustBar />
      <PainSection />
      <ServicesSection />
      <TradesSection />
      <ProcessSection steps={processSteps} />
      <ServiceAreaMap />
      <FAQSection faqs={faqs} />
    </>
  )
}
