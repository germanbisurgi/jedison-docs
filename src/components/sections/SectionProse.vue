<template>
  <article>
    <h2 v-if="heading && level === 2" :id="headingId">
      <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
    </h2>
    <h3 v-else-if="heading && level === 3" :id="headingId">
      <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
    </h3>
    <div v-if="markdown" v-html="renderedHtml" />
  </article>
</template>

<script>
// General-purpose prose block: an optional heading plus a block of rich HTML
// (paragraphs, lists, inline code/links/strong, ...). This is the catch-all
// section type - most page content that isn't a code sample or a live demo
// fits here.
import { slugify } from '@/lib/slugify.js'
import { renderMarkdown } from '@/lib/renderMarkdown.js'
import AppHeaderAnchor from '@/components/AppHeaderAnchor.vue'

export default {
  name: 'SectionProse',
  components: {
    AppHeaderAnchor
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    // 2 = section, 3 = article - the site's only two sub-heading tiers (see
    // main (h1, SectionsPage.vue) -> section (h2) -> article (h3)).
    level: {
      type: Number,
      default: 2,
      validator: (value) => [2, 3].includes(value)
    },
    markdown: {
      type: String,
      default: ''
    }
  },
  computed: {
    headingId () {
      return this.heading ? slugify(this.heading) : undefined
    },
    renderedHtml () {
      return renderMarkdown(this.markdown)
    }
  }
}
</script>
