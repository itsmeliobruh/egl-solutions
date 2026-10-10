// Shared content types for site components (formerly lib/payload/queries.ts).

export interface HeroData {
  badgeText: string
  headlineL1: string
  headlineL2: string
  headlineL3prefix: string
  headlineL3outline: string
  headlineL4: string
  headlineL5: string
  subtext: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface ProcessStepData {
  number: string
  title: string
  time: string
  description: string
}

export interface ContentAddOnData {
  name: string
  price: string
  badge?: string
  bestFor: string
  includes: string[]
  bookingHref: string
}

export interface FAQItemData {
  question: string
  answer: string
  group: string
}
