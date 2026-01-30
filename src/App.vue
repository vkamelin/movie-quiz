<template>
  <div>
    <div class="game-wrapper" v-if="isAuth"></div>
    <div class="error-wrapper" v-if="!isAuth">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, type Ref, ref} from 'vue';
import bridge, {type UserInfo} from '@vkontakte/vk-bridge';

const userInfo: Ref<UserInfo | null> = ref(null);
const isAuth: Ref<boolean> = ref(true);
const errorMsg: Ref<string> = ref('');

onMounted(async () => {
  try {
    await bridge.send('VKWebAppInit');
  } catch (error) {
    isAuth.value = false;
    errorMsg.value = 'Произошла ошибка при инициализации приложения'
  }

  try {
    userInfo.value = await bridge.send('VKWebAppGetUserInfo');
    isAuth.value = true;
  } catch (error) {
    isAuth.value = false;
    errorMsg.value = 'Произошла ошибка при получении информации о пользователе'
  }
});
</script>

<style scoped>

</style>
