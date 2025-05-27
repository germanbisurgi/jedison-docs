<template>
  <div>
    <header>
      <h1>Array Editors</h1>
      <p>Multiple editor formats for array-type data with different display options</p>
    </header>

    <section>
      <article>
        <h2>Default Array Editor</h2>
        <p>The standard editor that appears for array types without specific formatting requirements.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorDefault" />
      </article>

      <article>
        <h2>Checkboxes Editor</h2>
        <p>Displays array values as checkboxes. Ideal for arrays containing unique string, number, or integer values.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"uniqueItems": true</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorCheckboxes" />
      </article>

      <article>
        <h2>Inline Checkboxes</h2>
        <p>Horizontal layout version of the checkboxes editor for more compact displays.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"uniqueItems": true</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
          <li><code>"x-format": "checkboxes-inline"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorCheckboxesInline" />
      </article>

      <article>
        <h2>Choices Selector</h2>
        <p>Enhanced multi-select interface using the Choices.js library.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "choices"</code></li>
          <li><code>"items": { "type": "string" | "number" | "integer" }</code></li>
          <li>Choices.js must be available (<code>window.Choices</code>)</li>
        </ul>

        <app-live-example :example="htmlArrayEditorChoices" />
      </article>

      <article>
        <h2>Vertical Navigation</h2>
        <p>Displays array items as a vertical menu, suitable for tabbed interfaces.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "nav-vertical"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorNavVertical" />
      </article>

      <article>
        <h2>Horizontal Navigation</h2>
        <p>Horizontal version of the navigation editor for different layout needs.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "nav-horizontal"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorNavHorizontal" />
      </article>

      <article>
        <h2>Table Editor</h2>
        <p>Renders array items in a tabular format, with each object property in its own column.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTable" />
      </article>

      <article>
        <h2>Table Object Editor</h2>
        <p>Renders array items in a tabular format</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table-object"</code></li>
          <li><code>"items": { "type": "object" }</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTableObject" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorDefault from '@/assets/html/array-editors-default.html?raw'
import htmlArrayEditorCheckboxes from '@/assets/html/array-editors-checkboxes.html?raw'
import htmlArrayEditorCheckboxesInline from '@/assets/html/array-editors-checkboxes-inline.html?raw'
import htmlArrayEditorChoices from '@/assets/html/array-editors-choices.html?raw'
import htmlArrayEditorNavVertical from '@/assets/html/array-editors-nav-vertical.html?raw'
import htmlArrayEditorNavHorizontal from '@/assets/html/array-editors-nav-horizontal.html?raw'
import htmlArrayEditorTable from '@/assets/html/array-editors-table.html?raw'
import htmlArrayEditorTableObject from '@/assets/html/array-editors-table-object.html?raw'

export default {
  name: 'ArrayEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Array Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for array editor formats including checkboxes, tables, and navigation interfaces',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorDefault,
      htmlArrayEditorCheckboxes,
      htmlArrayEditorCheckboxesInline,
      htmlArrayEditorChoices,
      htmlArrayEditorNavVertical,
      htmlArrayEditorNavHorizontal,
      htmlArrayEditorTable,
      htmlArrayEditorTableObject
    }
  }
}
</script>