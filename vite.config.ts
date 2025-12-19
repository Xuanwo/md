import path from 'node:path'
import process from 'node:process'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: `/`,
    define: { process },
    envPrefix: [`VITE_`],
    plugins: [
      vue(),
      tailwindcss(),
      vueDevTools({
        launchEditor: env.VITE_LAUNCH_EDITOR ?? `code`,
      }),
      nodePolyfills({
        include: [`path`, `util`, `timers`, `stream`, `fs`],
        overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        // fs: 'memfs',
        },
      }),
      ...(process.env.ANALYZE === `true` ? [visualizer({ emitFile: true, filename: `stats.html` }) as any] : []),
      AutoImport({
        imports: [`vue`, `pinia`, `@vueuse/core`],
        dirs: [`./src/stores`, `./src/utils/toast`, `./src/composables`],
      }),
      Components({
        resolvers: [],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, `./src`),
        '@md/core': path.resolve(__dirname, `./src/md/core`),
        '@md/shared': path.resolve(__dirname, `./src/md/shared`),
      },
    },
    css: { devSourcemap: true },
    build: {
      rollupOptions: {
        external: [`mermaid`],
        output: {
          chunkFileNames: `static/js/md-[name]-[hash].js`,
          entryFileNames: `static/js/md-[name]-[hash].js`,
          assetFileNames: `static/[ext]/md-[name]-[hash].[ext]`,
          globals: { mermaid: `mermaid` },
          manualChunks(id) {
            if (id.includes(`node_modules`)) {
              if (id.includes(`katex`))
                return `katex`
              if (id.includes(`highlight.js`))
                return `hljs`
              if (id.includes(`codemirror`))
                return `codemirror`
              if (id.includes(`prettier`))
                return `prettier`
              const pkg = id
                .split(`node_modules/`)[1]
                .split(`/`)[0]
                .replace(`@`, `npm_`)
              return `vendor_${pkg}`
            }
          },
        },
      },
    },
  }
})
