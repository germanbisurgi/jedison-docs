import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    languages: ['en', 'de'],
  }),
  getters: {},
  actions: {}
})

export default useAppStore
