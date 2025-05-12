<template>
  <div class="container">
    <h1>{{ $t('home') }}</h1>

    <app-editor :schema />
  </div>
</template>

<script>
import {useHead} from "@unhead/vue"
import AppEditor from "@/components/AppEditor.vue"

export default {
  name: 'AppHome',
  components: {
    AppEditor
  },
  setup() {
    useHead({
      title: 'Home',
      meta: [
        {
          name: 'description',
          content: 'This is the home page',
        },
      ],
    })
  },
  data () {
    return {
      schema: {
        "type": "object",
        "title": "Hello world"
      }
    }
  }
}
</script>
