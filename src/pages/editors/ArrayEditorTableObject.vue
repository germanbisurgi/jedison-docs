<template>
  <div>
    <header>
      <h1>Table Object Array Editor</h1>
      <p>Renders array items in a tabular format</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table-object"</code></li>
          <li><code>"items": { "type": "object" }</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTableObject" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorTableObject from '@/assets/html/array-editors-table-object.html?raw'

export default {
  name: 'ArrayEditorTableObject',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Table Object Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the table object array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorTableObject
    }
  }
}
</script>