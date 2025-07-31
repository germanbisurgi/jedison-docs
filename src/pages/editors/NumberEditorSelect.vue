<template>
  <div>
    <header>
      <h1>Select Number Editor</h1>
      <p>Displays a dropdown select box populated with the values from the <code>enum</code> array. Ideal when users need to choose from predefined numeric options.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
        </ul>

        <h2>Optional Properties</h2>
        <ul>
          <li><code>"x-enumTitles"</code> - Human-readable labels that replace the numeric values in the dropdown</li>
        </ul>

        <app-live-example :example="htmlNumberEditorSelect" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorSelect from '@/assets/html/number-editors-select.html?raw'

export default {
  name: 'NumberEditorSelect',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Select Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the select dropdown number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorSelect
    }
  }
}
</script>