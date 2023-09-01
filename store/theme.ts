import { acceptHMRUpdate, defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const bg = ref('bg-blue-900')
  const fg = ref('text-white')
  return {
    bg, fg
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
