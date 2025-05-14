<template>
  <div>
    <h1>Minimal Example</h1>

    <p>This HTML example demonstrates how to use Jedison to generate a forms based on JSON schemas. The page includes Bootstrap 5 for styling and the Jedison library from a CDN.</p>

    <p>The JSON schema defines a simple "Person" object with two fields: "name" (a string) and "age" (a positive integer). When the page loads, Jedison creates a form inside the #jedison-container div using this schema, automatically generating appropriate input fields with Bootstrap 5 styling.</p>

    <p>The Jedison.ThemeBootstrap5() instance creates the necessary HTML and ensures the form follows Bootstrap 5's design system.</p>

    <p>This approach allows developers to quickly create consistent, validated forms by simply defining their data structure in JSON format, rather than writing manual HTML form markup.</p>

    <app-live-example :example="example" />
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlContent from '@/assets/html/playground.html?raw'

export default {
  name: 'GettingStarted',
  components: {
    AppLiveExample,
  },
  setup() {
    useHead({
      title: 'Minimal Example',
      meta: [
        {
          name: 'description',
          content: 'Jedison minimal example',
        },
      ],
    })
  },
  data() {
    return {
      example: htmlContent
    }
  }
}
</script>