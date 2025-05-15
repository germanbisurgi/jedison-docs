<template>
  <aside class="aside">
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
