<template>
  <div id="joinAdd">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/#/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/joinSrchlist' }">加盟机构</el-breadcrumb-item>
      <el-breadcrumb-item>联盟管理详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mgt-content-box">
      <div class="ibox">
        <div class="detail">
          <el-form :model="joinAddForm" ref="joinAddForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="图像上传" prop="filed" class="fileCon">
              <!--<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"-->
                         <!--:on-remove="handleRemove" :before-remove="beforeRemove" multiple :file-list="fileList" :on-success="handleSuccess">-->
                <!--<el-button size="small" type="primary">上传pdf文件</el-button>-->
                <!--<div slot="tip" class="el-upload__tip">请上传pdf文件，大小限制5MB</div>-->
              <!--</el-upload>-->
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip" style="color: #f56c6c;margin-top: -10px;">注意：建议图片像素在140*80</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="机构名称" prop="title">
              <el-input v-model="joinAddForm.title" style="width: 300px !important;"></el-input>
            </el-form-item>
            <el-form-item label="机构网址">
              <el-input v-model="joinAddForm.unit" style="width: 300px !important;"></el-input>
            </el-form-item>
            <el-form-item label="机构介绍">
              <el-input type="textarea" v-model="joinAddForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('joinAddForm')">提交</el-button>
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
    name:"joinAdd",
    data(){
      return{
        joinAddForm: {
          title: '',
          filed: '未上传'
        },
        rules: {
          title: [
            { required: true, message: '制度名称不能为空', trigger: 'blur' }
          ],
        },
        resourceUrl:{url:"/alliance"},
        imageUrl: ''
      }
    },
    components:{
      'v-pageNation' : pageNation
    },
    mounted(){
    },
    methods:{
      // 文件上传之前
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 140 / 80 < 2;
        if (!isLt2M) {
          this.$message.error('建议上传图片像素在140*80!');
        }
        return isLt2M;
      },
      // 文件上传成功
      handleAvatarSuccess(res, file) {
        console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
        this.joinAddForm.filed = this.imageUrl;

      },
      submitForm(formName) {
        if(this.joinAddForm.filed == "未上传"){
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

<style lang="less" scoped>
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .avatar {
    width: 130px;
    height: 130px;
    display: block;
  }
  .el-textarea textarea{
    min-height: 100px!important;
    width: 700px;
  }
</style>
