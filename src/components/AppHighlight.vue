<template>
  <pre><code ref="codeBlock" :class="languageClass">{{ strippedCode }}</code></pre>
</template>

<script>
// Import highlight.js core and languages at build time
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import CopyButtonPlugin from 'highlightjs-copy'

export default {
  name: 'AppHighlight',
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'javascript',
      validator: (value) => ['javascript', 'bash', 'html', 'json'].includes(value)
    }
  },
  computed: {
    languageClass() {
      return `language-${this.language}`
    },
    strippedCode() {
      return this.code
      .replace(/^```[a-z]*\n/, '')
      .replace(/```[\s\n]*$/, '')
    }
  },
  mounted() {
    // Register languages
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('html', xml)
    hljs.registerLanguage('json', json)

    // Add copy plugin
    hljs.addPlugin(new CopyButtonPlugin({
      autohide: false,
      callback: (text) => console.log('Copied:', text)
    }))

    // Apply highlighting
    this.$nextTick(() => {
      if (this.$refs.codeBlock) {
        hljs.highlightElement(this.$refs.codeBlock)
      }
    })
  }
}
</script>