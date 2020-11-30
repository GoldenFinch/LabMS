import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import PageHome from '@/components/PageHome'
import PageMenu from '@/components/PageMenu'
import Teach from '@/components/Teach'
import OfferCourses from '@/components/OfferCourses'
import RecordScores from '@/components/RecordScores'
import Attendance from '@/components/Attendance'
import Order from '@/components/Order'
import Orderlab from '@/components/Orderlab'
import Myorder from '@/components/Myorder'
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
                            component:Teach,
                            redirect:'teach/offercourses',
                            children:[
                                {
                                    path:'offercourses',
                                    component:OfferCourses
                                },{
                                    path:'recordscores',
                                    component:RecordScores
                                },{
                                    path:'attendance',
                                    component:Attendance
                                }
                            ]
                        },
                        {
                            path:'order',
                            component:Order,
                            redirect:'order/orderlab',
                            children:[
                                {
                                    path:'orderlab',
                                    component:Orderlab
                                },{
                                    path:'myorder',
                                    component:Myorder
                                }
                            ]
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