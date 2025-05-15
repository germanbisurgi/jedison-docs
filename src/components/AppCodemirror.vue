<template>
  <div ref="editorContainer" class="code-mirror-container mb-3" />
</template>

<script>
import {EditorView} from '@codemirror/view'
import {EditorState} from '@codemirror/state'
import {html} from '@codemirror/lang-html'
import {oneDark} from '@codemirror/theme-one-dark'
import {githubLight, githubDark} from '@uiw/codemirror-theme-github'
import {dracula} from '@uiw/codemirror-theme-dracula'

export default {
  name: 'HtmlCodeMirrorEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'githubDark',
      validator: (value) => [
        'oneDark',
        'githubLight',
        'githubDark',
        'dracula',
        'default'
      ].includes(value)
    }
  },
  emits: ['change'],
  data() {
    return {
      editorView: null,
      editorValue: ''
    }
  },
  computed: {
    currentTheme() {
      const themes = {
        oneDark: oneDark,
        githubLight: githubLight,
        githubDark: githubDark,
        dracula: dracula,
        default: null
      }
      return themes[this.theme]
    }
  },
  watch: {
    value(newValue) {
      if (this.editorView && newValue !== this.editorView.state.doc.toString()) {
        this.editorView.dispatch({
          changes: {
            from: 0,
            to: this.editorView.state.doc.length,
            insert: newValue
          }
        })
      }
    },
    readOnly(newVal) {
      if (this.editorView) {
        this.editorView.dispatch({
          effects: EditorState.readOnly.of(newVal)
        })
      }
    },
    theme() {
      this.reinitializeEditor()
    }
  },
  mounted() {
    this.initEditor()
  },
  beforeUnmount() {
    this.editorView?.destroy()
  },
  methods: {
    getValue() {
      return this.editorValue
    },
    initEditor() {
      // Create minimal setup without line numbers
      const minimalSetup = [
        // EditorView.lineWrapping,
        // Add other essential extensions you need
        // but exclude lineNumbers
      ]

      const extensions = [
        ...minimalSetup,
        html(),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const content = update.state.doc.toString()
            this.editorValue = content
            this.$emit('change', content)
          }
        }),
        EditorState.readOnly.of(this.readOnly)
      ]

      if (this.currentTheme) {
        extensions.push(this.currentTheme)
      }

      const editorState = EditorState.create({
        doc: this.value,
        extensions
      })

      this.editorView = new EditorView({
        state: editorState,
        parent: this.$refs.editorContainer
      })

      this.editorValue = editorState.doc.toString()
    },
    reinitializeEditor() {
      if (this.editorView) {
        this.editorView.destroy()
        this.initEditor()
      }
    }
  }
}
</script>

<style>
.code-mirror-container {
  height: 100%;
}

.code-mirror-container .cm-editor {
  height: 100%;
}
</style>