import { resolve } from "path"
import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';

import { svelte } from '@sveltejs/vite-plugin-svelte';

const production = !process.env.ROLLUP_WATCH;

export default defineConfig({
  root: "src",
  publicDir: "../public",
  server: { port: 8080 },
  build: {
    outDir: "../build",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src")
    },
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
        postcss: {
          plugins: [
            require('tailwindcss')(),
            require('autoprefixer')(),
          ],
        },
      }),
    })
  ]
})