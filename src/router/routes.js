import AsEditor from "@/pages/AsEditor.vue"
import AsValidator from "@/pages/AsValidator.vue"
import WhatIsJedison from "@/pages/WhatIsJedison.vue"
import Playground from "@/pages/Playground.vue"
import MarkdownAnnotations from "@/pages/MarkdownAnnotations.vue"

export const routes = [
  {
    path: '/',
    name: 'What is Jedison?',
    component: WhatIsJedison,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/as-editor',
    name: 'As Editor',
    component: AsEditor,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/as-validator',
    name: 'As Validator',
    component: AsValidator,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground,
    meta: {
      navbar: true,
      group: 'Getting Started'
    }
  },
  {
    path: '/markdown-annotations',
    name: 'Markdown Annotations',
    component: MarkdownAnnotations,
    meta: {
      navbar: true,
      group: 'Features'
    }
  }
]

export default routes
