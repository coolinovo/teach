import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Common from '../views/Common'
import Archive from '../views/archive'
import Single from '../views/single'
import Play from '../views/play'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: Common
    },
    {
        path: '/home/:id',
        component: Common,
        // redirect: '/archive',
        children: [
            {
                path: 'archive',
                component: Archive
            },
            {
                path: 'single',
                component: Single
            },
            {
                path: 'play',
                component: Play
            }
        ]
    }
    // {
    //     // path: '/about',
    //     // name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

// router.beforeEach(
//     (to, from, next) => {
//         if (to.path === '/login' || to.path === '/') return next()
//         let token = window.sessionStorage.getItem('token')
//         if (!token) return next('/login')
//         next()
//     }
// )

export default router
