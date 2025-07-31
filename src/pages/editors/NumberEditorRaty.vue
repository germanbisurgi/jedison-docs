<template>
  <div>
    <header>
      <h1>Star Rating (Raty) Number Editor</h1>
      <p>Interactive star rating control that converts numeric selection into visual feedback. Supports half-star increments and custom star elements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"x-format": "raty"</code> property defined</li>
          <li>Raty.js library loaded (<code>window.Raty</code>)</li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-raty"</code> keyword</p>
        <ul>
          <li><code>"x-raty.half"</code> - Enables selection of half-star values when true</li>
          <li><code>"x-raty.starType"</code> - Defines HTML tag used for star elements (default: 'i')</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRaty" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorRaty from '@/assets/html/number-editors-raty.html?raw'

export default {
  name: 'NumberEditorRaty',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Star Rating (Raty) Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the Raty star rating number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorRaty
    }
  }
}
</script>