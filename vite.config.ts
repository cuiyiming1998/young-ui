import { defineConfig } from 'vite'
import * as path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/styles/index.less')}"`,
        },
        javascriptEnabled: true
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'young-ui',
      fileName: format => `young-ui.${format}.js`,
    }
  },
  worker: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  server: {
    host: true,
    port: 9527,
    watch: {
      ignored: ["**/node_modules", "**/auto-imports.d.ts", "**/components.d.ts"]
    }
  }
})
