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
        <div class="w-full lg:w-5/6 h-full">
          <swiper-container speed="500" loop="true" pagination="true" autoplay-delay="2500"
            autoplay-disable-on-interaction="true" class="w-full h-auto z-0">
            <swiper-slide v-for="slide in slides" :key="slide.name"
              class="flex flex-col w-full h-auto text-center font-bold text-xs ">
              <img :src="slide.src">
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="w-5/6 h-full">
          <div class="flex flex-col items-center justify-between w-full  h-auto py-8">
            <div class="font-bold text-rose-900 flex w-full justify-center items-center">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-2">
              <ButtonSrc v-for="button in buttons" :key="button.name" :meta="button" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
