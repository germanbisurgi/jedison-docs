<template>
  <h2 v-if="heading && level === 2" :id="headingId">
    <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
  </h2>
  <h3 v-else-if="heading && level === 3" :id="headingId">
    <app-header-anchor :id="headingId" :text="heading" />{{ heading }}
  </h3>
  <p v-if="intro" v-html="renderedIntro" />

  <template v-if="activationConditions.length">
    <component :is="subHeadingTag" :id="activationConditionsId">
      <app-header-anchor :id="activationConditionsId" text="Activation Conditions" />Activation Conditions
    </component>
    <ul>
      <li v-for="condition in renderedActivationConditions" :key="condition" v-html="condition" />
    </ul>
  </template>

  <template v-if="notesMarkdown">
    <h2 v-if="notesHeading && subLevel === 2" :id="notesHeadingId">
      <app-header-anchor :id="notesHeadingId" :text="notesHeading" />{{ notesHeading }}
    </h2>
    <h3 v-else-if="notesHeading" :id="notesHeadingId">
      <app-header-anchor :id="notesHeadingId" :text="notesHeading" />{{ notesHeading }}
    </h3>
    <div v-html="renderedNotes" />
  </template>

  <template v-if="optionsCode">
    <component :is="subHeadingTag" :id="exampleId">
      <app-header-anchor :id="exampleId" text="Example" />Example
    </component>
    <app-highlight :language="optionsLanguage" :code="optionsCode" />
  </template>

  <app-live-example :example="resolvedExampleHtml" />
</template>

<script>
import AppLiveExample from '@/components/AppLiveExample.vue'
import AppHighlight from '@/components/AppHighlight.vue'
import AppHeaderAnchor from '@/components/AppHeaderAnchor.vue'
import { buildLiveExampleHtml, buildDisplayCode } from '@/lib/live-example/buildHtml.js'
import { slugify } from '@/lib/slugify.js'
import { renderMarkdown, renderMarkdownInline } from '@/lib/renderMarkdown.js'

export default {
  name: 'SectionExample',
  components: {
    AppLiveExample,
    AppHighlight,
    AppHeaderAnchor
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    // 2 = section, 3 = article - see main (h1) -> section (h2) -> article (h3).
    // Activation Conditions/Example/Notes below always nest one tier under this.
    level: {
      type: Number,
      default: 2,
      validator: (value) => [2, 3].includes(value)
    },
    intro: {
      type: String,
      default: ''
    },
    activationConditions: {
      type: Array,
      default: () => []
    },
    notesHeading: {
      type: String,
      default: ''
    },
    notesMarkdown: {
      type: String,
      default: ''
    },
    // Config object built into HTML via buildLiveExampleHtml() - the common case.
    example: {
      type: Object,
      default: null
    },
    // Pre-built HTML string, for the handful of demos with real script logic
    // (applyOverlay, RefParser, custom constraints) that can't be reduced to
    // a JSON config. Takes priority over `example` when both are given.
    exampleHtml: {
      type: String,
      default: ''
    },
    // 'schema' (default) prints just the schema - right for pages about a
    // schema/x- option, where the instance-level options (iconLib,
    // btnContents, ...) are incidental demo housekeeping, not the topic.
    // 'full' prints the whole `new Jedison.Create({...})` call - for pages
    // actually about an instance option (iconLib, translations, ...) that a
    // schema-only snippet would omit entirely.
    codeMode: {
      type: String,
      default: 'schema',
      validator: (value) => ['schema', 'full'].includes(value)
    }
  },
  computed: {
    resolvedExampleHtml () {
      return this.exampleHtml || (this.example ? buildLiveExampleHtml(this.example) : '')
    },
    optionsCode () {
      if (!this.example) return ''
      if (this.codeMode === 'full') return buildDisplayCode(this.example)
      const schema = this.example?.createOptions?.schema
      return schema ? JSON.stringify(schema, null, 2) : ''
    },
    optionsLanguage () {
      return this.codeMode === 'full' ? 'javascript' : 'json'
    },
    // Own heading (if any) makes this block a section, pushing its internal
    // sub-headings down to article tier; with no own heading, this block's
    // sub-parts are themselves the page's sections.
    subLevel () {
      return this.heading ? Math.min(this.level + 1, 3) : this.level
    },
    subHeadingTag () {
      return `h${this.subLevel}`
    },
    headingId () {
      return this.heading ? slugify(this.heading) : undefined
    },
    notesHeadingId () {
      return this.notesHeading ? slugify(this.notesHeading) : undefined
    },
    // Scoped under the section's own heading when it has one, since a page
    // can have several headed SectionExamples (e.g. one per allOf/anyOf/
    // oneOf/not on /schema-composition) each with their own "Activation
    // Conditions"/"Example" sub-heading - an unscoped id would collide.
    activationConditionsId () {
      return this.heading ? this.headingId + '-activation-conditions' : 'activation-conditions'
    },
    exampleId () {
      return this.heading ? this.headingId + '-example' : 'example'
    },
    renderedIntro () {
      return renderMarkdown(this.intro)
    },
    renderedNotes () {
      return renderMarkdown(this.notesMarkdown)
    },
    renderedActivationConditions () {
      return this.activationConditions.map(renderMarkdownInline)
    }
  }
}
</script>
