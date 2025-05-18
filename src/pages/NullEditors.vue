<template>
  <div>
    <header>
      <h1>Null Editors</h1>
      <p>Editor formats for null-type data with different display options</p>
    </header>

    <section>
      <article>
        <h2>Default Null Editor</h2>
        <p>The standard editor that appears for null types without specific formatting requirements.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "null"</code></li>
        </ul>

        <h3>Example</h3>
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
  name: 'NullEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Null Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for null editor formats',
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