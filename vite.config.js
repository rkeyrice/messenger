import { defineConfig } from 'vite';

import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  plugins: [handlebars()],
  server: {
    port: 3000,
  },
});
