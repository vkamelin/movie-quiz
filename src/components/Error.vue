<template>
  <div class="error-icon">
    <TriangleAlert />
  </div>
  <h1>Ошибка</h1>
  <p>{{ errorMsg }}</p>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {TriangleAlert} from "lucide-vue-next";
import type {Error} from "../types/ErrorType";

const errorMsg = ref("Произошла ошибка при загрузке данных");

const props = defineProps<Error>();
if (props.message) {
  errorMsg.value = props.message;
}

</script>

<style scoped>

</style>