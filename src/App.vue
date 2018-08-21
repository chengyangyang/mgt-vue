<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="less">
#app {
  height: 100%!important;
  min-width: 1200px;
}
</style>
