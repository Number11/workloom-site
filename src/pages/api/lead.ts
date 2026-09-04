// Form handler for every lead form on the site.
// Forwards the submission to GoHighLevel's inbound webhook (secret GHL_WEBHOOK_URL,
// set in Cloudflare: Worker → Settings → Variables and Secrets) and redirects to the
// form's /thanks/* page. Dependency-free on purpose — many npm libs break on Workers.

import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const ALLOWED_REDIRECTS = new Set(['/thanks/audit', '/thanks/real-estate']);

function redirect(to: string, status = 303) {
  return new Response(null, { status, headers: { Location: to } });
}

export const POST: APIRoute = async ({ request }) => {
  let back = '/contact';
  try {
    const form = await request.formData();
    const get = (k: string) => String(form.get(k) ?? '').trim();
    const formName = get('form') || 'audit';
    back = formName === 'real-estate' ? '/real-estate/contact' : '/contact';
    const redirectTo = ALLOWED_REDIRECTS.has(get('redirect')) ? get('redirect') : '/thanks/audit';

    // Honeypot: silently accept and drop.
    if (get('website_url')) return redirect(redirectTo);

    const name = get('name');
    const email = get('email');
    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return redirect(`${back}?error=1`);
    }

    const payload: Record<string, unknown> = {
      form: formName,
      name,
      email,
      phone: get('phone'),
      company: get('company'),
      revenue: get('revenue'),
      platforms: form.getAll('platforms').map(String),
      deal_type: get('deal_type'),
      stage: get('stage'),
      problem: get('problem'),
      sms_consent: get('sms_consent') === 'yes',
      submitted_at: new Date().toISOString(),
      page: request.headers.get('referer') ?? '',
      user_agent: request.headers.get('user-agent') ?? '',
      ip: request.headers.get('cf-connecting-ip') ?? '',
    };

    const webhook = (env as unknown as { GHL_WEBHOOK_URL?: string }).GHL_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) console.error('GHL webhook failed', res.status, await res.text().catch(() => ''));
      else console.log('lead forwarded', formName, email);
    } else {
      // Phase 1: no CRM yet. Log so it shows in Cloudflare Observability.
      console.log('lead received (no GHL_WEBHOOK_URL set)', JSON.stringify(payload));
    }

    return redirect(redirectTo);
  } catch (err) {
    console.error('lead handler error', err instanceof Error ? err.message : String(err));
    return redirect(`${back}?error=1`);
  }
};

export const GET: APIRoute = () => redirect('/contact');
