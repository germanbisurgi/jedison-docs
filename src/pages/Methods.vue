<template>
  <div>
    <header>
      <h1>Methods</h1>
    </header>

    <section>
      <h2>Methods</h2>
      <p>Jedison provides several methods to interact with your editor instance:</p>

      <article>
        <h3><code>getValue()</code></h3>
        <p>Returns the current value of the editor by calling <code>getValue()</code> on the root instance.</p>
        <p>Internally, this traverses the entire instance tree to build the complete JSON structure.</p>
      </article>

      <article>
        <h3><code>setValue(data)</code></h3>
        <p>Updates the editor's value with new data by calling <code>setValue()</code> on the root instance.</p>
        <ul>
          <li><code>data</code>: The new JSON data to set</li>
        </ul>
      </article>

      <article>
        <h3><code>getInstance(jsonPath)</code></h3>
        <p>Retrieves a specific instance by its JSON path.</p>
        <p>Example paths:</p>
        <ul>
          <li><code>'#'</code> - Root instance</li>
          <li><code>'#/property'</code> - Nested property</li>
          <li><code>'#/array/0'</code> - First item in an array</li>
        </ul>
      </article>

      <article>
        <h3><code>showValidationErrors(errorsList = null)</code></h3>
        <p>Displays validation errors in the respective editors.</p>
        <ul>
          <li>If <code>errorsList</code> is provided, displays those specific errors</li>
          <li>Otherwise, shows all current validation errors from <code>getErrors()</code></li>
        </ul>
      </article>

      <article>
        <h3><code>getErrors(filters = ['error'])</code></h3>
        <p>Returns an array of validation error messages from all instances.</p>
        <ul>
          <li><code>filters</code>: Include only errors with <code>type</code> that are included in the filter array</li>
        </ul>

        <div class="d-flex flex-column flex-md-row gap-3">
          <div class="flex-fill">
            <app-highlight language="javascript" :code="mdMethodGetErrorsAndWarnings" />
            <app-highlight language="javascript" :code="mdValidationErrors" />
          </div>
          <div class="flex-fill">
            <app-highlight language="javascript" :code="mdMethodGetErrors" />
            <app-highlight language="javascript" :code="mdValidationErrorsFiltered" />
          </div>
        </div>
      </article>

      <article>
        <h3><code>disable()</code></h3>
        <p>Disables UI controls</p>
      </article>

      <article>
        <h3><code>enable()</code></h3>
        <p>Enables UI controls</p>
      </article>

      <article>
        <h3><code>destroy()</code></h3>
        <p>Cleans up the editor instance by:</p>
        <ul>
          <li>Calling <code>destroy()</code> on the root instance</li>
          <li>Clearing the container HTML if in editor mode</li>
          <li>Removing all instance references</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import mdMethodGetErrorsAndWarnings from '@/assets/markdown/method-get-errors-and-warnings.md?raw'
import mdMethodGetErrors from '@/assets/markdown/method-get-errors.md?raw'
import mdValidationErrors from '@/assets/markdown/validation-errors.md?raw'
import mdValidationErrorsFiltered from '@/assets/markdown/validation-errors-filtered.md?raw'

export default {
  name: 'Methods',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Methods',
      meta: [
        {
          name: 'description',
          content: 'Detailed documentation for Jedison methods',
        }
      ]
    })
  },
  data() {
    return {
      mdMethodGetErrorsAndWarnings,
      mdMethodGetErrors,
      mdValidationErrors,
      mdValidationErrorsFiltered
    }
  }
}
</script>