<template>
  <div>
    <header>
      <h1>String Editors</h1>
      <p>Multiple editor formats for string-type data with different display and input options</p>
    </header>

    <section>
      <article>
        <h2>Default String Input</h2>
        <p>The standard text input that appears for string types without specific formatting requirements.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorDefault" />
      </article>

      <article>
        <h2>String Radios</h2>
        <p>Renders as many radio type inputs as values in the <code>enum</code> constraint. The radio labels can be customized with the <code>enumTitles</code> option.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorRadios" />
      </article>

      <article>
        <h2>Inline String Radios</h2>
        <p>Horizontal layout version of the radio editor for more compact displays.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
          <li><code>"x-format": "radios-inline"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorRadiosInline" />
      </article>

      <article>
        <h2>String Select</h2>
        <p>Renders a select dropdown with options from the <code>enum</code> constraint. The options labels can be customized with the <code>enumTitles</code> option.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"enum": [...]</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorSelect" />
      </article>

      <article>
        <h2>String Textarea</h2>
        <p>Renders a multi-line textarea input for longer string content.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-format": "textarea"</code></li>
        </ul>

        <app-live-example :example="htmlStringEditorTextarea" />
      </article>

      <article>
        <h2>String Awesomplete</h2>
        <p>Renders an autocomplete featured text input using Awesomplete.js.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-awesomplete": { ... }</code></li>
          <li>Awesomplete.js must be available (<code>window.Awesomplete</code>)</li>
        </ul>

        <app-live-example :example="htmlStringEditorAwesomplete" />
      </article>

      <article>
        <h2>String Flatpickr</h2>
        <p>Renders a datetime picker using flatpickr.js.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-flatpickr": { ... }</code></li>
          <li>flatpickr.js must be available (<code>window.flatpickr</code>)</li>
        </ul>

        <app-live-example :example="htmlStringEditorFlatpickr" />
      </article>

      <article>
        <h2>String IMask</h2>
        <p>Renders a masked text input using IMask.js.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-imask": { ... }</code></li>
          <li>IMask.js must be available (<code>window.IMask</code>)</li>
        </ul>

        <app-live-example :example="htmlStringEditorImask" />
      </article>

      <article>
        <h2>String Jodit</h2>
        <p>Renders a WYSIWYG editor using Jodit.js.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-jodit": { ... }</code></li>
          <li>Jodit.js must be available (<code>window.Jodit</code>)</li>
        </ul>

        <app-live-example :example="htmlStringEditorJodit" />
      </article>

      <article>
        <h2>String Quill</h2>
        <p>Renders a WYSIWYG editor using Quill.js.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "string"</code></li>
          <li><code>"x-quill": { ... }</code></li>
          <li>Quill.js must be available (<code>window.Quill</code>)</li>
        </ul>

        <app-live-example :example="htmlStringEditorQuill" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlStringEditorDefault from '@/assets/html/string-editors-default.html?raw'
import htmlStringEditorRadios from '@/assets/html/string-editors-radios.html?raw'
import htmlStringEditorRadiosInline from '@/assets/html/string-editors-radios-inline.html?raw'
import htmlStringEditorSelect from '@/assets/html/string-editors-select.html?raw'
import htmlStringEditorTextarea from '@/assets/html/string-editors-textarea.html?raw'
import htmlStringEditorAwesomplete from '@/assets/html/string-editors-awesomplete.html?raw'
import htmlStringEditorFlatpickr from '@/assets/html/string-editors-flatpickr.html?raw'
import htmlStringEditorImask from '@/assets/html/string-editors-imask.html?raw'
import htmlStringEditorJodit from '@/assets/html/string-editors-jodit.html?raw'
import htmlStringEditorQuill from '@/assets/html/string-editors-quill.html?raw'

export default {
  name: 'StringEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - String Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for string editor formats including text inputs, selects, WYSIWYG editors, and specialized input masks',
        }
      ]
    })
  },
  data() {
    return {
      htmlStringEditorDefault,
      htmlStringEditorRadios,
      htmlStringEditorRadiosInline,
      htmlStringEditorSelect,
      htmlStringEditorTextarea,
      htmlStringEditorAwesomplete,
      htmlStringEditorFlatpickr,
      htmlStringEditorImask,
      htmlStringEditorJodit,
      htmlStringEditorQuill
    }
  }
}
</script>