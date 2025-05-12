<template>
  <div class="navbar app-navbar">
    <div class="container-fluid">
      <div />
      <app-off-canvas-toggle class="d-xl-none" />
    </div>
  </div>
</template>

<script>
import AppOffCanvasToggle from "@/components/AppOffCanvasToggle.vue"

export default {
  name: 'AppNavbar',
  components: {
    AppOffCanvasToggle
  },
}
</script>
