<template>
  <div id="bidManageDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/bidManageDetail' }">竞价项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>竞价项目详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <div class="title">基本信息</div>
          <form id="basic_form" class="basicForm">
            <div class="form-group clearFix">
              <div>
                <label>需求项目名称:</label>
                <input type="text" class="form-control" id="projectName" name="projectName"/>
              </div>
              <div class="second-column pos-relative">
                <label>需求单位:</label>
                <input type="text" class="form-control" id="projectCom" name="projectCom" />
              </div>
            </div>

            <div class="form-group clearFix">
              <div>
                <label>所属服务大类:</label>
                <input type="text" class="form-control" id="serviceClass" name="serviceClass"/>
              </div>
              <div class="second-column pos-relative">
                <label>所属服务小类:</label>
                <input type="text" class="form-control" id="serviceSClass" name="serviceSClass"/>
              </div>
            </div>

            <div class="form-group clearFix">
              <div>
                <label>竞价截止时间:</label>
                <input type="text" class="form-control" id="projectEndTime" name="projectEndTime"/>
              </div>
              <div class="second-column pos-relative">
                <label>联系人:</label>
                <input type="text" class="form-control" id="projectCont" name="projectCont"/>
              </div>
            </div>

            <div class="form-group clearFix">
              <div>
                <label>联系电话:</label>
                <input type="text" class="form-control" id="projectTel" name="projectTel"/>
              </div>
              <div class="second-column pos-relative">
                <label>联系地址:</label>
                <input type="text" class="form-control" id="projectAdd" name="projectAdd"/>
              </div>
            </div>

            <div class="form-group" style="height: 110px;margin-bottom: 25px!important;">
              <div style="width: 100%;">
                <label>需求项目概述:</label>
                <textarea name="projectDesc" class="form-control"  id="projectDesc" style="width: 990px;padding: 10px 12px;min-height: 110px;"></textarea>
              </div>
            </div>

            <div class="form-group" style="height: 110px;margin-bottom: 25px!important;">
              <div style="width: 100%;">
                <label>服务要求:</label>
                <textarea name="projectDesc" class="form-control"  id="serviceReq" style="width: 990px;padding: 10px 12px;min-height: 110px;"></textarea>
              </div>
            </div>

            <div class="form-group" style="height: initial;margin-bottom: 30px!important;min-height: 32px;">
              <div style="width: 100%;">
                <label style="line-height: inherit;">需求项目材料:</label>
                <ul id="proMaterial">
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <div class="title">竞价方信息 <span style="font-size: 12px;font-weight: 400;">（按照报价先后顺序排列）</span></div>
          <el-table :data="tableData" stripe id="bidding_form" class="biddingForm" style="width: 100%">
              <el-table-column type="index" label="序号" prop="idx" width="80"></el-table-column>
              <el-table-column prop="companyName" label="服务商名称"></el-table-column>
              <el-table-column prop="contact" label="联系人"></el-table-column>
              <el-table-column prop="phone" label="联系电话" :formatter="formatterFW"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          <div class="goods-form-button" style="width:170px;margin: 50px auto 0;">
            <el-button id="back-form" type="primary" @click="returnBack">返回</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"bidManageDetail",
    data(){
      return{
        tableData: ""
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
      // 返回
      returnBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less">
  #bidManageDetail{
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
          font-weight: bold;
          font-size: 16px;
          margin: 20px 0;
          color: #000;
        }
        .basicForm{
          .form-group {
            line-height: 32px;
            min-height: 32px;
            height: auto;
            font-size: 14px;
            color: #333;
            input[type=text], input[type=password], select {
              width: 360px;
              display: inline-block;
            }
          }
          .form-group>div {
            float: left;
            width: 600px;
            >label {
              width: 110px;
              text-align: right;
              float: left;
              padding-right: 14px;
            }
          }
          .form-group>div.pos-relative {
            position: relative;
          }
          .form-group>div.second-column {
            margin-left: 30px;
          }
        }
      }
    }
  }
</style>
