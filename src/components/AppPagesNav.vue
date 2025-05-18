<template>
  <nav class="pages-nav">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">
        Jedison
      </h5>
      <a href="https://github.com/germanbisurgi/jedison" target="_blank" class="text-decoration-none" title="GitHub Repository">
        <i class="bi bi-github fs-5" />
      </a>
    </div>

    <div v-for="(groupRoutes, groupName) in groupedRoutes" :key="groupName" class="nav-group">
      <h6 class="nav-group-title text-muted text-uppercase small">
        {{ groupName }}
      </h6>
      <ul class="nav flex-column">
        <li v-for="route in groupRoutes" :key="route.name" class="nav-item">
          <router-link :to="route.path" class="nav-link" active-class="text-dark bg-primary">
            {{ route.name }}
          </router-link>
        </li>
      </ul>

      <hr>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppPagesNav',
  computed: {
    groupedRoutes() {
      // Get all navbar routes
      const navbarRoutes = this.$router.options.routes.filter(route => route.meta?.navbar)

      // Group them by meta.group
      const groups = {}

      navbarRoutes.forEach(route => {
        const groupName = route.meta?.group || 'Other'

        if (!groups[groupName]) {
          groups[groupName] = []
        }

        groups[groupName].push(route)
      })

      return groups
    }
  }
}
</script>