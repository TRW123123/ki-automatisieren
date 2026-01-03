import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
// import netlify from '@astrojs/netlify'; // Adapter removed to fix build crsah

export default defineConfig({
  site: 'https://ki-automatisieren.de',
  output: 'static',
  // adapter: netlify(),
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false }), react(), sitemap()]
});