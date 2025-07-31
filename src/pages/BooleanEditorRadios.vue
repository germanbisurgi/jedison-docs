<template>
  <div>
    <header>
      <h1>Radio Buttons Boolean Editor</h1>
      <p>Renders two radio inputs for explicit true/false selection. Labels can be customized.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "radios"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorRadios" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorRadios from '@/assets/html/boolean-editors-radios.html?raw'

export default {
  name: 'BooleanEditorRadios',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Radio Buttons Boolean Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the radio buttons boolean editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorRadios
    }
  }
}
</script>