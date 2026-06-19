import { defineConfig } from 'astro/config';

// Static site. Update `site` to the final domain once known for correct
// canonical URLs and sitemap generation.
export default defineConfig({
  site: 'https://rasaashworth.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
