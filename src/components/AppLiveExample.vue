<template>
  <div class="live-example mb-3">
    <!-- Mobile View -->
    <div v-if="!isDesktop">
      <button v-if="canUpdateMobile" class="btn btn-primary w-100" @click="updateSrcDoc('mobile')">
        Update
      </button>
      <div>
        <app-codemirror ref="cmMobile" :value="example" @change="() => refreshCanUpdate('mobile')" />
      </div>
      <div style="height: 400px">
        <iframe ref="iframeMobile" :srcdoc="srcDocMobile" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>

    <!-- Desktop View -->
    <div v-else>
      <button v-if="canUpdateDesktop" class="btn btn-primary w-100" @click="updateSrcDoc('desktop')">
        Update
      </button>
      <splitpanes style="height: 700px">
        <pane size="50">
          <app-codemirror ref="cmDesktop" :value="example" @change="() => refreshCanUpdate('desktop')" />
        </pane>
        <pane size="50">
          <iframe ref="iframeDesktop" :srcdoc="srcDocDesktop" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups" frameBorder="0" width="100%" height="100%" />
        </pane>
      </splitpanes>
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
      isDesktop: false
    }
  },
  mounted() {
    this.updateViewport()
    window.addEventListener("resize", this.updateViewport)
    this.srcDocMobile = this.replaceTemplates(this.example)
    this.srcDocDesktop = this.replaceTemplates(this.example)
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateViewport)
  },
  methods: {
    updateViewport() {
      this.isDesktop = window.innerWidth >= 992
    },
    updateSrcDoc(version) {
      const code = this.getEditorValue(version)
      const newSrcDoc = this.replaceTemplates(code)
      if (version === 'mobile') {
        this.srcDocMobile = newSrcDoc
        this.canUpdateMobile = false
      } else if (version === 'desktop') {
        this.srcDocDesktop = newSrcDoc
        this.canUpdateDesktop = false
      }
    },
    refreshCanUpdate(version) {
      const code = this.getEditorValue(version)
      const newSrcDoc = this.replaceTemplates(code)
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
    }
  }
}
</script>