<template>
  <div class="live-example mb-3">
    <div class="d-lg-none">
      <button v-if="canUpdateMobile" class="btn btn-primary w-100" @click="updateSrcDoc('mobile')">
        Update
      </button>
      <div>
        <app-codemirror ref="cmMobile" :value="example" @change="() => refreshCanUpdate('mobile')" />
      </div>
      <div style="height: 400px">
        <iframe ref="iframeMobile" :srcdoc="srcDocMobile" sandbox="allow-scripts allow-same-origin" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>

    <div class="d-none d-lg-block">
      <!-- Desktop view -->
      <button v-if="canUpdateDesktop" class="btn btn-primary w-100" @click="updateSrcDoc('desktop')">
        Update
      </button>
      <splitpanes style="height: 700px">
        <pane size="30">
          <app-codemirror ref="cmDesktop" :value="example" @change="() => refreshCanUpdate('desktop')" />
        </pane>
        <pane size="70">
          <iframe ref="iframeDesktop" :srcdoc="srcDocDesktop" sandbox="allow-scripts allow-same-origin" frameBorder="0" width="100%" height="100%" />
        </pane>
      </splitpanes>
    </div>

    <div v-if="logs.length" class="log-output p-2 border" style="height: 300px; overflow-y: auto; font-family: monospace;">
      <pre v-for="(log, index) in logs" :key="index" :style="{ color: log.color }">{{ log.text }}</pre>
    </div>
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
      srcDocMobile: '',
      srcDocDesktop: '',
      canUpdateMobile: false,
      canUpdateDesktop: false,
      logs: []
    }
  },
  mounted() {
    // Initialize both with example code
    this.srcDocMobile = this.injectConsoleLogger(this.replaceTemplates(this.example))
    this.srcDocDesktop = this.injectConsoleLogger(this.replaceTemplates(this.example))

    window.addEventListener("message", this.handleIframeLogs)
  },
  beforeUnmount() {
    window.removeEventListener("message", this.handleIframeLogs)
  },
  methods: {
    updateSrcDoc(version) {
      const code = this.getEditorValue(version)
      const newSrcDoc = this.injectConsoleLogger(this.replaceTemplates(code))
      if (version === 'mobile') {
        this.srcDocMobile = newSrcDoc
        this.canUpdateMobile = false
      } else if (version === 'desktop') {
        this.srcDocDesktop = newSrcDoc
        this.canUpdateDesktop = false
      }
      this.logs = []
    },
    refreshCanUpdate(version) {
      const code = this.getEditorValue(version)
      const newSrcDoc = this.injectConsoleLogger(this.replaceTemplates(code))

      if (version === 'mobile') {
        this.canUpdateMobile = this.srcDocMobile !== newSrcDoc
      } else if (version === 'desktop') {
        this.canUpdateDesktop = this.srcDocDesktop !== newSrcDoc
      }
    },
    getEditorValue(version) {
      const editor = version === 'mobile' ? this.$refs.cmMobile : this.$refs.cmDesktop
      return editor && editor.getValue ? editor.getValue() : ''
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
