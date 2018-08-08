import Vue from 'vue'
import Router from 'vue-router'
import leftNav from '@/components/leftNav'
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const login = r => require.ensure([], () => r(require('@/view/login')), 'login')
const index = r => require.ensure([], () => r(require('@/view/index')), 'index')

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/leftNav',
      name: 'leftNav',
      component: leftNav,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
