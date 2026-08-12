<template>
  <div>
    <header>
      <h1 :id="headingId">
        <app-header-anchor :id="headingId" :text="page.heading" />{{ page.heading }}
      </h1>
      <p v-if="page.intro" v-html="renderedIntro" />
    </header>

    <component
      :is="section.component"
      v-for="(section, index) in page.sections"
      :key="page.path + '-' + index"
      v-bind="section.props" />
  </div>
</template>

<script>
// The one page every route in the manifest renders through. A route's
// content is entirely described by its src/content/pages.js entry - the
// page heading/intro plus an ordered list of { component, props } sections
// (see src/components/sections/*.vue) - so adding or reshaping a page never
// touches a template, only data.
import { renderMarkdown } from '@/lib/renderMarkdown.js'
import { slugify } from '@/lib/slugify.js'
import AppHeaderAnchor from '@/components/AppHeaderAnchor.vue'

export default {
  name: 'SectionsPage',
  components: {
    AppHeaderAnchor
  },
  computed: {
    page () {
      return this.$route.meta.pageEntry
    },
    headingId () {
      return slugify(this.page.heading)
    },
    renderedIntro () {
      return renderMarkdown(this.page.intro)
    }
  }
}
</script>
