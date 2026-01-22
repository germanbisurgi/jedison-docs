<template>
  <div>
    <header>
      <h1>String Awesomplete</h1>
      <p>Renders an autocomplete featured text input using Awesomplete.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "awesomplete"</code></li>
          <li>Awesomplete.js must be available (<code>window.Awesomplete</code>)</li>
          <li>Plugin: <a href="https://github.com/LeaVerou/awesomplete" target="_blank" rel="noopener noreferrer">Awesomplete.js on GitHub</a></li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-awesomplete"</code> keyword</p>

        <app-live-example :example="htmlStringEditorAwesomplete" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorAwesomplete from '@/assets/html/string-editors-awesomplete.html?raw'

export default {
  name: 'StringEditorAwesomplete',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Awesomplete Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string Awesomplete autocomplete editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorAwesomplete
    }
  }
}
</script>