import type { Service } from '@/lib/services'
import type { PricingCardData } from '@/components/pricing/PricingCard'

// ── Helpers ───────────────────────────────────────────────────────────────────

function toStrings(arr: { text: string }[] | undefined): string[] {
  return (arr ?? []).map((x) => x.text)
}

async function getPayload() {
  if (!process.env.DATABASE_URL) return null
  try {
    const { getPayload: gp } = await import('payload')
    const { default: config } = await import('@payload-config')
    return gp({ config })
  } catch {
    return null
  }
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getPayloadServices(): Promise<Service[] | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const { docs } = await payload.find({ collection: 'services', limit: 20, sort: 'createdAt' })
    return docs.map((d: any) => ({
      slug: d.slug,
      name: d.name,
      emoji: d.emoji ?? '',
      category: d.category,
      headline: d.headline ?? '',
      subheadline: d.subheadline ?? '',
      price: d.price,
      setup: d.setup ?? undefined,
      pricingNote: d.pricingNote ?? undefined,
      badge: d.badge ?? undefined,
      description: d.description ?? '',
      whyImportant: d.whyImportant ?? '',
      whenToConsider: d.whenToConsider ?? '',
      included: toStrings(d.included),
      notIncluded: d.notIncluded?.length ? toStrings(d.notIncluded) : undefined,
    })) as Service[]
  } catch {
    return null
  }
}

export async function getPayloadServiceBySlug(slug: string): Promise<Service | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const { docs } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const d = docs[0]
    if (!d) return null
    return {
      slug: d.slug,
      name: d.name,
      emoji: d.emoji ?? '',
      category: d.category,
      headline: d.headline ?? '',
      subheadline: d.subheadline ?? '',
      price: d.price,
      setup: d.setup ?? undefined,
      pricingNote: d.pricingNote ?? undefined,
      badge: d.badge ?? undefined,
      description: d.description ?? '',
      whyImportant: d.whyImportant ?? '',
      whenToConsider: d.whenToConsider ?? '',
      included: toStrings(d.included),
      notIncluded: d.notIncluded?.length ? toStrings(d.notIncluded) : undefined,
    } as Service
  } catch {
    return null
  }
}

// ── Pricing Cards ─────────────────────────────────────────────────────────────

export async function getPayloadPricingCards(): Promise<PricingCardData[] | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const { docs } = await payload.find({ collection: 'pricing-cards', limit: 10, sort: 'order' })
    return docs.map((d: any) => ({
      title: d.title,
      tagline: d.tagline ?? '',
      description: d.description ?? '',
      setup: d.setup,
      monthly: d.monthly,
      adSpendSeparate: d.adSpendSeparate ?? false,
      cta: d.cta ?? 'Get Started',
      badge: d.badge ?? null,
      features: toStrings(d.features),
      bookingHref: d.bookingHref ?? '/book',
    })) as PricingCardData[]
  } catch {
    return null
  }
}

// ── Content Add-Ons ───────────────────────────────────────────────────────────

export interface ContentAddOnData {
  name: string
  price: string
  badge?: string
  bestFor: string
  includes: string[]
  bookingHref: string
}

export async function getPayloadContentAddOns(): Promise<ContentAddOnData[] | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const { docs } = await payload.find({ collection: 'content-add-ons', limit: 10, sort: 'order' })
    return docs.map((d: any) => ({
      name: d.name,
      price: d.price,
      badge: d.badge ?? undefined,
      bestFor: d.bestFor ?? '',
      includes: toStrings(d.includes),
      bookingHref: d.bookingHref ?? '/book',
    }))
  } catch {
    return null
  }
}

// ── Hero Section ──────────────────────────────────────────────────────────────

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

export async function getPayloadHero(): Promise<HeroData | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const d = await payload.findGlobal({ slug: 'hero-section' }) as any
    if (!d?.headlineL1) return null
    return {
      badgeText: d.badgeText ?? '',
      headlineL1: d.headlineL1 ?? '',
      headlineL2: d.headlineL2 ?? '',
      headlineL3prefix: d.headlineL3prefix ?? '',
      headlineL3outline: d.headlineL3outline ?? '',
      headlineL4: d.headlineL4 ?? '',
      headlineL5: d.headlineL5 ?? '',
      subtext: d.subtext ?? '',
      ctaPrimary: d.ctaPrimary ?? '',
      ctaSecondary: d.ctaSecondary ?? '',
    }
  } catch {
    return null
  }
}

// ── Process Steps ─────────────────────────────────────────────────────────────

export interface ProcessStepData {
  number: string
  title: string
  time: string
  description: string
}

export async function getPayloadProcessSteps(): Promise<ProcessStepData[] | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const { docs } = await payload.find({ collection: 'process-steps', limit: 10, sort: 'order' })
    return docs.map((d: any) => ({
      number: d.number,
      title: d.title,
      time: d.time ?? '',
      description: d.description,
    }))
  } catch {
    return null
  }
}

// ── FAQ Items ─────────────────────────────────────────────────────────────────

export interface FAQItemData {
  question: string
  answer: string
  group: string
}

export async function getPayloadFAQ(group?: string): Promise<FAQItemData[] | null> {
  const payload = await getPayload()
  if (!payload) return null
  try {
    const where = group ? { group: { equals: group } } : undefined
    const { docs } = await payload.find({ collection: 'faq-items', where, limit: 20, sort: 'order' })
    return docs.map((d: any) => ({
      question: d.question,
      answer: d.answer,
      group: d.group,
    }))
  } catch {
    return null
  }
}
