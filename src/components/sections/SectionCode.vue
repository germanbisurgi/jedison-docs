<template>
  <article>
    <h2 v-if="heading && level === 2" :id="headingId">
      <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
    </h2>
    <h3 v-else-if="heading && level === 3" :id="headingId">
      <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
    </h3>
    <app-highlight :language="language" :code="code" />
  </article>
</template>

<script>
import AppHighlight from '@/components/AppHighlight.vue'
import AppHeaderAnchor from '@/components/AppHeaderAnchor.vue'
import { slugify } from '@/lib/slugify.js'

export default {
  name: 'SectionCode',
  components: {
    AppHighlight,
    AppHeaderAnchor
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    // 2 = section, 3 = article - see main (h1) -> section (h2) -> article (h3).
    level: {
      type: Number,
      default: 2,
      validator: (value) => [2, 3].includes(value)
    },
    language: {
      type: String,
      default: 'javascript'
    },
    code: {
      type: String,
      required: true
    }
  },
  computed: {
    headingId () {
      return this.heading ? slugify(this.heading) : undefined
    }
  }
}
</script>
