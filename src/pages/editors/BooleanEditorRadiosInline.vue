<template>
  <div>
    <header>
      <h1>Inline Radio Buttons Boolean Editor</h1>
      <p>Horizontal layout version of the radio buttons editor.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "radios-inline"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorRadiosInline" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorRadiosInline from '@/assets/html/boolean-editors-radios-inline.html?raw'

export default {
  name: 'BooleanEditorRadiosInline',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Inline Radio Buttons Boolean Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the inline radio buttons boolean editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorRadiosInline
    }
  }
}
</script>