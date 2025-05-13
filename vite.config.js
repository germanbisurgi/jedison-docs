import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/jedison-docs/' : '/'

  return {
    plugins: [vue()],
    base,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      outDir: resolve(__dirname, 'docs'),
    },
    server: {
      port: 8080,
      strictPort: true
    },
    preview: {
      port: 8081,
      strictPort: true
    }
  }
})