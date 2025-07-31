<template>
  <div>
    <header>
      <h1>Vertical Navigation Object Editor</h1>
      <p>Displays object properties with vertical navigation, suitable for tabbed interfaces within a fieldset.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "nav-vertical"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorNavVertical" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorNavVertical from '@/assets/html/object-editors-nav-vertical.html?raw'

export default {
  name: 'ObjectEditorNavVertical',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Vertical Navigation Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the vertical navigation object editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorNavVertical
    }
  }
}
</script>