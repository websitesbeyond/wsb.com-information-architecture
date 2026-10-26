// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
// Deployed to GitHub Pages as a *project* site, so it lives under a subpath.
// `site` + `base` make Astro emit correct absolute URLs for that subpath.
export default defineConfig({
  site: 'https://websites-beyond.github.io',
  base: '/wsb.com-information-architecture',
  // Assigned in ~/.config/caddy/Caddyfile -> https://ia-wireframes.localhost
  // Note the `base` above: the dev server serves this project under that
  // subpath, so the local URL is
  // https://ia-wireframes.localhost/wsb.com-information-architecture
  server: { port: 3006 },
  // Icons come from Iconify sets (lucide), so any icon can be swapped by name.
  integrations: [icon({ include: { lucide: ['*'] } })],
  vite: {
    plugins: [tailwindcss()],
  },
});
