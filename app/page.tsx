import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import TradesSection from '@/components/home/TradesSection'
import PricingSection from '@/components/home/PricingSection'
import ProcessSection from '@/components/home/ProcessSection'
import ContactForm from '@/components/home/ContactForm'
import FAQSection from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'EGL Solutions | Marketing Agency for Local Service Businesses in CT',
  description:
    'EGL Solutions helps local service businesses in Connecticut grow with high-converting websites, lead generation, AI automation, and content creation. Based in Wethersfield, CT. Call (860) 200-3455.',
  alternates: {
    canonical: 'https://egl.solutions',
  },
  openGraph: {
    title: 'EGL Solutions | Marketing Agency for Local Service Businesses in CT',
    description:
      'High-converting websites, lead generation, AI automation, and content creation for local service businesses in Connecticut.',
    url: 'https://egl.solutions',
    images: [{ url: 'https://egl.solutions/og-image.png', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <TradesSection />
      <PricingSection />
      <ProcessSection />
      <ContactForm />
      <FAQSection />
    </>
  )
}
