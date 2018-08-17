<template>
  <div id="allianceAdd">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/alliance' }">联盟管理</el-breadcrumb-item>
      <el-breadcrumb-item>联盟管理详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <el-form :model="allianceAddForm" ref="allianceAddForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="制度名称" prop="title" class="titleCon">
              <el-input v-model="allianceAddForm.title" style="width: 300px !important;"></el-input>
            </el-form-item>
            <el-form-item label="发布单位" prop="unit" class="unitCon">
              <el-input v-model="allianceAddForm.unit" style="width: 300px !important;"></el-input>
            </el-form-item>
            <el-form-item label="制度上传" prop="filed" class="fileCon">
              <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                :on-remove="handleRemove" :before-remove="beforeRemove" multiple :file-list="fileList" :on-success="handleSuccess">
                <el-button size="small" type="primary">上传pdf文件</el-button>
                <div slot="tip" class="el-upload__tip" style="color: #f56c6c;">请上传pdf文件，大小限制5MB</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('allianceAddForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import pageNation from '@/components/pageNation.vue';
  export default {
    name:"allianceAdd",
    data(){
      return{
        allianceAddForm: {
          title: '',
          unit: '',
          filed: '未上传'
        },
        rules: {
          title: [
            { required: true, message: '制度名称不能为空', trigger: 'blur' }
          ],
          unit: [
            { required: true, message: '发布单位不能为空', trigger: 'blur' }
          ]
        },
        resourceUrl:{url:"/alliance"},
        fileList: [],
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    mounted(){
    },
    methods:{
      // 文件列表移除文件时
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 文件上传成功
      handleSuccess(response, file, fileList) {
        console.log(fileList);
        this.allianceAddForm.filed = fileList[0].name;
      },
      submitForm(formName) {
        if(this.allianceAddForm.filed == "未上传"){
          this.$message.warning('请上传文件后点击提交');
          return false;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('恭喜你提交成功');
          } else {
            this.$message.warning('请输入完整信息');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="less">
  #news1{
    zoom: 0.9;
  }
  .el-breadcrumb{
    background: #fafafa;
    line-height: 37px;
    padding: 10px 10px;
    border-bottom: 2px solid #edf0f5;
  }
  .mgt-content-box{
    padding: 10px 20px;
    .ibox{
      background: #fff;
      padding: 0 20px;
      margin: 10px;
      border: 1px solid #dee5f1;
      .title {
        border-bottom: 1px solid #dee5f1;
        font-size: 16px;
        line-height: 80px;
      }
      .detail {
        padding: 20px 0;
        th.is-leaf{
          background: #409EFF;
          color: #ffffff;
        }
        .page-turn{
          margin-top: 35px;
        }
        .text-align{
          text-align: center;
        }
      }
    }
  }
  .el-table td, .el-table th.is-leaf{
    text-align: center;
  }
  .fileCon{
    position: relative;
  }
  .fileCon:before {
    content: '*';
    color: #f56c6c;
    margin-right: 4px;
    position: absolute;
    top: 10px;
    left: 23px;
  }
</style>
