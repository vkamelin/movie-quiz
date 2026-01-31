<template>
  <div class="game">
    <h3>Отгадай фильм:</h3>
    <div class="question">🤖👦🕶️💥🚗👁️‍🗨️</div>
    <div class="answers">
      <div class="answer">Терминатор 2</div>
      <div class="answer">Робокоп</div>
      <div class="answer">Я - робот</div>
      <div class="answer">Звездные войны</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";

.game {
  @apply flex flex-col items-center justify-center gap-4 h-full;
}

.game h3 {
  @apply text-2xl font-bold mb-4;
}

.game .question {
  @apply text-3xl font-bold mb-8 bg-white/90 p-4 rounded-lg;
}

/* 2 per row */
.game .answers {
  /*@apply grid grid-cols-2 gap-4;*/
  @apply flex flex-col w-full;
}

.game .answer {
  @apply border-2 border-white/25 p-2 rounded-lg text-center w-full mb-4;
}

.game .answer:hover,
.game .answer:focus {
  @apply bg-white/25;
}
</style>