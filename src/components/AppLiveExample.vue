<template>
  <div class="live-example">
    <div class="d-lg-none mb-3">
      <!-- Mobile view - stacked -->
      <div class="mb-3">
        <app-codemirror ref="cm" :value="example" @change="refreshCanUpdate" />
      </div>
      <div class="mb-3" style="height: 400px">
        <iframe :srcDoc="srcDoc" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>

    <div class="d-none d-lg-block">
      <!-- Desktop view - split panes -->
      <splitpanes style="height: 700px">
        <pane size="40">
          <app-codemirror ref="cm" :value="example" @change="refreshCanUpdate" />
        </pane>
        <pane size="60">
          <iframe :srcDoc="srcDoc" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
        </pane>
      </splitpanes>
    </div>

    <button v-if="canUpdate" class="btn btn-primary w-100 mt-3" @click="updateSrcDoc">
      Update
    </button>
  </div>
</template>

<script>
import AppCodemirror from "@/components/AppCodemirror.vue"
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: 'AppLiveExample',
  components: {
    AppCodemirror,
    Splitpanes,
    Pane
  },
  props: {
    example: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      srcDoc: '',
      canUpdate: false
    }
  },
  mounted() {
    this.srcDoc = this.replaceTemplates(this.example)
  },
  methods: {
    updateSrcDoc() {
      this.srcDoc = this.replaceTemplates(this.$refs.cm.getValue())
      this.refreshCanUpdate()
    },
    refreshCanUpdate() {
      this.canUpdate = this.srcDoc !== this.$refs.cm.getValue()
    },
    replaceTemplates(string) {
      return string.replace("{{theme}}", "dark")
    },
  }
}
</script>