<template>
  <div id="movieDetail"></div>
</template>

<script>
  export default {
  data () {
    return {

    }
  },
  mounted(){
    console.log(this.$route.path);
  },
  components:{

  },
  methods: {
  }
}
</script>
<style scoped lang="less">
#movieDetail{
   width:100%;
   background:rgb(249,249,249);
}
</style>
