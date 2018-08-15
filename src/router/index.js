import Vue from 'vue'
import Router from 'vue-router'
import leftNav from '@/components/leftNav'
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const login = r => require.ensure([], () => r(require('@/view/login')), 'login')
const index = r => require.ensure([], () => r(require('@/view/index')), 'index')
const news1 = r => require.ensure([], () => r(require('@/view/children/news1')), 'news1')
const news2 = r => require.ensure([], () => r(require('@/view/children/news2')), 'news2')
const newsAdd = r => require.ensure([], () => r(require('@/view/children/newsAdd')), 'newsAdd')
const news3 = r => require.ensure([], () => r(require('@/view/children/news3')), 'news3')

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/leftNav',
      name: 'leftNav',
      component: leftNav,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/news1',
          name: 'news1',
          component: news1
        },
        {
          path: '/news2',
          name: 'news2',
          component: news2
        },
        {
          path: '/newsAdd',
          name: 'newsAdd',
          component: newsAdd
        },
        {
          path: '/news3',
          name: 'news3',
          component: news3
        },
        {
          // 权限页面
          path: '/permission',
          component: resolve => require(['../view/children/Permission.vue'], resolve),
          meta: { title: '权限测试', permission: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
