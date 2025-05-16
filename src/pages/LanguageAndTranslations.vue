<template>
  <div>
    <header>
      <h1>Language and Translations</h1>
    </header>

    <section>
      <h2>Default Language</h2>
      <p>The default language for UI and error messages is <code>en</code> (english). You can change this to any supported language or add your own translations.</p>

      <p>Setting German as Default</p>
      <app-highlight language="javascript" :code="mdOptionLanguage" />
    </section>

    <section>
      <h2>Languages Included</h2>
      <p>Jedison comes with these languages ready to use:</p>
      <ul>
        <li><code>en</code> (english)</li>
        <li><code>de</code> (german)</li>
        <li><code>it</code> (italian)</li>
        <li><code>es</code> (spanish)</li>
      </ul>
      <p>If a translation is missing or you forget to add one, Jedison will automatically use the English version instead.</p>
    </section>

    <section>
      <h2>Adding Translations</h2>
      <p>You can add new languages using the <code>translations</code> option. Just set the <code>language</code> option to your new language code.</p>
      <p>You can also override the default English translations if needed.</p>

      <article>
        <h3>Translation and Templates</h3>

        <p>
          The translation system uses template placeholders that get dynamically replaced with actual values during runtime. These placeholders are wrapped in double curly braces
          <code>{{ property }}</code> and provide context-specific information in error messages.
        </p>

        <p>
          For example, when validating against a <code>minLength</code> constraint, the template <code>{{ minLength }}</code> will be replaced with the schema's specified minimum
          length value. This allows for dynamic, accurate error messages that reflect the actual validation rules.
        </p>

        <app-highlight language="javascript" :code="mdGermanTranslation" />
      </article>

      <article>
        <h3>German Translation Example</h3>
        <p>See how the placeholders work in this example. The error message will show "Muss mindestens <code>3</code> Zeichen lang sein" because of <code>minLength: 3</code>.</p>

        <p>Notice that all UI elements including buttons were also translated to German in this example.</p>

        <p>We used the option <code>showErrors: 'always'</code> to make validation messages appear immediately rather than waiting for user interaction.</p>
        <app-live-example :example="htmlLanguageAndTranslations" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import mdOptionLanguage from '@/assets/markdown/option-language.md?raw'
import mdGermanTranslation from '@/assets/markdown/translation-german.md?raw'
import htmlLanguageAndTranslations from '@/assets/html/language-and-translations.html?raw'
import AppLiveExample from "@/components/AppLiveExample.vue"

export default {
  name: 'LanguageAndTranslations',
  components: {
    AppLiveExample,
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Language and Translations',
      meta: [
        {
          name: 'description',
          content: 'Configure languages and translations for Jedison forms',
        }
      ]
    })
  },
  data() {
    return {
      mdOptionLanguage,
      mdGermanTranslation,
      htmlLanguageAndTranslations
    }
  }
}
</script>