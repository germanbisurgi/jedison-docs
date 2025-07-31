<template>
  <div>
    <header>
      <h1>Radio Buttons Number Editor</h1>
      <p>Presents all available options as individual radio buttons in a vertical list, providing immediate visibility of all choices without interaction.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
          <li><code>"x-format": "radios"</code></li>
        </ul>

        <h2>Optional Properties</h2>
        <ul>
          <li><code>"x-enumTitles"</code> - Descriptive labels shown next to each radio button</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRadios" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorRadios from '@/assets/html/number-editors-radios.html?raw'

export default {
  name: 'NumberEditorRadios',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Radio Buttons Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the radio buttons number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorRadios
    }
  }
}
</script>