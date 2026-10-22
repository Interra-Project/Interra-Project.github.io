// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CSS for Safari 14+ as well: Vite 8 targets Safari 16.4+ by default and rewrites
// max-width media queries into range syntax, which older Safari ignores.
const cssTarget = ['chrome87', 'edge88', 'firefox78', 'safari14'];

// Public site served at the apex domain (CNAME -> interra-project.org).
// No base path: the site lives at the domain root.
export default defineConfig({
  site: 'https://interra-project.org',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    build: { cssTarget },
  },
});
