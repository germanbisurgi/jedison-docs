<template>
  <div>
    <header>
      <h1>IMask Number Editor</h1>
      <p>Renders a masked text input using IMask.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code></li>
          <li><code>"x-format": "imask"</code></li>
          <li>IMask.js must be available (<code>window.IMask</code>)</li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-imask"</code> keyword</p>

        <app-live-example :example="htmlNumberEditorImask" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorImask from '@/assets/html/number-editors-imask.html?raw'

export default {
  name: 'NumberEditorImask',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - IMask Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the IMask number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorImask
    }
  }
}
</script>