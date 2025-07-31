<template>
  <div>
    <header>
      <h1>Install</h1>
    </header>

    <section>
      <h2>Using ES Module </h2>

      <article>
        <p>npm:</p>
        <app-highlight language="bash" :code="mdInstallNpm" />
      </article>

      <article>
        <p>yarn:</p>
        <app-highlight language="bash" :code="mdInstallYarn" />
      </article>

      <article>
        <app-highlight language="html" :code="mdUsingEsm" />
      </article>
    </section>

    <section>
      <h2>Using from CDN </h2>

      <article>
        <app-highlight language="html" :code="mdUsingCdn" />
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