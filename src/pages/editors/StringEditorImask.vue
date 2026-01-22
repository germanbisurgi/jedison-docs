<template>
  <div>
    <header>
      <h1>String IMask</h1>
      <p>Renders a masked text input using IMask.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "imask"</code></li>
          <li>IMask.js must be available (<code>window.IMask</code>)</li>
          <li>Plugin: <a href="https://github.com/uNmAnNeR/imaskjs" target="_blank" rel="noopener noreferrer">IMask.js on GitHub</a></li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-imask"</code> keyword</p>

        <app-live-example :example="htmlStringEditorImask" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorImask from '@/assets/html/string-editors-imask.html?raw'

export default {
  name: 'StringEditorImask',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String IMask Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string IMask masked input editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorImask
    }
  }
}
</script>