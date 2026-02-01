<template>
  <header class="header">
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/quiz">Игра</RouterLink>
      <RouterLink to="/leaderboard">Лидеры</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "tailwindcss";

.header {
  @apply flex justify-between items-center border-b border-b-white/25 h-16 px-4 w-full;
}

.header .avatar {
  @apply w-10 h-10 rounded-full;
}

.header nav {
  @apply flex justify-center items-center gap-4 w-full;
}

.header nav a {
  @apply py-2 px-4 rounded-lg text-white;
}

.header nav a:hover {
  @apply bg-white/25;
}

.header nav a.router-link-active {
  @apply bg-white/25 border-b border-b-white;
}
</style>