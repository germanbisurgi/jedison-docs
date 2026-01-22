<template>
  <div>
    <header>
      <h1>String Flatpickr</h1>
      <p>Renders a datetime picker using flatpickr.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-flatpickr": { ... }</code></li>
          <li>flatpickr.js must be available (<code>window.flatpickr</code>)</li>
          <li>Plugin: <a href="https://github.com/flatpickr/flatpickr" target="_blank" rel="noopener noreferrer">Flatpickr.js on GitHub</a></li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-flatpickr"</code> keyword</p>

        <app-live-example :example="htmlStringEditorFlatpickr" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorFlatpickr from '@/assets/html/string-editors-flatpickr.html?raw'

export default {
  name: 'StringEditorFlatpickr',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Flatpickr Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string Flatpickr datetime picker editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorFlatpickr
    }
  }
}
</script>