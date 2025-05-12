<template>
  <div class="d-flex justify-content-between mt-4 mb-4">
    <button v-if="hasPrevious" class="btn btn-outline-primary" @click="goToPrevious">
      <span>« {{ previousRoute.name }}</span>
    </button>
    <div v-else />

    <button v-if="hasNext" class="btn btn-outline-primary" @click="goToNext">
      <span>{{ nextRoute.name }} »</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppNextPrevious',
  computed: {
    filteredRoutes() {
      return this.$router.options.routes.filter((route) => route.meta?.navbar)
    },
    currentRouteIndex() {
      return this.filteredRoutes.findIndex(route => route.name === this.$route.name)
    },
    previousRoute() {
      if (this.currentRouteIndex > 0) {
        return this.filteredRoutes[this.currentRouteIndex - 1]
      }
      return null
    },
    nextRoute() {
      if (this.currentRouteIndex < this.filteredRoutes.length - 1) {
        return this.filteredRoutes[this.currentRouteIndex + 1]
      }
      return null
    },
    hasPrevious() {
      return this.currentRouteIndex > 0
    },
    hasNext() {
      return this.currentRouteIndex < this.filteredRoutes.length - 1
    }
  },
  methods: {
    goToPrevious() {
      if (this.previousRoute) {
        this.$router.push({ name: this.previousRoute.name })
      }
    },
    goToNext() {
      if (this.nextRoute) {
        this.$router.push({ name: this.nextRoute.name })
      }
    }
  }
}
</script>
