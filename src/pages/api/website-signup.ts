// Handler for the $799 website offer pages (/799-website/*).
// The pages call this with JSON at each step of the signup; it forwards the
// submission to the same GoHighLevel inbound webhook the rest of the site uses
// (secret GHL_WEBHOOK_URL, set in Cloudflare: Worker → Settings → Variables and Secrets).
// Answers JSON, not a redirect, so the page can show an error and keep the lead's
// answers on screen. Dependency-free on purpose, like /api/lead.

import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const STEPS = new Set(['lead', 'details', 'lead_manager', 'video']);
const FIELDS = [
  'business_type', 'service_cities', 'services', 'license_number', 'years_in_business',
  'has_domain', 'social_link', 'lead_manager_plan', 'owner_video',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid',
];

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as Record<string, unknown>;
    const get = (k: string) => String(data?.[k] ?? '').trim().slice(0, 2000);

    // Honeypot: accept and drop.
    if (get('company_site')) return json({ ok: true });

    const step = get('step');
    const name = get('full_name');
    const email = get('email');
    if (!STEPS.has(step) || !name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ ok: false, error: 'invalid' }, 400);
    }

    // Same top-level keys as /api/lead (form, name, email, phone, company, sms_consent)
    // so one GoHighLevel workflow can map both.
    const payload: Record<string, unknown> = {
      form: '799-website',
      step,
      name,
      email,
      phone: get('phone'),
      company: get('business_name'),
      sms_consent: get('sms_consent') === 'yes',
      submitted_at: new Date().toISOString(),
      page: request.headers.get('referer') ?? '',
      user_agent: request.headers.get('user-agent') ?? '',
      ip: request.headers.get('cf-connecting-ip') ?? '',
    };
    for (const k of FIELDS) payload[k] = get(k);

    const webhook = (env as unknown as { GHL_WEBHOOK_URL?: string }).GHL_WEBHOOK_URL;
    if (!webhook) {
      // Paid traffic lands here, so never pretend a lead was saved.
      console.error('799-website lead NOT forwarded (no GHL_WEBHOOK_URL set)', JSON.stringify(payload));
      return json({ ok: false, error: 'not_connected' }, 503);
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('GHL webhook failed', res.status, await res.text().catch(() => ''), JSON.stringify(payload));
      return json({ ok: false, error: 'forward_failed' }, 502);
    }
    console.log('799-website lead forwarded', step, email);
    return json({ ok: true });
  } catch (err) {
    console.error('website-signup handler error', err instanceof Error ? err.message : String(err));
    return json({ ok: false, error: 'server' }, 500);
  }
};

export const GET: APIRoute = () => new Response(null, { status: 303, headers: { Location: '/799-website/' } });
