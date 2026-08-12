import { pages } from '@/content/pages.js'

export const routes = pages.map((page) => ({
  path: page.path,
  name: page.routeName,
  component: page.component,
  meta: {
    navbar: page.navbar,
    group: page.group,
    ...(page.requiresPlugin ? { requiresPlugin: true } : {}),
    // lets SectionsPage.vue (and usePageHead) read this route's full
    // content/metadata entry without re-deriving it from the path
    pageEntry: page
  }
}))

export default routes
