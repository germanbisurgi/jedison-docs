<template>
  <div class="container">
    <h1>{{ $t('home') }}</h1>
    <img class="img-fluid" src="@/assets/vue-logo.png" alt="A green V">
  </div>
</template>

<script>
import {useHead} from "@unhead/vue"

export default {
  name: 'AppHome',
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
  }
}
</script>
