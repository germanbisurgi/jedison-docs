<template>
  <div>
    <header>
      <h1>Tuple Array Editor</h1>
      <p>Renders a fixed-length array as a single-row table, with each prefixItem as a column.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "tuple"</code></li>
          <li><code>"prefixItems"</code> must be defined</li>
        </ul>

        <app-live-example :example="htmlArrayEditorTuple" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorTuple from '@/assets/html/array-editors-tuple.html?raw'

export default {
  name: 'ArrayEditorTuple',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Tuple Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the tuple array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorTuple
    }
  }
}
</script>