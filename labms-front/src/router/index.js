import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import PageHome from '@/components/PageHome'
import PageMenu from '@/components/PageMenu'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: 'home',
                    component: PageHome
                },
                {
                    path: 'menu',
                    component: PageMenu
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})