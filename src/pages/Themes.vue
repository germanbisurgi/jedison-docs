<template>
  <div>
    <h1>Themes</h1>

    <p>Jedison supports multiple CSS frameworks through its theme system, allowing you to maintain consistent styling with your application's design system.</p>

    <section>
      <h2>Supported Themes</h2>

      <h3>Bootstrap 5</h3>
      <p>Full support for Bootstrap 5 form styling: <code>new Jedison.ThemeBootstrap5()</code></p>
      <app-live-example :example="htmlThemesBootstrap5" />

      <h3>Bootstrap 4</h3>
      <p>Full support for Bootstrap 4 form styling: <code>new Jedison.ThemeBootstrap4()</code></p>
      <app-live-example :example="htmlThemesBootstrap4" />

      <h3>Bootstrap 3</h3>
      <p>Full support for Bootstrap 3 form styling: <code>new Jedison.ThemeBootstrap3()</code></p>
      <app-live-example :example="htmlThemesBootstrap3" />

      <h3>Default Theme</h3>
      <p>Basic unstyled theme that provides minimal structure: <code>new Jedison.Theme()</code></p>
      <app-live-example :example="htmlThemesTheme" />
    </section>

    <section>
      <h2>Icon Library Integration</h2>

      <p>Jedison supports multiple icon libraries which can be specified using the <code>iconLib</code> option:</p>

      <h3><code>'bootstrap-icons'</code></h3>
      <app-live-example :example="htmlIconsBootstrapIcons" />

      <h3><code>'fontawesome6'</code></h3>
      <app-live-example :example="htmlIconsFontawesome6" />

      <h3><code>'fontawesome5'</code></h3>
      <app-live-example :example="htmlIconsFontawesome5" />

      <h3><code>'fontawesome4'</code></h3>
      <app-live-example :example="htmlIconsFontawesome4" />

      <h3><code>'fontawesome3'</code></h3>
      <app-live-example :example="htmlIconsFontawesome3" />

      <h3><code>'glyphicons'</code><small> - Bootstrap 3's Glyphicons</small></h3>
      <app-live-example :example="htmlIconsGlyphicons" />
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlThemesTheme from '@/assets/html/themes-theme.html?raw'
import htmlThemesBootstrap3 from '@/assets/html/themes-bootstrap3.html?raw'
import htmlThemesBootstrap4 from '@/assets/html/themes-bootstrap4.html?raw'
import htmlThemesBootstrap5 from '@/assets/html/themes-bootstrap5.html?raw'
import htmlIconsBootstrapIcons from '@/assets/html/icons-bootstrap-icons.html?raw'
import htmlIconsFontawesome3 from '@/assets/html/icons-fontawesome3.html?raw'
import htmlIconsFontawesome4 from '@/assets/html/icons-fontawesome4.html?raw'
import htmlIconsFontawesome5 from '@/assets/html/icons-fontawesome5.html?raw'
import htmlIconsFontawesome6 from '@/assets/html/icons-fontawesome6.html?raw'
import htmlIconsGlyphicons from '@/assets/html/icons-glyphicons.html?raw'

export default {
  name: 'Themes',
  components: {
    AppLiveExample,
  },
  setup() {
    useHead({
      title: 'Themes',
      meta: [
        {
          name: 'description',
          content: 'Jedison theme system documentation - support for Bootstrap and custom themes',
        },
      ],
    })
  },
  data() {
    return {
      htmlThemesTheme,
      htmlThemesBootstrap3,
      htmlThemesBootstrap4,
      htmlThemesBootstrap5,
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
