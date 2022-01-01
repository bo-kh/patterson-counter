import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/patterson-counter/',
  build: {
    outDir: './docs',
  },
  plugins: [svelte()]
})
