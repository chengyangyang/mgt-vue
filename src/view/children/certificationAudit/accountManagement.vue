<template>
  <div id="news2">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>认证管理</span><span> > </span><span style="color: #777;">账号管理</span>
    </p>
    <div class="tableWrap">
      <div class="tableBox">
        <div class="searchBar">
          <div class="inputDiv">
            <label>用户名:</label>
            <el-input
              placeholder="用户名"
              v-model="searchData.userName">
            </el-input>
          </div>
          <div class="inputDiv">
            <label>企业名称:</label>
            <el-input
              placeholder="企业名称"
              v-model="searchData.companyName">
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
            <label>手机号:</label>
            <el-input
              placeholder="手机号"
              v-model="searchData.phoneNumber">
            </el-input>
          </div>
          <div class="inputDiv">
            <label>企业类型:</label>
            <el-select autosize v-model="searchData.type" placeholder="请选择企业类型" id="type">
              <el-option
                v-for="item in typeData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputDiv">

            <label>注册时间:</label>
            <el-date-picker
              v-model="registTime"
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
              label="发布单位"  property="publishUnit">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="是否认证"  property="isPublished" :formatter="publishFormatter">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="企业名称"  property="companyName">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="统一社会信用代码"  property="companyCode">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="企业类型"  property ="type" :formatter="formatter">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="手机号码"  property ="phoneNumber">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="注册时间"  property ="publishTime">
            </el-table-column>

            <el-table-column label="操作" header-align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="fozen(scope.$index, scope.row,0)">冻结</el-button>
                <el-button
                  size="mini"
                  @click="fozen(scope.$index, scope.row,1)">解冻</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleCheck(scope.$index, scope.row)">查看</el-button>
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
        registTime:"",
        confirmData:"您确定要进行冻结操作吗",
        searchData:{userName:"", companyName:"", companyCode:"", phoneNumber:"", type:"",registStartTime:"",registEndTime:""}, // 搜索框
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],   // 时间初始化
        typeData1:{"1":"服务需求方","2":"服务供应方"},
        typeData: [{
          value: '1',
          label: '服务需求方'
        }, {
          value: '2',
          label: '服务供应方'
        }],  // 文章类型
        newsListShow:"",             //列表总数据
        resourceUrl:{url:"/configData"},
        idx: -1
      }
    },
    components:{
      pageNation
    },
    mounted(){
    },
    methods:{
      handleCheck(index, row) {
        var id = index;
        this.$router.push({ name:"accountView",params:{ companyName: row.companyName,companyCode:row.companyCode}})
      },
      //类型判断
      formatter(row, column,cellValue,index) {
        return cellValue = this.typeData1[cellValue];
      },
      //是否认证判断
      publishFormatter(row, column,cellValue,index){
        var publishVal = cellValue == 0?"未认证":"已认证"
        return cellValue = publishVal;
      },
      //列表数据
      listData(data){
        this.newsListShow = data;
      },
      // 搜索
      selectList(){
        this.searchData.registStartTime = this.timeDelete(this.registTime[0]);
        this.searchData.registEndTime = this.timeDelete(this.registTime[1]);
        this.$refs.myChid.setNewsApi();
      },
      //解冻操作
      fozen(index, row,data) {
        if(data == 1){
          this.confirmData = "您确定要进行解冻操作吗?";
        }else{
          this.confirmData = "您确定要进行冻结操作吗?";
        }
        this.idx = index;
        this.delVisible = true;
      },
      deleteRow(){
        this.$message.success('操作成功');
        this.delVisible = false;
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
