<template>
  <div>
    <header>
      <h1>String Jodit</h1>
      <p>Renders a WYSIWYG editor using Jodit.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "jodit"</code></li>
          <li>Jodit.js must be available (<code>window.Jodit</code>)</li>
          <li>Plugin: <a href="https://github.com/xdan/jodit" target="_blank" rel="noopener noreferrer">Jodit.js on GitHub</a></li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-jodit"</code> keyword</p>

        <app-live-example :example="htmlStringEditorJodit" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorJodit from '@/assets/html/string-editors-jodit.html?raw'

export default {
  name: 'StringEditorJodit',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Jodit Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string Jodit WYSIWYG editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorJodit
    }
  }
}
</script>