<template>
  <div id="addMsg">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>系统管理</span><span> > </span><span style="color: #777;">消息管理</span><span> > </span><span style="color: #777;">消息添加</span>
    </p>
    <el-card>
        <el-form ref="msgForm" :model="formData" label-width="100px">
            <el-form-item label="用户名:" >
                <el-input v-model="formData.userName" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="手机号:" >
                <el-input v-model="formData.phoneNum" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="联系人:" >
                <el-input v-model="formData.linkman" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="所在单位:" >
                <el-input v-model="formData.unit" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="标题:" >
                <el-input v-model="formData.title" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="留言内容:" >
                <el-input type="textarea" :autosize="false" row="4" v-model="formData.msgContent"></el-input>
            </el-form-item>
            <el-form-item label="留言时间:" >
                <el-input v-model="formData.submitTime" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="回复内容:" >
                <el-input type="textarea" :autosize="false" row="4" v-model="formData.ansContent"></el-input>
            </el-form-item>
            <el-form-item label="回复时间:" >
                <el-input v-model="formData.ansTime" size="small" disabled></el-input>
            </el-form-item>
            <el-form-item label="回复人:" >
                <el-input v-model="formData.ansMan" size="small" disabled></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button @click="submitForm('msgForm')" type="primary" size="small">返回</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        errorContent:'',
        formData:{
          name:'',
          content:''
        }
      }
    },
    components:{
    },
    created(){
       if(this.$route.params.id){
        console.log(this.$route.params.id);
      }
    },
    created(){
        if(this.$route.params.row){
            this.formData = this.$route.params.row;
            console.log(this.$route.params.row)
        }
    },
    mounted(){
     
    },
    methods:{

    }
  }
</script>

<style lang="less">
#addMsg{
  .el-form-item__content{
    margin-left: 100px !important;
  }
  .container {
    padding: 0;
  }
}
</style>
