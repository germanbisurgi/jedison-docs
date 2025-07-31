<template>
  <div>
    <header>
      <h1>Horizontal Navigation Object Editor</h1>
      <p>Displays object properties with horizontal navigation, suitable for tab-based interfaces within a fieldset.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "nav-horizontal"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorNavHorizontal" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorNavHorizontal from '@/assets/html/object-editors-nav-horizontal.html?raw'

export default {
  name: 'ObjectEditorNavHorizontal',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Horizontal Navigation Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the horizontal navigation object editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorNavHorizontal
    }
  }
}
</script>