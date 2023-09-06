<script setup lang="ts">
import { SlideMeta } from '~/types/slide'
import { ButtonMeta } from '~/types/button'
definePageMeta({
  layout: false,
})
const slides = ref<SlideMeta[]>()
const buttons = ref<ButtonMeta[]>()
// TODO: fetch slide and button meta
// TODO: load public assets
</script>
<template>
  <div>
    <NuxtLayout name="default">
      <div class="flex flex-col justify-start items-center w-full space-y-2 pb-2">
        INdex:
      </div>
    </NuxtLayout>
  </div>
</template>
