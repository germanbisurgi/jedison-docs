<template>
  <div>
    <header>
      <h1>Number Editors</h1>
      <p>Specialized input formats for number and integer data types with various presentation options</p>
    </header>

    <section>
      <article>
        <h2>Default Number Editor</h2>
        <p>A standard numeric input field that appears when no specific format is requested.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
        </ul>

        <app-live-example :example="htmlNumberEditorDefault" />
      </article>

      <article>
        <h2>Number Select</h2>
        <p>Displays a dropdown select box populated with the values from the <code>enum</code> array. Ideal when users need to choose from predefined numeric options.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
        </ul>

        <h3>Optional Properties</h3>
        <ul>
          <li><code>"x-enumTitles"</code> - Human-readable labels that replace the numeric values in the dropdown</li>
        </ul>

        <app-live-example :example="htmlNumberEditorSelect" />
      </article>

      <article>
        <h2>Number Radios</h2>
        <p>Presents all available options as individual radio buttons in a vertical list, providing immediate visibility of all choices without interaction.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
          <li><code>"x-format": "radios"</code></li>
        </ul>

        <h3>Optional Properties</h3>
        <ul>
          <li><code>"x-enumTitles"</code> - Descriptive labels shown next to each radio button</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRadios" />
      </article>

      <article>
        <h2>Inline Radio Buttons</h2>
        <p>Displays radio buttons horizontally for more compact layouts while maintaining the same functionality as the vertical radio list.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"enum"</code> array defined</li>
          <li><code>"x-format": "radios-inline"</code></li>
        </ul>

        <h3>Optional Properties</h3>
        <ul>
          <li><code>"x-enumTitles"</code> - Short labels that work well in horizontal layouts</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRadiosInline" />
      </article>

      <article>
        <h2>Star Rating (Raty)</h2>
        <p>Interactive star rating control that converts numeric selection into visual feedback. Supports half-star increments and custom star elements.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "number"</code> or <code>"type": "integer"</code></li>
          <li><code>"x-raty"</code> property defined</li>
          <li>Raty.js library loaded (<code>window.Raty</code>)</li>
        </ul>

        <h3>Configuration Options</h3>
        <ul>
          <li><code>"x-raty.half"</code> - Enables selection of half-star values when true</li>
          <li><code>"x-raty.starType"</code> - Defines HTML tag used for star elements (default: 'i')</li>
        </ul>

        <app-live-example :example="htmlNumberEditorRaty" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlNumberEditorDefault from '@/assets/html/number-editors-default.html?raw'
import htmlNumberEditorSelect from '@/assets/html/number-editors-select.html?raw'
import htmlNumberEditorRadios from '@/assets/html/number-editors-radios.html?raw'
import htmlNumberEditorRadiosInline from '@/assets/html/number-editors-radios-inline.html?raw'
import htmlNumberEditorRaty from '@/assets/html/number-editors-raty.html?raw'

export default {
  name: 'NumberEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Number Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for numeric input formats including dropdowns, radio groups, and star rating controls',
        }
      ]
    })
  },
  data() {
    return {
      htmlNumberEditorDefault,
      htmlNumberEditorSelect,
      htmlNumberEditorRadios,
      htmlNumberEditorRadiosInline,
      htmlNumberEditorRaty
    }
  }
}
</script>