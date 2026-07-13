<template>
  <div>
    <header>
      <h1>Inline Object Radios</h1>
      <p>Horizontal layout version of the object radios editor for more compact displays.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios-inline"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorRadiosInline" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorRadiosInline from '@/assets/html/object-editors-radios-inline.html?raw'

export default {
  name: 'ObjectEditorRadiosInline',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Inline Object Radios Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the inline object radios editor with horizontal layout',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorRadiosInline
    }
  }
}
</script>
