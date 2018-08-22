<template>
  <div id="caseManageDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/caseManagement' }">服务案例管理</el-breadcrumb-item>
      <el-breadcrumb-item>需求项目详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <div class="title">审核</div>
          <div id="patent_approve" class="form-content-approve">
            <table>
              <tr>
                <td colspan="4">基本信息</td>
              </tr>
              <tr>
                <td class="w150" style="line-height: 20px;">服务机构 :</td>
                <td class="w350" id="companyName">8月2号，服务提供单位8月2号，服务提供单位</td>
                <td class="w150">服务对象: </td>
                <td class="w350" id="object"></td>
              </tr>
              <tr>
                <td class="w150">受理时间 : </td>
                <td class="w350" id="acceptTime">2018-07-19 16:41:08</td>
                <td class="w150">结案时间 : </td>
                <td class="w350" id="caseTime">小米科技</td>
              </tr>
              <tr>
                <td class="w150">案件名称: </td>
                <td class="w350" id="name">王思聪</td>
                <td class="w150">案件类型: </td>
                <td class="w350" id="type">15689898898</td>
              </tr>
              <tr>
                <td class="w150">案情简介: </td>
                <td class="w350" colspan="3" id="introduce"></td>
              </tr>
              <tr>
                <td class="w150">案件要点分析: </td>
                <td colspan="3" class="organDescribe" id="analysis" >十多个个人</td>
              </tr>
              <tr>
                <td class="w150">案件结果: </td>
                <td colspan="3" class="serviceAsk" id="result" >111111111111</td>
              </tr>
              <tr>
                <td class="w150">适用法规: </td>
                <td colspan="3" class="organMaterial" id="rule" ></td>
              </tr>
              <tr>
                <td colspan="4">审核信息</td>
              </tr>
              <tr>
                <td class="w150">审核状态 : </td>
                <td class="w350" id="auditState">项目待审核</td>
                <td class="w150">审核意见: </td>
                <td class="w350">
                  <input type="text" class="auditOpinion-box" placeholder="请在此处填写审核意见!" style="width:330px;padding:0 5px;height:40px;" v-model="demandMsg"/>
                </td>
              </tr>
              <tr>
                <td class="w150">审核日期 : </td>
                <td class="w340" id="auditDate" colspan="3"></td>
              </tr>
            </table>
            <div class="goods-form-button" style="width:170px;margin: 50px auto 0;">
              <el-button id="save-form" type="primary" @click="saveForm" v-if="this.dataCode != 1">通过</el-button>
              <el-button id="submit-form" @click="submitForm"  v-if="this.dataCode != 1">不通过</el-button>
              <el-button id="back-form" type="primary" @click="returnBack" v-if="this.dataCode == 1">返回</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"caseManageDetail",
    data(){
      return{
        demandMsg: "",
        dataCode: 0
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    created(){
      this.dataCode = this.$route.query.code
    },
    mounted(){
    },
    methods:{
      // 审核通过
      saveForm() {
        this.$message.success('恭喜你提交成功');
      },
      // 审核不通过
      submitForm() {
        if(this.demandMsg != "" && this.demandMsg != "undefined" && this.demandMsg != null){
          this.$message.success('恭喜你提交成功');
        }else{
          this.$message.warning('请输入审核意见！');
          return false;
        }
      },
      // 返回
      returnBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less">
  #caseManageDetail{
    zoom: 0.9;
  }
  .el-breadcrumb{
    background: #fafafa;
    line-height: 37px;
    padding: 10px 10px;
    border-bottom: 2px solid #edf0f5;
  }
  .mgt-content-box{
    padding: 10px 20px;
    .ibox{
      background: #fff;
      padding: 0 20px;
      margin: 10px;
      border: 1px solid #dee5f1;
      .detail {
        font-size: 14px;
        .title {
          border-bottom: 1px solid #dee5f1;
          font-size: 16px;
          line-height: 60px;
        }
        .form-content-approve{
          padding: 30px;
          table tr {
            line-height: 48px;
          }
          table td {
            border: 1px solid #CCC;
            padding: 0 10px;
            width: 800px;
            font-size: 16px;
            color: #333;
          }
          table td.w150 {
            width: 150px;
            text-align: right;
          }
          table td.w350 {
            width: 350px;
            text-align: left;
          }
        }
      }
    }
  }
</style>
