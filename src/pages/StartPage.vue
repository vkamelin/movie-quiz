<template>
  <div class="game-modes">
    <h2>Выбери режим игры:</h2>
    <div class="game-mode">
      <h3>Легкий</h3>
      <p>Выбери правильный фильм из 4 вариантов. За каждый верный ответ — 1 балл.</p>
      <UIButton>Начать</UIButton>
    </div>
    <div class="game-mode">
      <h3>Сложный</h3>
      <p>Напиши название фильма сам. Точно угадал — 2 балла, почти попал — 1 балл.</p>
      <UIButton>Начать</UIButton>
    </div>
    <div class="game-mode">
      <h3>Обратка</h3>
      <p>Видишь название — выбери подходящий набор эмодзи. Верно — 1 балл.</p>
      <UIButton>Начать</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIButton from "../components/UI/UIButton.vue";
</script>

<style scoped>
@reference "tailwindcss";

.game-modes {
  @apply flex flex-col items-center justify-center w-full;
}

.game-modes h2 {
  @apply font-bold mb-6;
}

.game-mode {
  @apply flex flex-col items-center justify-center mb-6 w-full;
}

.game-mode h3 {
  @apply font-bold;
}

.game-mode p {
  @apply text-xs;
}

.game-mode button {
  @apply mt-3 w-full;
}
</style>