import Vue from 'vue'
import Router from 'vue-router'
// import leftNav from '@/components/leftNav'
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
// news2 咨询管理
// const login = r => require.ensure([], () => r(require('@/view/login')), 'login')
// const index = r => require.ensure([], () => r(require('@/view/index')), 'index')
// const news1 = r => require.ensure([], () => r(require('@/view/children/news1')), 'news1')
// const accountManagement = r => require.ensure([], () => r(require('@/view/children/certificationAudit/accountManagement')), 'accountManagement')
// const accountView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/accountView')), 'accountView')
// const serviceDemand = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceDemand')), 'serviceDemand')
// const demandView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/demandView')), 'demandView')
// const serviceProvide = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceProvide')), 'serviceProvide')
// const serviceView = r => require.ensure([], () => r(require('@/view/children/certificationAudit/serviceView')), 'serviceView')
//
// const alliance = r => require.ensure([], () => r(require('@/view/children/alliance/alliance')), 'alliance') // 联盟管理
// const joinSrchlist = r => require.ensure([], () => r(require('@/view/children/alliance/joinSrchlist')), 'joinSrchlist') // 加盟机构
// const demandManagement = r => require.ensure([], () => r(require('@/view/children/demandManagement/demandManagement')), 'demandManagement') // 需求项目审核
// const bidManagement = r => require.ensure([], () => r(require('@/view/children/bidManagement/bidManagement')), 'bidManagement') // 竞价项目审核
// const caseManagement = r => require.ensure([], () => r(require('@/view/children/caseManagement/caseManagement')), 'caseManagement') // 服务案例审核
// const contract = r => require.ensure([], () => r(require('@/view/children/contract/contract')), 'contract') // 合同备案审核
//
// const news2 = r => require.ensure([], () => r(require('@/view/children/consultingMangement/news2')), 'news2')
// const newsAdd = r => require.ensure([], () => r(require('@/view/children/consultingMangement/newsAdd')), 'newsAdd')
// const news3 = r => require.ensure([], () => r(require('@/view/children/news3')), 'news3')

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/leftNav',
      name: 'leftNav',
      component: resolve => require(['@/components/leftNav'], resolve),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => require(['@/view/index'], resolve)
        },
        {
          path: '/news1',
          name: 'news1',
          component: resolve => require(['@/view/children/news1'], resolve)
        },
        {
          path: '/accountManagement',
          name: 'accountManagement',
          component: resolve => require(['@/view/children/certificationAudit/accountManagement'], resolve)
        },
        {
          path: '/accountView',
          name: 'accountView',
          component: resolve => require(['@/view/children/certificationAudit/accountView'], resolve)
        },
        {
          path: '/serviceDemand',
          name: 'serviceDemand',
          component: resolve => require(['@/view/children/certificationAudit/serviceDemand'], resolve)
        },
        {
          path: '/demandView', // 服务需求详情页面
          name: 'demandView',
          component: resolve => require(['@/view/children/certificationAudit/demandView'], resolve)
        },
        {
          path: '/serviceProvide',
          name: 'serviceProvide',
          component: resolve => require(['@/view/children/certificationAudit/serviceProvide'], resolve)
        },
        {
          path: '/serviceView',
          name: 'serviceView',
          component: resolve => require(['@/view/children/certificationAudit/serviceView'], resolve)
        },
        {
          path: '/newsList',
          name: 'newsList',
          component: resolve => require(['@/view/children/consultingMangement/newsList'], resolve)
        },
        {
          path: '/newsAdd',
          name: 'newsAdd',
          component: resolve => require(['@/view/children/consultingMangement/newsAdd'], resolve)
        },
        {
          path: '/alliance', // 联盟管理
          name: 'alliance',
          component: resolve => require(['@/view/children/alliance/alliance'], resolve)
        },
        {
          path: '/allianceAdd', // 联盟管理详情
          name: 'allianceAdd',
          component: resolve => require(['@/view/children/alliance/allianceAdd'], resolve)
        },
        {
          path: '/joinSrchlist', // 加盟机构
          name: 'joinSrchlist',
          component: resolve => require(['@/view/children/alliance/joinSrchlist'], resolve)
        },
        {
          path: '/joinAdd', // 加盟机构详情
          name: 'joinAdd',
          component: resolve => require(['@/view/children/alliance/joinAdd'], resolve)
        },
        {
          path: '/demandManagement', // 需求项目审核
          name: 'demandManagement',
          component: resolve => require(['@/view/children/demandManagement/demandManagement'], resolve)
        },
        {
          path: '/demandDetail', // 需求项目审核详情
          name: 'demandDetail',
          component: resolve => require(['@/view/children/demandManagement/demandDetail'], resolve)
        },
        {
          path: '/bidManagement', // 竞价项目审核
          name: 'bidManagement',
          component: resolve => require(['@/view/children/bidManagement/bidManagement'], resolve)
        },
        {
          path: '/bidManageDetail', // 竞价项目审核详情
          name: 'bidManageDetail',
          component: resolve => require(['@/view/children/bidManagement/bidManageDetail'], resolve)
        },
        {
          path: '/biddingInfo', // 竞价项目，竞价方详情
          name: 'biddingInfo',
          component: resolve => require(['@/view/children/bidManagement/biddingInfo'], resolve)
        },
        {
          path: '/caseManagement', // 服务案例审核
          name: 'caseManagement',
          component: resolve => require(['@/view/children/caseManagement/caseManagement'], resolve)
        },
        {
          path: '/caseManageDetail', // 服务案例详情
          name: 'caseManageDetail',
          component: resolve => require(['@/view/children/caseManagement/caseManageDetail'], resolve)
        },
        {
          path: '/contract', // 合同备案审核
          name: 'contract',
          component: resolve => require(['@/view/children/contract/contract'], resolve)
        },
        {
          path: '/contractDetail', // 合同备案详情
          name: 'contractDetail',
          component: resolve => require(['@/view/children/contract/contractDetail'], resolve)
        },
        {
          path: '/news3',
          name: 'news3',
          component: resolve => require(['@/view/children/news3'], resolve)
        },
        {//系统管理
          path: '/msgManage',
          name: 'msgManage',
          component: resolve => require(['@/view/children/sysManage/msgManage'], resolve)
        },
        {
          path: '/addMsg',
          name: 'addMsg',
          component: resolve => require(['@/view/children/sysManage/addMsg'], resolve)
        },
        {
          path: '/changePsw',
          name: 'changePsw',
          component: resolve => require(['@/view/children/sysManage/changePsw'], resolve)
        },
        {
          path: '/roleManage',
          name: 'roleManage',
          component: resolve => require(['@/view/children/sysManage/roleManage'], resolve)
        },
        {
          path: '/addRole',
          name: 'addRole',
          component: resolve => require(['@/view/children/sysManage/addRole'], resolve)
        },
        {
          path: '/userManage',
          name: 'userManage',
          component: resolve => require(['@/view/children/sysManage/userManage'], resolve)
        },
        {
          path: '/addUser',
          name: 'addUser',
          component: resolve => require(['@/view/children/sysManage/addUser'], resolve)
        },
        //互动交流
        {
          path: '/interactList',
          name: 'interactList',
          component: resolve => require(['@/view/children/interact/interact'], resolve)
        },
        {
          path: '/interactListDetail',
          name: 'interactListDetail',
          component: resolve => require(['@/view/children/interact/detail'], resolve)
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
      component: resolve => require(['@/view/login.vue'], resolve)
    }
  ]
})
