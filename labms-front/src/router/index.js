import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import PageHome from '@/components/PageHome'
import PageMenu from '@/components/PageMenu'
import Teach from '@/components/Teach'
import Order from '@/components/Order'
import Equipment from '@/components/Equipment'
import Material from '@/components/Material'

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
                    redirect: 'menu/teach',
                    children: [
                        {
                            path:'teach',
                            component:Teach
                        },
                        {
                            path:'order',
                            component:Order
                        },
                        {
                            path:'equipment',
                            component:Equipment
                        },
                        {
                            path: 'material',
                            component: Material
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