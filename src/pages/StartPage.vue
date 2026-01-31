<template>
  <div class="game-modes">
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

</style>