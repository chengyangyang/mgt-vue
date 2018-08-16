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
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link to="/index">审核员管理</router-link></el-menu-item>
                    <el-menu-item index="1-2">角色管理</el-menu-item>
                    <el-menu-item index="1-3">修改密码</el-menu-item>
                    <el-menu-item index="1-4">消息管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">认证审核</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1"><router-link to="/accountManagement">账号管理</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="/serviceDemand">服务需求方</router-link></el-menu-item>
                    <el-menu-item index="2-3"><router-link to="/serviceProvide">服务供应方</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">咨询管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1"><router-link to="/news2">咨询管理</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">联盟管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1"><router-link to="/alliance">联盟管理</router-link></el-menu-item>
                    <el-menu-item index="4-2"><router-link to="/joinSrchlist">加盟机构</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">需求项目管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1"><router-link to="/demandManagement">需求项目审核</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">竞价项目管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="6-1"><router-link to="/bidManagement">竞价项目审核</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">服务案例管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="7-1"><router-link to="/caseManagement">服务案例审核</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">合同备案管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="8-1"><router-link to="/contract">合同备案审核</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
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
    }
  },
  components:{
  },
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
