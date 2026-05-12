export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EGL Solutions',
    description:
      'Marketing agency specializing in websites, lead generation, and content creation for local service businesses in Connecticut.',
    url: 'https://egl.solutions',
    telephone: '+18602003455',
    email: 'info@egl.solutions',
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
    sameAs: ['https://www.instagram.com/egl.solutions/'],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
