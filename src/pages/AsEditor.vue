<template>
  <div>
    <h1>Use as an Editor</h1>

    <h2>Using ES Module </h2>

    <p>npm:</p>
    <app-highlight language="bash" :code="mdInstallNpm" />

    <p>yarn:</p>
    <app-highlight language="bash" :code="mdInstallYarn" />

    <app-highlight language="html" :code="mdUsingEsm" />

    <h2>Using from CDN </h2>

    <app-highlight language="html" :code="mdUsingCdn" />
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
      title: 'Using Jedison as an Editor in Frontend',
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