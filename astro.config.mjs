// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nextzyagency.github.io',
  base: '/health-expert',
  vite: {
    plugins: [tailwindcss()]
  }
});