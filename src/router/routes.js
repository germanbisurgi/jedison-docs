import GettingStarted from "@/pages/GettingStarted.vue"
import MinimalExample from "@/pages/MinimalExample.vue"
import MarkdownAnnotations from "@/pages/MarkdownAnnotations.vue"

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
    path: '/minimal-example',
    name: 'Minimal Example',
    component: MinimalExample,
    meta: {
      navbar: true
    }
  },
  {
    path: '/markdown-annotations',
    name: 'Markdown Annotations',
    component: MarkdownAnnotations,
    meta: {
      navbar: true
    }
  }
]

export default routes
