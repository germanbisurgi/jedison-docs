<template>
  <div>
    <header>
      <h1>Vertical Navigation Array Editor</h1>
      <p>Displays array items as a vertical menu, suitable for tabbed interfaces.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "nav-vertical"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorNavVertical" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorNavVertical from '@/assets/html/array-editors-nav-vertical.html?raw'

export default {
  name: 'ArrayEditorNavVertical',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Vertical Navigation Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the vertical navigation array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorNavVertical
    }
  }
}
</script>