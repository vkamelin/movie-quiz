import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import StartPage from "../pages/StartPage.vue";
import QuizPage from "../pages/QuizPage.vue";
import LeaderboardPage from "../pages/LeaderboardPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: StartPage
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: QuizPage
    },
    {
        path: '/leaderboard',
        name: 'leaderboard',
        component: LeaderboardPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router