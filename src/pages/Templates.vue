<template>
  <div>
    <header>
      <h1>Templates</h1>
    </header>

    <section>
      <article>
        <h2>Using Placeholders in Templates</h2>
        <p>
          Jedison allows you to define templates with dynamic titles and descriptions that use placeholders.
          These placeholders are replaced at runtime with relevant values.
        </p>

        <h3 class="mt-3">
          Available Placeholders
        </h3>
        <ul>
          <li><code>value</code> — The current value (from <code>getValue()</code>); <strong>always available</strong></li>
          <li><code>settings</code> — Configuration options (from <code>jedison.options.settings</code>); <strong>always available</strong></li>
          <li><code>i0</code> — The zero-based index of the array item; available <strong>only if the editor is an array item editor</strong></li>
          <li><code>i1</code> — The one-based index of the array item; available <strong>only if the editor is an array item editor</strong></li>
        </ul>

        <app-live-example :example="htmlTemplateExample" />
      </article>
    </section>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlTemplateExample from '@/assets/html/templates.html?raw'

export default {
  name: 'Templates',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Template Placeholders',
      meta: [
        {
          name: 'description',
          content: 'Documentation for using dynamic placeholders in Jedison template titles and descriptions.',
        }
      ]
    })
  },
  data() {
    return {
      htmlTemplateExample,
      renderedExample: 'My object 1' // example rendered output
    }
  }
}
</script>
