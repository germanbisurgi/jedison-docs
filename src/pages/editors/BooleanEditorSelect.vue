<template>
  <div>
    <header>
      <h1>Select Dropdown Boolean Editor</h1>
      <p>Renders a select input with true/false options. Option labels can be customized.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "select"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorSelect" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorSelect from '@/assets/html/boolean-editors-select.html?raw'

export default {
  name: 'BooleanEditorSelect',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Select Dropdown Boolean Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the select dropdown boolean editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorSelect
    }
  }
}
</script>