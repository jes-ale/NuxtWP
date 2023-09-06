<script lang="ts" setup>
const { headerMenu } = useMenus()
</script>
<template>
    <div class="w-full h-full px-2 flex flex-col lg:flex-row justify-end items-center space-x-2">
        <div v-for="(menuItem, index) in headerMenu" :key="index" as="div"
            class="relative inline-block text-center flex items-center justify-center">
            <NuxtLink :to="menuItem.link" class="font-bold p-2 text-rose-900 hover:text-white hover:bg-rose-900">
                {{ menuItem.title }}
            </NuxtLink>
        </div>
    </div>
</template>
