<template>
  <!-- Trigger button -->
  <button
    class="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2"
    @click="openModal">
    <i class="bi bi-search" />
    <span class="d-none d-sm-inline">Search</span>
  </button>

  <!-- Modal (Teleport for z-index safety over navbar) -->
  <Teleport to="body">
    <template v-if="isOpen">
      <div
        class="modal d-block"
        tabindex="-1"
        @click.self="closeModal"
        @keydown.escape="closeModal"
        @keydown.arrow-down.prevent="moveFocus(1)"
        @keydown.arrow-up.prevent="moveFocus(-1)"
        @keydown.enter.prevent="selectFocused">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <!-- Input header -->
            <div class="modal-header py-2">
              <i class="bi bi-search text-muted me-2 fs-5" />
              <input
                ref="inputRef"
                v-model="query"
                type="search"
                class="form-control border-0 shadow-none fs-5 p-0"
                placeholder="Search documentation..."
                autocomplete="off">
              <button class="btn-close ms-2" @click="closeModal" />
            </div>

            <!-- Results -->
            <div v-if="results.length > 0 || query.length >= 2" class="modal-body p-0">
              <ul v-if="results.length > 0" class="list-group list-group-flush">
                <li
                  v-for="(result, index) in results"
                  :key="result.path"
                  class="list-group-item list-group-item-action py-2 px-3"
                  :class="{ active: focusedIndex === index }"
                  @click="navigateTo(result)"
                  @mouseenter="focusedIndex = index">
                  <div class="d-flex justify-content-between align-items-start gap-2">
                    <div class="overflow-hidden">
                      <div class="small text-muted text-truncate">
                        {{ result.group }}
                      </div>
                      <div class="fw-semibold text-truncate">
                        {{ result.title }}
                      </div>
                      <div class="small text-muted text-truncate">
                        {{ result.description }}
                      </div>
                    </div>
                    <span
                      class="badge rounded-pill flex-shrink-0"
                      :class="{
                        'text-bg-primary': result.type === 'page',
                        'text-bg-secondary': result.type === 'section',
                        'text-bg-success': result.type === 'example'
                      }">
                      {{ result.type }}
                    </span>
                  </div>
                </li>
              </ul>
              <div v-else class="p-4 text-center text-muted">
                No results for "<strong>{{ query }}</strong>"
              </div>
            </div>

            <!-- Footer -->
            <div class="modal-footer py-1 justify-content-start">
              <small class="text-muted">
                <kbd>↑↓</kbd> navigate &nbsp;
                <kbd>↵</kbd> select &nbsp;
                <kbd>Esc</kbd> close
              </small>
            </div>
          </div>
        </div>
      </div>
      <!-- Bootstrap backdrop -->
      <div class="modal-backdrop fade show" />
    </template>
  </Teleport>
</template>

<script>
import Fuse from 'fuse.js'
import { searchData } from '@/search/searchData.js'

const flatEntries = searchData.map(page => ({
  path: page.path,
  name: page.name,
  group: page.group,
  title: page.name,
  description: page.description,
  keywords: page.keywords,
  type: 'page'
}))

const fuse = new Fuse(flatEntries, {
  keys: [
    { name: 'title', weight: 0.5 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.15 },
    { name: 'group', weight: 0.05 }
  ],
  threshold: 0.4,
  minMatchCharLength: 2
})

export default {
  name: 'AppSearch',
  data () {
    return { isOpen: false, query: '', focusedIndex: 0 }
  },
  computed: {
    results () {
      if (this.query.length < 2) return []
      return fuse.search(this.query, { limit: 8 }).map(r => r.item)
    }
  },
  watch: {
    query () { this.focusedIndex = 0 },
    isOpen (val) {
      if (val) {
        this.$nextTick(() => this.$refs.inputRef?.focus())
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
        this.query = ''
        this.focusedIndex = 0
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', this.handleGlobalKeydown)
  },
  beforeUnmount () {
    window.removeEventListener('keydown', this.handleGlobalKeydown)
  },
  methods: {
    openModal () { this.isOpen = true },
    closeModal () { this.isOpen = false },
    handleGlobalKeydown (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        this.isOpen ? this.closeModal() : this.openModal()
      }
    },
    moveFocus (dir) {
      this.focusedIndex = Math.max(0, Math.min(this.results.length - 1, this.focusedIndex + dir))
    },
    selectFocused () {
      if (this.results[this.focusedIndex]) this.navigateTo(this.results[this.focusedIndex])
    },
    navigateTo (result) {
      this.$router.push(result.path)
      this.closeModal()
    }
  }
}
</script>
