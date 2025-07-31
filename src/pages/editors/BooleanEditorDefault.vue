<template>
  <div>
    <header>
      <h1>Default Boolean Editor</h1>
      <p>The standard editor that appears for boolean types without specific formatting requirements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "boolean"</code></li>
        </ul>

        <app-live-example :example="htmlBooleanEditorDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorDefault from '@/assets/html/boolean-editors-default.html?raw'

export default {
  name: 'BooleanEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Boolean Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default boolean editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorDefault
    }
  }
}
</script>