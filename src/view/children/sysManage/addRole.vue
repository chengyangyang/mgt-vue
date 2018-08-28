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
            <el-form-item label="角色名:" prop='roleName'>
                <el-input v-model="formData.passName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="权限:" prop='power'>
                <el-tree
                :data="formData.power"
                show-checkbox
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps">
              </el-tree>
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
          roleName:'',
          power: [{
                    id: '1',
                    label: '系统管理',
                    children: [{
                      id: '1-1',
                      label: '审核员管理',
                    },{
                      id: '1-2',
                      label: '角色管理',
                    },{
                      id: '1-3',
                      label: '修改密码',
                    },{
                      id: '1-4',
                      label: '消息管理',
                    }]
                    }, {
                      id: '2',
                      label: '认证审核',
                      children: [{
                                  id: '2-1',
                                  label: '账号管理'
                                }, {
                                  id: '2-2',
                                  label: '服务需求方'
                                }, {
                                  id: '2-3',
                                  label: '服务供应方'
                                }]
                    }],
        },
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        rules:{
          roleName:[{ required: true, message: '请输入角色名', trigger: 'blur' }],
          power:[{ required: true, message: '请选择权限', trigger: 'change' }]
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
  .el-checkbox__inner{
    margin-top: 10px;
  }
}
</style>
