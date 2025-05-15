<template>
  <div>
    <h1>Use as a Validator</h1>

    <h2>Using ES Module </h2>

    <p>npm:</p>
    <app-highlight language="bash" :code="mdInstallNpm" />

    <p>yarn:</p>
    <app-highlight language="bash" :code="mdInstallYarn" />

    <h2>Node.js</h2>

    <app-highlight language="javascript" :code="mdUsingNode" />

    <p>To use Jedison as a JSON validator, this options are required:</p>

    <ul>
      <li>
        <strong><code>schema</code></strong> defines the validation rules. This is the only mandatory option when using Jedison for validation. The validator will check JSON data
        against this schema without needing a UI container or theme.
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
  name: 'AsValidator',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Using as a Validator',
      meta: [
        {
          name: 'description',
          content: 'Using Jedison as a Validator in Backend',
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