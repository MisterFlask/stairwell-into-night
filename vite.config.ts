import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages - uses repo name
  base: '/stairwell-into-night/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
