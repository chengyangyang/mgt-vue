<template>
  <div id="accountView">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>认证管理</span><span> > </span><span style="color: #777;">信息查看</span>
    </p>
    <table border>
      <tr>
        <td class="td150">账号信息</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td class="td150">企业账号：</td>
        <td>229938488484848484</td>
        <td class="td150">企业名称：</td>
        <td>{{this.$route.params.companyName}}</td>
      </tr>
      <tr>
        <td class="td150">统一社会信用代码：</td>
        <td>{{this.$route.params.companyCode}}</td>
        <td class="td150">企业类型：</td>
        <td></td>
      </tr>
      <tr>
        <td class="td150">是否认证：</td>
        <td></td>
        <td class="td150">注册时间：</td>
        <td></td>
      </tr>
      <tr>
        <td class="td150">联系人：</td>
        <td></td>
        <td class="td150">联系电话：</td>
        <td></td>
      </tr>
      <tr>
        <td class="td150">联系地址：</td>
        <td colspan="3"></td>
      </tr>
    </table>
    <div style="text-align: center;margin-top: 20px;width: 800px">
      <el-button type="primary" @click="returnBack">返回</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    components:{
    },
    mounted(){
      console.log(this.$route.params.companyName);
    },
    methods:{
      returnBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less">
  #accountView{
    width: 100%;
    table{
      width: 800px;
      margin:20px 40px;
      font-size:15px
    }
    tr{
      width: 100%;
      height: 40px;
      line-height:25px
    }
    td{
      padding: 0 5px;
    }
  }
  .td150{
    width: 130px;
    text-align: center;
  }
</style>
