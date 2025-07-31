<template>
  <div>
    <header>
      <h1>String Quill</h1>
      <p>Renders a WYSIWYG editor using Quill.js.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "quill"</code></li>
          <li>Quill.js must be available (<code>window.Quill</code>)</li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-quill"</code> keyword</p>

        <app-live-example :example="htmlStringEditorQuill" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorQuill from '@/assets/html/string-editors-quill.html?raw'

export default {
  name: 'StringEditorQuill',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Quill Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string Quill WYSIWYG editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorQuill
    }
  }
}
</script>