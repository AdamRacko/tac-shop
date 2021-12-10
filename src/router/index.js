import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        Name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
    },
    {
        path: '/products/men',
        name: 'Men',
        component: () => import('../views/Men/Men.vue')
    },
    {
        path: '/products/men/menproductview',
        name: 'MenProductView',
        component: () => import('../views/Men/MenProductView.vue')
    },
    {
        path: '/products/women',
        name: 'Women',
        component: () => import('../views/Women/Women.vue')
    },
    {
        path: '/products/women/womenproductview',
        name: 'WomenProductView',
        component: () => import('../views/Women/WomenProductView.vue')
    },
    {
        path: '/products/kids',
        name: 'Kids',
        component: () => import('../views/Kids/Kids.vue')
    },
    {
        path: '/products/kids/kidsproductview',
        name: 'KidsProductView',
        component: () => import('../views/Kids/KidsProductView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
