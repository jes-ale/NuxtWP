<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>
<template>
    <nav
        class="relative w-full flex flex-no-wrap lg:flex-wrap justify-end lg:justify-start items-center bg-neutral-200 border-b shadow bg-local bg-repeat border-b">
        <div class="flex w-full h-full items-center justify-between px-3 py-2">
            <div class="lg:hidden w-full h-full">
                <Disclosure v-slot="{ open }">
                    <DisclosureButton class="w-full flex items-center justify-between">
                        <Icon icon="material-symbols:menu" class="w-8 h-8" />
                        <img src="/img/logo_x256.png" class="h-16" alt="Brand Logo" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <DisclosurePanel class="px-4 py-2">
                            <Menu name="header" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </div>
            <div class="!visible hidden flex-grow h-full basis-[100%] items-center lg:!flex lg:basis-auto">
                <div class="w-full h-full flex flex-row items-center justify-between">
                    <a class="w-full" href="#">
                        <img src="/img/logo_x256.png" class="h-24" alt="Main logo" />
                    </a>
                    <div class="w-full h-full flex flex-col space-y-4">
                        <div class="flex flex-row w-full justify-between">
                            <a class="w-full flex justify-end" href="#">
                                <img src="/img/logo_b_x256.png" class="h-24" alt="Brand Logo" />
                            </a>
                        </div>
                        <div class="flex flex-row w-full justify-between pb-2">
                            <NavMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
