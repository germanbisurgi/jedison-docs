<template>
  <div id="offcanvasNavbar" ref="offcanvas" class="offcanvas offcanvas-start d-xl-none" tabindex="-1" aria-labelledby="navigation">
    <div class="offcanvas-header">
      <h5 id="offcanvasLabel" class="offcanvas-title">
        Jedison
      </h5>
    </div>
    <div class="offcanvas-body">
      <app-pages-nav />
    </div>
  </div>
</template>

<script>
import AppPagesNav from "@/components/AppPagesNav.vue"
// import { Offcanvas } from 'bootstrap'

export default {
  name: 'AppOffCanvas',
  components: {
    AppPagesNav
  },
  mounted() {
    // const offcanvas = Offcanvas.getInstance(this.$refs.offcanvas)
    //
    // document.querySelectorAll('.offcanvas a').forEach(link => {
    //   link.addEventListener('click', () => {
    //     offcanvas.hide()
    //   })
    // })
  }
}
</script>
