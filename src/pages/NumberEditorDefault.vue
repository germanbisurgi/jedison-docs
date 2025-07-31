<template>
  <div>
    <header>
      <h1>Default Number Editor</h1>
      <p>A standard numeric input field that appears when no specific format is requested.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
        </ul>

        <app-live-example :example="htmlNumberEditorDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorDefault from '@/assets/html/number-editors-default.html?raw'

export default {
  name: 'NumberEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorDefault
    }
  }
}
</script>