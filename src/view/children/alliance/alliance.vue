<template>
  <div id="alliance">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联盟管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="title">
          <el-button type="primary" icon="el-icon-plus"  @click="addBtn">新增</el-button>
        </div>
        <div class="detail">
          <el-form :inline="true" :model="searchData" class="demo-form-inline">
            <el-form-item label="制度名称">
              <el-input v-model="searchData.title" placeholder="制度名称"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
              <el-date-picker v-model="searchData.published" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubForm1">查询</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="index" label="序号" prop="idx" width="80"></el-table-column>
            <el-table-column prop="title" label="制度名称"></el-table-column>
            <el-table-column prop="published" label="发布时间"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="page-turn text-center">
            <v-pageNation ref="myChid" :searchData="searchData"  :resourceUrl="resourceUrl" @askData="listData"></v-pageNation>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"alliance",
    data(){
      return{
        delVisible: false,
        newsData: '',
        searchData: {
          title: '',
          published: ''
        },
        tableData: '', //列表总数据
        resourceUrl:{url:"/alliance"},
        idx: -1
//        published: [new Date(2018, 8, 10, 0, 0), new Date(2018, 10, 1, 0, 0)],
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    mounted(){
    },
    methods:{
      // 表格操作事件
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.idx = index;
        this.delVisible = true;
      },
      // 列表数据
      listData(data){
        this.tableData = data;
      },
     // 搜索事件
      onSubForm1() {
        this.$refs.myChid.setNewsApi();
      },
      // 点击确定，关闭弹出层
      deleteRow() {
        this.tableData.splice(this.idx, 1);
        this.$message.success('删除成功');
        this.delVisible = false;
      },
      // 新增
      addBtn() {
        this.$router.push('/allianceAdd');
      }
    }
  }
</script>

<style lang="less">
  #alliance{
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
          background: #409EFF;
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
