<template>
  <div>
    <header>
      <h1>Object Radios</h1>
      <p>Renders radio inputs for object enum values. Each radio stores the full selected object as the field value. Labels can be customized with x-enumTitles.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorRadios" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorRadios from '@/assets/html/object-editors-radios.html?raw'

export default {
  name: 'ObjectEditorRadios',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Object Radios Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the object radios editor that stores complex object values behind radio button selections',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorRadios
    }
  }
}
</script>
