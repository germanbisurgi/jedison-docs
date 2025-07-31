<template>
  <div>
    <header>
      <h1>RefParser</h1>
    </header>

    <article>
      <p>
        Jedison includes a <code>RefParser</code> class, which processes a JSON Schema and builds an internal list of dereferenced <code>$ref</code> pointers.
        <br>
        You can pass the <code>RefParser</code> instance to a Jedison instance, which will then use it to handle schema dereferencing internally.
        <br>
        The original schema remains unchanged—schemas are dereferenced at runtime only when needed.
        <br>
        This approach makes it easier to support and manage recursive schemas.
      </p>

      <app-highlight language="javascript" :code="mdRefParserUsage" />
    </article>

    <article>
      <h2>Before Dereferencing</h2>

      <p>
        The <code>"user"</code> property schema has not been dereferenced, so the editor only sees an empty schema.
        <br>
        Since there's no defined <code>type</code>, the schema is interpreted as allowing any JSON type.
        <br>
        As a result, Jedison displays a <code>multiple</code> editor, enabling the user to select from all possible JSON types.
      </p>

      <app-live-example :example="htmlRefParserBefore" />
    </article>


    <article>
      <h2>After Dereferencing</h2>

      <p>
        The <code>"user"</code> property schema has been dereferenced and has now <code>type</code>.
        <br>
        As a result, Jedison renders a <code>object</code> editor.
      </p>
      <app-live-example :example="htmlRefParserAfter" />
    </article>

    <article>
      <h2>Recursive schema</h2>

      <article>
        <p>
          Jedison can handle recursive JSON Schemas, provided certain conditions are met.
          <br>
          In this example, we use the <code>x-deactivateNonRequired</code> keyword, which requires properties to be added manually.
          <br>
          To support this, the Jedison option <code>enablePropertiesToggle: true</code> allows manual activation of properties.
          <br>
          This setup is necessary to prevent infinite recursion during schema processing.
        </p>

        <app-live-example :example="htmlRefParserRecursiveObject" />
      </article>

      <article>
        <p>
          In some cases, handling recursion is easier—for example, when the recursive <code>$ref</code> is inside an <code>"items"</code> schema.
          <br>
          This is because the schema is only instantiated at runtime when a new item is added to the array.
        </p>

        <app-live-example :example="htmlRefParserRecursiveArray" />
      </article>
    </article>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import AppLiveExample from "@/components/AppLiveExample.vue"
import mdRefParserUsage from '@/assets/markdown/ref-parser-usage.md?raw'
import htmlRefParserBefore from '@/assets/html/ref-parser-before.html?raw'
import htmlRefParserAfter from '@/assets/html/ref-parser-after.html?raw'
import htmlRefParserRecursiveObject from '@/assets/html/ref-parser-recursive-object.html?raw'
import htmlRefParserRecursiveArray from '@/assets/html/ref-parser-recursive-array.html?raw'

export default {
  name: 'RefParser',
  components: {
    AppLiveExample,
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - RefParser',
      meta: [
        {
          name: 'description',
          content: 'How to use Jedison RefParser to resolve $ref pointers in JSON Schemas',
        }
      ]
    })
  },
  data() {
    return {
      mdRefParserUsage,
      htmlRefParserBefore,
      htmlRefParserAfter,
      htmlRefParserRecursiveObject,
      htmlRefParserRecursiveArray
    }
  }
}
</script>