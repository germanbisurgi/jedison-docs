<template>
  <div>
    <header>
      <h1>Boolean Editors</h1>
      <p>Multiple editor formats for boolean-type data with different display options</p>
    </header>

    <section>
      <article>
        <h2>Default Boolean Editor</h2>
        <p>The standard editor that appears for boolean types without specific formatting requirements.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "boolean"</code></li>
        </ul>

        <app-live-example :example="htmlBooleanEditorDefault" />
      </article>

      <article>
        <h2>Checkbox Editor</h2>
        <p>Renders a single checkbox input for boolean values.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "checkbox"</code></li>
        </ul>

        <app-live-example :example="htmlBooleanEditorCheckbox" />
      </article>

      <article>
        <h2>Radio Buttons</h2>
        <p>Renders two radio inputs for explicit true/false selection. Labels can be customized.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "radios"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorRadios" />
      </article>

      <article>
        <h2>Inline Radio Buttons</h2>
        <p>Horizontal layout version of the radio buttons editor.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "radios-inline"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorRadiosInline" />
      </article>

      <article>
        <h2>Select Dropdown</h2>
        <p>Renders a select input with true/false options. Option labels can be customized.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "boolean"</code></li>
          <li><code>"x-format": "select"</code></li>
          <li>Optional: <code>"x-enumTitles": ["Yes", "No"]</code> for custom labels</li>
        </ul>

        <app-live-example :example="htmlBooleanEditorSelect" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlBooleanEditorDefault from '@/assets/html/boolean-editors-default.html?raw'
import htmlBooleanEditorCheckbox from '@/assets/html/boolean-editors-checkbox.html?raw'
import htmlBooleanEditorRadios from '@/assets/html/boolean-editors-radios.html?raw'
import htmlBooleanEditorRadiosInline from '@/assets/html/boolean-editors-radios-inline.html?raw'
import htmlBooleanEditorSelect from '@/assets/html/boolean-editors-select.html?raw'

export default {
  name: 'BooleanEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Boolean Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for boolean editor formats including checkboxes, radio buttons, and select dropdowns',
        }
      ]
    })
  },
  data() {
    return {
      htmlBooleanEditorDefault,
      htmlBooleanEditorCheckbox,
      htmlBooleanEditorRadios,
      htmlBooleanEditorRadiosInline,
      htmlBooleanEditorSelect
    }
  }
}
</script>