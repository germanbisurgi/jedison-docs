<template>
  <div>
    <header>
      <h1>Default Null Editor</h1>
      <p>The standard editor that appears for null types without specific formatting requirements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "null"</code></li>
        </ul>

        <h2>Example</h2>
        <pre><code>{
  "type": "null",
  "title": "Null"
}</code></pre>

        <app-live-example :example="htmlNullEditorsDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNullEditorsDefault from '@/assets/html/null-editors-default.html?raw'

export default {
  name: 'NullEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Null Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default null editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNullEditorsDefault
    }
  }
}
</script>