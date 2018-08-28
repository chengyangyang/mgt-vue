<template>
    <Card id="interact">
        <Row style="border-bottom:1px solid #dee5f1; padding-bottom:10px;">
            <el-form :inline="true" :model="searchData">
                <el-form-item label="单位名称">
                    <el-input v-model="searchData.unitName" size="small"></el-input>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input v-model="searchData.title" size="small"></el-input>
                </el-form-item>
                <el-form-item label="回复状态">
                    <el-select v-model="searchData.ansState" size="small" placeholder="请选择回复状态">
                    <el-option label="已回复" value="1"></el-option>
                    <el-option label="未回复" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="searchData.userName" size="small"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                    <el-input v-model="searchData.linkman" size="small"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="searchData.phoneNum" size="small"></el-input>
                </el-form-item>
                <el-form-item label="提交时间">
                    <el-date-picker
                        size="small"
                        v-model="searchData.submitTime"
                        type="datetimerange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="回复时间">
                    <el-date-picker
                        size="small"
                        v-model="searchData.ansTime"
                        type="datetimerange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </Row>
        <el-table
            :data="interactListShow"  stripe
            style="width: 100%" class="newsTable">
            <el-table-column
              type="index" align="center"
              width="70" header-align="center"
            label="序号">
            </el-table-column>
            <el-table-column
              property="title"
              width="170" header-align="center"
              label="标题"  prop="title" align="center">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="单位名称"  property ="unitName" align="center">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="留言时间"  property ="msgTime" align="center">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="回复时间"  property ="ansTime" align="center">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="回复状态"  property ="ansState" align="center">
            </el-table-column>

            <el-table-column label="操作" header-align="center" width="200px" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="lookDetail(scope.$index, scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <pageNation  ref="myChid" :resourceUrl="resourceUrl" :searchData="searchData" @askData="listData"></pageNation>
    </Card>
</template>

<script>
  import pageNation from '@/components/pageNation'   // 分页组件
export default {
  data(){
    return{
      interactListShow:[],
      searchData:{
          unitName:'', title:'', ansState:'', userName:'', linkman:'', phoneNum:'',submitTime:'',ansTime:''
          },
      resourceUrl:{url:"/interactList"}
    }
  },
  components:{
    pageNation
  },
  mounted(){
  },
  methods:{
    listData(data){
        this.interactListShow = data;
    },
    selectList(){
      this.$refs.myChid.setNewsApi();
    },
    lookDetail(index,row){
      this.$router.push({name:'interactListDetail',params:{row:row}});
    },
    onSubmit(){
        console.log(this.searchData)
    }
  }
}
</script>

<style lang="less">
#interact{
  .mgt-content-box .ibox .detail th.is-leaf {
    background: #409EFF !important;
    color: #ffffff;
  }
}

</style>
