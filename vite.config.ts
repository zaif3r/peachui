import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript({
      check: false,
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        }
      },
      exclude: [
        'vite.config.ts',
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      name: 'PeachUI',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        nuxt: resolve(__dirname, 'src/nuxt.ts'),
      },
      fileName: (format, entryName) => {
        const entry = entryName == "index"? "": `-${entryName}`
        return `peachui${entry}.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
    }
  }
})
