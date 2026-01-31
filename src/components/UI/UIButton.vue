<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "tailwindcss";
button {
  @apply bg-white/25 text-white font-bold py-2 px-4 rounded-xl border border-white/25 hover:bg-white/50;
}
</style>