<template>
  <div>
    <header>
      <h1>String Select</h1>
      <p>Renders a select dropdown with options from the enum constraint. The options labels can be customized with the enumTitles option.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorSelect" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorSelect from '@/assets/html/string-editors-select.html?raw'

export default {
  name: 'StringEditorSelect',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Select Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string select dropdown editor format with enum constraints',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorSelect
    }
  }
}
</script>