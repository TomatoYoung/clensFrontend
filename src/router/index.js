import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/achieve',
    name: 'Achieve',
    component: () => import(/* webpackChunkName: "about" */ '../views/Achieve.vue')
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tutorial.vue')
  },
  {
    path: '/userctr',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/lensfind',
    name: 'Lensfind',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lensfind.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
