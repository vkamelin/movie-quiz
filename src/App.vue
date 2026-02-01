<template>
    <div class="game-wrapper" v-if="isAuth">
      <Header />
      <main>
        <router-view />
      </main>
    </div>
    <div class="error-wrapper" v-if="!isAuth">
      <div v-if="errorMsg == ''">
        <main>
          <UILoader />
          <p>Загрузка...</p>
        </main>
      </div>
      <div v-else>
        <Error :message="errorMsg" />
      </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, type Ref, ref} from 'vue';
import bridge, {type UserInfo} from '@vkontakte/vk-bridge';
import Error from "./components/Error.vue";
import Header from "./components/Header.vue";
import axios from "axios";
import UILoader from "./components/UI/UILoader.vue";

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
  } catch (error) {
    isAuth.value = false;
    errorMsg.value = 'Произошла ошибка при получении информации о пользователе'
  }

  const urlParams = new URLSearchParams(window.location.search);
  const vkUserId = urlParams.get('vk_user_id');
  const sign = urlParams.get('sign');

  if (!sign || !vkUserId) {
    errorMsg.value = 'Неверные параметры авторизации'
    isAuth.value = false;
    return;
  }

  try {
    const res = await axios.post('https://devbot.pro/api/auth/vk', {}, {
      params: { vk_user_id: vkUserId, sign },
    });

    const token = res.data.token;
    localStorage.setItem('jwt', token);
    isAuth.value = true;
  } catch (err: any) {
    errorMsg.value = err.response?.data?.error || 'Ошибка авторизации';
    isAuth.value = false;
  }
});
</script>

<style scoped>
@reference "tailwindcss";

.game-wrapper {
  @apply h-screen flex flex-col items-center w-full;
}

.game-wrapper main {
  @apply flex-1 py-4 px-6;
  max-width: 768px;
}
</style>
