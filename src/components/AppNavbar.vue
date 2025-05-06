<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasNavbarLabel" class="offcanvas-title">
            Menu
          </h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="route in routes" :key="route.name" class="nav-item">
              <router-link :to="route.path" class="nav-link">
                {{ $t(route.name) }}
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://github.com/germanbisurgi/vue-app-template">GitHub</a>
            </li>

            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ currentLanguage }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="lang in languages" :key="lang" :value="lang">
                  <a class="dropdown-item" href="#" @click.prevent="setLanguage(lang)">{{ $t(lang) }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia'
import useAppStore from '@/store/app'

export default {
  name: 'AppNavbar',
  data() {
    return {
      currentLanguage: this.$i18n.locale
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.navbar)
    },
    ...mapState(useAppStore, [
      'languages'
    ])
  },
  methods: {
    setLanguage(lang) {
      this.currentLanguage = lang
      this.$i18n.locale = lang
    }
  }
}
</script>
