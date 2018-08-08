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
// 导入iview组件
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式

import './assets/css/common.css'
import {post, get, patch, put} from './service/http'
// import service from './service/common'

// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false
Vue.config.silent = true// 去除不必要的警告
Vue.config.devtools = true// 是否允许检查代码

Vue.use(ElementUI)
Vue.use(iView)

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
