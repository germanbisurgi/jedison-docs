<template>
  <div>
    <h1>What is Jedison?</h1>

    <p>
      This library helps you validate JSON data on the backend and generate interactive forms from JSON Schemas on the frontend.
      <br>
      Perfect for building admin panels, config UIs, or schema-driven apps.
    </p>

    <img class="img-fluid mermaid-diagram" src="@/assets/svg/mermaid-flow-transparent.svg" alt="Jedison use diagram">

    <h2>Features</h2>

    <ul>
      <li>Dependency free</li>
      <li>JSON Schema Validation</li>
      <li>JSON Editing by generating forms from JSON schemas</li>
      <li>Dereferences JSON Schema <code>'$ref'</code> pointers</li>
      <li>
        CSS libraries Integration:
        <ul>
          <li>Bootstrap 3</li>
          <li>Bootstrap 4</li>
          <li>Bootstrap 5</li>
        </ul>
      </li>
      <li>
        Icon libraries Integration:
        <ul>
          <li>Glyphicons</li>
          <li>Bootstrap icons</li>
          <li>FontAwesome 3</li>
          <li>FontAwesome 4</li>
          <li>FontAwesome 5</li>
          <li>FontAwesome 6</li>
        </ul>
      </li>
      <li>Markdown Support with marked.js (if installed)</li>
      <li>Secure HTML Sanitization with DomPurify (if installed)</li>
      <li>
        Plugin Editors:
        <ul>
          <li>Quill - powerful rich text editor</li>
          <li>Flatpickr - lightweight and powerful datetime picker</li>
          <li>Awesomplete - Ultra lightweight, customizable, simple autocomplete widget with zero dependencies</li>
          <li>Jodit - WYSIWYG Editor</li>
          <li>Raty - star Rating Plugin</li>
          <li>IMask - vanilla javascript input mask</li>
          <li>EmojiButton - Vanilla JavaScript Emoji Picker</li>
        </ul>
      </li>
    </ul>
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