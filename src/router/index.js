import Vue from 'vue'
import Router from 'vue-router'
import leftNav from '@/components/leftNav'
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
// news2 咨询管理
const login = r => require.ensure([], () => r(require('@/view/login')), 'login')
const index = r => require.ensure([], () => r(require('@/view/index')), 'index')
const news1 = r => require.ensure([], () => r(require('@/view/children/news1')), 'news1')
const accountManagement = r => require.ensure([], () => r(require('@/view/children/certificationAudit/accountManagement')), 'accountManagement')
const accountView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/accountView')), 'accountView')
const serviceDemand = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceDemand')), 'serviceDemand')
const demandView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/demandView')), 'demandView')
const serviceProvide = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceProvide')), 'serviceProvide')
const serviceView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceView')), 'serviceView')

const alliance = r => require.ensure([], () => r(require('@/view/children/alliance/alliance')), 'alliance') // 联盟管理
const joinSrchlist = r => require.ensure([], () => r(require('@/view/children/alliance/joinSrchlist')), 'joinSrchlist') // 加盟机构
const demandManagement = r => require.ensure([], () => r(require('@/view/children/demandManagement/demandManagement')), 'demandManagement') // 需求项目审核
const bidManagement = r => require.ensure([], () => r(require('@/view/children/bidManagement/bidManagement')), 'bidManagement') // 竞价项目审核
const caseManagement = r => require.ensure([], () => r(require('@/view/children/caseManagement/caseManagement')), 'caseManagement') // 服务案例审核
const contract = r => require.ensure([], () => r(require('@/view/children/contract/contract')), 'contract') // 合同备案审核

const news2 = r => require.ensure([], () => r(require('@/view/children/consultingMangement/news2')), 'news2')
const newsAdd = r => require.ensure([], () => r(require('@/view/children/consultingMangement/newsAdd')), 'newsAdd')
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
          path: '/accountManagement',
          name: 'accountManagement',
          component: accountManagement
        },
        {
          path: '/accountView',
          name: 'accountView',
          component: accountView
        },
        {
          path: '/serviceDemand',
          name: 'serviceDemand',
          component: serviceDemand
        },
        {
          path: '/demandView', // 服务需求详情页面
          name: 'demandView',
          component: demandView
        },
        {
          path: '/serviceProvide',
          name: 'serviceProvide',
          component: serviceProvide
        },
        {
          path: '/serviceView',
          name: 'serviceView',
          component: serviceView
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
          path: '/alliance', // 联盟管理
          name: 'alliance',
          component: alliance
        },
        {
          path: '/joinSrchlist', // 加盟机构
          name: 'joinSrchlist',
          component: joinSrchlist
        },
        {
          path: '/demandManagement', // 需求项目审核
          name: 'demandManagement',
          component: demandManagement
        },
        {
          path: '/bidManagement', // 竞价项目审核
          name: 'bidManagement',
          component: bidManagement
        },
        {
          path: '/caseManagement', // 服务案例审核
          name: 'caseManagement',
          component: caseManagement
        },
        {
          path: '/contract', // 合同备案审核
          name: 'contract',
          component: contract
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
