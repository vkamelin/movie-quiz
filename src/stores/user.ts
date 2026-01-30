import { defineStore } from 'pinia'
import type {UserInfo} from "@vkontakte/vk-bridge";

export const userStore = defineStore('user', {
  state: () => ({
    user: {} as Partial<UserInfo>,
  }),
  actions: {
    setUser(user: UserInfo) {
      this.user = user
    },
  },
})