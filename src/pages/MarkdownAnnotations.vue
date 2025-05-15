<template>
  <div>
    <h1>Markdown Annotations</h1>

    <section>
      <article>
        <h3>Marked & DOMPurify</h3>

        <p>
          Jedison supports Markdown formatting in various text fields including titles, descriptions, and info content.
          This is enabled by the <code>marked.js</code> library and activated by setting <code>parseMarkdown: true</code>
          in the Jedison configuration.
        </p>

        <p>
          For security, all HTML output is sanitized using <code>DOMPurify</code>. This prevents XSS attacks while
          preserving safe HTML content. Sanitization is enabled with <code>purifyHtml: true</code> in
          the Jedison configuration.
        </p>

        <app-live-example :example="example" />
      </article>
    </section>

    <section>
      <article>
        <h3>Exposing dependencies</h3>

        <p>
          When using ES modules it may be necessary to expose, <code>DOMPurify</code> and <code>marked</code> as global variables in the <code>window</code> object.
        </p>

        <app-highlight :code="exposing" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlContent from '@/assets/html/markdown-annotations.html?raw'
import exposing from '@/assets/markdown/exposing-marked-and-dompurify.md?raw'
import AppHighlight from "../components/AppHighlight.vue"

export default {
  name: 'MarkdownAnnotations',
  components: {
    AppHighlight,
    AppLiveExample,
  },
  setup() {
    useHead({
      title: 'Jedison - Markdown annotations',
      meta: [
        {
          name: 'description',
          content: 'Jedison Markdown annotations',
        },
      ],
    })
  },
  data() {
    return {
      example: htmlContent,
      exposing: exposing
    }
  }
}
</script>