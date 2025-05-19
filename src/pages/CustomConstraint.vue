<template>
  <div>
    <header>
      <h1>Custom Constraints</h1>
    </header>

    <section>
      <article>
        <h2>Adding Custom Constraints</h2>
        <p>
          Jedison allows you to extend validation beyond standard JSON Schema rules by adding custom constraints.
          These are defined in the <code>constraints</code> option when initializing Jedison.
        </p>

        <h3 class="mt-3">
          How Custom Constraints Work
        </h3>
        <p>
          Custom constraints are validation functions that:
        </p>
        <ul>
          <li>Check for specific schema extensions (typically using <code>x-</code> prefixed properties)</li>
          <li>Return an array of validation errors/warnings</li>
          <li>Have access to the current validation context (validator, value, schema, key, path, translator)</li>
          <li>Can be configured as either errors or warnings</li>
        </ul>

        <h3 class="mt-3">
          Implementation Example
        </h3>
        <p>
          The example shows a custom constraint checking <code>x-my-constraint</code>:
        </p>

        <app-highlight language="javascript" :code="mdCustomConstraint" />

        <h3 class="mt-3">
          Key Components
        </h3>
        <ul>
          <li>
            <strong><code>context</code></strong> object containing:
            <ul>
              <li><code>value</code> - The current field value</li>
              <li><code>path</code> - JSON path to the field</li>
              <li><code>schema</code> - The schema for this field</li>
              <li><code>translator</code> - The Translator instance</li>
            </ul>
          </li>
          <li>
            <strong>Error objects</strong> with:
            <ul>
              <li><code>type</code> - 'error' or 'warning' severity level</li>
              <li><code>path</code> - Location of the validation issue</li>
              <li><code>constraint</code> - Name of the constraint</li>
              <li><code>messages</code> - User-friendly error messages</li>
            </ul>
          </li>
        </ul>

        <h2 class="mt-4">
          Error Handling and Validation States
        </h2>
        <p>
          Jedison provides flexible error handling through the <code>getErrors()</code> method:
        </p>

        <ul>
          <li>
            <strong><code>jedison.getErrors()</code></strong> - Returns only error-level validations (default)
          </li>
          <li>
            <strong><code>jedison.getErrors(['error', 'warning'])</code></strong> - Returns both errors and warnings
          </li>
        </ul>

        <h3 class="mt-3">
          Benefits of Warning-Level Constraints
        </h3>
        <p>
          Using warning-level constraints provides several advantages:
        </p>
        <ul>
          <li><strong>Soft validation</strong> - Users can proceed with warnings while being informed of potential issues</li>
          <li><strong>Progressive validation</strong> - Start with warnings that can be upgraded to errors later</li>
          <li><strong>Better UX</strong> - Different visual treatment for errors (blocking) vs warnings (advisory)</li>
          <li><strong>Flexible workflows</strong> - Allow submission with warnings while maintaining data quality standards</li>
        </ul>

        <p class="mt-3">
          In the live example below, notice how the form remains valid (green) when the custom constraint warning appears,
          demonstrating non-blocking validation.
        </p>

        <app-live-example :example="htmlCustomValidator" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import AppHighlight from "@/components/AppHighlight.vue"
import htmlCustomValidator from '@/assets/html/custom-constraint.html?raw'
import mdCustomConstraint from '@/assets/markdown/custom-constraint.md?raw'

export default {
  name: 'CustomConstraint',
  components: {
    AppLiveExample,
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Custom Constraints',
      meta: [
        {
          name: 'description',
          content: 'Extend Jedison validation with custom constraints and warning-level validations',
        }
      ]
    })
  },
  data() {
    return {
      htmlCustomValidator,
      mdCustomConstraint
    }
  }
}
</script>