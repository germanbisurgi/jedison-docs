<template>
  <div>
    <header>
      <h1>Table Object Array Editor</h1>
      <p>Renders array items in a tabular format</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "table-object"</code></li>
          <li><code>"items": { "type": "object" }</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorTableObject" />
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

        <app-live-example :example="htmlArrayEditorTableObjectFooter" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorTableObject from '@/assets/html/array-editors-table-object.html?raw'
import htmlArrayEditorTableObjectFooter from '@/assets/html/array-editors-table-object-footer.html?raw'

export default {
  name: 'ArrayEditorTableObject',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Table Object Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the table object array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorTableObject,
      htmlArrayEditorTableObjectFooter
    }
  }
}
</script>
