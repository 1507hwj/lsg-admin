<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部售后订单" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="buyerName" label="购买者">
          </el-table-column>
          <el-table-column prop="distributorName" label="分销商">
          </el-table-column>
          <el-table-column prop="drugName" label="药品名称">
          </el-table-column>
          <el-table-column prop="drugType" label="药品类型">
          </el-table-column>
          <el-table-column prop="number" label="数量">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间">
          </el-table-column>
          <el-table-column prop="returnTime" label="售后申请时间">
          </el-table-column>
          <el-table-column prop="returnStatus" label="售后状态">
            <template slot-scope="scope">
              <div>
                <span style="color:#409EFF" v-if="scope.row.returnStatus==0">申请退货中</span>
                <span style="color:#F56C6C" v-else-if="scope.row.returnStatus==1">申请退款中</span>
                <span style="color:#67C23A" v-else>售后已完成</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="returnContent" label="申请原因">

          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="申请退货中" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="buyerName" label="购买者">
          </el-table-column>
          <el-table-column prop="distributorName" label="分销商">
          </el-table-column>
          <el-table-column prop="drugName" label="药品名称">
          </el-table-column>
          <el-table-column prop="drugType" label="药品类型">
          </el-table-column>
          <el-table-column prop="number" label="数量">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间">
          </el-table-column>
          <el-table-column prop="returnTime" label="售后申请时间">
          </el-table-column>
          <el-table-column prop="returnStatus" label="售后状态">
            <template slot-scope="scope">
              <div>
                <span style="color:#409EFF" v-if="scope.row.returnStatus==0">申请退货中</span>
                <span style="color:#F56C6C" v-else-if="scope.row.returnStatus==1">申请退款中</span>
                <span style="color:#67C23A" v-else>售后已完成</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="returnContent" label="申请原因">
          </el-table-column>
          <el-table-column prop="" label="退货操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="salesReturn(scope.row ,'2')">退货完成</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="申请退款中" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="buyerName" label="购买者">
          </el-table-column>
          <el-table-column prop="distributorName" label="分销商">
          </el-table-column>
          <el-table-column prop="drugName" label="药品名称">
          </el-table-column>
          <el-table-column prop="drugType" label="药品类型">
          </el-table-column>
          <el-table-column prop="number" label="数量">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间">
          </el-table-column>
          <el-table-column prop="returnTime" label="售后申请时间">
          </el-table-column>
          <el-table-column prop="returnStatus" label="售后状态">
            <template slot-scope="scope">
              <div>
                <span style="color:#409EFF" v-if="scope.row.returnStatus==0">申请退货中</span>
                <span style="color:#F56C6C" v-else-if="scope.row.returnStatus==1">申请退款中</span>
                <span style="color:#67C23A" v-else>售后已完成</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="returnContent" label="申请原因">
          </el-table-column>
          <el-table-column prop="" label="退款操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="salesReturn(scope.row ,'2')">退款完成</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="售后已完成" name="fourth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="buyerName" label="购买者">
          </el-table-column>
          <el-table-column prop="distributorName" label="分销商">
          </el-table-column>
          <el-table-column prop="drugName" label="药品名称">
          </el-table-column>
          <el-table-column prop="drugType" label="药品类型">
          </el-table-column>
          <el-table-column prop="number" label="数量">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间">
          </el-table-column>
          <el-table-column prop="returnTime" label="售后申请时间">
          </el-table-column>
          <el-table-column prop="returnStatus" label="售后状态">
            <template slot-scope="scope">
              <div>
                <span style="color:#409EFF" v-if="scope.row.returnStatus==0">申请退货中</span>
                <span style="color:#F56C6C" v-else-if="scope.row.returnStatus==1">申请退款中</span>
                <span style="color:#67C23A" v-else>售后已完成</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="returnContent" label="申请原因">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div style="margin:30px;" v-if="total>0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [],
      data: {
        pageNum: 1,
        pageSize: 5,
        returnStatus: null
      },
      total: 0
    };
  },
  created () {
    this.getAllOrder(this.data)
  },
  methods: {
    handleClick (tab, event) {
      if (tab.label == "申请退货中") {
        this.data.returnStatus = "0"
        this.getAllOrder(this.data)
      } else if (tab.label == "申请退款中") {
        this.data.returnStatus = "1"
        this.getAllOrder(this.data)
      } else if (tab.label == "售后已完成") {
        this.data.returnStatus = "2"
        this.getAllOrder(this.data)
      } else if (tab.label == "全部售后订单") {
        this.data.returnStatus = null
        this.getAllOrder(this.data)
      }
    },
    getAllOrder (data) {
      this.$instance1({
        method: "get",
        url: "/sOrder/selectReturnDrug",
        params: data
      }).then((res) => {
        console.log('res', res)
        this.tableData = res.data.list
        this.total = res.data.total
      })
    },
    // -----------------------------------退货、退款操作------------------
    salesReturn (row, returnStatus) {
      this.$instance1({
        method: "put",
        url: "/sOrder/modifyDrugsReturn",
        params: {
          id: row.id,
          returnStatus
        }
      }).then((res) => {
        if (res.data.code == 1) {
          if (row.returnStatus == "0") {
            this.$message({
              message: "退货成功",
              type: "success"
            })
          } else if (row.returnStatus == "1") {
            this.$message({
              message: "退款成功",
              type: "success"
            })
          }

        }
        console.log(res)
        this.getAllOrder(this.data)
      })

    },

    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getAllOrder(this.data)
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getAllOrder(this.data)
    },
  }
}
</script>
<style scoped>
</style>
