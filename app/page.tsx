import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import AboutSection from '@/components/home/AboutSection'
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
  title: 'Home Remodeling Marketing Connecticut | EGL Marketing',
  description:
    'EGL Marketing helps Connecticut home remodeling contractors book more kitchen and bath jobs with done-for-you growth systems — website, CRM, ads, AI follow-up, reviews, and content. Based in Wethersfield, CT. Call (860) 200-3455.',
  alternates: { canonical: 'https://eglmarketing.co' },
  openGraph: {
    title: 'EGL Marketing | Home Remodeling Marketing Agency Connecticut',
    description:
      'Done-for-you marketing for Connecticut home remodeling contractors. Book more kitchen & bath jobs with website, CRM, ads, AI follow-up, reviews, and content.',
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
      <AboutSection />
      <ServicesSection />
      <TradesSection />
      <ProcessSection steps={processSteps} />
      <ServiceAreaMap />
      <FAQSection faqs={faqs} />
    </>
  )
}
