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
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format, entryName) => {
        return `peachui${entryName}.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
    }
  }
})
