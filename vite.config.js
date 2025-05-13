import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: resolve(__dirname, 'docs')
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8081,
    strictPort: true
  }
})