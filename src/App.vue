<template>
  <div class="container-fluid">
    <app-navbar />
    <app-off-canvas />
    <div class="d-flex">
      <app-aside class="d-none d-xl-block" />
      <div class="container-xl">
        <router-view />

        <app-next-previous />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppOffCanvas from '@/components/AppOffCanvas.vue'
import AppAside from '@/components/AppAside.vue'
import AppNextPrevious from "@/components/AppNextPrevious.vue"

export default {
  components: {
    AppNextPrevious,
    AppNavbar,
    AppOffCanvas,
    AppAside
  }
}
</script>

<style lang="scss">
@import "scss/main";
</style>