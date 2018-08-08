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
        <p style="padding: 5px 0;border-bottom: 1px solid rgb(241,241,241)">
          <el-button type="primary" size="small" icon="el-icon-plus">添加新闻资讯</el-button>
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
            <el-button type="primary" size="small">搜索</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"news2",
    data(){
      return{
        searchData:{
          title:"",
          publishUnit:"",
          type:"",
          startData:"",
          endData:""
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        typeData: [{
          value: '0',
          label: '新闻中心'
        }, {
          value: '1',
          label: '通知公告'
        }, {
          value: '2',
          label: '政策扶持'
        }, {
          value: '3',
          label: '知识产权法规'
        }],
        type: ''
      }
    },
    components:{
    },
    mounted(){
    },
    methods:{
    }
  }
</script>

<style lang="less">
  #news2{
    .tableWrap{
      padding: 10px 20px;
      .tableBox{
        background: #fff;
        padding: 0 20px;
        margin: 10px;
        border: 1px solid #dee5f1;
        .searchBar{
          padding: 15px 0;
          .inputDiv{
            display: inline-block;
            margin: 5px 10px  ;
            /*margin-left: 10px !important;*/
          }
        }
      }
    }
  }
  .el-input{
    width: 75% !important;
  }
</style>
