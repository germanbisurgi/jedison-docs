<template>
  <div>
    <h1>Themes</h1>

    <p>Jedison supports multiple CSS frameworks through its theme system, allowing you to maintain consistent styling with your application's design system.</p>

    <h2>Supported Themes</h2>

    <div class="theme-grid">
      <div class="theme-card">
        <h3>Default Theme</h3>
        <p>Basic unstyled theme that provides minimal structure</p>
        <code>new Jedison.Theme()</code>
      </div>

      <app-live-example :example="htmlThemesTheme" />

      <div class="theme-card">
        <h3>Bootstrap 3</h3>
        <p>Full support for Bootstrap 3 form styling</p>
        <code>new Jedison.ThemeBootstrap3()</code>
      </div>

      <app-live-example :example="htmlThemesBootstrap3" />


      <div class="theme-card">
        <h3>Bootstrap 4</h3>
        <p>Full support for Bootstrap 4 form styling</p>
        <code>new Jedison.ThemeBootstrap4()</code>
      </div>

      <app-live-example :example="htmlThemesBootstrap4" />

      <div class="theme-card">
        <h3>Bootstrap 5</h3>
        <p>Full support for Bootstrap 5 form styling</p>
        <code>new Jedison.ThemeBootstrap5()</code>
      </div>

      <app-live-example :example="htmlThemesBootstrap5" />
    </div>

    <h2>Icon Library Integration</h2>

    <p>Jedison supports multiple icon libraries which can be specified using the <code>iconLib</code> option:</p>

    <ul>
      <li><code>'glyphicons'</code> - Bootstrap 3's Glyphicons</li>
      <li><code>'bootstrap-icons'</code> - Bootstrap Icons</li>
      <li><code>'fontawesome3'</code> - Font Awesome 3</li>
      <li><code>'fontawesome4'</code> - Font Awesome 4</li>
      <li><code>'fontawesome5'</code> - Font Awesome 5</li>
      <li><code>'fontawesome6'</code> - Font Awesome 6</li>
    </ul>

    <h2>Basic Usage Example</h2>

    <p>This example shows how to initialize Jedison with the Bootstrap 5 theme:</p>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlThemesTheme from '@/assets/html/themes-theme.html?raw'
import htmlThemesBootstrap3 from '@/assets/html/themes-bootstrap3.html?raw'
import htmlThemesBootstrap4 from '@/assets/html/themes-bootstrap4.html?raw'
import htmlThemesBootstrap5 from '@/assets/html/themes-bootstrap5.html?raw'

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
      htmlThemesBootstrap5
    }
  }
}
</script>
