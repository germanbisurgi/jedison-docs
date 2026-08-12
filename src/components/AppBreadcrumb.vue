<template>
  <nav v-if="page" aria-label="breadcrumb" class="app-breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item">
        {{ page.group }}
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        {{ page.routeName }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  computed: {
    page() {
      return this.$route.meta.pageEntry
    }
  }
}
</script>
