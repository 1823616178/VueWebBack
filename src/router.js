import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import About from '@/views/About/About'
import * as types from './store/types'
import Login from '@/views/Login/Login'
import Repository from './repository.vue'
import store from './store/store'
import register from '@/views/Login/Register.vue'
import course from '@/views/Course/course'
import uservideo from '@/views/UserVideo/Index.vue'
import poccal from '@/views/LookVideo/Index.vue'
import robot from '@/views/Robot/Index.vue'

Vue.use(Router)

const routes = [
  {
    id: 1,
    path: '/',
    name: '首页',
    component: Home
  },
  {
    id: 2,
    path: '/about',
    name: '课程体系',
    component: About
  },
  {
    id: 3,
    path: '/Login',
    name: store.state.title,
    component: Login
  },
  {
    path: '/repository',
    name: 'repository',
    meta: {
      requireAuth: true
    },
    component: Repository
  },
  {
    id: 4,
    path: '/register',
    component: register
  },
  {
    id: 5,
    path: '/course',
    component: course
  },
  {
    id: 6,
    path: '/video/:id',
    component: uservideo,
    meta: {
      requireAuth: true
    }
  },
  {
    id: 7,
    path: '/look/:id',
    component: poccal,
    meta: {
      requireAuth: true
    }
  },
  {
    id: 8,
    path: '/robot',
    component: robot
  }
]
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token !== 'undefined') {
      next()
    } else {
      next({
        path: '/Login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
