<template>
  <div>
    <header>
      <h1>Inline String Radios</h1>
      <p>Horizontal layout version of the radio editor for more compact displays.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios-inline"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorRadiosInline" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorRadiosInline from '@/assets/html/string-editors-radios-inline.html?raw'

export default {
  name: 'StringEditorRadiosInline',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Inline String Radios Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the inline string radios editor format with horizontal layout',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorRadiosInline
    }
  }
}
</script>