<script setup lang="ts">
import { usePagesStore } from '~/store/page'
definePageMeta({
  layout: false,
})
const pagesStore = usePagesStore()
const formattedContent = ref()
const route = useRoute()
formattedContent.value = pagesStore.getPageById(Number(route.params.id))?.content.rendered
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div v-html="formattedContent"></div>
    </NuxtLayout>
  </div>
</template>
