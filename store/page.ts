import { acceptHMRUpdate, defineStore } from 'pinia'
import { WordPressPage } from '~/types/wpPage'

export const usePagesStore = defineStore('pages', () => {
  const { isLoading, startLoading, stopLoading } = useLoading()
  const pages = ref<WordPressPage[]>([])
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiUrl

  const getPageById = (id: number): WordPressPage | undefined => {
    return pages.value.find((page) => page.id === id)
  }

  const fetchPages = async () => {
    if (isLoading.value) return

    try {
      startLoading()
      const response = await fetch(`${baseURL}/wp-json/wp/v2/pages`);
      if (!response.ok) {
        throw new Error('Failed to fetch pages')
      }
      pages.value = await response.json()
    } catch (error) {
      console.error('Error fetching pages:', error)
    } finally {
      stopLoading()
    }
  }

  return {
    pages,
    getPageById,
    fetchPages,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePagesStore, import.meta.hot))
