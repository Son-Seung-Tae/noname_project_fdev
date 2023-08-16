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
    {
        // 404.vue
        path: '/404',
        name: '404',
        component: () => import('../pages/404.vue'),
    },
    {
        // 존재하지않는 페이지 404로 리다이렉트
        path: '/:pathMatch(.*)',
        redirect: '404'
    },
    {
        // Making.vue
        path: '/Making',
        name: 'Making',
        component: () => import('../pages/Making.vue'),
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router