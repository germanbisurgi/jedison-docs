<template>
  <article>
    <h2 v-if="heading" v-html="heading" />
    <app-highlight :language="language" :code="code" />
  </article>
</template>

<script>
import AppHighlight from '@/components/AppHighlight.vue'

export default {
  name: 'SectionCode',
  components: {
    AppHighlight
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'javascript'
    },
    code: {
      type: String,
      required: true
    }
  }
}
</script>
