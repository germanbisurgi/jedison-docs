<template>
  <div>
    <header>
      <h1>Horizontal Categories Object Editor</h1>
      <p>Displays object properties grouped into tabs arranged horizontally across the top. Primitive properties are automatically grouped into a default category, while nested objects and arrays each get their own tab.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "categories-horizontal"</code></li>
        </ul>

        <h2>Options</h2>
        <ul>
          <li><code>"x-categoriesDefaultLabel"</code> — label for the default tab that groups primitive properties (defaults to <code>"Basic"</code>)</li>
          <li><code>"x-category"</code> — set on a child property schema to assign it to a named tab</li>
          <li><code>"x-navWarning"</code> — show a warning indicator on tabs that contain validation errors</li>
          <li><code>"x-navWarningMessage"</code> — custom message shown in the tab warning indicator</li>
          <li><code>"x-categoryOrder"</code> — array of category names that controls the tab display order; listed categories appear first in the given order, unlisted ones follow</li>
        </ul>

        <app-live-example :example="htmlObjectEditorCategoriesHorizontal" />

        <h2>Category Order Example</h2>
        <p>Use <code>"x-categoryOrder"</code> to control the tab sequence. Tabs listed in the array appear first; any others follow in natural order.</p>
        <app-live-example :example="htmlObjectEditorCategoriesCategoryOrder" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorCategoriesHorizontal from '@/assets/html/object-editors-categories-horizontal.html?raw'
import htmlObjectEditorCategoriesCategoryOrder from '@/assets/html/object-editors-categories-category-order.html?raw'

export default {
  name: 'ObjectEditorCategoriesHorizontal',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Horizontal Categories Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the horizontal categories object editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorCategoriesHorizontal,
      htmlObjectEditorCategoriesCategoryOrder
    }
  }
}
</script>
