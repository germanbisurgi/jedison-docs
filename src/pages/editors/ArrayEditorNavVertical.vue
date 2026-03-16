<template>
  <div>
    <header>
      <h1>Vertical Navigation Array Editor</h1>
      <p>Displays array items as a vertical menu, suitable for tabbed interfaces.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "array"</code></li>
          <li><code>"x-format": "nav-vertical"</code></li>
        </ul>

        <app-live-example :example="htmlArrayEditorNavVertical" />
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

        <app-live-example :example="htmlArrayEditorNavVerticalFooter" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlArrayEditorNavVertical from '@/assets/html/array-editors-nav-vertical.html?raw'
import htmlArrayEditorNavVerticalFooter from '@/assets/html/array-editors-nav-vertical-footer.html?raw'

export default {
  name: 'ArrayEditorNavVertical',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Vertical Navigation Array Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the vertical navigation array editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlArrayEditorNavVertical,
      htmlArrayEditorNavVerticalFooter
    }
  }
}
</script>
