<template>
  <div>
    <header>
      <h1>Checkbox Boolean Editor</h1>
      <p>Renders a single checkbox input for boolean values.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "checkbox"</code></li>
        </ul>

        <app-live-example :example="htmlBooleanEditorCheckbox" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorCheckbox from '@/assets/html/boolean-editors-checkbox.html?raw'

export default {
  name: 'BooleanEditorCheckbox',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Checkbox Boolean Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the checkbox boolean editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorCheckbox
    }
  }
}
</script>