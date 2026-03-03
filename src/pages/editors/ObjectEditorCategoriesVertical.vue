<template>
  <div>
    <header>
      <h1>Vertical Categories Object Editor</h1>
      <p>Displays object properties grouped into tabs arranged vertically on the left side. Primitive properties are automatically grouped into a default category, while nested objects and arrays each get their own tab.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "categories-vertical"</code></li>
        </ul>

        <h2>Options</h2>
        <ul>
          <li><code>"x-categoriesDefaultLabel"</code> — label for the default tab that groups primitive properties (defaults to <code>"Basic"</code>)</li>
          <li><code>"x-category"</code> — set on a child property schema to assign it to a named tab</li>
          <li><code>"x-navWarning"</code> — show a warning indicator on tabs that contain validation errors</li>
          <li><code>"x-navWarningMessage"</code> — custom message shown in the tab warning indicator</li>
          <li><code>"x-format": "categories-vertical-N"</code> — use a multi-column layout where <code>N</code> is the number of columns (e.g. <code>"categories-vertical-3"</code>)</li>
        </ul>

        <app-live-example :example="htmlObjectEditorCategoriesVertical" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorCategoriesVertical from '@/assets/html/object-editors-categories-vertical.html?raw'

export default {
  name: 'ObjectEditorCategoriesVertical',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Vertical Categories Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the vertical categories object editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorCategoriesVertical
    }
  }
}
</script>
