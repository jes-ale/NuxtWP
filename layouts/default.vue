<script lang="ts" setup>
</script>
<template>
  <div
    class="w-screen h-screen text-sm font-sans text-neutral-800 overflow-y-auto overflow-x-hidden flex flex-col items-center justify-between">
    <Header class="bg-neutral-100 text-white" />
    <slot />
    <Footer class="bg-blue-900 text-white" />
  </div>
</template>
