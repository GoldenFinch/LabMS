import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import PageHome from '@/components/PageHome'
import PageMenu from '@/components/PageMenu'
import MenuExample from '@/components/MenuExample'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            redirect: 'home',
            children: [
                {
                    path: 'home',
                    component: PageHome
                },
                {
                    path: 'menu',
                    component: PageMenu,
                    redirect: 'menu/example',
                    children: [
                        {
                            path: 'example',
                            component: MenuExample
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})