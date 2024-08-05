/// <reference types="vitest" />

import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import html_minify from './plugins/vite-plugin-devtuls-html-minify'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
  test: {
    clearMocks: true,
    include: ['src/**/*.test.?(c|m)[jt]s?(x)'],
    outputFile: {
      html: 'vitest-report/index.html',
    },
    reporters: process.env.CI ? 'default' : ['default', 'html'],
    coverage: {
      enabled: true,
      include: ['src/lib/**/*.{js,ts}'],
    },
  },
  plugins: [
    react(),
    html_minify(),
    pwa({
      injectRegister: 'script-defer',
      pwaAssets: { injectThemeColor: false },
      manifest: {
        name: 'Devtuls',
        short_name: 'Devtuls',
        description: 'Collection of awesome developer tools available as a progressive web application.',
        background_color: 'transparent',
        theme_color: 'transparent',
        lang: 'en',
        scope: '/',
        display: 'standalone',
        dir: 'ltr',
        start_url: '/?standalone=true',
        orientation: 'portrait-primary',
        display_override: ['window-controls-overlay'],
        screenshots: [],
        shortcuts: [],
        protocol_handlers: [],
      },
    }),
  ],
})
