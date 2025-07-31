<template>
  <div>
    <header>
      <h1>Default Array Editor</h1>
      <p>The standard editor that appears for array types without specific formatting requirements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorDefault from '@/assets/html/array-editors-default.html?raw'

export default {
  name: 'ArrayEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorDefault
    }
  }
}
</script>