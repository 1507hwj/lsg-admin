<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="time" label="绑定时间">
      </el-table-column>
      <el-table-column prop="drugOrderid" label="订单编号">
      </el-table-column>
      <el-table-column prop="buyerid" label="购买者">
      </el-table-column>
      <el-table-column prop="distributorName" label="分销商">
      </el-table-column>
      <!-- <el-table-column label="状态">
        <template slot-scope="scope">
          <div @click="unbind(scope.$index,scope.row)">
            <el-button type="success" size="small" v-if="scope.row.type==0">解绑</el-button>
            <el-button type="danger" size="small" v-else>绑定</el-button>
          </div>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="remove(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <div class="block" style="margin:40px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
      ],
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5,
    }
  },
  methods: {
    getData (pageNum, pageSize) {
      this.$instance1({
        method: "get",
        url: "/bindBuyer/queryUn-bindByuers",
        params: {
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total
      }).catch((err) => {
        console.log(err)
      })

    },
    // // --------------------------------绑定解绑切换-----------------------
    // unbind (index, row) {

    //   if (row.type == 0) {
    //     this.$instance1({
    //       method: "put",
    //       url: "/bindBuyer/modifyDoComment",
    //       data: {
    //         ...row,
    //         type: "1"
    //       }

    //     }).then((res) => {
    //       console.log(res)
    //       this.getData(this.pageNum, this.pageSize)
    //     })
    //   } else {
    //     this.$instance1({
    //       method: "put",
    //       url: "/bindBuyer/modifyDoComment",
    //       data: {
    //         ...row,
    //         type: "0"
    //       }

    //     }).then((res) => {
    //       console.log(res)
    //       this.getData(this.pageNum, this.pageSize)
    //     })
    //   }




    // },
    // --------------------------删除-------------------
    remove (index, row) {
      console.log(index, row)
      this.$instance1({
        method: "delete",
        url: "/bindBuyer/removeUn-bindByuers",
        params: {
          id: row.id
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "删除成功",
            type: "success"
          })
          this.getData(this.pageNum, this.pageSize)
        }
      }).catch((err) => {
        console.log(err)
      })

    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.pageSize = val
      // console.log(this.pageSize)
      // console.log(`每页 ${val} 条`);
      this.getData(this.pageNum, this.pageSize)
    },
    handleCurrentChange (val) {
      this.pageNum = val
      console.log(this.pageNum)
      // console.log(`当前页: ${val}`);
      this.getData(this.pageNum, this.pageSize)
    },
  },
  created () {
    this.getData(this.pageNum, this.pageSize)
  }
}
</script>
<style scoped>
</style>
