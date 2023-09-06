import { usePagesStore } from '~/store/page'
export function useMenus() {
  const pagesStore = usePagesStore()
  const headerMenu = computed(() => {
    const pages = pagesStore.pages
    return pages.map((page) => ({
      title: page.title.rendered,
      link: `/page/${page.id}`
    }))
  })

  const footerMenu = computed(() => {
    const pages = pagesStore.pages

    return pages.map((page) => ({
      title: page.title,
      link: `/page/${page.id}`
    }))
  })

  const mobileMenu = computed(() => {
    const pages = pagesStore.pages

    return pages.map((page) => ({
      title: page.title,
      link: `/page/${page.id}`
    }))
  })

  return {
    mobileMenu,
    headerMenu,
    footerMenu
  }
}
