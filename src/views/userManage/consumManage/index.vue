<template>
  <div>
    <p class="add">
      <el-button @click="dialogVisible = true">十 增加</el-button>
    </p>
    <el-dialog :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" label-width="80px" style="margin-left:10%">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.account" placeholder="请输入账号" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="账号类型">
          <el-radio-group v-model="form.accountType">
            <el-radio label="A"></el-radio>
            <el-radio label="B"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入密码" style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="部门/职位">
          <el-select v-model="form.section" placeholder="请选择">
            <el-option label="人事部" value=""></el-option>
            <el-option label="市场部" value=""></el-option>
            <el-option label="技术部" value=""></el-option>
          </el-select>
          <el-select v-model="form.section" placeholder="请选择">
            <el-option label="区域一" value=""></el-option>
            <el-option label="区域二" value=""></el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="confirm">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="account" label="账号"></el-table-column>
      <el-table-column prop="accountType" label="账号类型"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="section" label="部门/职位"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)" class="button">停用</el-button>
          <el-button size="mini" type="danger" @click="handleEdit()" class="button">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 用户管理
export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        username: '',
        account: '',
        accountType: [],
        password: '',
        section: ''
      },
      tableData: [
        {
          username: '曾露',
          account: 'zenglu123456',
          accountType: 'B',
          password: 'hihrifuo',
          section: '市场部/策划主管',
          operation: '停用 编辑'
        },
        {
          username: '曾露',
          account: 'zenglu123456',
          accountType: 'B',
          password: 'hihrifuo',
          section: '市场部/策划主管',
          operation: '停用 编辑'
        },
        {
          username: '曾露',
          account: 'zenglu123456',
          accountType: 'B',
          password: 'hihrifuo',
          section: '市场部/策划主管',
          operation: '停用 编辑'
        },
        {
          username: '曾露',
          account: 'zenglu123456',
          accountType: 'B',
          password: 'hihrifuo',
          section: '市场部/策划主管',
          operation: '停用 编辑'
        }
      ]
    }
  },
  methods: {
    async handleDelete (index, row) {
      let { data } = await this.$axios.delete(
        `http://localhost:1906/goodsAdmin/${row._id}`
      )
      if (data.code === 1) {
        this.render()
        this.$message({
          message: '删除成功!', //消息提示
          type: 'warning'
        })
      }
    },
    handleEdit () {
      this.dialogVisible = true
      // this.$router.push({
      //   path: '/FoundEdit',
      //   query: {
      //     id: row._id
      //   }
      // })
      //  console.log(this.$route);
    },
    onSubmit () {
      window.console.log('submit!')
    }
  }
}
</script>
<style scoped>
.button {
  width: 64px;
  height: 30px;
  text-align: center;
  line-height: 1;
  color: #515151;
  font-size: 16px;
  display: inline-block;
}
.add {
  background: #fff;
}
.add .el-button {
  margin: 20px;
  width: 88px;
  height: 44px;
}

.el-dialog {
  width: 35% !important;
  /* height: 33% !important; */
  padding: 0 3% !important;
  box-sizing: border-box !important;
}
.confirm .el-form-item__content {
  margin-left: 0 !important;
}
.confirm .el-form-item__content .el-button {
  margin: 0 40% !important;
}
</style>
