<template>
  <div id="addUser">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>系统管理</span><span> > </span><span style="color: #777;">审核员管理</span><span> > </span><span style="color: #777;">新增审核员</span>
    </p>
    <el-card>
        <el-form ref="userForm" :rules="rules" :model="formData" label-width="100px">
            <el-form-item label="账号:" prop='passName'>
                <el-input v-model="formData.passName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop='passWord'>
                <el-input v-model="formData.passWord" size="small"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名:">
                <el-input v-model="formData.realName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="角色选择:" prop='userType'>
                <el-checkbox-group v-model="formData.userType">
                    <el-checkbox label="超级管理员" name="userType"></el-checkbox>
                </el-checkbox-group>
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
          passName:'',
          passWord:'',
          realName:'',
          userType:[]
        },
        rules:{
          passName:[{ required: true, message: '请输入账号', trigger: 'blur' }],
          passWord:[{ required: true, message: '请输入密码', trigger: 'blur' }],
          userType:[{ type: 'array',  required: true, message: '请选择管理员权限', trigger: 'change' }]
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
#addUser{
  .el-form-item__content{
    margin-left: 100px !important;
  }
  .container {
    padding: 0;
  }
}
</style>
