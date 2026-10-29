import type { Metadata } from 'next'
import SectionLabel from '@/components/shared/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for EGL Marketing marketing agency.',
  alternates: { canonical: 'https://eglmarketing.co/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="bg-void min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionLabel label="LEGAL" className="mb-3" />
        <h1 className="font-display text-5xl text-bone tracking-wider mb-8">PRIVACY POLICY</h1>
        <div className="font-body text-muted space-y-6 text-sm leading-relaxed">
          <p>Last updated: January 1, 2026</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and business information when you submit a form or contact us. We also collect usage data through analytics tools.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">2. How We Use Your Information</h2>
          <p>We use collected information to provide and improve our services, communicate with you about your account, send marketing communications you&apos;ve opted into, and comply with legal obligations.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">3. SMS Data</h2>
          <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent will not be shared with any third parties.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">4. Data Sharing</h2>
          <p>We do not sell your personal information. We may share information with service providers who assist in our operations, subject to confidentiality agreements.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">5. Cookies</h2>
          <p>Our website uses cookies for analytics and to improve user experience. You may disable cookies in your browser settings, though this may affect site functionality.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">6. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us at support@eglmarketing.co.</p>
          <h2 className="font-display text-2xl text-bone tracking-wide">7. Contact</h2>
          <p>Privacy questions may be directed to support@eglmarketing.co.</p>
        </div>
      </div>
    </section>
  )
}
