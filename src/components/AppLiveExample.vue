<template>
  <div class="live-example">
    <div class="d-lg-none mb-3">
      <!-- Mobile view - stacked -->
      <div class="mb-3">
        <app-codemirror ref="cm" :value="example" @change="refreshCanUpdate" />
      </div>
      <div class="mb-3" style="height: 400px">
        <iframe ref="iframe" :srcdoc="srcDoc" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>

    <div class="d-none d-lg-block">
      <!-- Desktop view - split panes -->
      <splitpanes style="height: 700px">
        <pane size="30">
          <app-codemirror ref="cm" :value="example" @change="refreshCanUpdate" />
        </pane>
        <pane size="70">
          <iframe ref="iframe" :srcdoc="srcDoc" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
        </pane>
      </splitpanes>
    </div>

    <div v-if="logs.length" class="log-output p-2 border" style="height: 300px; overflow-y: auto; font-family: monospace;">
      <pre v-for="(log, index) in logs" :key="index" :style="{ color: log.color }" class="mb-3">{{ log.text }}</pre>
    </div>

    <button v-if="canUpdate" class="btn btn-primary w-100 mt-3" @click="updateSrcDoc">
      Update
    </button>
  </div>
</template>

<script>
import AppCodemirror from "@/components/AppCodemirror.vue"
import { Splitpanes, Pane } from 'splitpanes'
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
      canUpdate: false,
      logs: []
    }
  },
  mounted() {
    this.srcDoc = this.injectConsoleLogger(this.replaceTemplates(this.example))

    window.addEventListener("message", this.handleIframeLogs)
  },
  beforeUnmount() {
    window.removeEventListener("message", this.handleIframeLogs)
  },
  methods: {
    updateSrcDoc() {
      const code = this.$refs.cm.getValue()
      this.srcDoc = this.injectConsoleLogger(this.replaceTemplates(code))
      this.refreshCanUpdate()
      this.logs = [] // clear logs on reload
    },
    refreshCanUpdate() {
      this.canUpdate = this.srcDoc !== this.injectConsoleLogger(this.replaceTemplates(this.$refs.cm.getValue()))
    },
    replaceTemplates(string) {
      return string.replace("{{theme}}", "dark")
    },
    injectConsoleLogger(html) {
      const loggerScript = `
        <script>
          (function () {
            const methods = ['log', 'info', 'warn', 'error', 'debug'];
            methods.forEach((method) => {
              const original = console[method];
              console[method] = function (...args) {
                try {
                  window.parent.postMessage({
                    source: 'iframe-logger',
                    type: method,
                    log: args.map(arg => {
                      try {
                        return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
                      } catch (e) {
                        return '[Unserializable]';
                      }
                    })
                  }, '*');
                } catch (e) {}
                original.apply(console, args);
              };
            });
          })();
        <\/script>
      `
      // Inject at end of body or whole doc
      return html.includes('</body>')
          ? html.replace('</body>', loggerScript + '</body>')
          : html + loggerScript
    },
    handleIframeLogs(event) {
      const data = event.data
      if (data?.source === 'iframe-logger') {
        const colorMap = {
          log: 'white',
          info: 'blue',
          warn: 'orange',
          error: 'red',
          debug: 'gray'
        }
        this.logs.push({
          text: `[iframe ${data.type}] ${data.log.join(' ')}`,
          color: colorMap[data.type] || 'black'
        })
      }
    }
  }
}
</script>
