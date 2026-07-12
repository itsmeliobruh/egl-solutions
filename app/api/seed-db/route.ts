import { NextResponse } from 'next/server'

// Temporary route — delete after seeding. GET /api/seed-db?secret=<PAYLOAD_SECRET>
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get('secret')
  if (secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { getPayload } = await import('payload')
    const { default: config } = await import('@payload-config')
    const payload = await getPayload({ config })

    // ── Hero ──────────────────────────────────────────────────────────────────
    await payload.updateGlobal({
      slug: 'hero-section',
      data: {
        badgeText: 'LIMITED TIME: FREE WEBSITE BUILD ON US',
        headlineL1: 'EMPOWERING',
        headlineL2: 'LOCAL BUSINESS',
        headlineL3prefix: 'WITH',
        headlineL3outline: 'SMART',
        headlineL4: 'MARKETING',
        headlineL5: 'SOLUTIONS!',
        subtext: 'Dedicated to crafting impactful systems that attract, convert, and retain customers, helping your local service business scale faster than ever.',
        ctaPrimary: '⚡ WORK WITH US',
        ctaSecondary: 'VIEW PRICING',
      } as any,
    })

    // ── Site Settings ─────────────────────────────────────────────────────────
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        phone: '(860) 200-3455',
        email: 'info@egl.solutions',
        address: 'Wethersfield, CT',
        consultationUrl: '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding',
        defaultBookingUrl: '/book',
      } as any,
    })

    // ── Services ──────────────────────────────────────────────────────────────
    const services = [
      {
        slug: 'website-and-systems', name: 'Growth Foundation', emoji: '🚀', category: 'systems',
        headline: 'BUILD THE SYSTEM BEFORE YOU BUY MORE TRAFFIC',
        subheadline: 'Build the system before you buy more traffic.',
        price: '$297/mo', setup: '$1,000 setup', badge: 'MOST POPULAR',
        description: 'A clean website, CRM, lead capture, review system, and basic follow-up automation built to stop leads from slipping through the cracks.',
        whyImportant: 'Most local service businesses lose leads not because they lack visibility, but because they lack the systems to capture and follow up in time.',
        whenToConsider: 'Your online presence is weak or inconsistent. Leads come in but you lose track of them.',
        included: ['10–15 page high-converting website or landing page','Lead capture form','Call button','Booking link','CRM pipeline setup','Basic SMS/email follow-up automations','Google review request workflow','Basic review capture system','Lead source tracking','Light monthly support'].map(text => ({ text })),
        notIncluded: ['Ads management','Full content creation','Advanced AI receptionist','Full SEO','Full lead reactivation','Monthly strategy calls'].map(text => ({ text })),
      },
      {
        slug: 'lead-generation', name: 'Lead Flow System', emoji: '🚀', category: 'systems',
        headline: 'GENERATE, CAPTURE, AND FOLLOW UP WITH NEW LEADS EVERY MONTH',
        subheadline: 'Generate, capture, and follow up with new leads every month.',
        price: '$1,500/mo', setup: '$2,000 setup', badge: 'MOST VALUE',
        pricingNote: 'Ad spend is billed separately and paid directly by the client.',
        description: 'A done-for-you lead generation system that helps local service businesses generate, capture, and follow up with new opportunities every month.',
        whyImportant: 'Organic growth is slow. Paid acquisition — when set up correctly — is the fastest path to a predictable pipeline.',
        whenToConsider: "You want consistent inbound leads beyond referrals. You're ready to invest in ads.",
        included: ['Everything in Growth Foundation','Website or landing page','CRM setup','Lead capture','Follow-up automations','Google review workflow','Lead source tracking','Google Business Profile setup & optimization','Local Service Ads setup, if eligible','Meta Ads setup','Google Ads setup, optional depending on industry','Offer-specific landing page','Pixel setup','UTM tracking','Call tracking','Monthly performance report','Leads, appointments, and cost per lead reporting','Weekly campaign adjustments'].map(text => ({ text })),
      },
      {
        slug: 'all-in-one-system', name: 'Revenue Engine', emoji: '🚀', category: 'systems',
        headline: 'THE COMPLETE DONE-FOR-YOU GROWTH SYSTEM',
        subheadline: 'Attract leads, follow up instantly, book more appointments, and build trust with content.',
        price: '$2,997/mo', setup: '$5,000 setup', badge: 'MOST RESULTS',
        pricingNote: 'Ad spend is billed separately and paid directly by the client.',
        description: 'Your complete local growth system: website, CRM, ads, AI follow-up, content, reviews, reporting, and optimization.',
        whyImportant: 'Scaling past a certain point requires more than ads and a website. You need AI that handles missed calls and follow-up.',
        whenToConsider: "You're ready to scale aggressively and want everything handled.",
        included: ['Everything in Lead Flow System','Website','Ads','CRM','Reporting','Advanced AI agents','AI chat agent','Missed-call text-back','AI appointment setter','AI receptionist (optional depending on niche)','Sales pipeline automations','Lead reactivation campaign','Automated review engine','Email/SMS nurture','1 filming day per month','8–12 edited short-form videos per month','Monthly strategy call','Priority support'].map(text => ({ text })),
      },
      {
        slug: 'content-foundation', name: 'Content Starter', emoji: '📸', category: 'content',
        headline: 'BUILD TRUST AND STAY VISIBLE WITH MONTHLY CONTENT',
        subheadline: 'Build trust, stay visible, and give local customers a reason to choose you.',
        price: '$997/mo',
        description: 'We come to your job site or business once a month and capture 8–12 short-form videos.',
        whyImportant: 'People buy from businesses they trust. Regular video content builds that trust faster than any ad.',
        whenToConsider: "You have little or no social media presence. You want professional content without managing it yourself.",
        included: ['1 filming day per month','8–12 short-form videos per month','Captions included','Posting guidance included','Basic content calendar'].map(text => ({ text })),
      },
      {
        slug: 'content-growth', name: 'Content Growth', emoji: '📸', category: 'content',
        headline: 'POST MORE CONSISTENTLY AND BUILD STRONGER LOCAL AUTHORITY',
        subheadline: 'Post more consistently and build stronger local authority.',
        price: '$1,997/mo', badge: 'MOST POPULAR',
        description: 'More filming days, more videos, full content strategy, scripting, and posting support.',
        whyImportant: 'Volume and strategy separate brands that get noticed from ones that get ignored.',
        whenToConsider: "You want to post more consistently. You need hooks, scripts, and strategy — not just filming.",
        included: ['2 filming days per month','15–20 short-form videos per month','Hooks/scripts included','Content calendar included','Posting support included','Monthly strategy included'].map(text => ({ text })),
      },
      {
        slug: 'content-authority', name: 'Local Authority Content', emoji: '📸', category: 'content',
        headline: 'DOMINATE YOUR LOCAL MARKET WITH CONTENT',
        subheadline: 'Founder content, trust content, testimonials, and local authority — every single month.',
        price: '$3,997/mo', badge: 'MOST RESULTS',
        description: '25–30 videos per month, founder and team content, testimonials, and monthly campaign themes.',
        whyImportant: 'Authority in a local market is won by winning by showing up consistently, everywhere, at scale.',
        whenToConsider: "You want to be the most recognized brand in your trade locally.",
        included: ['3 filming days per month max','25–30 short-form videos per month','Founder/owner content','Team/trust content','Testimonial content','Monthly campaign themes','Posting support'].map(text => ({ text })),
      },
    ]
    for (const s of services) {
      await payload.create({ collection: 'services', data: s as any })
    }

    // ── Pricing Cards ─────────────────────────────────────────────────────────
    const pricingCards = [
      {
        order: 1, title: 'Growth Foundation', tagline: 'Build the system before you buy more traffic.',
        description: 'For businesses that need a website, CRM, follow-up, reviews, and tracking built right.',
        setup: 1000, monthly: 297, adSpendSeparate: false, cta: 'Build My Foundation', badge: 'MOST POPULAR',
        features: ['10–15 page high-converting website','Lead capture form + call button + booking link','CRM pipeline setup','Basic SMS/email follow-up automations','Google review request workflow','Review capture system','Lead source tracking','Light monthly support'].map(text => ({ text })),
        bookingHref: '/book?services_interested=🚀+Growth+Foundation',
      },
      {
        order: 2, title: 'Lead Flow System', tagline: 'Generate, capture, and follow up with new leads every month.',
        description: 'For businesses ready to run ads and create predictable, consistent lead flow.',
        setup: 2000, monthly: 1500, adSpendSeparate: true, cta: 'Get More Leads', badge: 'MOST VALUE',
        features: ['Everything in Growth Foundation','PLUS','Google Business Profile setup & optimization','Local Service Ads setup, if eligible','Meta Ads setup','Google Ads setup (optional by industry)','Offer-specific landing page','Pixel, UTM & call tracking','Monthly performance report','Leads, appointments & cost per lead reporting','Weekly campaign adjustments'].map(text => ({ text })),
        bookingHref: '/book?services_interested=🚀+Lead+Flow+System',
      },
      {
        order: 3, title: 'Revenue Engine', tagline: 'The complete done-for-you growth system.',
        description: 'Website, CRM, ads, AI follow-up, content, reviews, reporting, and optimization.',
        setup: 5000, monthly: 2997, adSpendSeparate: true, cta: 'Build My Growth Engine', badge: 'MOST RESULTS',
        features: ['Everything in Lead Flow System','PLUS','Advanced AI agents','AI chat agent + missed-call text-back','AI appointment setter','Sales pipeline automations','Lead reactivation campaign','Automated review engine','Email/SMS nurture','1 filming day + 8–12 videos/mo','Monthly strategy call','Priority support'].map(text => ({ text })),
        bookingHref: '/book?services_interested=🚀+Revenue+Engine',
      },
    ]
    for (const c of pricingCards) {
      await payload.create({ collection: 'pricing-cards', data: c as any })
    }

    // ── Content Add-Ons ───────────────────────────────────────────────────────
    const addOns = [
      {
        order: 1, name: 'Content Starter', price: '$997/mo',
        bestFor: 'Businesses that need consistent trust-building content without a full content team.',
        includes: ['1 filming day per month','8–12 short-form videos per month','Captions included','Posting guidance','Basic content calendar'].map(text => ({ text })),
        bookingHref: '/book?services_interested=📸+Content+Starter',
      },
      {
        order: 2, name: 'Content Growth', price: '$1,997/mo', badge: 'MOST POPULAR',
        bestFor: 'Businesses that want to post more consistently and build stronger local authority.',
        includes: ['2 filming days per month','15–20 short-form videos per month','Hooks/scripts included','Content calendar + strategy','Posting support','Monthly strategy call'].map(text => ({ text })),
        bookingHref: '/book?services_interested=📸+Content+Growth',
      },
      {
        order: 3, name: 'Local Authority Content', price: '$3,997/mo',
        bestFor: 'Businesses that want to dominate their local market with content, trust, and testimonials.',
        includes: ['3 filming days per month max','25–30 short-form videos per month','Founder/owner content','Team/trust content','Testimonial content','Monthly campaign themes','Posting support'].map(text => ({ text })),
        bookingHref: '/book?services_interested=📸+Local+Authority+Content',
      },
    ]
    for (const a of addOns) {
      await payload.create({ collection: 'content-add-ons', data: a as any })
    }

    // ── Process Steps ─────────────────────────────────────────────────────────
    const steps = [
      { order: 1, number: '01', title: 'AUDIT & INTAKE', time: '15–25 mins', description: 'We learn about your business, your current marketing, your offer, and what systems you already have in place. Short call. No pressure.' },
      { order: 2, number: '02', title: 'BUILD YOUR SYSTEM', time: '7–10 Days', description: 'We build your website or landing page, CRM, lead capture, follow-up, tracking, and any campaigns included in your plan. Most foundational systems launch within 7–10 days after we receive access and assets.' },
      { order: 3, number: '03', title: 'LAUNCH & OPTIMIZE', time: 'Ongoing', description: 'We launch the system, monitor performance, review the numbers, and continue improving your campaigns, follow-up, and conversion points every month.' },
    ]
    for (const s of steps) {
      await payload.create({ collection: 'process-steps', data: s })
    }

    // ── FAQ Items ─────────────────────────────────────────────────────────────
    const faqs = [
      { order: 1, group: 'homepage', question: 'Can you provide references from past clients?', answer: 'Absolutely. We can provide references from past clients. You can also read reviews from our satisfied customers on Google. Contact information for specific past clients available upon request.' },
      { order: 2, group: 'homepage', question: 'What sets you apart from other agencies?', answer: 'At EGL Marketing, we distinguish ourselves through meticulous attention to detail, a dedication to quality results, and a personalized approach. We prioritize communication to seamlessly bring your vision to life.' },
      { order: 3, group: 'homepage', question: 'Is there a fee for a consultation?', answer: 'No. EGL Marketing offers complimentary consultations and estimates to all prospective clients.' },
      { order: 4, group: 'homepage', question: 'How long does it take to build my system?', answer: 'Most systems are built and launched within 7–10 business days after receiving your onboarding information.' },
      { order: 5, group: 'homepage', question: 'Do I need a contract?', answer: 'We offer month-to-month agreements. No long-term contracts required.' },
      { order: 1, group: 'pricing', question: 'Do I need a long-term contract?', answer: 'No. All plans are month-to-month. You can cancel anytime with 30 days notice.' },
      { order: 2, group: 'pricing', question: 'What does the setup fee cover?', answer: 'The setup fee covers the full build — your website or landing page, CRM pipeline, automations, tracking, and any campaigns included in your plan. Most foundational systems are launched within 7–10 business days after we receive access and assets.' },
      { order: 3, group: 'pricing', question: 'Can I upgrade my plan later?', answer: "Yes. You can move to a higher tier at any time. We'll credit your remaining setup toward the upgrade." },
      { order: 4, group: 'pricing', question: 'Is ad spend included in the price?', answer: 'No. Ad spend is billed separately and paid directly by the client to the ad platform (Google, Meta, etc.). We manage the campaigns — you control and own the budget.' },
      { order: 5, group: 'pricing', question: 'Can I add content to my growth system plan?', answer: 'Yes. Content add-ons (Content Starter, Content Growth, Local Authority Content) can be added to any plan at any time.' },
    ]
    for (const f of faqs) {
      await payload.create({ collection: 'faq-items', data: f as any })
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded: hero, site settings, 6 services, 3 pricing cards, 3 add-ons, 3 process steps, 10 FAQs.',
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
