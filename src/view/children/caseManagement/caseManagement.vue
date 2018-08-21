<template>
  <div id="caseManagement">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>服务案例管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <el-form :inline="true" :model="searchData" class="demo-form-inline">
            <el-form-item label="服务机构">
              <el-input v-model="searchData.organName" placeholder="服务机构"></el-input>
            </el-form-item>
            <el-form-item label="案件名称">
              <el-input v-model="searchData.caseName" placeholder="案件名称"></el-input>
            </el-form-item>
            <el-form-item label="审核状态" prop="auditState">
              <el-select  v-model="searchData.auditState" placeholder="请选择" id="auditState" style="width: 200px">
                <el-option v-for="item in typeData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="提交时间">
              <el-date-picker v-model="searchData.startDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="审核时间">
              <el-date-picker v-model="searchData.auditStartDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubForm1">查询</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" label="序号" prop="idx" width="80"></el-table-column>
            <el-table-column prop="companyName" label="服务机构"></el-table-column>
            <el-table-column prop="name" label="案件名称"></el-table-column>
            <el-table-column prop="applayTime" label="提交时间"></el-table-column>
            <el-table-column prop="approvalTime" label="审核时间"></el-table-column>
            <el-table-column prop="states" label="审核状态" :formatter="formatter"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleDetail(scope.$index, scope.row)" v-if="scope.row.states != 1">查看</el-button>
                <el-button size="mini" @click="handleExamine(scope.$index, scope.row)" v-if="scope.row.states == 1">审核</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="page-turn text-center">
            <v-pageNation ref="myChid" :searchData="searchData"  :resourceUrl="resourceUrl" @askData="listData"></v-pageNation>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"caseManagement",
    data(){
      return{
        newsData: '',
        searchData: {},
        tableData: '', //列表总数据
        resourceUrl:{url:"/caseManagement"},
        typeData: [{value: '1', label: '待审核'}, {value: '2', label: '已审核'}, {value: '3', label: '审核不通过'}],
        typeData1: {'1': '待审核', '2': '已审核',  '3': '审核不通过'},
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    mounted(){
    },
    methods:{
      // 表格操作事件
      handleDetail(index, row) {
        this.$router.push({
          name: 'caseManageDetail',
          query:{
            code : 1
          }
        });
      },
      // 审核
      handleExamine(index, row) {
        this.$router.push({
          name: 'caseManageDetail',
          query:{
            code : 2
          }
        });
      },
      //类型判断（审核状态）
      formatter(row, column,cellValue,index) {
        return cellValue = this.typeData1[cellValue];
      },
      // 列表数据
      listData(data){
        this.tableData = data;
//        console.log("data-------"+JSON.stringify(data)) // JS中[object object]取值
      },
      // 搜索事件
      onSubForm1() {
        this.$refs.myChid.setNewsApi();
      }
    }
  }
</script>

<style lang="less">
  #caseManagement{
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
      .title {
        border-bottom: 1px solid #dee5f1;
        font-size: 16px;
        line-height: 80px;
      }
      .detail {
        padding: 20px 0;
        th.is-leaf{
          background: #409EFF!important;
          color: #ffffff;
        }
        .page-turn{
          margin-top: 35px;
        }
        .text-align{
          text-align: center;
        }
      }
    }
  }
  .el-table td, .el-table th.is-leaf{
    text-align: center;
  }
</style>
