<template>
  <div>
    <div class="block distributor">
      <el-form :inline="true" :model="data" class="demo-form-inline">
        <el-form-item label="购买者微信ID" style="font-size:16px;">
          <el-input v-model="data.buyerWechatid" placeholder="请输入购买者微信ID" />
        </el-form-item>
        <el-form-item label="分销商姓名" style="font-size:16px;">
          <el-input v-model="data.distributorName" placeholder="请输入分销商姓名" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 80%">
      <el-table-column prop="buyerWechatid" label="购买者微信ID">
      </el-table-column>
      <el-table-column prop="distributorName" label="分销商姓名">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      // 分页数据
      total: 0,
      data: {
        buyerWechatid: '',
        distributorName: '',
        pageNum: 1,
        pageSize: 5
      }
    }


  },
  methods: {
    // ------------------------获取----------------------
    getData () {
      this.$instance1({
        method: "get",
        url: "/bindBuyer/queryBindRelationships",
        params: this.data
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total
      }).catch((err) => {
        console.log(err)
      })

    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getData()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getData()
    },
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
.block {
  margin: 40px;
}
</style>
