<template>
  <div v-html="marked" />
</template>

<script>
import  { marked } from 'marked'

export default {
  name: 'AppMarked',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      marked: ''
    }
  },
  mounted() {
    this.marked = marked.parse(this.code)
  }
}
</script>