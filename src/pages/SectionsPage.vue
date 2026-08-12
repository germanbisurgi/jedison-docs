<template>
  <div>
    <header>
      <h1 :id="headingId">
        <app-header-anchor :id="headingId" :text="page.heading" />{{ page.heading }}
      </h1>
      <p v-if="page.intro" v-html="renderedIntro" />
    </header>

    <article v-for="(group, groupIndex) in groupedSections" :key="page.path + '-group-' + groupIndex">
      <component
        :is="section.component"
        v-for="(section, index) in group"
        :key="page.path + '-' + groupIndex + '-' + index"
        v-bind="section.props" />
    </article>
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
    },
    // Groups each section that introduces its own heading together with any
    // immediately-following headless sections (its code samples, its live
    // example) into one <article> - so an example always renders inside the
    // section/article it demonstrates, rather than as a separate sibling.
    groupedSections () {
      const groups = []
      for (const section of this.page.sections) {
        if (section.props.heading || groups.length === 0) {
          groups.push([section])
        } else {
          groups[groups.length - 1].push(section)
        }
      }
      return groups
    }
  }
}
</script>
