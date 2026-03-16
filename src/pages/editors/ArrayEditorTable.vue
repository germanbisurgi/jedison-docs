<template>
  <div>
    <header>
      <h1>Table Array Editor</h1>
      <p>Renders array items in a tabular format, with each object property in its own column.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTable" />
      </article>
    </section>

    <section>
      <article>
        <h2>Footer</h2>
        <p>Adds a footer row with add and/or delete-all buttons. Use <code>x-arrayDeleteAll</code> to also show a "Delete all" button in the header.</p>
        <ul>
          <li><code>x-arrayDeleteAll</code> — Adds a "Delete all" button to the header</li>
          <li><code>x-arrayFooterAdd</code> — Adds an "Add item" button in the footer</li>
          <li><code>x-arrayFooterDeleteAll</code> — Adds a "Delete all" button in the footer</li>
          <li><code>x-arrayFooterButtonsPosition</code> — Aligns footer buttons (<code>'left'</code> or <code>'right'</code>, default: <code>'right'</code>)</li>
        </ul>

        <app-live-example :example="htmlArrayEditorTableFooter" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorTable from '@/assets/html/array-editors-table.html?raw'
import htmlArrayEditorTableFooter from '@/assets/html/array-editors-table-footer.html?raw'

export default {
  name: 'ArrayEditorTable',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Table Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the table array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorTable,
      htmlArrayEditorTableFooter
    }
  }
}
</script>
