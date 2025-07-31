<template>
  <div>
    <header>
      <h1>Table Array Editor</h1>
      <p>Renders array items in a tabular format, with each object property in its own column.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTable" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorTable from '@/assets/html/array-editors-table.html?raw'

export default {
  name: 'ArrayEditorTable',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Table Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the table array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorTable
    }
  }
}
</script>