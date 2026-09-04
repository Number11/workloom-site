# workloom-site

WorkLoom.ai marketing site. Astro + Tailwind v4, deployed to Cloudflare Workers (static assets + one form handler).

- Business facts (name, email, prices, proof numbers): `src/data/site.ts` — edit on GitHub with the pencil icon.
- Pages: `src/pages/*.astro`. Form handler: `src/pages/api/lead.ts`.
- Brand tokens: `src/styles/global.css` (`@theme` block). Canonical values in the project style guide.
- Cloudflare build: `npm run build` · deploy: `npx wrangler deploy` · branch `main`.
- Secrets (`GHL_WEBHOOK_URL`) live in Cloudflare → Worker → Settings → Variables and Secrets. Never in this repo.
