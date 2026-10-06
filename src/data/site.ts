// Business facts used across the site. Edit this file on GitHub with the pencil icon —
// every page reads from here, so a change lands everywhere on the next deploy.

export const site = {
  name: 'WorkLoom',
  domain: 'workloom.ai',
  url: 'https://workloom.ai',
  tagline: 'Revenue operations and automation for small e-commerce brands and real estate operators',
  owner: 'Andy Funk',
  city: 'Phoenix, AZ',

  // Legal entity for privacy/terms. PLACEHOLDER until Andy confirms.
  legalName: 'WorkLoom',
  mailingAddress: 'Phoenix, AZ',
  contactEmail: 'andy@workloom.ai', // swap for an @workloom.ai address once email is set up (Phase 3)
  phone: '', // leave blank to hide

  // Pricing
  auditPrice: '$2,500',
  auditDuration: '1–2 weeks',

  // Proof strip numbers. CONFIRM before publish.
  proof: [
    { num: '16 → 1', label: 'Zaps replaced by one mapping table' },
    { num: '$5,460', label: 'weekly ad spend where ROAS broke' },
    { num: '117', label: 'email sequences audited' },
    { num: '145K', label: 'subscriber migration planned' },
  ],

  // Legal dates
  privacyEffective: 'September 4, 2026',
  termsEffective: 'September 4, 2026',
};

// Phase 1: only pages that exist are linked. Phase 2 swaps the anchors for real pages
// (/services, /case-studies, /lotcheck, /about, /real-estate).
export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Proof', href: '/#proof' },
  { label: 'About', href: '/#about' },
];

export const footerNav = [
  { label: 'Services', href: '/#services' },
  { label: 'Proof', href: '/#proof' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
