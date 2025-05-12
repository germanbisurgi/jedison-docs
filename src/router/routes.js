import GettingStarted from "@/pages/GettingStarted.vue"
import MinimalExample from "@/pages/MinimalExample.vue"

export const routes = [
  {
    path: '/',
    name: 'Getting Started',
    component: GettingStarted,
    meta: {
      navbar: true
    }
  },
  {
    path: '/example',
    name: 'Minimal Example',
    component: MinimalExample,
    meta: {
      navbar: true
    }
  }
]

export default routes
