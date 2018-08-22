<template>
    <Card>
        <Row style="border-bottom:1px solid #dee5f1; padding-bottom:10px;">
            <Col span="5">
                <Button type="primary" icon="md-add">添加新闻资讯</Button>
            </Col>
            <Col span="6" offset="9" >
                <Input type="text" v-model="search" ></Input>
            </Col>
            <Col span="3" offset="1">
                <Button type="primary">查询</Button>
            </Col>
        </Row>
        <el-table
            :data="newsListShow" border
            style="width: 100%" class="newsTable">
            <el-table-column
              type="index"
              width="70" header-align="center"
            label="序号">
            </el-table-column>
            <el-table-column
              property="title"
              width="170" header-align="center"
              label="配置名称"  prop="title">
            </el-table-column>
            <el-table-column
               header-align="center"
              label="配置时间"  property ="publishTime">
            </el-table-column>

            <el-table-column label="操作" header-align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)" @click.native.prevent="handleDelete(scope.$index, tableData4)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
    </Card>
</template>

<script>
export default {
  name:"news3",
  data(){
    return{

    }
  },
  components:{
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style lang="less">
.mgt-content-box .ibox .detail th.is-leaf {
    background: #409EFF !important;
    color: #ffffff;
}
</style>
