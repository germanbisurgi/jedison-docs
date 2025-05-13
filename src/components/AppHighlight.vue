<template>
  <pre><code ref="codeBlock" :class="languageClass">{{ code }}</code></pre>
</template>

<script>
// Import highlight.js core and languages at build time
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import xml from 'highlight.js/lib/languages/xml'
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
      validator: (value) => ['javascript', 'bash', 'html'].includes(value)
    }
  },
  computed: {
    languageClass() {
      return `language-${this.language}`
    }
  },
  mounted() {
    // Register languages
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('html', xml)

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