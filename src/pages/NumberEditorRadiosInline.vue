<template>
  <div>
    <header>
      <h1>Inline Radio Buttons Number Editor</h1>
      <p>Displays radio buttons horizontally for more compact layouts while maintaining the same functionality as the vertical radio list.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
          <li><code>"x-format": "radios-inline"</code></li>
        </ul>

        <h2>Optional Properties</h2>
        <ul>
          <li><code>"x-enumTitles"</code> - Short labels that work well in horizontal layouts</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRadiosInline" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorRadiosInline from '@/assets/html/number-editors-radios-inline.html?raw'

export default {
  name: 'NumberEditorRadiosInline',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Inline Radio Buttons Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the inline radio buttons number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorRadiosInline
    }
  }
}
</script>