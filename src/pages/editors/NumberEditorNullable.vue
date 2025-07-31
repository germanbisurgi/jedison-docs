<template>
  <div>
    <header>
      <h1>Nullable Number Editor</h1>
      <p>A standard numeric input field. When empty the instance value is <code>null</code></p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": ["null", "number"]</code> or <code>"type": ["null", "integer"]</code></li>
          <li><code>"x-nullable": true</code></li>
        </ul>

        <app-live-example :example="htmlNumberEditorNullable" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorNullable from '@/assets/html/number-editors-nullable.html?raw'

export default {
  name: 'NumberEditorNullable',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Nullable Number Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the nullable number editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorNullable
    }
  }
}
</script>