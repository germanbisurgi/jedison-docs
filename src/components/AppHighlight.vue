<template>
  <pre><code ref="codeBlock" :class="languageClass">{{ code }}</code></pre>
</template>

<script>
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
  async mounted() {
    if (typeof window === 'undefined') return; // SSR guard

    // Dynamically import highlight.js and languages
    const hljs = await import('highlight.js/lib/core');
    const languages = await Promise.all([
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/bash'),
      import('highlight.js/lib/languages/xml')
    ]);

    // Register languages
    hljs.default.registerLanguage('javascript', languages[0].default);
    hljs.default.registerLanguage('bash', languages[1].default);
    hljs.default.registerLanguage('html', languages[2].default);

    // Conditionally load copy plugin
    if (this.$el) {
      const CopyButtonPlugin = await import('highlightjs-copy');
      hljs.default.addPlugin(new CopyButtonPlugin.default({
        autohide: false,
        callback: (text) => console.log('Copied:', text)
      }));

      // Apply highlighting
      hljs.default.highlightElement(this.$refs.codeBlock);
    }
  }
}
</script>