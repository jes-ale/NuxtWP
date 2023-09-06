<script setup lang="ts">
import { WordPressPage } from '~/types/wpPage'
import "@wordpress/block-library/build-style/common.css"
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"
definePageMeta({
  layout: false,
})
const formattedContent = ref()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.apiUrl
const { data: pageResponse } = await useFetch<WordPressPage>(`${baseURL}/wp-json/wp/v2/pages/${route.params.id}`)
if (pageResponse.value !== null)
  formattedContent.value = pageResponse.value.content.rendered
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div v-html="formattedContent"></div>
    </NuxtLayout>
  </div>
</template>
