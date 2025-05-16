<template>
  <div>
    <header>
      <h1>Icons</h1>
    </header>

    <p>Jedison supports multiple icons libraries</p>

    <section>
      <h2>Icon Library Integration</h2>

      <p>Jedison supports multiple icon libraries which can be specified using the <code>iconLib</code> option:</p>

      <article>
        <h3><code>'bootstrap-icons'</code></h3>
        <app-live-example :example="htmlIconsBootstrapIcons" />
      </article>

      <article>
        <h3><code>'fontawesome6'</code></h3>
        <app-live-example :example="htmlIconsFontawesome6" />
      </article>

      <article>
        <h3><code>'fontawesome5'</code></h3>
        <app-live-example :example="htmlIconsFontawesome5" />
      </article>

      <article>
        <h3><code>'fontawesome4'</code></h3>
        <app-live-example :example="htmlIconsFontawesome4" />
      </article>

      <article>
        <h3><code>'fontawesome3'</code></h3>
        <app-live-example :example="htmlIconsFontawesome3" />
      </article>

      <article>
        <h3><code>'glyphicons'</code><small> - Bootstrap 3's Glyphicons</small></h3>
        <app-live-example :example="htmlIconsGlyphicons" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlIconsBootstrapIcons from '@/assets/html/icons-bootstrap-icons.html?raw'
import htmlIconsFontawesome3 from '@/assets/html/icons-fontawesome3.html?raw'
import htmlIconsFontawesome4 from '@/assets/html/icons-fontawesome4.html?raw'
import htmlIconsFontawesome5 from '@/assets/html/icons-fontawesome5.html?raw'
import htmlIconsFontawesome6 from '@/assets/html/icons-fontawesome6.html?raw'
import htmlIconsGlyphicons from '@/assets/html/icons-glyphicons.html?raw'

export default {
  name: 'Icons',
  components: {
    AppLiveExample,
  },
  setup() {
    useHead({
      title: 'Jedison - Icons',
      meta: [
        {
          name: 'description',
          content: 'Jedison icons system documentation',
        },
      ],
    })
  },
  data() {
    return {
      htmlIconsBootstrapIcons,
      htmlIconsFontawesome3,
      htmlIconsFontawesome4,
      htmlIconsFontawesome5,
      htmlIconsFontawesome6,
      htmlIconsGlyphicons
    }
  }
}
</script>
