<template>
  <div class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Jedison</a>
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
