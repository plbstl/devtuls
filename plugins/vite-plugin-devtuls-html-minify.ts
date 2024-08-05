import { minify } from 'html-minifier-terser'
import type { Plugin } from 'vite'

export default function html_minify(): Plugin {
  return {
    name: 'vite-plugin-devtuls-html-minify',
    apply: 'build',
    enforce: 'post',
    generateBundle: async (_, bundles) => {
      for (const bundle of Object.values(bundles)) {
        if (bundle.type === 'asset' && bundle.fileName.endsWith('.html')) {
          bundle.source = await minify(bundle.source.toString(), {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
          })
        }
      }
    },
  }
}
