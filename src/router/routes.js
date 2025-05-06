import Home from '@/pages/AppHome.vue'
import About from '@/pages/AppAbout.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      navbar: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      navbar: true
    }
  }
]

export default routes
