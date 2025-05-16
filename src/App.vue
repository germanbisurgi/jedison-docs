<template>
  <div class="app-container">
    <app-off-canvas />

    <div class="vh-100 overflow-y-auto">
      <div class="d-flex">
        <app-aside class="vh-100 overflow-y-auto d-none d-xl-block" />

        <div class="wrapper border-start border-end">
          <app-navbar />
          <router-view class="app-content" />
          <app-next-previous class="app-prev-next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppOffCanvas from '@/components/AppOffCanvas.vue'
import AppAside from '@/components/AppAside.vue'
import AppNextPrevious from '@/components/AppNextPrevious.vue'

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