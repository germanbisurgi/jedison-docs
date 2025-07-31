<template>
  <div>
    <header>
      <h1>Horizontal Navigation Array Editor</h1>
      <p>Horizontal version of the navigation editor for different layout needs.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "nav-horizontal"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorNavHorizontal" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorNavHorizontal from '@/assets/html/array-editors-nav-horizontal.html?raw'

export default {
  name: 'ArrayEditorNavHorizontal',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Horizontal Navigation Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the horizontal navigation array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorNavHorizontal
    }
  }
}
</script>