// Business facts used across the site. Edit this file on GitHub with the pencil icon —
// every page reads from here, so a change lands everywhere on the next deploy.

export const site = {
  name: 'WorkLoom',
  domain: 'workloom.ai',
  url: 'https://workloom.ai',
  tagline: 'Lead-to-contract systems, profitability reporting, and the automations between your tools',
  owner: 'Andy Funk',
  city: 'Phoenix, AZ',

  // Legal entity for privacy/terms.
  legalName: 'Workloom LLC',
  mailingAddress: 'Gilbert, AZ',
  contactEmail: 'andy@workloom.ai',
  phone: '', // leave blank to hide

  // Pricing. Only the audit is priced publicly for now.
  auditPrice: '$2,500',
  auditDuration: '1–2 weeks',

  // Tools strip (homepage). Rendered as grey wordmarks until official SVGs are in.
  tools: ['Shopify', 'Zapier', 'Make', 'GoHighLevel', 'Claude', 'OpenAI'],

  // GoHighLevel chat widget (Sites → Chat Widget → Get Code). Leave blank to turn it off.
  // It is not loaded on noindex pages (the demo page gets its own widget).
  ghlChatWidgetId: '6ad6f942e0d80451b7cb56df',

  // Legal dates
  privacyEffective: 'October 7, 2026',
  termsEffective: 'October 7, 2026',
};

export const cta = { label: 'Book a call', href: '/contact' };

export const nav = [
  { label: 'The Audit', href: '/audit' },
  { label: 'About', href: '/#about' },
];

export const solutionsByBusiness = [
  { label: 'Law firms', href: '/law-firms', blurb: 'SMS intake that never misses a lead' },
  { label: 'Contractors & builders', href: '/contractors', blurb: 'Marketing and lead-to-contract' },
  { label: 'Shopify stores', href: '/shopify', blurb: 'Reporting, Meta ads, integrations' },
  { label: 'Real estate operators', href: '/contact?biz=real-estate', blurb: 'Underwriting models, investor CRM' },
];

export const solutionsByBuild = [
  { label: 'Lead-to-contract systems', href: '/law-firms' },
  { label: 'Profitability reporting', href: '/shopify' },
  { label: 'Integrations & automation', href: '/shopify#integrations' },
  { label: 'Business Audit', href: '/audit' },
];

export const footerNav = [
  { label: 'Law firms', href: '/law-firms' },
  { label: 'Contractors', href: '/contractors' },
  { label: 'Shopify stores', href: '/shopify' },
  { label: 'The Audit', href: '/audit' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'SMS Terms', href: '/terms#sms' },
];
