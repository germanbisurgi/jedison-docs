<template>
  <div>
    <header>
      <h1>As Editor</h1>
    </header>

    <section>
      <article>
        <p>To use Jedison as a JSON editor, these options are required:</p>

        <ul>
          <li>
            <strong><code>container</code></strong> specifies where the editor renders in your HTML. Without it, Jedison has no place to display the form. In the example, we attach
            it
            to <code>&lt;div id="jedison-container"&gt;</code> using <code>document.querySelector</code>.
          </li>
          <li>
            <strong><code>theme</code></strong> defines the editor's visual style. While Jedison provides a default theme (<code>new Jedison.Theme()</code>), you must include this
            option—omitting it may break styling or functionality.
          </li>
          <li>
            <strong><code>schema</code></strong> defines the validation rules. The editor will check JSON data
            against this schema.
          </li>
        </ul>

        <app-live-example :example="htmlContent" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlContent from '@/assets/html/playground.html?raw'

export default {
  name: 'AsEditor',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - As Editor',
      meta: [
        {
          name: 'description',
          content: 'Using Jedison as an Editor in Frontend',
        }
      ]
    })
  },
  data() {
    return {
      htmlContent
    }
  }
}
</script>