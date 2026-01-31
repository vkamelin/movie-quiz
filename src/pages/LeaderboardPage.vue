<template>
  <div class="leaderboard">
    <div class="position">
      <div class="position-number">1</div>
      <div class="position-name">John Doe John Doe John Doe John Doe</div>
      <div class="position-score">100</div>
    </div>
    <div class="position">
      <div class="position-number">2</div>
      <div class="position-name">Jane Doe</div>
      <div class="position-score">90</div>
    </div>
    <div class="position">
      <div class="position-number">3</div>
      <div class="position-name">Jim Doe</div>
      <div class="position-score">80</div>
    </div>
    <div class="position">
      <div class="position-number">4</div>
      <div class="position-name">Joe Doe</div>
      <div class="position-score">70</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@reference "tailwindcss";

.leaderboard {
  @apply flex flex-col items-center justify-center;
}

.position {
  @apply flex items-center justify-between w-full flex-nowrap;
}

.position-number {
  @apply font-bold text-left p-2;
  min-width: 3rem;
}

.position-name {
  @apply flex-1 text-left p-2 overflow-hidden text-ellipsis;
}

.position-score {
  @apply font-bold text-right;
}
</style>