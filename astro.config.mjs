// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public site served at the apex domain (CNAME -> interra-project.org).
// No base path: the site lives at the domain root.
export default defineConfig({
  site: 'https://interra-project.org',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
