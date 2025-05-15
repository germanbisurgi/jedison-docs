<template>
  <div>
    <h1>Events</h1>

    <p>Jedison provides several events:</p>

    <section>
      <h2>Event Listeners</h2>

      <article>
        <h3><code>change</code></h3>
        <p>Triggered when the entire instance changes (whole JSON value/instance/editor).</p>
        <p>Callback receives <code>(initiator)</code> where initiator is either:</p>
        <ul>
          <li><code>"api"</code> - Change from method calls like <code>setValue()</code></li>
          <li><code>"user"</code> - Change from direct user interaction</li>
        </ul>
        <app-highlight language="javascript" :code="mdEventChange" />
      </article>


      <article>
        <h3><code>instance-change</code></h3>
        <p>Triggered when a specific part of the instance changes.</p>
        <p>Callback receives <code>(instance, initiator)</code>:</p>
        <ul>
          <li><code>instance</code>: The changed instance</li>
          <li><code>initiator</code>: Same as <code>change</code> event</li>
        </ul>
        <app-highlight language="javascript" :code="mdEventInstanceChange" />
      </article>

      <article>
        <h3><code>item-add</code></h3>
        <p>Triggered when adding items to arrays.</p>
        <p>Callback receives <code>(initiator, newInstance)</code>:</p>
        <ul>
          <li><code>newInstance</code>: The newly added array item instance</li>
        </ul>
        <app-highlight language="javascript" :code="mdEventItemAdd" />
      </article>

      <article>
        <h3><code>item-delete</code></h3>
        <p>Triggered when removing items from arrays.</p>
        <p>Callback receives <code>(initiator)</code>.</p>
        <app-highlight language="javascript" :code="mdEventItemDelete" />
      </article>

      <article>
        <h3><code>item-move</code></h3>
        <p>Triggered when reordering array items.</p>
        <p>Callback receives <code>(initiator)</code>.</p>
        <app-highlight language="javascript" :code="mdEventItemMove" />
      </article>
    </section>
  </div>
</template>

<script>
import {useHead} from '@unhead/vue'
import AppHighlight from "@/components/AppHighlight.vue"
import mdEventChange from '@/assets/markdown/event-change.md?raw'
import mdEventInstanceChange from '@/assets/markdown/event-instance-change.md?raw'
import mdEventItemAdd from '@/assets/markdown/event-item-add.md?raw'
import mdEventItemDelete from '@/assets/markdown/event-item-delete.md?raw'
import mdEventItemMove from '@/assets/markdown/event-item-move.md?raw'

export default {
  name: 'Events',
  components: {
    AppHighlight
  },
  setup() {
    useHead({
      title: 'Jedison - events',
      meta: [
        {
          name: 'description',
          content: 'Detailed documentation for Jedison event listeners',
        }
      ]
    })
  },
  data() {
    return {
      mdEventChange,
      mdEventInstanceChange,
      mdEventItemAdd,
      mdEventItemDelete,
      mdEventItemMove,
    }
  }
}
</script>