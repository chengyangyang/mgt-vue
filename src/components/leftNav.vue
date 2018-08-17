<template>
    <div id="header">
      <div class="headerWrap">
        <el-row>
          <div class="headerBox" style="height: 56px;line-height: 56px;font-size: 14px">
              <el-col :span="4" style="background: rgb(84,92,100);color: #fff;padding-left:40px;height: 100%;">
                <div class="leftTitle">
                  导航栏菜单
                </div>
              </el-col>
              <el-col :span="20" style="background: rgb(255,255,255);height: 100%;">
                <div>
                  <span style="padding: 0 15px">你好！admin</span>
                  <span> | </span>
                  <span style="padding: 0px 8px;">后台首页</span>
                  <div class="fr" style="display: inline-block">
                    <div class="btn-fullscreen fl" @click="handleFullScreen" style="display:inline-block;margin-right: 10px">
                      <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                      </el-tooltip>
                    </div>
                    <span class="fr loginout"  @click="loginout">退出登录</span>
                  </div>
                </div>
              </el-col>
          </div>
        </el-row>
        <el-row class="tac">
            <el-col :span="4" style="height: 100%">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo leftNav"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b" unique-opened router>
                <template v-for="item in navList">
                  <template v-if="item.subs">
                    <el-submenu :index="item.path" :key="item.index">
                      <template slot="title">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                      </template>
                      <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index= "subItem.path">
                        {{ subItem.title }}
                      </el-menu-item>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                      <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                  </template>
                </template>
              </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: scroll">
              <keep-alive>
                <router-view/>
              </keep-alive>
            </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          icon: 'el-icon-setting',
          path: '',
          title: '系统管理',
          subs:[
            {
              path: '',
              title: '审核员管理'
            },
            {
              path: '',
              title: '角色管理'
            },
            {
              path: '',
              title: '修改密码'
            },
            {
              path: '',
              title: '消息管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'accountManagement',
          title: '认证审核',
          subs:[
            {
              path: 'accountManagement',
              title: '账号管理'
            },
            {
              path: 'serviceDemand',
              title: '服务需求方'
            },
            {
              path: 'serviceProvide',
              title: '服务供应方'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'news2',
          title: '咨询管理',
          subs:[
            {
              path: 'news2',
              title: '咨询管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'alliance',
          title: '联盟管理',
          subs: [
            {
              path: 'alliance',
              title: '联盟管理'
            },
            {
              path: 'joinSrchlist',
              title: '加盟机构'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'demandManagement',
          title: '需求项目管理',
          subs: [
            {
              path: 'demandManagement',
              title: '需求项目管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'bidManagement',
          title: '竞价项目管理',
          subs: [
            {
              path: 'bidManagement',
              title: '竞价项目管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'caseManagement',
          title: '服务案例管理',
          subs: [
            {
              path: 'caseManagement',
              title: '服务案例管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          path: 'contract',
          title: '合同备案管理',
          subs: [
            {
              path: 'contract',
              title: '合同备案管理'
            }
          ]
        }
      ]
    }
  },
  components:{
  },
  // computed:{
  //   onRoutes(){
  //     return this.$route.path.replace('/','');
  //   }
  // },
  methods:{
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
    loginout(){
      localStorage.removeItem('ms_username')
      this.$router.push('/login');
    },
    // 全屏事件
    handleFullScreen(){
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  },
  mounted(){
  }
}
</script>

<style scoped lang="less">
#header{
  width: 100%;
  height: 100%;
  background-image: url(../../static/images/view-mgt-01.png);
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: top center;
  position:absolute;
  overflow-y: scroll;
  .headerWrap{
    padding: 40px 25px 40px 25px;
    height:100%;
    .tac{
      background: rgb(237,240,245);
      height:100%;
      min-height: 950px;
      margin-top:3px;
      .leftNav{
        height: 100%;
      }
    }
  }
}
.el-submenu .el-menu-item{
  min-width: 0px !important;
}
.el-menu-item-group__title{
  padding: 0 0 0 20px !important;
}
  .loginout{
    cursor: pointer;
    border: 2px solid  rgb(5,11,254);
    color:  rgb(5,11,254);
    margin-right: 15px;
    display: inline-block;
    width: 60px;
    line-height: 33px;
    height: 33px;
    text-align: center;
    margin-top: 11px;
    border-radius: 5px;
    font-size: 12px;
  }
  .loginout:hover{
    background: rgb(5,11,254);
    color: #ffffff;
  }
</style>
