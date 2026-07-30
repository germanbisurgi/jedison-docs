<template>
  <div>
    <header>
      <h1>Overlays</h1>
    </header>

    <article>
      <p>
        Jedison ships an <code>applyOverlay</code> helper that applies an
        <a href="https://spec.openapis.org/overlay/latest.html" target="_blank" rel="noopener">OpenAPI-Overlay</a>-style
        document to a JSON Schema and returns a <strong>new</strong> schema.
        <br>
        An overlay is an ordered list of actions, each targeting nodes with a
        JSONPath and either merging an <code>update</code> into them or
        <code>remove</code>-ing them.
        <br>
        This lets you layer presentation directives (<code>x-format</code>,
        <code>x-hidden</code>, <code>readOnly</code>, …) on top of a schema
        <strong>without editing the source schema</strong> — useful when the
        schema is owned elsewhere (a backend, a shared contract) but the form
        needs UI tweaks per context.
      </p>

      <app-highlight language="javascript" :code="mdOverlayUsage" />

      <p>
        The inputs are never mutated. A malformed overlay throws; an action that
        matches zero nodes is a no-op.
      </p>

      <app-live-example :example="htmlOverlayExample" />
    </article>

    <article>
      <h2>Overlay document</h2>

      <p>
        An overlay document follows the OpenAPI Overlay shape. Only the
        <code>actions</code> array is required by <code>applyOverlay</code>;
        <code>overlay</code> and <code>info</code> are conventional metadata.
      </p>

      <ul>
        <li><code>target</code> — a JSONPath selecting the nodes to act on (required).</li>
        <li><code>update</code> — a value merged into every matched node.</li>
        <li><code>remove: true</code> — removes every matched node instead of updating.</li>
      </ul>

      <p>
        Actions run in order, so a later action can override an earlier one
        (last write wins). <code>copy</code> and <code>extends</code> are
        accepted but ignored.
      </p>
    </article>

    <article>
      <h2>Targeting (JSONPath subset)</h2>

      <p>
        Targets use a small, dependency-free subset of
        <a href="https://www.rfc-editor.org/rfc/rfc9535" target="_blank" rel="noopener">JSONPath (RFC 9535)</a>.
        Every target must start at the root <code>$</code>.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th>Syntax</th>
            <th>Selects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>$</code></td>
            <td>the root (cannot be removed or replaced with a non-object)</td>
          </tr>
          <tr>
            <td><code>.name</code>, <code>['name']</code>, <code>["name"]</code></td>
            <td>a child by name (bracket form allows any key)</td>
          </tr>
          <tr>
            <td><code>[n]</code></td>
            <td>an array item by index (negative counts from the end)</td>
          </tr>
          <tr>
            <td><code>*</code>, <code>.*</code>, <code>[*]</code></td>
            <td>all children of an object or array</td>
          </tr>
          <tr>
            <td><code>..</code></td>
            <td>recursive descent (matches at any depth)</td>
          </tr>
          <tr>
            <td><code>['a','b']</code>, <code>[0,1]</code></td>
            <td>a union of names or indices</td>
          </tr>
        </tbody>
      </table>

      <p>
        Filter expressions (<code>[?…]</code>), array slices
        (<code>[start:end]</code>) and function extensions
        (<code>length()</code>) are <strong>not</strong> supported and throw a
        clear error rather than failing silently.
      </p>
    </article>

    <article>
      <h2>Merge semantics</h2>

      <p>
        <code>update</code> merges into each matched node according to its type:
      </p>

      <ul>
        <li><strong>Object node</strong> — deep-merged (nested objects recurse, arrays concatenate, primitives replace).</li>
        <li><strong>Array node</strong> — concatenated (an array update is appended item by item; a non-array update is pushed).</li>
        <li><strong>Primitive node</strong> — replaced in place.</li>
      </ul>

      <p>
        <code>remove: true</code> deletes matched object properties and splices
        matched array items (indices are removed highest-first so they stay
        valid).
      </p>
    </article>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import AppLiveExample from "@/components/AppLiveExample.vue"
import mdOverlayUsage from '@/assets/markdown/overlay-usage.md?raw'
import htmlOverlayExample from '@/assets/html/overlay-example.html?raw'

export default {
  name: 'Overlay',
  components: {
    AppLiveExample,
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - Overlays',
      meta: [
        {
          name: 'description',
          content: 'How to use Jedison applyOverlay to layer presentation directives onto a JSON Schema with OpenAPI-Overlay-style actions.',
        }
      ]
    })
  },
  data() {
    return {
      mdOverlayUsage,
      htmlOverlayExample
    }
  }
}
</script>
