<template>
  <div ref="editorContainer" class="code-mirror-container mb-3" />
</template>

<script>
import { EditorView, keymap } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap } from '@codemirror/commands'
import { html } from '@codemirror/lang-html'
import { githubDark } from '@uiw/codemirror-theme-github'

export default {
  name: 'HtmlCodeMirrorEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  emits: ['change'],
  data() {
    return {
      editorView: null,
      editorValue: ''
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
      const extensions = [
        html(),
        keymap.of(defaultKeymap),
        githubDark,
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const content = update.state.doc.toString()
            this.editorValue = content
            this.$emit('change', content)
          }
        })
      ]

      const editorState = EditorState.create({
        doc: this.value,
        extensions
      })

      this.editorView = new EditorView({
        state: editorState,
        parent: this.$refs.editorContainer
      })

      this.editorView.focus()
      this.editorValue = editorState.doc.toString()
    },
    focus() {
      this.editorView?.focus()
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