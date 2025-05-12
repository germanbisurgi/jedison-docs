<template>
  <nav class="pages-nav">
    <ul class="nav flex-column">
      <li v-for="route in routes" :key="route.name" class="nav-item">
        <router-link :to="route.path" class="nav-link" active-class="text-primary">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppPagesNav',
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.navbar)
    },
  }
}
</script>
