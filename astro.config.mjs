import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Server-rendered so content edited in Sanity appears without a rebuild.
export default defineConfig({
  site: 'https://www.rasaashworth.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
