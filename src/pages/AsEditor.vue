<template>
  <div>
    <h1>As Editor</h1>

    <h2>Using ES Module </h2>

    <p>npm:</p>
    <app-highlight language="bash" :code="mdInstallNpm" />

    <p>yarn:</p>
    <app-highlight language="bash" :code="mdInstallYarn" />

    <app-highlight language="html" :code="mdUsingEsm" />

    <h2>Using from CDN </h2>

    <app-highlight language="html" :code="mdUsingCdn" />

    <p>To use Jedison as a JSON editor, this options are required:</p>

    <ul>
      <li>
        <strong><code>container</code></strong> specifies where the editor renders in your HTML. Without it, Jedison has no place to display the form. In the example, we attach it to <code>&lt;div id="jedison-container"&gt;</code> using <code>document.querySelector</code>.
      </li>
      <li>
        <strong><code>theme</code></strong> defines the editor's visual style. While Jedison provides a default theme (<code>new Jedison.Theme()</code>), you must include this option—omitting it may break styling or functionality.
      </li>
      <li>
        <strong><code>schema</code></strong> defines the validation rules. The editor will check JSON data
        against this schema.
      </li>
    </ul>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import mdInstallNpm from '@/assets/markdown/install-npm.md?raw'
import mdInstallYarn from '@/assets/markdown/install-yarn.md?raw'
import mdInstallJsdelivr from '@/assets/markdown/install-jsdelivr.md?raw'
import mdInstallUnpkg from '@/assets/markdown/install-unpkg.md?raw'
import mdUsingEsm from '@/assets/markdown/using-esm.md?raw'
import mdUsingCdn from '@/assets/markdown/using-cdn.md?raw'
import mdUsingNode from '@/assets/markdown/using-node.md?raw'

export default {
  name: 'AsEditor',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - As Editor',
      meta: [
        {
          name: 'description',
          content: 'Using Jedison as an Editor in Frontend',
        }
      ]
    })
  },
  data() {
    return {
      mdInstallNpm,
      mdInstallYarn,
      mdInstallJsdelivr,
      mdInstallUnpkg,
      mdUsingEsm,
      mdUsingCdn,
      mdUsingNode
    }
  }
}
</script>