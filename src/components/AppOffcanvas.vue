<template>
  <div id="offcanvasNavbar" ref="offcanvas" class="offcanvas offcanvas-start d-xl-none" tabindex="-1" aria-labelledby="navigation">
    <div class="offcanvas-body">
      <app-pages-nav />
    </div>
  </div>
</template>

<script>
import AppPagesNav from "@/components/AppPagesNav.vue"

export default {
  name: 'AppOffCanvas',
  components: {
    AppPagesNav
  },
  mounted() {}
}
</script>
