<template>
  <div id="addMsg">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>系统管理</span><span> > </span><span style="color: #777;">消息管理</span><span> > </span><span style="color: #777;">消息添加</span>
    </p>
    <el-card>
        <el-form ref="msgForm" :model="formData" :rules="rules" label-width="100px">
            <el-form-item label="配置名称:" prop='name' >
                <el-input v-model="formData.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="文章内容:" required>
            <vueEditor @editorData="editorData"></vueEditor>
            <p style="color: red">
              {{this.errorContent}}
            </p>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('msgForm')" type="primary" size="small">发布</el-button>
                <el-button size="small">取消</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
  import vueEditor from '@/components/VueEditor'   // 富文本编辑器组件
  export default {
    data(){
      return{
        errorContent:'',
        formData:{
          name:'',
          content:''
        },
        rules:{
          name:[{ required: true, message: '请输入配置名称', trigger: 'blur' }]
        }
      }
    },
    components:{
        vueEditor
    },
    created(){
       if(this.$route.params.id){
        console.log(this.$route.params.id);
      }
    },
    mounted(){
     
    },
    methods:{
      //提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('恭喜你提交成功');
            // this.$http.post("/msgList",this.formData).then(res => {
            //   if(res.status == 200){
            //     this.$message.success('恭喜你提交成功');
            //   }
            // })
          } else {
            this.$message.warning('请输入完整信息');
            return false;
          }
        });
      },
    //  富文本编辑器内容
      editorData(data){
        if(data){
          this.formData.content = data;
          this.errorContent = '';
        }else{
          this.errorContent = '消息内容不能为空';
        }
      }
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
  .ql-editor p{
    min-height: 200px;
  }
}
</style>
