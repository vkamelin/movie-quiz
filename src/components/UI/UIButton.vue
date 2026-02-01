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
  @apply bg-transparent text-white py-2 px-4 rounded-md border-2 border-white/25 hover:bg-white/50 text-base;
  font-family: Inter, sans-serif;
  cursor: pointer;
}

button:hover,
button:focus {
  @apply bg-white/25;
}
</style>