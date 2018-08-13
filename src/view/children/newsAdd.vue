<template>
  <div id="newsAdd">
    <p style="background: #fafafa;
    line-height: 35px;
    padding: 6px 10px;
    border-bottom: 2px solid #edf0f5;">
      <span>资讯管理</span><span> > </span><span style="color: #777;">资讯管理2</span><span> > </span><span style="color: #777;">资讯添加</span>
    </p>
    <div class="formWrap">
      <el-form ref="ruleForm" :rules="rules" :model="newsdata" label-width="80px">
        <!--文章类别-->
        <el-form-item label="文章类别:" prop="newsType">
          <el-select  v-model="newsdata.newsType" placeholder="请选择" id="type" style="width: 250px">
            <el-option
              v-for="item in typeData"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标题:" prop="title">
          <el-input v-model="newsdata.title" style="width: 250px !important;"></el-input>
        </el-form-item>
        <el-form-item label="发布单位:" prop="publishUnit">
          <el-input v-model="newsdata.publishUnit"  style="width: 250px !important;"  ></el-input>
        </el-form-item>
        <el-form-item label="添加标题图:">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="摘要:" prop="mainDesc">
          <el-input type="textarea" v-model="newsdata.mainDesc" style="width: 500px;height: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="文章内容:" class="newsCon">
          <vueEditor @editorData="editorData"></vueEditor>
          <template>
            <p style="color: red" :errorContent="errorContent"></p>
          </template>
        </el-form-item>
        <el-form-item label="信息来源:" prop="comeResource">
          <el-input v-model="newsdata.comeResource"  style="width: 250px !important;"  ></el-input>
        </el-form-item>
        <el-form-item label="是否置顶">
          <el-radio-group v-model="newsdata.isTop" prop="isTop">
            <el-radio label="是" name=""></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否发布" prop="isPublish">
          <el-radio-group v-model="newsdata.isPublish">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import vueEditor from '@/components/VueEditor'   // 分页组件
  export default {
    name:"news2",
    data(){
      return{
        errorContent:'',
        imageUrl: '',
        newsdata:{newsType:"",title:"",editorContent:"",publishUnit:"",mainDesc:"",comeResource:"",isTop:"",isPublish:""},
        typeData1:{"1":"新闻中心","2":"通知公告","3":"政策扶持","4":"知识产权法规"},
        typeData: [{
          value: '1',
          label: '新闻中心'
        }, {
          value: '2',
          label: '通知公告'
        }, {
          value: '3',
          label: '政策扶持'
        }, {
          value: '4',
          label: '知识产权法规'
        }],  // 文章类型
        type: '',    //文章类型
        rules:{
          newsType: [
            { required: true, message: '请选择文章类别', trigger: 'change' }
          ],
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' }
          ],
          publishUnit:[
            { required: true, message: '请输入发布单位', trigger: 'blur' }
          ],
          // mainDesc:[
          //   { required: true, message: '请输入摘要', trigger: 'blur' }
          // ],
          // comeResource:[
          //   { required: true, message: '请输入信息来源', trigger: 'blur' }
          // ],
          // isPublish: [
          //   { required: true, message: '请选是否发布', trigger: 'change' }
          // ],
          // isTop: [
          //   { required: true, message: '请选是否置顶', trigger: 'change' }
          // ],
        }
      }
    },
    components:{
        vueEditor
    },
    mounted(){
    },
    methods:{
    //  图片上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPng = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPng ) {
          this.$message.error('上传头像图片只能是 JPG 格式或者png格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //提交
      submitForm(formName) {
        if(!this.newsdata.editorContent){
          this.errorContent = "请输入文章内容，文章内容不能为空";
          this.$message.warning('请输入文章内容，文章内容不能为空');
          return false;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('恭喜你提交成功');
            // this.$http.post("/newsList",this.newsData).then(res => {
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
        this.newsdata.editorContent = data;
      }
    }
  }
</script>

<style lang="less">
  #newsAdd{
      .formWrap{
        margin-top: 20px;
      }
  }
  .el-form-item__label{
    width: 120px !important;
  }
  .avatar-uploader .el-upload {
    border: 1px solid #d9d9d9;
    border-radius: 1px;
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
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
  .el-textarea__inner{
    height: 100%;
  }
  .el-form-item__content{
    margin-left: 107px !important;
    /*width: 800px !important;*/
  }
  .newsCon{
    position: relative;
  }
  .newsCon:before{
    content: '*';
    color: #f56c6c;
    margin-right: 4px;
    position: absolute;
    top: 10px;
    left: 37px;
  }
  /*.el-form-item{*/
    /*margin-bottom: 12px !important;*/
  /*}*/
</style>
