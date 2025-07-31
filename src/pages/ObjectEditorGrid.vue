<template>
  <div>
    <header>
      <h1>Grid Object Editor</h1>
      <p>Displays object properties using a grid system to position property editors within a fieldset layout.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "grid"</code></li>
        </ul>

        <h2>Grid Options for Properties</h2>
        <ul>
          <li><code>columns</code>: How many columns should the editor occupy</li>
          <li><code>offset</code>: How many columns should the editor be offset</li>
          <li><code>newRow</code>: Whether the editor should be put in a new row</li>
        </ul>

        <app-live-example :example="htmlObjectEditorGrid" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorGrid from '@/assets/html/object-editors-grid.html?raw'

export default {
  name: 'ObjectEditorGrid',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Grid Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the grid object editor format with grid-based layout',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorGrid
    }
  }
}
</script>