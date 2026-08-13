/* global process */

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router/routes'
import i18n from './i18n'
import store from './store'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: process.env.NODE_ENV === 'production' ? '/jedison-docs/' : '/',
    // The page content scrolls inside <main class="app-content">, not the
    // window/body, so vue-router's built-in `el` scrollBehavior (which only
    // scrolls the window) can't reach it - the target element has to be
    // scrolled into view within that container manually instead.
    scrollBehavior (to) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          const container = document.querySelector('.app-content')
          const target = to.hash && document.querySelector(to.hash)

          if (container && target) {
            const top = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
            container.scrollTo({ top, behavior: 'smooth' })
          } else if (container) {
            container.scrollTo({ top: 0 })
          }

          resolve(false)
        })
      })
    }
  },
  async ({ app, router, isClient }) => {
    app.use(router)
    app.use(i18n)
    app.use(store)

    if (isClient) {
      // Only import Bootstrap JS in the browser
      import('bootstrap/dist/js/bootstrap.bundle.js')
    }
  }
)