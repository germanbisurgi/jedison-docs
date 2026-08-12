<template>
  <article>
    <h2 v-if="heading && level === 2" v-html="heading" />
    <h3 v-else-if="heading && level === 3" v-html="heading" />
    <h4 v-else-if="heading && level === 4" v-html="heading" />
    <div v-if="html" v-html="html" />
  </article>
</template>

<script>
// General-purpose prose block: an optional heading plus a block of rich HTML
// (paragraphs, lists, inline code/links/strong, ...). This is the catch-all
// section type - most page content that isn't a code sample or a live demo
// fits here.
export default {
  name: 'SectionProse',
  props: {
    heading: {
      type: String,
      default: ''
    },
    level: {
      type: Number,
      default: 2
    },
    html: {
      type: String,
      default: ''
    }
  }
}
</script>
