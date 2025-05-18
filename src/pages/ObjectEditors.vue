<template>
  <div>
    <header>
      <h1>Object Editors</h1>
      <p>Multiple editor formats for object-type data with different display and layout options</p>
    </header>

    <section>
      <article>
        <h2>Default Object Editor</h2>
        <p>Renders a fieldset that will contain its properties editors. The fieldset can be collapsed or expanded.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "object"</code></li>
        </ul>

        <h3>Options</h3>
        <ul>
          <li><code>x-addPropertyContent</code>: Custom content for add property button</li>
          <li><code>x-collapseToggleContent</code>: Custom content for collapse toggle</li>
          <li><code>x-deactivateNonRequired</code>: Deactivate non-required properties</li>
          <li><code>x-enableCollapseToggle</code>: Enable collapse/expand functionality</li>
          <li><code>x-propertiesToggleContent</code>: Custom content for properties toggle</li>
          <li><code>x-startCollapsed</code>: Start with the object collapsed</li>
          <li><code>x-titleTemplate</code>: Custom template for the title</li>
        </ul>

        <app-live-example :example="htmlObjectEditorDefault" />
      </article>

      <article>
        <h2>Object Grid Editor</h2>
        <p>Renders a fieldset that uses a grid system to position its property editors. The fieldset can be collapsed or expanded.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "grid"</code></li>
        </ul>

        <h3>Grid Options for properties editors</h3>
        <ul>
          <li><code>columns</code>: How many columns should the editor occupy</li>
          <li><code>offset</code>: How many columns should the editor be offset</li>
          <li><code>newRow</code>: Whether the editor should be put in a new row</li>
        </ul>

        <app-live-example :example="htmlObjectEditorGrid" />
      </article>

      <article>
        <h2>Vertical Navigation Editor</h2>
        <p>Renders a fieldset with vertical navigation for its properties. The fieldset can be collapsed or expanded.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "nav-vertical"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorNavVertical" />
      </article>

      <article>
        <h2>Horizontal Navigation Editor</h2>
        <p>Renders a fieldset with horizontal navigation for its properties. The fieldset can be collapsed or expanded.</p>

        <h3>Activation Conditions</h3>
        <ul>
          <li><code>"type": "object"</code></li>
          <li><code>"x-format": "nav-horizontal"</code></li>
        </ul>

        <app-live-example :example="htmlObjectEditorNavHorizontal" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppLiveExample from "@/components/AppLiveExample.vue"
import htmlObjectEditorDefault from '@/assets/html/object-editors-default.html?raw'
import htmlObjectEditorGrid from '@/assets/html/object-editors-grid.html?raw'
import htmlObjectEditorNavVertical from '@/assets/html/object-editors-nav-vertical.html?raw'
import htmlObjectEditorNavHorizontal from '@/assets/html/object-editors-nav-horizontal.html?raw'

export default {
  name: 'ObjectEditors',
  components: {
    AppLiveExample
  },
  setup() {
    useHead({
      title: 'Jedison - Object Editors Documentation',
      meta: [
        {
          name: 'description',
          content: 'Documentation for object editor formats including grid layout and navigation interfaces',
        }
      ]
    })
  },
  data() {
    return {
      htmlObjectEditorDefault,
      htmlObjectEditorGrid,
      htmlObjectEditorNavVertical,
      htmlObjectEditorNavHorizontal
    }
  }
}
</script>