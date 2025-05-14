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
      title: 'Jedison in the Backend side',
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