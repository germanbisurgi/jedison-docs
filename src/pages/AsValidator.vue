<template>
  <div>
    <header>
      <h1>As Validator</h1>
    </header>

    <section>
      <h2>Node.js</h2>

      <article>
        <p>To use Jedison as a JSON validator, these options are required:</p>

        <ul>
          <li>
            <strong><code>schema</code></strong> defines the validation rules. This is the only mandatory option when using Jedison for validation. The validator will check JSON
            data
            against this schema without needing a UI container or theme.
          </li>
        </ul>

        <app-highlight language="javascript" :code="mdUsingNode" />
      </article>
    </section>
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
      title: 'Jedison - As Validator',
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