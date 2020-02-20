<template>
  <div>
    <el-header>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item style="font-size:16px;">
          <el-input placeholder="请输入药品名称" clearable v-model="data.buyerName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUserData">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="buyerName" label="姓名"> </el-table-column>
      <el-table-column prop="buyerWechatid" label="微信ID"> </el-table-column>
      <el-table-column prop="buyerPhone" label="手机号"> </el-table-column>

      <el-table-column prop="buyerAddress" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="editUser(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeUser(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin:40px">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="微信ID" :label-width="formLabelWidth">
          <el-input v-model="form.wechatid" :disabled="true" style="width:80%;">
          </el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        wechatid: '',
        phone: '',
        username: '',
        address: ''
      },
      formLabelWidth: '120px',
      data: {
        buyerName: "",
        pageNum: 1,
        pageSize: 5
      },
      total: 0
    }
  },
  methods: {
    // ---------------------------------获取数据-------------------
    getUserData () {
      this.$instance1({
        method: 'get',
        url: '/buyer/queryBuyer',
        params: this.data
      }).then(res => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total
      })
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getUserData()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getUserData()
    },
    // --------------------------------------编辑----------------------
    edit () {
      this.dialogFormVisible = false
      this.$instance1({
        method: "put",
        url: "/buyer/modifyBuyer",
        params: {
          buyerWechatid: this.form.wechatid,
          buyerPhone: this.form.phone,
          buyerName: this.form.username,
          buyerAddress: this.form.address
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "修改成功",
            type: "success"
          })
          this.getUserData()
        }

      }).catch((err) => {
        console.log(err)
      })
    },
    editUser (index, row) {
      this.dialogFormVisible = true
      this.form.wechatid = row.buyerWechatid
      this.form.phone = row.buyerPhone
      this.form.username = row.buyerName
      this.form.address = row.buyerAddress

    },
    // ---------------------------------------删除------------------------
    removeUser (index, row) {
      console.log(row.buyerWechatid)
      this.$instance1({
        method: "delete",
        url: "/buyer/removeBuyer/" + row.buyerWechatid
      }).then((res) => {
        // console.log(res)
        if (res.status == 200) {
          this.$message({
            message: "删除成功",
            type: "danger"
          });
          this.getUserData()
        }


      }).catch((err) => {
        console.log(err)
      })

    }

  },
  created () {
    this.getUserData()
  }
}
</script>
<style scoped></style>
