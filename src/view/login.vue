<template>
  <div id="loginPage">
    <div class="login-box">
      <div class="login-form1">
        <h1 class="login-title">丝绸之路经济带技术转移平台</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn" style="text-align: center">
            <el-button type="primary" @click="submitForm('ruleForm')" style="left: 5%;width: 90%;">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;padding-left: 5%;margin-top: 20px;">Tips : 用户名和密码随便填。</p>
        </el-form>
        <!--<form id="form">-->
          <!--<div class="form-line username">-->
            <!--<input type="text">-->
            <!--<span>请输入登录账号</span>-->
          <!--</div>-->
          <!--<div class="form-line password">-->
            <!--<input type="password">-->
            <!--<span>请输入密码</span>-->
          <!--</div>-->
          <!--<div class="form-line vcode">-->
            <!--<input type="type" maxlength="4" id="logincode">-->
            <!--<span>验证码</span>-->
            <!--<em><img id="vcode" src="${contextPath}/servlet/validateCodeServlet?t=+Math.random()"></em>-->
            <!--<a href="javascript:void(0)" id="refresh_vcode">看不清楚？换一张</a>-->
          <!--</div>-->
          <!--<div class="form-line login-btn">-->
            <!--<a href="javascript:void(0)" @click="login">登录</a>-->
          <!--</div>-->
        <!--</form>-->
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"loginPage",
  data(){
    return{
      ruleForm: {
        username: 'admin',
        password: '123123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  components:{
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username',this.ruleForm.username);
          this.$router.push("/leftNav");
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // login(){
    //   this.$router.push("/leftNav");
    // }
  }
}
</script>

<style lang="less" scoped>
#loginPage {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 680px;
  position: relative;
  background: url(../../static/images/login-bg.png);
  background-repeat: no-repeat;
  background-position: initial;
  background-color: #3d5fa6;
  background-size: contain;
  }
.login-box{
  position:absolute;
  width:1190px;           /*modify by sunfang 1100px; */
  height:600px;
  top:50%;
  left:50%;
  margin-top:-300px;
  margin-left:-600px;            /*modify by sunfang -550px; */
}
.login-form1{
  float:right;
  width:503px;
  height:600px;
  padding: 20px;
  background: rgba(0,0,0,0.2);
}
.login-title{
  font-size:32px;
  padding-left:23px;
  color:#fff;
  margin-top:120px;
  margin-bottom:48px;
}
/*.login-form form{*/
  /*margin-left:30px;*/
  /*width:443px;*/
  /*height:253px;*/
  /*background:url("../../static/images/form-bg.png") no-repeat center center;*/
/*}*/
/*.login-form .form-line{*/
  /*display:block;*/
  /*width:100%;*/
/*}*/
/*.username{*/
  /*height:60px;*/
  /*!* padding-top:7px; *!*/
  /*padding-left:60px;*/
  /*position:relative;*/
/*}*/
/*.password{*/
  /*height:60px;*/
  /*!* padding-top:7px; *!*/
  /*padding-left:60px;*/
  /*position:relative;*/
/*}*/
/*.login-form .form-line input{*/
  /*border:none;*/
  /*background:none;*/
  /*outline: none;*/
  /*padding-top:7px;                    !*add by sunfang  *!*/
/*}*/
/*.login-form .form-line.username input{*/
  /*width:300px;*/
  /*height:50px;*/
  /*line-height:50px;*/
  /*font-size:24px;*/
  /*color:#a7a7a7;*/
/*}*/
/*.login-form .form-line.username span{*/
  /*display:block;*/
  /*width:300px;*/
  /*height:50px;*/
  /*line-height:50px;*/
  /*font-size:24px;*/
  /*color:#a7a7a7;*/
  /*position:absolute;*/
  /*top:7px;*/
  /*left:60px;*/
  /*z-index:99;*/
/*}*/
/*.login-form .form-line.password input{*/
  /*width:300px;*/
  /*height:50px;*/
  /*line-height:50px;*/
  /*font-size:24px;*/
  /*color:#a7a7a7;*/
/*}*/
/*.login-form .form-line.password span{*/
  /*display:block;*/
  /*width:300px;*/
  /*height:50px;*/
  /*line-height:50px;*/
  /*font-size:24px;*/
  /*color:#a7a7a7;*/
  /*position:absolute;*/
  /*top:5px;*/
  /*left:60px;*/
  /*z-index:99;*/
/*}*/
/*.login-form .form-line.login-btn{*/
  /*margin-top:20px;*/
/*}*/
/*.login-form .form-line.login-btn a{*/
  /*display:block;*/
  /*width:430px;*/
  /*height:56px;*/
  /*line-height:56px;*/
  /*text-align:center;*/
  /*font-size:24px;*/
  /*color:#fff;*/
  /*margin-left:7px;*/
/*}*/
/*.login-form .form-line.vcode{*/
  /*margin-top:20px;*/
  /*height:42px;*/
  /*line-height:42px;*/
  /*position:relative;*/
/*}*/
/*.login-form .form-line.vcode input{*/
  /*float:left;*/
  /*border:1px solid #ccc;*/
  /*height:40px;*/
  /*line-height: 40px;                      !*add by sunfang  *!*/
  /*width:80px;*/
  /*padding:0 10px;*/
  /*background:#fff;*/
  /*font-size:16px;*/
/*}*/
/*.login-form .form-line.vcode span{*/
  /*display:block;*/
  /*width:80px;*/
  /*height:40px;*/
  /*padding:0 10px;*/
  /*line-height:40px;*/
  /*font-size:16px;*/
  /*color:#a7a7a7;*/
  /*position:absolute;*/
  /*top:1px;*/
  /*left:1px;*/
  /*z-index:99;*/
/*}*/
/*.login-form .form-line.vcode em{*/
  /*float:left;*/
  /*border:1px solid #ccc;*/
  /*height:40px;*/
  /*width:100px;*/
  /*background:#fff;*/
  /*margin-left:20px;*/
/*}*/
/*.login-form .form-line.vcode em img{*/
  /*width:100%;*/
  /*height:100%;*/
  /*vertical-align:top;*/
/*}*/
/*.login-form .form-line.vcode a{*/
  /*font-size:14px;*/
  /*margin-left:20px;*/
  /*text-decoration: underline;*/
  /*color:#fff;*/
/*}*/
/*.login-form .form-line.vcode a:hover{*/
  /*color:blue;*/
/*}*/
.el-input {
  left: 5%;
  width: 90%;
}
.el-input__inner{
  height: 50px !important;
  line-height: 50px !important;
}
</style>
