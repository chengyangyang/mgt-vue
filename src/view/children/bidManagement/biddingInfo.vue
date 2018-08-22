<template>
  <div id="biddingInfo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/bidManageDetail' }">竞价项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>竞价项目详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <div class="title">竞价方基本信息</div>
          <form id="basic_form" class="basicForm">
            <div class="form-group clearFix">
              <div class="single-column">
                <label>服务总体报价:</label>
                <input type="text" class="form-control" id="serviceOffer" name="serviceOffer"/>元
              </div>
            </div>

            <div class="form-group" style="height: 110px;margin-bottom: 25px!important;">
              <div style="width: 100%;">
                <label>服务价格说明:</label>
                <textarea name="serviceDesc" class="form-control"  id="serviceDesc" style="width: 990px;padding: 10px 12px;min-height: 110px;"></textarea>
              </div>
            </div>

            <div class="form-group" style="height: 110px;margin-bottom: 25px!important;">
              <div style="width: 100%;">
                <label>服务承诺:</label>
                <textarea name="servicePro" class="form-control"  id="servicePro" style="width: 990px;padding: 10px 12px;min-height: 110px;"></textarea>
              </div>
            </div>

            <div class="form-group high-form-group clearFix" style="width:100%;height:auto;">
              <div class="single-column" service_proof>
                <label style="line-height: inherit;">服务相关附件:</label>
                <ul id="proMaterial">
                </ul>
              </div>
            </div>

            <div class="form-group clearFix">
              <div class="single-column">
                <label>服务商名称:</label>
                <input type="text" class="form-control" id="serviceName" name="serviceName"/>
              </div>
            </div>

            <div class="form-group clearFix">
              <div class="single-column">
                <label>联系人:</label>
                <input type="text" class="form-control" id="serviceCont" name="serviceCont"/>
              </div>
            </div>

            <div class="form-group clearFix">
              <div class="single-column">
                <label>电话:</label>
                <input type="text" class="form-control" id="serviceTel" name="serviceTel"/>
              </div>
            </div>

            <div class="goods-form-button" style="width:70px;margin: 50px auto;">
              <el-button id="back-form" type="primary" @click="returnBack">返回</el-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"biddingInfo",
    data(){
      return{
        searchData: {},
        resourceUrl:{url:"/biddingInfo"},
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    created(){
    },
    mounted(){
    },
    methods:{
      // 返回
      returnBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less">
  #biddingInfo{
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
          line-height: 50px;
          color: #000;
          border-bottom: none;
        }
        .basicForm{
          margin-top: 20px;
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
