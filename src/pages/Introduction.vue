<template>
  <div>
    <h1>Introduction?</h1>

    <section>
      <h2>What is Jedison?</h2>

      <article>
        <p>
          Jedison helps you validate JSON data on the backend and generate interactive forms from JSON Schemas on the frontend.
          <br><br>
          One common workflow looks like this:
        </p>

        <ol>
          <li>Your backend sends the JSON Schema to the client</li>
          <li>Jedison automatically renders a complete form based on the schema</li>
          <li>Users interact with the form while getting instant client-side validation</li>
          <li>Validated data gets submitted back to your server</li>
          <li>The same schema validates the data again server-side for security</li>
        </ol>

        <img class="img-fluid mermaid-diagram mb-3" src="@/assets/svg/mermaid-flow-transparent.svg" alt="Jedison use diagram">

        <p>
          But Jedison is flexible enough to support other patterns too - you might use it for:
        </p>

        <ul>
          <li>Standalone client-side forms without server validation</li>
          <li>Pure server-side JSON validation in your backend services</li>
          <li>Hybrid approaches where different parts of the schema are used in different contexts</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'

export default {
  name: 'GettingStarted',
  components: {},
  setup() {
    useHead({
      title: 'Getting started',
      meta: [
        {
          name: 'description',
          content: 'What is Jedison?',
        }
      ]
    })
  },
  data() {
    return {}
  }
}
</script>