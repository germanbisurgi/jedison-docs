<template>
  <div>
    <header>
      <h1>Options</h1>
    </header>

    <article>
      <p>Jedison provides various configuration options to customize the behavior and appearance of your form instances. These options can be passed when creating a new Jedison instance.</p>
      <p>Some of these options can be set at JSON schema level. Options in schemas are always prefixed with <code>x-</code> (e.g. <code>x-assertFormat</code>) to not collide with future JSON schema spec keywords.</p>
    </article>

    <section>
      <article>
        <h3><code>container</code></h3>
        <p><strong>Type:</strong> <code>HTMLElement</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>The HTML element that will contain the generated form.</p>
      </article>

      <article>
        <h3><code>iconLib</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>Specifies the icon library to use for UI components. Valid options include:</p>
        <ul>
          <li><code>'glyphicons'</code></li>
          <li><code>'bootstrap-icons'</code></li>
          <li><code>'fontawesome3'</code></li>
          <li><code>'fontawesome4'</code></li>
          <li><code>'fontawesome5'</code></li>
          <li><code>'fontawesome6'</code></li>
        </ul>
      </article>

      <article>
        <h3><code>theme</code></h3>
        <p><strong>Type:</strong> <code>Theme</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>An instance of <code>Theme</code> to apply to the UI. Valid options include:</p>
        <ul>
          <li><code>new Jedison.Theme()</code></li>
          <li><code>new Jedison.ThemeBootstrap3()</code></li>
          <li><code>new Jedison.ThemeBootstrap4()</code></li>
          <li><code>new Jedison.ThemeBootstrap5()</code></li>
        </ul>
      </article>

      <article>
        <h3><code>refParser</code></h3>
        <p><strong>Type:</strong> <code>RefParser</code></p>
        <p><strong>Default:</strong> <code>null</code></p>
        <p>An instance of <code>RefParser</code> to handle <code>'$ref'</code> keywords.</p>
        <ul>
          <li><code>new Jedison.RefParser</code></li>
        </ul>
      </article>

      <article>
        <h3><code>translations</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>'{}'</code></p>
        <p>Used to add new translations or override the default ones. Uses template placeholders that get dynamically replaced with actual values during runtime</p>
        <app-highlight :code="translationsExample" />
      </article>

      <article>
        <h3><code>parseMarkdown</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Transform <code>markdown</code> to <code>html</code> in annotations like <code>title</code> and <code>description</code> if marked.js is available as <code>window.marked</code>.</p>
      </article>

      <article>
        <h3><code>purifyHtml</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Sanitizes <code>html</code> tags from annotations like if DOMPurify.js is available as <code>window.DOMPurify</code>.</p>
      </article>

      <article>
        <h3><code>purifyData</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Sanitizes string values during data input operations if DOMPurify.js is available as <code>window.DOMPurify</code>. This provides security against XSS attacks in user input data, separate from HTML content purification.</p>
      </article>

      <article>
        <h3><code>domPurifyOptions</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>DOMPurify options.</p>
        <app-highlight :code="domPurifyOptionsExample" />
      </article>

      <article>
        <h3><code>schema</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>A JSON schema for the form.</p>
      </article>

      <article>
        <h3><code>id</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>''</code></p>
        <p>Used to prefix <code>id</code> and <code>for</code> attributes. Useful if you want to have multiple Jedison forms on the page</p>
      </article>

      <article>
        <h3><code>language</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'en'</code></p>
        <p>Set default language for error messages and UI texts.</p>
      </article>

      <article>
        <h3><code>data</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>undefined</code></p>
        <p>Initial JSON data to populate the form.</p>
      </article>

      <article>
        <h3><code>customEditors</code></h3>
        <p><strong>Type:</strong> <code>array</code></p>
        <p><strong>Default:</strong> <code>[]</code></p>
        <p>An array of custom editor classes.</p>
        <app-highlight :code="customEditorsExample" />
      </article>

      <article>
        <h3><code>hiddenInputAttributes</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>Attributes for the hidden input that contains the whole JSON value of the form.</p>
        <app-highlight :code="hiddenInputAttributesExample" />
      </article>

      <article>
        <h3><code>settings</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p><strong>Default:</strong> <code>{}</code></p>
        <p>An object to store user data and functions. Useful for when there is the need to provide options to configure a plugin but the options can not be used in schemas because of JSON data limitations. Can be used in annotations when using templates.</p>
        <app-highlight :code="settingsExample" />
      </article>

      <article>
        <h3><code>btnContents</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If buttons texts should be displayed.</p>
      </article>

      <article>
        <h3><code>btnIcons</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If buttons icons should be displayed.</p>
      </article>

      <article>
        <h3><code>enforceConst</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enforces the <code>const</code> keyword value in editors. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>enforceEnum</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> uses the first item in the enum as the default value. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>enforceRequired</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> required properties are always displayed and added when missing. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>enforceAdditionalProperties</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When <code>true</code> the editor removes all properties that are not listed in properties. <span class="text-warning">Works only in editor mode</span></p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>switcherInput</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'select'</code></p>
        <p>Sets the input type that will be used to witch between multiple editors.</p>
        <ul>
          <li><code>select</code></li>
          <li><code>radios</code></li>
          <li><code>radios-inline</code></li>
        </ul>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <!--      <article>-->
      <!--        <h3><code>mergeAllOf</code></h3>-->
      <!--        <p><strong>Type:</strong> <code>boolean</code></p>-->
      <!--        <p><strong>Default:</strong> <code>false</code></p>-->
      <!--        <p>Merge <code>allOf</code> subschemas into it's owner schema. <strong>WARNING</strong>, merging schemas can lead to unwanted overrides. Use at your own risk.</p>-->
      <!--        <p><strong>x-option:</strong> ✅</p>-->
      <!--      </article>-->

      <article>
        <h3><code>enablePropertiesToggle</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables a toggle to show/hide the properties dialog in the UI.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>embedSwitcher</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>When enabled, embeds the type switcher UI inside the selected editor's header instead of displaying it separately above the content. Applies to <code>oneOf</code> and <code>anyOf</code> schemas.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>enableCollapseToggle</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Allows sections to be collapsible in the UI.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>deactivateNonRequired</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Deactivates non-required properties. Useful when working with circular schemas to avoid infinite recursion.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>showErrors</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'change'</code></p>
        <p>Determines when to display validation errors. Options include:</p>
        <ul>
          <li><code>'never'</code> - Never show validation errors automatically</li>
          <li><code>'change'</code> - Show errors when the input loses focus (default)</li>
          <li><code>'input'</code> - Show errors immediately as the user types (for text inputs, textareas, and number inputs)</li>
          <li><code>'always'</code> - Always show validation errors</li>
        </ul>
        <p><strong>Note:</strong> The <code>'input'</code> option only affects text-based inputs (string inputs, textareas, number inputs). Selection inputs (dropdowns, checkboxes, radios) continue using the <code>'change'</code> event as it's more appropriate for their interaction model.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>assertFormat</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Treats <code>'format'</code> as a validator rather than just an annotation.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>subErrors</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>When enabled, validation errors include detailed sub-error information showing which nested property or item failed validation.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayDelete</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array delete buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayMove</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array move up and move down buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>editJsonData</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables inline JSON editing mode, allowing users to directly edit the JSON data within form fields.</p>
        <app-highlight :code="editJsonDataExample" />
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayAdd</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array add buttons should be displayed.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>objectAdd</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If the "Add property" button should be displayed on object editors.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayDeleteConfirm</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When enabled, shows a confirmation dialog before deleting an array item.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayDeleteAll</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button to the array editor's header actions area.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayFooterAdd</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds an "Add item" button in the footer of the array editor.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayFooterButtonsPosition</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>'right'</code></p>
        <p><strong>Options:</strong> <code>'left'</code>, <code>'right'</code></p>
        <p>Controls the alignment of footer buttons globally.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>arrayFooterDeleteAll</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Adds a "Delete all items" button in the footer of the array editor.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>

      <article>
        <h3><code>useConstraintAttributes</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>When enabled, editors will set native HTML constraint attributes based on JSON Schema keywords:</p>
        <ul>
          <li><strong>Number inputs:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>Number range:</strong> <code>min</code>, <code>max</code></li>
          <li><strong>String inputs:</strong> <code>minlength</code>, <code>maxlength</code>, <code>pattern</code></li>
          <li><strong>Textarea:</strong> <code>minlength</code>, <code>maxlength</code></li>
        </ul>
        <p>This enables native browser validation hints and constraints.</p>
        <p><strong>x-option:</strong> ✅</p>
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import customEditorsExample from '@/assets/markdown/customEditors-example.md?raw'
import domPurifyOptionsExample from '@/assets/markdown/domPurifyOptions-example.md?raw'
import editJsonDataExample from '@/assets/markdown/editJsonData-example.md?raw'
import hiddenInputAttributesExample from '@/assets/markdown/hiddenInputAttributes-example.md?raw'
import settingsExample from '@/assets/markdown/settings-example.md?raw'
import translationsExample from '@/assets/markdown/translations-example.md?raw'

export default {
  name: 'InstanceOptions',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Instance Options',
      meta: [
        {
          name: 'description',
          content: 'Jedison instance options documentation',
        }
      ]
    })
  },
  data() {
    return {
      customEditorsExample,
      domPurifyOptionsExample,
      editJsonDataExample,
      hiddenInputAttributesExample,
      settingsExample,
      translationsExample
    }
  }
}
</script>