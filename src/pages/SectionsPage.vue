<template>
  <div>
    <header>
      <h1 v-html="page.heading" />
      <p v-if="page.intro" v-html="page.intro" />
    </header>

    <component
      :is="section.component"
      v-for="(section, index) in page.sections"
      :key="index"
      v-bind="section.props" />
  </div>
</template>

<script>
// The one page every route in the manifest renders through. A route's
// content is entirely described by its src/content/pages.js entry - the
// page heading/intro plus an ordered list of { component, props } sections
// (see src/components/sections/*.vue) - so adding or reshaping a page never
// touches a template, only data.
export default {
  name: 'SectionsPage',
  computed: {
    page () {
      return this.$route.meta.pageEntry
    }
  }
}
</script>
