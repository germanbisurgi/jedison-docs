<template>
  <div class="navbar app-navbar">
    <div class="container-fluid">
      <div />
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
