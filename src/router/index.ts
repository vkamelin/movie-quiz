import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import Game from "../pages/Game.vue";
import Leaderboard from "../pages/Leaderboard.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Game
    },
    {
        path: '/leaderboard',
        name: 'leaderboard',
        component: Leaderboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router