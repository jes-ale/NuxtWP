<script lang="ts" setup>
import { ButtonMeta } from '~/types/button'
const props = defineProps<{
    meta: ButtonMeta
}>()

const emit = defineEmits<{
    (e: 'bClick', data: string): void
}>()
</script>
<template>
    <div class="flex flex-col items-center justify-between" @click="emit('bClick', meta.name)">
        <div class=" font-bold text-rose-900 flex w-full justify-center items-center">
            {{ meta.title }}
        </div>
        <div class="flex items-center justify-center"
            :class="[true ? `${meta.bg} ${meta.fg} ${meta.w} ${meta.h} ${meta.p} ` : '']">
            <img class="w-auto h-32" :src="meta.src">
        </div>
    </div>
</template>
