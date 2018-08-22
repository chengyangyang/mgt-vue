<template>
  <div id="serviceDemand">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>认证审核</span><span> > </span><span style="color: #777;">服务需求方</span>
    </p>
    <div class="tableWrap">
      <div class="tableBox">
        <div class="searchBar">
          <div class="inputDiv">
            <label>需求单位名称:</label>
            <el-input
              placeholder="需求单位名称"
              v-model="searchData.demandName">
            </el-input>
          </div>
          <div class="inputDiv">
            <label>统一社会信用代码:</label>
            <el-input
              placeholder="统一社会信用代码"
              v-model="searchData.companyCode">
            </el-input>
          </div>
          <div class="inputDiv">
            <label>审核状态:</label>
            <el-select autosize v-model="searchData.status" placeholder="审核状态" id="type">
              <el-option
                v-for="item in typeData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputDiv">
            <label>用户名:</label>
            <el-input
              placeholder="请输入用户名"
              v-model="searchData.userName">
            </el-input>
          </div>
          <div class="inputDiv">

            <label>认证时间:</label>
            <el-date-picker
              v-model="authenticationTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="inputDiv">

            <label>审核时间:</label>
            <el-date-picker
              v-model="examTime"
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
              width="170" header-align="center"
              label="用户名"  property="userName">
            </el-table-column>
            <el-table-column
              width="130" header-align="center"
              label="需求单位名称"  property="demandName">
            </el-table-column>
            <el-table-column
              header-align="center"
              label="统一社会信用代码"  property="companyCode">
            </el-table-column>
            <el-table-column
              header-align="center"
              label="认证时间"  property ="authenticationTime">
            </el-table-column>
            <el-table-column
              header-align="center"
              label="审核时间"  property ="examTime">
            </el-table-column>
            <el-table-column
              header-align="center"
              label="审核状态"  property ="status" :formatter="formatter">
            </el-table-column>
            <el-table-column label="操作" header-align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleCheck(scope.$index, scope.row)">查看/审核</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--分页-->
        <pageNation  ref="myChid" :resourceUrl="resourceUrl" :searchData="searchData" @askData="listData"></pageNation>
      </div>
    </div>
    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">{{confirmData}}</div>
      <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
  import pageNation from '@/components/pageNation'   // 分页组件
  export default {
    name:"news2",
    data(){
      return{
        delVisible: false,
        value6:true,
        authenticationTime:"",    // 认证时间
        examTime:"",   // 审核时间
        confirmData:"您确定要进行冻结操作吗",
        searchData:{demandName:"",companyCode:"",status:"", userName:"",authenticationStartTime:"",authenticationEndTime:"",examStartTime:"",examEndTime:""}, // 搜索框
        typeData1:{"1":"已提交","2":"已保存","3":"未通过","4":"已通过"},
        typeData: [{
          value: '1',
          label: '已提交'
        }, {
          value: '2',
          label: '已保存'
        },{
          value: '3',
          label: '未通过'
        },{
          value: '4',
          label: '已通过'
        }],  // 文章类型
        newsListShow:"",             //列表总数据
        resourceUrl:{url:"/demandData"},
        idx: -1
      }
    },
    components:{
      pageNation
    },
    mounted(){
    },
    methods:{
      //查看审核
      handleCheck(index, row) {
        var id = index;
        this.$router.push({ name:"demandView",params:{ companyName: row.companyName,companyCode:row.companyCode}})
      },
      //类型判断
      formatter(row, column,cellValue,index) {
        return cellValue = this.typeData1[cellValue];
      },
      //列表数据
      listData(data){
        this.newsListShow = data;
      },
      //搜索
      selectList(){
        // 认证时间
        this.searchData.examStartTime = this.timeDelete(this.examTime[0]);
        this.searchData.examEndTime = this.timeDelete(this.examTime[1]);
        // 审核时间
        this.searchData.authenticationStartTime = this.timeDelete(this.authenticationTime[0]);
        this.searchData.authenticationEndTime = this.timeDelete(this.authenticationTime[1]);

        this.$refs.myChid.setNewsApi();
      },
      //  获取时间
      timeDelete(datetime){
        var year = datetime.getFullYear();
        var month = datetime.getMonth()+1 < 10 ? "0"+ eval(datetime.getMonth()+1):eval(datetime.getMonth()+1);//js从0开始取
        var date = datetime.getDate() < 10 ? "0"+ datetime.getDate():datetime.getDate();
        var hour = datetime.getHours()< 10 ? "0"+ datetime.getHours():datetime.getHours();
        var minutes = datetime.getMinutes()< 10 ? "0"+ datetime.getMinutes():datetime.getMinutes();
        var second = datetime.getSeconds()< 10 ? "0"+ datetime.getSeconds():datetime.getSeconds();

        var time = year+"-"+month+"-"+date+" "+hour+":"+minutes+":"+second; //2009-06-12 17:18:05
        return time;
      }
    }
  }
</script>

<style lang="less">
  #serviceDemand{
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
    background: #409EFF;
    color: #ffffff;
    border:none;
  }
  td{
    /*padding: 3px 0.5rem!important;*/
    text-align: center;
  }
  }
  }
  }
  }
  .block{
    margin: 20px 0;
  }
  .el-pagination{
    padding-left: 280px !important;
  }
  .el-input{
    width: 170px;
  }
  .el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
    width: 375px;
  }
</style>
