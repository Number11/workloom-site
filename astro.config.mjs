// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://workloom.ai',
  adapter: cloudflare({ imageService: 'compile' }),
  session: false, // no sessions → no KV namespace needed on deploy
  vite: { plugins: [tailwindcss()] },
});
