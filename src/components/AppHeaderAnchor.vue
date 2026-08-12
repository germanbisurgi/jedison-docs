<template>
  <a class="header-anchor" :href="'#' + id" :aria-label="'Permalink to “' + text + '”'">​</a>
</template>

<script>
export default {
  name: 'AppHeaderAnchor',
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
