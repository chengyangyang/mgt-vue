<template>
    <div id="pageNation">
      <div class="block" style="border: 1px solid  #E6E6E6;background: rgb(255,255,255);padding: 15px;text-align: center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageNumber"
          layout="total, prev, pager, next, jumper"
          :total="newsListTotal">
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      newsListTotal:0,  // 列表条数
      currentPage: 1,   // 当前页
      page:1,
      pageNumber:10  // 每页参数
    }
  },
  props:["resourceUrl","searchData"],
  // computed: {
  //   normalizedSize: function () {
  //     return this.searchData.page
  //   }
  // },
  created(){
    this.setNewsApi()
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit('page-size',val)
    },
    handleCurrentChange(val) {
      this.page = val;
      this.setNewsApi();
    },
    setNewsApi: function() {
      this.searchData.page = this.page;   // 分页页码
      this.searchData.pageNumber = this.pageNumber; // 单页数
      this.$http.post(this.resourceUrl.url,this.searchData).then(res => {
        if(res.status == 200){
          this.$emit('askData',res.data.data);
          this.newsListTotal = res.data.totalPage;
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#pageNation{
  margin-top: 10px;
}
.is-in-pagination input{
  height: 28px!important;
  line-height: 28px !important;
}

</style>
