<template>
  <div>
    <header>
      <h1>Schema Options</h1>
    </header>

    <article>
      <p>Options in schemas are always prefixed with <code>x-</code> (e.g. <code>x-assertFormat</code>) to not collide with future JSON schema spec keywords.</p>
    </article>

    <section>
      <article>
        <h3><code>x-addPropertyContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "add property" buttons.</p>
      </article>

      <article>
        <h3><code>x-arrayAdd</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "add" buttons should be displayed.</p>
      </article>

      <article>
        <h3><code>x-arrayAddContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "add" buttons.</p>
      </article>

      <article>
        <h3><code>x-arrayDelete</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "delete" buttons should be displayed.</p>
      </article>

      <article>
        <h3><code>x-arrayDeleteContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "delete" buttons.</p>
      </article>

      <article>
        <h3><code>x-arrayDragContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "drag" buttons.</p>
      </article>

      <article>
        <h3><code>x-arrayMove</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>If array "move up" and "move down" buttons should be displayed.</p>
      </article>

      <article>
        <h3><code>x-arrayMoveDownContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "move down" buttons.</p>
      </article>

      <article>
        <h3><code>x-arrayMoveUpContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for array "move up" buttons.</p>
      </article>

      <article>
        <h3><code>x-assertFormat</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Treats <code>"format"</code> as a validator rather than just an annotation.</p>
      </article>

      <article>
        <h3><code>x-collapseToggleContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "collapse" buttons.</p>
      </article>

      <article>
        <h3><code>x-containerAttributes</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p>Editors container HTML attributes can be set using this option. Attributes such as <code>class</code> or <code>data-*</code> will be applied to the container element.</p>
      </article>

      <article>
        <h3><code>x-deactivateNonRequired</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Whether the editor should deactivate (hide) or activate (show) non required properties. Works only with <code>object</code> type editors.</p>
      </article>

      <article>
        <h3><code>x-editJsonData</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Enables inline JSON editing mode for this specific schema, allowing users to directly edit the JSON data within form fields.</p>
        <app-highlight :code="xEditJsonDataExample" />
      </article>

      <article>
        <h3><code>x-enableCollapseToggle</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Display a collapse button used to collapse or expand editors that support collapse like <code>object</code> and <code>arrays</code>.</p>
      </article>

      <article>
        <h3><code>x-enforceConst</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Value will remain whatever is defined in schema <code>"const"</code>.</p>
      </article>

      <article>
        <h3><code>x-enforceEnum</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>true</code></p>
        <p>Whether the editor initial value will be the first item in the <code>"enum"</code>.</p>
      </article>

      <article>
        <h3><code>x-enumTitles</code></h3>
        <p><strong>Type:</strong> <code>string[]</code></p>
        <p>Used to display user-friendly labels in the editor instead of those listed in <code>"enum"</code>.</p>
      </article>

      <article>
        <h3><code>x-format</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p>Determines which editor UI will be used to edit the json instance.</p>
      </article>

      <article>
        <h3><code>x-grid</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p>A configuration object to determine the position of the property editor in the parent's grid.</p>
        <p><strong>Options:</strong></p>
        <ul>
          <li><code>columns</code>: How many columns should the editor occupy. The number of columns can vary between css frameworks and their configuration.</li>
          <li><code>offset</code>: How many columns should the editor be offsetted</li>
          <li><code>newRow</code>: Whether the editor should be put in a new row</li>
        </ul>
      </article>

      <article>
        <h3><code>x-hidden</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Editors can be hidden using this option. When set to <code>true</code>, the editor is hidden.</p>
      </article>

      <article>
        <h3><code>x-info</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p>Used to display extra information.</p>
        <p><strong>Options:</strong></p>
        <ul>
          <li><code>variant</code>: <code>"modal"</code></li>
          <li><code>title</code>: Plain text or <code>markdown</code></li>
          <li><code>content</code>: Plain text or <code>markdown</code></li>
        </ul>
      </article>

      <article>
        <h3><code>x-inputAttributes</code></h3>
        <p><strong>Type:</strong> <code>object</code></p>
        <p>Used to set attributes for the editor input if it has one.</p>
      </article>

      <article>
        <h3><code>x-messages</code></h3>
        <p><strong>Type:</strong> <code>object</code> | <code>string[]</code></p>
        <p>Validation error messages can be customized using this option in the schema. The option can be used in different ways:</p>
        
        <h4>Array format</h4>
        <p>Pass messages as an array of strings:</p>
        <app-highlight language="json" :code="xMessagesArray" />
        
        <h4>Object format with validation keywords</h4>
        <p>Pass messages as an object with validation keywords as keys:</p>
        <app-highlight language="json" :code="xMessagesObject" />
        
        <h4>Internationalization format</h4>
        <p>Pass messages with language codes for internationalization support:</p>
        <app-highlight language="json" :code="xMessagesI18n" />
      </article>

      <article>
        <h3><code>x-propertiesToggleContent</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Text content for "properties" buttons.</p>
      </article>

      <article>
        <h3><code>x-showErrors</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> <code>"change"</code></p>
        <p><strong>Options:</strong> <code>"never"</code>, <code>"change"</code>, <code>"input"</code>, <code>"always"</code></p>
        <p>Determines when to display validation errors for this specific schema. Overrides the instance-level <code>showErrors</code> setting.</p>
        <p><strong>Note:</strong> The <code>"input"</code> option provides real-time validation as the user types, but only affects text-based inputs (string inputs, textareas, number inputs).</p>
      </article>

      <article>
        <h3><code>x-sortable</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Items can be sorted via drag and drop if Sortable.js is available.</p>
      </article>

      <article>
        <h3><code>x-startCollapsed</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p>Whether the editor should start expanded or collapsed. Works on editors that support collapse like <code>object</code> and <code>arrays</code>.</p>
      </article>

      <article>
        <h3><code>x-switcherTitle</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p><strong>Default:</strong> property name or <code>"title"</code></p>
        <p>The text displayed in the multiple editor switcher to select this sub-schema editor.</p>
      </article>

      <article>
        <h3><code>x-titleHidden</code></h3>
        <p><strong>Type:</strong> <code>boolean</code></p>
        <p><strong>Default:</strong> <code>false</code></p>
        <p>Hides the editor title.</p>
      </article>

      <article>
        <h3><code>x-titleIconClass</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p>Icon class to use in titles if using any.</p>
      </article>

      <article>
        <h3><code>x-titleTemplate</code></h3>
        <p><strong>Type:</strong> <code>string</code></p>
        <p>A template to form titles dynamically.</p>
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import xMessagesArray from '@/assets/markdown/x-messages-array.md?raw'
import xMessagesObject from '@/assets/markdown/x-messages-object.md?raw'
import xMessagesI18n from '@/assets/markdown/x-messages-i18n.md?raw'
import xEditJsonDataExample from '@/assets/markdown/x-editJsonData-example.md?raw'

export default {
  name: 'SchemaOptions',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Schema Options',
      meta: [
        {
          name: 'description',
          content: 'Jedison schema options documentation',
        }
      ]
    })
  },
  data() {
    return {
      xMessagesArray,
      xMessagesObject,
      xMessagesI18n,
      xEditJsonDataExample
    }
  }
}
</script>