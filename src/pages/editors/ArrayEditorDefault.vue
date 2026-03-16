<template>
  <div>
    <header>
      <h1>Default Array Editor</h1>
      <p>The standard editor that appears for array types without specific formatting requirements.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorDefault" />
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

        <app-live-example :example="htmlArrayEditorFooter" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorDefault from '@/assets/html/array-editors-default.html?raw'
import htmlArrayEditorFooter from '@/assets/html/array-editors-footer.html?raw'

export default {
  name: 'ArrayEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorDefault,
      htmlArrayEditorFooter
    }
  }
}
</script>
