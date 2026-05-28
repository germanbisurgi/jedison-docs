<template>
  <div>
    <header>
      <h1>String FilePond</h1>
      <p>Renders a file upload widget using FilePond.</p>
    </header>

    <section>
      <article>
        <h2>Activation Conditions</h2>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "filepond"</code></li>
          <li>FilePond must be available (<code>window.FilePond</code>)</li>
          <li>Plugin: <a href="https://pqina.nl/filepond/" target="_blank" rel="noopener noreferrer">FilePond</a></li>
        </ul>

        <h2>Plugin Options</h2>
        <p>Options can be passed to the plugin via <code>"x-filepond"</code> keyword</p>

        <app-live-example :example="htmlStringEditorFilePond" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorFilePond from '@/assets/html/string-editors-filepond.html?raw'

export default {
  name: 'StringEditorFilePond',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String FilePond Editor',
      meta: [
        {
          name: 'description',
          content: 'Documentation for the string FilePond file upload editor format',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorFilePond
    }
  }
}
</script>
