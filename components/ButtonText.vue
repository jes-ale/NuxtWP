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
        <div class="flex flex-grow items-center justify-center"
            :class="[true ? `${meta.bg} ${meta.fg} ${meta.w} ${meta.h} ${meta.p} ` : '']">
            {{ meta.title }}
        </div>
    </div>
</template>
