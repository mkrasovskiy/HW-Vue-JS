import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/pages/HomeComponent.vue'
import BlogComponent from '@/pages/BlogComponent.vue'
import ProjectComponent from '@/pages/ProjectComponent.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'homecomponent',
            component: HomeComponent
        },
        {
            path: '/blog',
            name: 'blogcomponent',
            component: BlogComponent
        },
        {
            path: '/project',
            name: 'projectcomponent',
            component: ProjectComponent
        }
    ]
})