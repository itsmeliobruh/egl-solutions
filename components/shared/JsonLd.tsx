export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EGL Marketing',
    description:
      'Marketing agency specializing in websites, lead generation, and content creation for local service businesses in Connecticut.',
    url: 'https://eglmarketing.co',
    telephone: '+18602003455',
    email: 'info@eglmarketing.co',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wethersfield',
      addressLocality: 'Wethersfield',
      addressRegion: 'CT',
      postalCode: '06109',
      addressCountry: 'US',
    },
    areaServed: [
      'Hartford County CT',
      'New Haven County CT',
      'Litchfield County CT',
      'Middlesex County CT',
      'Tolland County CT',
      'New London County CT',
    ],
    openingHours: 'Mo-Su 09:00-19:00',
    sameAs: ['https://www.instagram.com/eglmarketing.co/'],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
