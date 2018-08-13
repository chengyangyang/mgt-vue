<template>
  <div id="news2">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
     <span>资讯管理</span><span> > </span><span style="color: #777;">资讯管理1</span>
    </p>
    <div class="tableWrap">
      <div class="tableBox">
        <p style="padding: 10px 0;border-bottom: 1px solid rgb(241,241,241)">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="addNews">添加新闻资讯</el-button>
        </p>
        <div class="searchBar">
            <div class="inputDiv">
              <label>标题:</label>
              <el-input
              placeholder="请输入标题"
              v-model="searchData.title">
              </el-input>
            </div>
            <div class="inputDiv">
              <label>发布单位:</label>
              <el-input
              placeholder="请输入发布单位"
              v-model="searchData.publishUnit">
              </el-input>
            </div>
            <div class="inputDiv">
              <label>文章类型:</label>
              <el-select autosize v-model="type" placeholder="请选择" id="type">
                <el-option
                  v-for="item in typeData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="inputDiv">

              <label>发布时间:</label>
              <el-date-picker
                v-model="value4"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <el-button type="primary" size="small" @click="selectList">搜索</el-button>
        </div>
        <div class="table">
          <el-table
            :data="newsListShow" border
            style="width: 100%" class="newsTable">
            <el-table-column
              type="index"
              width="70" header-align="center"
            label="序号">
            </el-table-column>
            <el-table-column
              property="title"
              width="170" header-align="center"
              label="标题"  prop="title">
            </el-table-column>
            <el-table-column
              property="title"
              width="130" header-align="center"
              label="发布单位"  prop="publishUnit">
            </el-table-column>
            <el-table-column
              property="title"
              width="120" header-align="center"
              label="类型"  prop="type" :formatter="formatter">
            </el-table-column>
            <el-table-column
              property="title"
              width="100" header-align="center"
              label="是否发布"  prop="isPublish">
            </el-table-column>
            <el-table-column
              property="title"
              width="120" header-align="center"
              label="发布时间"  prop="publishTime">
            </el-table-column>
            <el-table-column label="操作" header-align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleCheck(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--分页-->
          <pageNation  ref="myChid" :resourceUrl="resourceUrl" :searchData="searchData" @askData="listData"></pageNation>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation'   // 分页组件
  export default {
    name:"news2",
    data(){
      return{
        searchData:{title:"", publishUnit:"", type:"", startData:"", endData:""},
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],   // 时间初始化
        typeData1:{"1":"新闻中心","2":"通知公告","3":"政策扶持","4":"知识产权法规"},
        typeData: [{
          value: '1',
          label: '新闻中心'
        }, {
          value: '2',
          label: '通知公告'
        }, {
          value: '3',
          label: '政策扶持'
        }, {
          value: '4',
          label: '知识产权法规'
        }],  // 文章类型
        type: '',    //文章类型
        newsListShow:"",             //列表总数据
        resourceUrl:{url:"/newsList"},
      }
    },
    components:{
        pageNation
    },
    mounted(){
    },
    methods:{
      handleCheck(index, row) {
        console.log(index, row);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //类型判断
      formatter(row, column,cellValue,index) {
        return cellValue = this.typeData1[cellValue];
      },
      //列表数据
      listData(data){
        this.newsListShow = data;
      },
      selectList(){
        this.$refs.myChid.setNewsApi();
      },
      addNews(){
        this.$router.push("/newsAdd");
      }
    }
  }
</script>

<style lang="less">
  #news2{
    .tableWrap{
      padding: 10px 15px;
      .tableBox{
        background: #fff;
        padding: 0 20px;
        margin: 10px;
        border: 1px solid #dee5f1;
        .searchBar{
          padding: 15px 0;
          .inputDiv{
            display: inline-block;
            margin: 5px;
            /*margin-left: 10px !important;*/
          }
        }
      .newsTable{
        th{
          padding: 3px 0.5rem!important;
        }
        td{
          padding: 3px 0.5rem!important;
        }
      }
      }
    }
  }
  .el-input{
    width: 75% !important;
  }
  .block{
    margin: 20px 0;
  }
  .el-pagination{
    padding-left: 280px !important;
  }
</style>
