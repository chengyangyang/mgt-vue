<template>
  <div id="changePsw">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>系统管理</span><span> > </span><span style="color: #777;">审核员管理</span><span> > </span><span style="color: #777;">新增审核员</span>
    </p>
    <el-card>
        <el-form ref="userForm" :rules="rules" :model="formData" label-width="100px">
            <el-form-item label="旧密码:" prop='oldPass'>
                <el-input v-model="formData.oldPass" size="small"></el-input>
            </el-form-item>
            <el-form-item label="新密码:" prop='newPass'>
                <el-input v-model="formData.newPass" size="small"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop='checkPass'>
                <el-input v-model="formData.checkPass" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('userForm')" type="primary" size="small">提交</el-button>
                <el-button size="small">取消</el-button>
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
          oldPass:'',
          newPass:'',
          checkPass:''
        },
        rules:{
          oldPass:[
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' },
                ],
          newPass:[
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' }
                ],
          checkPass:[
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' },
                    { validator:(rule, value, callback) => {
                                                            if (value === '') {
                                                              callback(new Error('请再次输入密码'));
                                                            } else if (value !== this.formData.newPass) {
                                                              callback(new Error('两次输入密码不一致!'));
                                                            } else {
                                                              callback();
                                                            }
                                                          },trigger:'blur'}
                ],
        }
      }
    },
    created(){
       if(this.$route.params.id != null){
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
      }
    }
  }
</script>

<style lang="less">
#changePsw{
  .el-form-item__content{
    margin-left: 100px !important;
  }
  .container {
    padding: 0;
  }
}
</style>
