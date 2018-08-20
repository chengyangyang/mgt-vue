<template>
  <div id="demandDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/demandManagement' }">需求项目管理</el-breadcrumb-item>
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
                <td class="w150" style="line-height: 20px;">需求项目名称 :</td>
                <td class="w350" id="organName">一种奥克托今颗粒表面粗糙度检测方法</td>
                <td class="w150">需求项目编码: </td>
                <td class="w350" id="orangeCode"></td>
              </tr>
              <tr>
                <td class="w150">竞价截止时间 : </td>
                <td class="w350" id="endTime">2018-07-19 16:41:08</td>
                <td class="w150">需求单位 : </td>
                <td class="w350" id="organUnit">小米科技</td>
              </tr>
              <tr>
                <td class="w150">联系人: </td>
                <td class="w350" id="constantor">王思聪</td>
                <td class="w150">联系电话: </td>
                <td class="w350" id="constantPhone">15689898898</td>
              </tr>
              <tr>
                <td class="w150">联系地址: </td>
                <td class="w350" colspan="3" id="constantAddress"></td>
              </tr>
              <tr>
                <td class="w150">需求项目描述: </td>
                <td colspan="3" class="organDescribe" id="priceDetails" >十多个个人</td>
              </tr>
              <tr>
                <td class="w150">服务要求: </td>
                <td colspan="3" class="serviceAsk" id="serviceAsk" >111111111111</td>
              </tr>
              <tr>
                <td class="w150">需求项目材料: </td>
                <td colspan="3" class="organMaterial" id="organMaterial" ></td>
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
              <tr>
                <td class="w150 needic_content" style="display: none;">需求图片 : </td>
                <td colspan="3" class="needPic needic_content"  style="display: none;">
                  <ul name="aptProof_img"></ul>
                </td>
              </tr>
            </table>
            <div class="goods-form-button" style="width:170px;margin: 50px auto 0;">
              <el-button id="save-form" type="primary" @click="saveForm">通过</el-button>
              <el-button id="submit-form" @click="submitForm">不通过</el-button>
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
    name:"demandDetail",
    data(){
      return{
        demandMsg: ""
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    mounted(){
    },
    methods:{
      // 审核通过
      saveForm() {
        console.log(11);
      },
      // 审核不通过
      submitForm() {
        console.log('this.demandMsg---'+this.demandMsg);
        if(this.demandMsg != "" && this.demandMsg != "undefined" && this.demandMsg != null){
          this.$message.success('恭喜你提交成功');
        }else{
          this.$message.warning('请输入审核意见！');
          return false;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #news1{
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
            font-size: 14px;
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
