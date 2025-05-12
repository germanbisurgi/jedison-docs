<template>
  <pre><code ref="codeBlock" :class="languageClass">{{ code }}</code></pre>
</template>

<script>
import hljs from 'highlight.js'
import CopyButtonPlugin from 'highlightjs-copy'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('html', xml)

// Optional: Add copy plugin
hljs.addPlugin(new CopyButtonPlugin({
  autohide: false
}))

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
    this.highlightCode()
  },
  methods: {
    highlightCode() {
      if (this.$refs.codeBlock) {
        hljs.highlightElement(this.$refs.codeBlock)
      }
    }
  }
}
</script>