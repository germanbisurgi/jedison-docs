import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

// Called once, globally (see App.vue) - every route's title/meta description
// used to be a hand-written useHead() call duplicated in each page component.
// Reactive via computed(), so it updates on client-side navigation and still
// prerenders the correct per-route tags during the SSG build.
export function usePageHead () {
  const route = useRoute()

  useHead({
    title: computed(() => route.meta.pageEntry?.title),
    meta: [
      {
        name: 'description',
        content: computed(() => route.meta.pageEntry?.description)
      }
    ]
  })
}
