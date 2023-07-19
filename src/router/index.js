import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        // 홈 화면
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
    },
    {
        // test
        path: '/test',
        name: 'test',
        component: () => import('../pages/Test.vue'),
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router