<template>
  <div>
    <header>
      <h1>Default Object Editor</h1>
      <p>The standard editor that renders a fieldset containing property editors. The fieldset can be collapsed or expanded.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "object"</code></li>
        </ul>

        <h2>Options</h2>
        <ul>
          <li><code>x-addPropertyContent</code>: Custom content for add property button</li>
          <li><code>x-collapseToggleContent</code>: Custom content for collapse toggle</li>
          <li><code>x-deactivateNonRequired</code>: Deactivate non-required properties</li>
          <li><code>x-enableCollapseToggle</code>: Enable collapse/expand functionality</li>
          <li><code>x-propertiesToggleContent</code>: Custom content for properties toggle</li>
          <li><code>x-startCollapsed</code>: Start with the object collapsed</li>
          <li><code>x-titleTemplate</code>: Custom template for the title</li>
        </ul>

        <app-live-example :example="htmlObjectEditorDefault" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorDefault from '@/assets/html/object-editors-default.html?raw'

export default {
  name: 'ObjectEditorDefault',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Default Object Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the default object editor format with fieldset layout',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorDefault
    }
  }
}
</script>