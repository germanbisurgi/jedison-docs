<template>
  <div class="container">
    <h1>{{ $t('about') }}</h1>
    <img class="img-fluid" src="@/assets/vue-logo.png" alt="A green V">
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
export default {
  name: 'AppAbout',
  setup() {
    useHead({
      title: 'About',
      meta: [
        {
          name: 'description',
          content: 'This is the about page',
        },
      ],
    })
  }
}
</script>
