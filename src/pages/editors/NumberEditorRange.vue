<template>
  <div>
    <header>
      <h1>Number Range</h1>
      <p>Renders a range slider input for numeric values with minimum and maximum constraints.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"minimum"</code> and <code>"maximum"</code> properties are defined, OR</li>
          <li><code>"x-format": "range"</code> is explicitly specified</li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>Automatic step calculation based on <code>multipleOf</code> property</li>
          <li>Support for exclusive minimum/maximum with <code>exclusiveMinimum</code>/<code>exclusiveMaximum</code></li>
          <li>Custom step override using <code>x-inputAttributes.step</code></li>
          <li>Custom min/max override using <code>x-inputAttributes</code></li>
        </ul>

        <app-live-example :example="htmlNumberEditorRange" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorRange from '@/assets/html/number-editors-range.html?raw'

export default {
  name: 'NumberEditorRange',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Number Range Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the number range slider editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorRange
    }
  }
}
</script>