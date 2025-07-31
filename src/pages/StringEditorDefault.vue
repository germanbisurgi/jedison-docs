<template>
  <div>
    <header>
      <h1>Default String Editor</h1>
      <p>The standard text input that appears for string types without specific formatting requirements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorDefault from '@/assets/html/string-editors-default.html?raw'

export default {
  name: 'StringEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default String Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default string editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorDefault
    }
  }
}
</script>