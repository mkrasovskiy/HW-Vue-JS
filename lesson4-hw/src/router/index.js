import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Homecomponent',
            component: () => import(/* webpackChunkName: "Home" */ '@/pages/HomeComponent.vue')
        },
        {
            path: '/blog',
            name: 'Blogcomponent',
            component: () => import(/* webpackChunkName: "Blog" */ '@/pages/BlogComponent.vue')
        },
        {
            path: '/project',
            name: 'Projectcomponent',
            component: () => import(/* webpackChunkName: "Project" */ '@/pages/ProjectComponent.vue')
        },
        {
            path: '/404',
            name: 'NotFound',
            component: () => import('@/pages/NotFound.vue')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})