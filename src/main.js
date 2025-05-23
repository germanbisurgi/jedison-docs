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
    base: process.env.NODE_ENV === 'production' ? '/jedison-docs/' : '/'
  },
  async ({ app, router, routes, isClient, initialState }) => {
    app.use(router)
    app.use(i18n)
    app.use(store)

    if (isClient) {
      // Only import Bootstrap JS in the browser
      import('bootstrap/dist/js/bootstrap.bundle.js')
    }

    console.log('routes', routes)
    console.log('initialState', initialState)
  }
)