<template>
  <div>
    <header>
      <h1>Checkboxes Array Editor</h1>
      <p>Displays array values as checkboxes. Ideal for arrays containing unique string, number, or integer values.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"uniqueItems": true</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorCheckboxes" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorCheckboxes from '@/assets/html/array-editors-checkboxes.html?raw'

export default {
  name: 'ArrayEditorCheckboxes',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Checkboxes Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the checkboxes array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorCheckboxes
    }
  }
}
</script>