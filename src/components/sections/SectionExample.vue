<template>
  <article>
    <h2 v-if="heading" v-html="heading" />
    <p v-if="intro" v-html="intro" />

    <template v-if="activationConditions.length">
      <h2>Activation Conditions</h2>
      <ul>
        <li v-for="condition in activationConditions" :key="condition" v-html="condition" />
      </ul>
    </template>

    <template v-if="notesHtml">
      <h2 v-if="notesHeading" v-html="notesHeading" />
      <div v-html="notesHtml" />
    </template>

    <app-live-example :example="resolvedExampleHtml" />
  </article>
</template>

<script>
import AppLiveExample from '@/components/AppLiveExample.vue'
import { buildLiveExampleHtml } from '@/lib/live-example/buildHtml.js'

export default {
  name: 'SectionExample',
  components: {
    AppLiveExample
  },
  props: {
    heading: {
      type: String,
      default: ''
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
    notesHtml: {
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
    }
  },
  computed: {
    resolvedExampleHtml () {
      return this.exampleHtml || (this.example ? buildLiveExampleHtml(this.example) : '')
    }
  }
}
</script>
