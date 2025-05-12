<template>
  <aside class="aside">
    <h5 id="offcanvasLabel" class="pt-3">
      Jedison
    </h5>
    <app-pages-nav />
  </aside>
</template>

<script>
import AppPagesNav from "@/components/AppPagesNav.vue"

export default {
  name: 'AppAside',
  components: {AppPagesNav},
  data() {
    return {}
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.navbar)
    }
  }
}
</script>
