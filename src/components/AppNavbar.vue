<template>
  <div class="navbar app-navbar">
    <div class="container-fluid">
      <router-link to="/" class="d-flex align-items-center">
        <img src="/images/jedison-mark.svg" alt="Jedison" width="32" height="32">
      </router-link>
      <div class="d-flex align-items-center gap-2">
        <app-search />
        <app-off-canvas-toggle class="d-xl-none" />
      </div>
    </div>
  </div>
</template>

<script>
import AppOffCanvasToggle from "@/components/AppOffCanvasToggle.vue"
import AppSearch from "@/components/AppSearch.vue"

export default {
  name: 'AppNavbar',
  components: {
    AppOffCanvasToggle,
    AppSearch
  },
}
</script>
