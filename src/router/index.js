import Vue from 'vue'
import Router from 'vue-router'
import leftNav from '@/components/leftNav'     //头部
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const login = r => require.ensure([], () => r(require('@/view/login')), 'login');
const index = r => require.ensure([], () => r(require('@/view/index')), 'index');
const movieDetail = r => require.ensure([], () => r(require('@/view/children/movieDetail')), 'movieDetail');
const shap = r => require.ensure([], () => r(require('@/components/shap')), 'shap');
// import index from '@/view/index'
// import movie from '@/view/movie'
// import movieDetail from '@/view/children/movieDetail'
// import shap from '@/components/shap'
Vue.use(Router)
//如果页面是公用一个头部则可以将公共头尾写在app.vue中 否则可以头部为首页 其它页面为二级页面进行使用
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/leftNav',      //顶部导航
      name: 'leftNav',
      component: leftNav,
      redirect:'/index',
      children:[
        {
          path: '/index',      //首页
          name: 'index',
          component:index
        },
        {
          path:'/movieDetail', //电影详情页
          name:'movieDetail',
          component:movieDetail
        }
      ]
    },
    {
      path:'/', //登录页
      name:'login',
      component:login
    }
  ]
})
