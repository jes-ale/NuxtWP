<template>
  <div
    class="w-screen h-screen text-sm font-sans text-neutral-800 overflow-y-auto overflow-x-hidden flex flex-col items-center justify-between">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
