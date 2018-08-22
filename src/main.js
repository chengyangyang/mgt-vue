// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// import VueResource from 'vue-resource'
import axios from 'axios'
import './mock/mock.js'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import apiConfig from '../config/api.config'
// 导入iview组件
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式

import './assets/css/common.css'
import {post, get, patch, put} from './service/http' //请求拦截模块
import * as service from './service/server';  //service整个模块引入
// import service from './service/common'

// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.service = service;
Vue.config.productionTip = false  // 防止生产提示
Vue.config.silent = true// 去除不必要的警告
Vue.config.devtools = true// 是否允许检查代码

Vue.use(ElementUI)
Vue.use(iView)
//前端身份失效检测
// beforeEnter:(to, from, next)=>{
//   if(!localStorage.getItem('token')){
//     next({ path: '/login' });
//   }else{
//     next();
//   }
// }

// 使用钩子函数对路由进行权限跳转  登录路由拦截
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403')
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    } else {
      next()
    }
  }
})

/*   使用VueResource插件 */
// Vue.use(VueResource)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
