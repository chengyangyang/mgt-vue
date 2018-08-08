import Vue from 'vue'
import vuex from 'vuex'
import dialog_store from './dialog_store.js'
Vue.use(vuex)// 引入某个store对象
export default new vuex.Store({
  modules: {
    dialog: dialog_store
  }
})
