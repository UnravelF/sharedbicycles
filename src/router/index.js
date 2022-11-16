import Vue from 'vue'
import Router from 'vue-router'

import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

Vue.use(Router)

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

// routes
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue')
    // children: [] -> 根据登录用户菜单获取
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/not-found/Not-found.vue')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      next('/login')
    } else {
      if (to.path === '/main') {
        next(firstMenu.menuUrl)
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
