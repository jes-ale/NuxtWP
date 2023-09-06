<script setup lang="ts">
import { usePagesStore } from '~/store/page'
const pagesStore = usePagesStore()
await pagesStore.fetchPages()
</script>
<template>
  <RouterView />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
