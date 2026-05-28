<template>
  <div>
    <header>
      <h1>Object Accordion</h1>
      <p>Renders object properties as collapsible Bootstrap accordion panels.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "accordion"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorAccordion" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorAccordion from '@/assets/html/object-editors-accordion.html?raw'

export default {
  name: 'ObjectEditorAccordion',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Object Accordion Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the object accordion editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorAccordion
    }
  }
}
</script>
