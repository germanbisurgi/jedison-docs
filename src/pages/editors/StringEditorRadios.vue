<template>
  <div>
    <header>
      <h1>String Radios</h1>
      <p>Renders as many radio type inputs as values in the enum constraint. The radio labels can be customized with the enumTitles option.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorRadios" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorRadios from '@/assets/html/string-editors-radios.html?raw'

export default {
  name: 'StringEditorRadios',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Radios Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string radios editor format with enum constraints',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorRadios
    }
  }
}
</script>