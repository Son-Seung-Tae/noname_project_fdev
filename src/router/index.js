import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        // 홈 화면
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
    },
    {
        // random.vue
        path: '/Random',
        name: 'random',
        component: () => import('../pages/Random.vue'),

    },
    {
        // search.vue
        path: '/Search',
        name: 'search',
        component: () => import('../pages/Search.vue'),
    },
    {
        // loading.vue
        path: '/loading',
        name: 'loading',
        component: () => import('../pages/Loading.vue'),
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router