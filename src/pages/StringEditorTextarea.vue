<template>
  <div>
    <header>
      <h1>String Textarea</h1>
      <p>Renders a multi-line textarea input for longer string content.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "textarea"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorTextarea" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorTextarea from '@/assets/html/string-editors-textarea.html?raw'

export default {
  name: 'StringEditorTextarea',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Textarea Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string textarea editor format for multi-line text input',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorTextarea
    }
  }
}
</script>