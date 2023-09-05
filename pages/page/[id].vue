<template>
  <div>
    <NuxtLayout name="default">
      <div v-html="formattedContent"></div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { WordPressPage } from '~/types/wpPage'
definePageMeta({
  layout: false,
})
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiUrl
const route = useRoute()
const formattedContent = ref('')
const { data: pageResponse } = await useFetch<WordPressPage>(`${baseURL}/wp-json/wp/v2/pages/${route.params.id}`)
const pageData = pageResponse.value
const { data: stylesResponse } = await useFetch<any>(`${baseURL}/wp-includes/css/dist/block-library/style.min.css`)
const stylesData = stylesResponse.value
if (pageData !== null && stylesData !== null)
  formattedContent.value = `<style>${stylesData}</style>${pageData.content.rendered}`
</script>

<style>
/* You can add Tailwind CSS classes here if needed */
</style>

