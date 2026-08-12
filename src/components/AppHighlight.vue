<template>
  <div class="app-highlight">
    <button type="button" class="app-highlight-copy" @click="copy">
      {{ copyLabel }}
    </button>
    <div v-if="highlightedHtml" v-html="highlightedHtml" />
    <pre v-else><code>{{ strippedCode }}</code></pre>
  </div>
</template>

<script>
import { codeToHtml } from 'shiki'

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
  data() {
    return {
      highlightedHtml: '',
      copyLabel: 'Copy'
    }
  },
  computed: {
    strippedCode() {
      return this.code
        .replace(/^```[a-z]*\n/, '')
        .replace(/```[\s\n]*$/, '')
    }
  },
  watch: {
    strippedCode: 'highlight',
    language: 'highlight'
  },
  mounted() {
    this.highlight()
  },
  methods: {
    async highlight() {
      this.highlightedHtml = await codeToHtml(this.strippedCode, {
        lang: this.language,
        theme: 'github-dark'
      })
    },
    copy() {
      navigator.clipboard.writeText(this.strippedCode)
      this.copyLabel = 'Copied!'
      setTimeout(() => { this.copyLabel = 'Copy' }, 2000)
    }
  }
}
</script>
