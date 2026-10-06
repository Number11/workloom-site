// Copy for the three audience pages. Edit on GitHub with the pencil icon.
// Each page is built from this by src/components/AudiencePage.astro.

export type Audience = {
  slug: string;
  title: string;            // <title>
  description: string;      // meta description
  eyebrow: string;
  headline: string;         // the question
  sub: string;
  visual: 'sms' | 'sku' | 'estimate';
  stats: { num: string; label: string }[];
  statsNote?: string;
  getTitle: string;
  gets: { n: string; title: string; body: string }[];
  flowTitle?: string;
  flow?: { steps: { label: string; tool: string }[]; handoffs: { label: string; grade: 'ok' | 'warn' | 'bad' }[]; caption: string };
  steps: { n: string; title: string; meta?: string; body: string }[];
  stepsNote?: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
  // homepage tile
  tileTitle: string;
  tileBlurb: string;
  tileLink: string;
};

export const audiences: Record<string, Audience> = {
  'law-firms': {
    slug: 'law-firms',
    title: 'SMS intake for law firms',
    description: 'Never miss an inbound lead. SMS intake that answers in seconds, scores the lead, screens out the wrong fit, and walks the right one to a signed engagement.',
    eyebrow: 'For law firms · personal injury first',
    headline: 'Every call you miss is a case you didn\'t get.',
    sub: 'An intake system that answers every call, text, and web form in seconds — day or night — asks the qualifying questions, screens out the ones that don\'t fit, and books the ones that do. The attorney sees scored, booked consults. Nothing else.',
    visual: 'sms',
    stats: [
      { num: '<10s', label: 'from missed call to first text, 24/7' },
      { num: '4', label: 'qualifying questions, one at a time, no legal advice' },
      { num: '0', label: 'leads waiting on a callback' },
    ],
    getTitle: 'What gets installed',
    gets: [
      { n: '01 · Missed-call text-back', title: 'The phone rings out. The text goes out.', body: 'In hours or after hours, every unanswered call gets a reply within seconds from the firm\'s own number. Nobody leaves a voicemail and calls the next firm.' },
      { n: '02 · Qualifying conversation', title: 'Four questions, in plain English.', body: 'What happened, when, were you at fault, do you already have a lawyer. One question at a time, scripted by the firm, never legal advice. Works by text, web chat, and the site form.' },
      { n: '03 · Scoring and screening', title: 'The wrong cases never reach the attorney.', body: 'Each answer scores against the firm\'s criteria: practice area, statute of limitations, fault, representation, jurisdiction. Out-of-criteria leads get a polite decline and a referral line.' },
      { n: '04 · Booking and reminders', title: 'Qualified leads pick a time. Then they show up.', body: 'The conversation offers the two soonest consult slots and books one. Confirmation, 24-hour and 2-hour reminders, no-show recovery.' },
      { n: '05 · Engagement to signed', title: 'From consult to e-signature without a gap.', body: 'Engagement agreement sent by text and email, nudged until signed, then a welcome message. The attorney gets a task only when a human decision is needed.' },
      { n: '06 · The pipeline', title: 'Every lead, its score, and its transcript in one view.', body: 'New → Qualifying → Qualified → Consult booked → Signed, plus Screened out with the reason. Built in GoHighLevel on a number the firm owns.' },
    ],
    flowTitle: 'What one inbound lead touches today',
    flow: {
      steps: [{ label: 'Call', tool: 'phone' }, { label: 'Voicemail', tool: 'nobody listens' }, { label: 'Callback', tool: 'next day' }, { label: 'Intake', tool: 'paralegal' }, { label: 'Consult', tool: 'calendar' }, { label: 'Engagement', tool: 'email + PDF' }],
      handoffs: [{ label: 'missed', grade: 'bad' }, { label: '18–24 hrs', grade: 'bad' }, { label: 'phone tag', grade: 'warn' }, { label: 'manual', grade: 'warn' }, { label: 'unsigned', grade: 'bad' }],
      caption: 'Each red handoff is where a lead goes to the firm that answered first. The system above replaces all five.',
    },
    steps: [
      { n: 'Step 1', title: 'Setup', meta: 'about 2 weeks', body: 'Number and carrier registration, your screening criteria, your scripts, calendar, engagement template. You review every message before it goes live.' },
      { n: 'Step 2', title: 'Launch', meta: 'one afternoon', body: 'Forward the main line, install the chat widget and form, run live tests from a few phones. Same-day go-live.' },
      { n: 'Step 3', title: 'Operate', meta: 'monthly', body: 'Monitoring, script tuning from real conversations, a monthly report: leads in, qualified, booked, signed.' },
    ],
    stepsNote: 'Pricing is quoted after a 30-minute call about your intake volume and criteria. If you\'re not sure this is the first thing to fix, start with the audit.',
    faq: [
      { q: 'Does the bot give legal advice?', a: 'No. It asks the firm\'s qualifying questions, confirms a consult, and sends reminders. It is scripted to say "the attorney will explain that" for anything else, and the firm reviews every script before launch.' },
      { q: 'Is this compliant with bar advertising rules?', a: 'The messages are the firm\'s own words, sent from the firm\'s own number, to people who contacted the firm first. Your bar\'s rules on solicitation and disclaimers vary by state; you review and approve all copy, and a disclaimer line is included where your state requires one.' },
      { q: 'What happens to leads that don\'t fit?', a: 'They get a courteous decline by text with a referral line you choose, and they land in a "Screened out" stage with the reason, so you can review the rule if it\'s screening too hard.' },
      { q: 'Does it work with Clio or MyCase?', a: 'The intake runs in GoHighLevel. Qualified, signed leads can be pushed to your case management system by integration; that\'s scoped on the call.' },
      { q: 'Who owns the phone number and the data?', a: 'The firm. The number, the contacts, and the transcripts are in an account in the firm\'s name.' },
    ],
    ctaTitle: 'Text the demo, then let\'s talk.',
    ctaBody: 'The fastest way to understand it is to be the lead. Call the demo number, don\'t leave a voicemail, and watch what happens.',
    ctaLabel: 'Book a call about intake',
    tileTitle: 'Law firms',
    tileBlurb: 'Never miss an inbound lead. SMS intake that answers in seconds, scores the lead, screens out the wrong fit, and walks the right one to a signed engagement.',
    tileLink: 'SMS intake system →',
  },

  'contractors': {
    slug: 'contractors',
    title: 'Lead-to-contract system for contractors',
    description: 'Marketing that fills the pipeline, then email and SMS follow-up that turns estimates into signed jobs.',
    eyebrow: 'For contractors & builders',
    headline: 'Estimates you never hear back on are the most expensive marketing you do.',
    sub: 'You paid to get the lead, drove to the site, and wrote the estimate. Then nothing. This system follows up every estimate by text and email until it\'s signed or closed, and answers every new inquiry in seconds so the next one doesn\'t go cold either.',
    visual: 'estimate',
    stats: [
      { num: '<10s', label: 'reply to any missed call or web form' },
      { num: '5', label: 'follow-ups on every estimate, automatically' },
      { num: '1', label: 'pipeline: inquiry → site visit → estimate → signed' },
    ],
    getTitle: 'What gets installed',
    gets: [
      { n: '01 · Capture', title: 'Every inquiry answered before you can.', body: 'Website form, missed-call text-back, and chat widget all reply in seconds, ask what the project is, and offer a site-visit time.' },
      { n: '02 · Estimate follow-up', title: 'Five touches, zero effort.', body: 'The day the estimate goes out, a sequence starts: text, email, text, call task, last-chance text. Stops the moment they reply or sign.' },
      { n: '03 · Pipeline', title: 'See every job by stage.', body: 'Inquiry, site visit, estimate sent, signed, in progress, done. Dollar value per stage so you know what\'s in the pipe.' },
      { n: '04 · Reviews', title: 'Ask at the right moment.', body: 'A review request goes out when the job closes, with the link to your Google profile. Not before.' },
      { n: '05 · Marketing', title: 'Leads measured by signed jobs, not clicks.', body: 'Local paid campaigns run against cost per signed job. Spend goes where contracts come from.' },
      { n: '06 · LotCheck (casita & ADU builders)', title: 'Qualify the lot before the site visit.', body: 'A lot evaluator on your site that checks the parcel and sends you a scored lead. Built for Phoenix-area ADU builders.' },
    ],
    flowTitle: 'Where estimates die today',
    flow: {
      steps: [{ label: 'Inquiry', tool: 'form / call' }, { label: 'Site visit', tool: 'calendar' }, { label: 'Estimate', tool: 'PDF' }, { label: 'Follow-up', tool: 'when you remember' }, { label: 'Signed', tool: 'paper' }],
      handoffs: [{ label: 'slow reply', grade: 'bad' }, { label: 'no-shows', grade: 'warn' }, { label: 'silence', grade: 'bad' }, { label: 'lost', grade: 'bad' }],
      caption: 'Most contractors lose estimates in the follow-up gap, not the quality of the quote. The system removes the gap.',
    },
    steps: [
      { n: 'Step 1', title: 'Setup', meta: 'about 2 weeks', body: 'Number, forms, pipeline stages, follow-up copy in your voice, calendar. You approve every message.' },
      { n: 'Step 2', title: 'Launch', meta: 'one afternoon', body: 'Forward the line, install the form and widget, test from your own phone.' },
      { n: 'Step 3', title: 'Operate', meta: 'monthly', body: 'Monitoring, copy tuning, campaign management if you add marketing, and a monthly report by stage.' },
    ],
    stepsNote: 'Pricing is quoted after a 30-minute call about your volume and trades. Not sure this is the first thing to fix? Start with the audit.',
    faq: [
      { q: 'I already use Jobber / Housecall Pro / Buildertrend. Does this replace it?', a: 'No. It sits in front of it: capture, follow-up, and booking. Signed jobs can be pushed into the tool you run the work in.' },
      { q: 'Will customers find automated texts annoying?', a: 'They\'re short, in your voice, and they stop the moment someone replies. A text the day after an estimate is expected; silence for two weeks is what loses the job.' },
      { q: 'Do I have to run ads?', a: 'No. The follow-up system works on the leads you already get. Marketing is a separate piece we add only when the follow-up is proven.' },
    ],
    ctaTitle: 'Stop losing the estimates you already wrote.',
    ctaBody: 'Thirty minutes about your trades, your volume, and where jobs go quiet. I\'ll tell you what the system would do for you and what it would cost.',
    ctaLabel: 'Book a call',
    tileTitle: 'Contractors & builders',
    tileBlurb: 'Marketing that fills the pipeline, then email and SMS follow-up that turns estimates into signed jobs.',
    tileLink: 'Lead-to-contract system →',
  },

  'shopify': {
    slug: 'shopify',
    title: 'Profitability reporting, Meta ads, and integrations for Shopify stores',
    description: 'Contribution margin by SKU, Meta ads run against margin, and the Zapier or n8n integrations your sales process needs.',
    eyebrow: 'For Shopify stores · $1–10M revenue',
    headline: 'You know your revenue. Do you know which orders made money?',
    sub: 'Reporting that shows contribution margin by SKU after shipping and fees, ad spend managed against that margin instead of ROAS alone, and the integrations between Shopify and everything else that nobody wants to touch.',
    visual: 'sku',
    stats: [
      { num: '$5,460', label: 'weekly ad spend where ROAS broke — found in the first report' },
      { num: '16 → 1', label: 'Zaps replaced by one mapping table' },
      { num: '117', label: 'email sequences audited and cleaned up in five phases' },
    ],
    getTitle: 'Three things I build for Shopify stores',
    gets: [
      { n: '01 · Profitability reporting', title: 'Contribution margin by SKU, every week.', body: 'Shopify, Meta, Google, and fulfillment data in one report: margin after shipping and fees by product, ROAS by spend level, subscription cohorts. One decision at the top of every report.' },
      { n: '02 · Meta ads run against margin', title: 'Spend to the ceiling, not past it.', body: 'Campaigns managed on contribution margin per order. SKUs that lose money after fulfillment never go in prospecting. Weekly spend-level analysis finds where the next $1,000 stops paying back.' },
      { n: '03 · Integrations', title: 'The sales process your tools don\'t cover.', body: 'Order → tag → email flow → course access → fulfillment sync, built in Zapier or n8n on mapping tables with error alerts. Gift purchases, bundles, subscriptions, and the edge cases your apps can\'t handle.' },
    ],
    flowTitle: 'What one order touches',
    flow: {
      steps: [{ label: 'Order', tool: 'Shopify' }, { label: 'Tag', tool: 'Zapier' }, { label: 'Email flow', tool: 'Kit' }, { label: 'Fulfillment', tool: 'ShipHero' }, { label: 'Course access', tool: 'Thinkific' }, { label: 'Ad pixel', tool: 'Meta / Google' }, { label: 'Report', tool: 'Sheets' }],
      handoffs: [{ label: 'silent fail', grade: 'bad' }, { label: 'ok', grade: 'ok' }, { label: 'manual', grade: 'bad' }, { label: '16 Zaps', grade: 'warn' }, { label: 'no margin data', grade: 'warn' }, { label: 'half a day', grade: 'bad' }],
      caption: 'Seven tools, six handoffs, nobody watching the gaps. Each one gets graded, with the cost in hours and dollars.',
    },
    steps: [
      { n: 'Step 1', title: 'Audit or scope call', meta: 'audit $2,500 · 1–2 weeks', body: 'Read-only access to Shopify, your email platform, ad accounts, and Zapier. You get the plan, or if you already know which piece you need, a scope.' },
      { n: 'Step 2', title: 'Build', meta: 'fixed scope', body: 'Reporting pipeline, ad account restructure, or the integration rebuild — whichever comes first.' },
      { n: 'Step 3', title: 'Operate', meta: 'monthly', body: 'Weekly report, ad management, automation maintenance. One person, one invoice.' },
    ],
    faq: [
      { q: 'Do you need admin access to Shopify?', a: 'Read-only for the audit and reporting. Collaborator access with specific permissions for integration builds.' },
      { q: 'We\'re on Klaviyo, not Kit. Does that matter?', a: 'No. Reporting and integrations work with either; the mapping-table pattern is platform-independent.' },
      { q: 'Can you just run our Meta ads?', a: 'Yes, once there\'s a margin report to run them against. Ads without margin data is how stores scale losses.' },
    ],
    ctaTitle: 'Find out which orders make money.',
    ctaBody: 'Two weeks, $2,500, and a plan you keep either way. Or if you know which piece you need, book the call and we\'ll scope it.',
    ctaLabel: 'Book a call',
    tileTitle: 'Shopify stores',
    tileBlurb: 'Profitability reporting by SKU, Meta ads run against margin, and the Zapier or n8n integrations your sales process needs.',
    tileLink: 'Reporting, ads & integrations →',
  },
};
