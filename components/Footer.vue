<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps<{
    tailwind: string
}>()
console.warn('props tail', props.tailwind)
</script>
<template>
    <div class="w-full flex flex-col lg:flex-row " :class="[true ? tailwind : '']">
        <div class="w-full lg:w-1/3 h-full flex flex-col items-center py-16 lg:border-r-2 lg:border-r-white">
            <img src="/img/energia_logo_1.png" class="h-12 lg:h-24" alt="Energias BC Logo" />
        </div>
        <div class="w-full lg:w-1/3 h-full flex flex-col items-center py-4">
            <div class="font-bold border-b-2 border-b-white mb-2">Enlaces</div>
            <a href="#">Secretaria de energía</a>
            <a href="#">Comisión federal de electricidad</a>
            <a href="#">Comisión reguladora de energía</a>
            <a href="#">Comisión nacional para el uso eficiente de energía</a>
        </div>
        <div class="w-full lg:w-1/3 h-full flex flex-col items-center py-4">
            <div class="font-bold border-b-2 border-b-white mb-2">Contacto</div>
            <div class="flex items-center space-x-2">
                <Icon icon="material-symbols:person" />
                <span>

                </span>
            </div>
            <div class="flex items-center space-x-2">
                <Icon icon="ic:baseline-phone" />
                <span>
                    (686) 123-456-2345
                </span>
            </div>
            <div class="flex flex-col justify-center items-center space-x-2">
                <div class="flex space-x-2 items-center">
                    <Icon icon="ri:time-fill" />
                    <span>Horario de atención:</span>
                </div>
                <span>
                    Lunes a viernes
                </span>
                <span>
                    9:00 - 16:00
                </span>
            </div>
        </div>
    </div>
</template>
