<script lang="ts" setup>
import { useThemeStore } from '~/store/theme'
const themeStore = useThemeStore()
const tailwindFooter = computed(() => {
  return `${themeStore.bg} ${themeStore.fg}`
})

</script>
<template>
  <div
    class="w-screen h-screen text-sm font-sans text-neutral-800 overflow-y-auto overflow-x-hidden flex flex-col items-center justify-between">
    <Header />
    <slot />
    <Footer :tailwind="tailwindFooter" />
  </div>
</template>
