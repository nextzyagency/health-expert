// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://tu-dominio.com', // Descomenta y añade tu dominio real para SEO
  vite: {
    plugins: [tailwindcss()]
  }
});