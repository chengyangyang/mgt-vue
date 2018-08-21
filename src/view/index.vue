<template>
  <div id="indexPage">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      丝绸之路经济带技术转移平台
    </p>
  </div>
</template>

<script>
export default {
  name:"indexPage",
  data(){
    return{

    }
  },
  components:{
  },
  mounted(){
    this.setNewsApi()
  },
  methods:{
    setNewsApi: function() {
      this.$http.post("/news", "type=top&key=123456").then(res => {
        this.newsListShow = res.data.data;
      });
    }
  }
}
</script>

<style lang="less" scoped>
#indexPage {
  width: 100%;
  height: 100%;
  background: url(../../static/images/index-image.png) no-repeat;
  /*background-position: bottom right;*/
  /*position: relative;*/
  }
</style>
