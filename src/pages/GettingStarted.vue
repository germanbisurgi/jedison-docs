<template>
  <div>
    <h1>Getting Started</h1>

    <h2>What is Jedison?</h2>

    <p>Jedison is both a JSON schema validator and a JSON editor.</p>

    <h2>Features</h2>

    <ul>
      <li>Dependency free</li>
      <li>JSON Schema Validation</li>
      <li>JSON Editing by generating forms from JSON schemas</li>
      <li>Dereferences JSON Schema <code>'$ref'</code> pointers</li>
      <li>
        CSS libraries Integration:
        <ul>
          <li>Bootstrap 3</li>
          <li>Bootstrap 4</li>
          <li>Bootstrap 5</li>
        </ul>
      </li>
      <li>
        Icon libraries Integration:
        <ul>
          <li>Glyphicons</li>
          <li>Bootstrap icons</li>
          <li>FontAwesome 3</li>
          <li>FontAwesome 4</li>
          <li>FontAwesome 5</li>
          <li>FontAwesome 6</li>
        </ul>
      </li>
      <li>
        Plugin Editors:
        <ul>
          <li>Quill - powerful rich text editor</li>
          <li>Flatpickr - lightweight and powerful datetime picker</li>
          <li>Awesomplete - Ultra lightweight, customizable, simple autocomplete widget with zero dependencies</li>
          <li>Jodit - WYSIWYG Editor</li>
          <li>Raty - star Rating Plugin</li>
          <li>IMask - vanilla javascript input mask</li>
          <li>EmojiButton - Vanilla JavaScript Emoji Picker</li>
        </ul>
      </li>
    </ul>

    <h2>Installing</h2>

    <p>Using npm:</p>
    <app-highlight language="bash" :code="mdInstallNpm" />

    <p>Using yarn:</p>
    <app-highlight language="bash" :code="mdInstallYarn" />

    <p>Using jsDelivr CDN:</p>
    <app-highlight language="html" :code="mdInstallJsdelivr" />

    <p>Using unpkg CDN:</p>
    <app-highlight language="html" :code="mdInstallUnpkg" />
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import mdInstallNpm from '@/assets/markdown/install-npm.md?raw'
import mdInstallYarn from '@/assets/markdown/install-yarn.md?raw'
import mdInstallJsdelivr from '@/assets/markdown/install-jsdelivr.md?raw'
import mdInstallUnpkg from '@/assets/markdown/install-unpkg.md?raw'
import AppHighlight from "@/components/AppHighlight.vue"

export default {
  name: 'GettingStarted',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Getting started',
      meta: [
        {
          name: 'description',
          content: 'Jedison getting started',
        }
      ]
    })
  },
  data() {
    return {
      mdInstallNpm: mdInstallNpm,
      mdInstallYarn: mdInstallYarn,
      mdInstallJsdelivr: mdInstallJsdelivr,
      mdInstallUnpkg: mdInstallUnpkg
    }
  }
}
</script>