<template>
  <div>
    <header>
      <h1>Any JSON</h1>
      <p>Renders a textarea for editing any valid JSON value with real-time parse validation.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"x-format": "json"</code></li>
        </ul>

        <app-live-example :example="htmlAnyEditorJson" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlAnyEditorJson from '@/assets/html/any-editors-json.html?raw'

export default {
  name: 'AnyEditorJson',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Any JSON Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the Any JSON editor that renders a textarea for editing any valid JSON value',
        }
      ]
    })
  },
  data() {
    return {
      htmlAnyEditorJson
    }
  }
}
</script>
