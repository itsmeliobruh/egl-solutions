import type { Metadata } from 'next'
import SectionLabel from '@/components/shared/SectionLabel'

export const metadata: Metadata = {
  title: 'Terms & Conditions | EGL Marketing',
  description: 'Terms and Conditions for EGL Marketing marketing services.',
  alternates: { canonical: 'https://egl.solutions/terms' },
}

export default function TermsPage() {
  return (
    <section className="bg-void min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionLabel label="LEGAL" className="mb-3" />
        <h1 className="font-display text-5xl text-bone tracking-wider mb-8">TERMS &amp; CONDITIONS</h1>
        <div className="prose prose-invert max-w-none font-body text-muted space-y-6 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">1. Services</h2>
          <p>EGL Marketing provides digital marketing services including website design, lead generation, content creation, and marketing automation for local service businesses. All services are delivered on a month-to-month basis unless otherwise agreed in writing.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">2. Payment</h2>
          <p>Monthly service fees are billed in advance. All payments are due on the agreed billing date. Failure to pay within 7 days of the due date may result in suspension of services.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">3. Cancellation</h2>
          <p>Clients may cancel services with 30 days written notice to info@egl.solutions. There are no long-term contracts or cancellation fees.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">4. Intellectual Property</h2>
          <p>Upon full payment of all outstanding balances, clients own the deliverables created specifically for their account. EGL Marketing retains ownership of all proprietary tools, systems, templates, and processes used in delivering services.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">5. SMS Communications</h2>
          <p>By providing your phone number, you consent to receive SMS messages from EGL Marketing regarding your account, our services, and marketing updates. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">6. Limitation of Liability</h2>
          <p>EGL Marketing shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amounts paid by the client in the preceding month.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">7. Contact</h2>
          <p>Questions about these Terms may be directed to info@egl.solutions or by calling <a href="tel:+18602003455" className="text-inferno">(860) 200-3455</a>.</p>
        </div>
      </div>
    </section>
  )
}
