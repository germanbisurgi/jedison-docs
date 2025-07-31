<template>
  <div>
    <header>
      <h1>Inline Checkboxes Array Editor</h1>
      <p>Horizontal layout version of the checkboxes editor for more compact displays.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"uniqueItems": true</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
          <li><code>"x-format": "checkboxes-inline"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorCheckboxesInline" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorCheckboxesInline from '@/assets/html/array-editors-checkboxes-inline.html?raw'

export default {
  name: 'ArrayEditorCheckboxesInline',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Inline Checkboxes Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the inline checkboxes array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorCheckboxesInline
    }
  }
}
</script>