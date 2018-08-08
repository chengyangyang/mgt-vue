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
                    <el-menu-item index="2-1">账号管理</el-menu-item>
                    <el-menu-item index="2-2">服务需求方</el-menu-item>
                    <el-menu-item index="2-3">服务供应方</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%">
              <router-view/>
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
  .headerWrap{
    padding: 40px 25px 0px 25px;
    height:100%;
    .tac{
      background: rgb(237,240,245);
      height:100%;
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
</style>
