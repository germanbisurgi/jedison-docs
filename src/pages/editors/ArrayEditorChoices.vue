<template>
  <div>
    <header>
      <h1>Choices Array Editor</h1>
      <p>Enhanced multi-select interface using the Choices.js library.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "choices"</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
          <li>Choices.js must be available (<code>window.Choices</code>)</li>
          <li>Plugin: <a href="https://github.com/Choices-js/Choices" target="_blank" rel="noopener noreferrer">Choices.js on GitHub</a></li>
        </ul>

        <app-live-example :example="htmlArrayEditorChoices" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorChoices from '@/assets/html/array-editors-choices.html?raw'

export default {
  name: 'ArrayEditorChoices',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Choices Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the Choices.js array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorChoices
    }
  }
}
</script>