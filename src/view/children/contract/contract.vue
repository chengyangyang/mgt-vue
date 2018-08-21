<template>
  <div id="contract">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>合同备案管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <el-form :inline="true" :model="searchData" class="demo-form-inline">
            <el-form-item label="需求项目单位">
              <el-input v-model="searchData.demandCompany" placeholder="需求项目单位"></el-input>
            </el-form-item>
            <el-form-item label="服务供应单位">
              <el-input v-model="searchData.organUnit" placeholder="服务供应单位"></el-input>
            </el-form-item>
            <el-form-item label="需求项目编码">
              <el-input v-model="searchData.organCode" placeholder="需求项目编码"></el-input>
            </el-form-item>
            <el-form-item label="需求项目名称">
              <el-input v-model="searchData.organName" placeholder="需求项目名称"></el-input>
            </el-form-item>
            <el-form-item label="服务类型" prop="fwxl">
              <el-select  v-model="searchData.fwxl" placeholder="请选择" id="fwxl" style="width: 200px">
                <el-option v-for="item in typeDataFw" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="审核状态" prop="auditState">
              <el-select  v-model="searchData.auditState" placeholder="请选择" id="auditState" style="width: 200px">
                <el-option v-for="item in typeData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="合同备案提交时间">
              <el-date-picker v-model="searchData.startDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="合同备案审核时间">
              <el-date-picker v-model="searchData.auditStartDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubForm1">查询</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" label="序号" prop="idx" width="80"></el-table-column>
            <el-table-column prop="demandCompany" label="需求项目单位"></el-table-column>
            <el-table-column prop="organUnit" label="服务供应单位"></el-table-column>
            <el-table-column prop="organCode" label="需求项目编码"></el-table-column>
            <el-table-column prop="organName" label="需求项目名称"></el-table-column>
            <el-table-column prop="fwxl" label="服务类型" :formatter="formatterFW"></el-table-column>
            <el-table-column prop="applayTime" label="合同备案提交时间"></el-table-column>
            <el-table-column prop="approvalTime" label="合同备案审核时间"></el-table-column>
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
    name:"contract",
    data(){
      return{
        newsData: '',
        searchData: {},
        tableData: '', //列表总数据
        resourceUrl:{url:"/contract"},
        typeData: [{value: '1', label: '待备案'}, {value: '2', label: '待审核'}, {value: '3', label: '已通过'},{value: '4', label: '未通过'}],
        typeData1: {'1': '待备案', '2': '待审核',  '3': '已通过',  '4': '未通过'},
        typeDataFw: [
          {value: '1', label: '商业秘密法律服务'},
          {value: '2', label: '商标法律服务'},
          {value: '3', label: '专利法律服务'},
          {value: '4', label: '著作权法律服务'},
          {value: '5', label: '其他法律服务'}
        ],
        typeDataFw1: {'1': '商业秘密法律服务', '2': '商标法律服务', '3': '专利法律服务', '4': '著作权法律服务', '5': '其他法律服务'},
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
          name: 'contractDetail',
          query:{
            code : 1
          }
        });
      },
      // 审核
      handleExamine(index, row) {
        this.$router.push({
          name: 'contractDetail',
          query:{
            code : 2
          }
        });
      },
      //类型判断（服务类型）
      formatterFW(row, column,cellValue,index) {
        return cellValue = this.typeDataFw1[cellValue];
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
  #contract{
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
