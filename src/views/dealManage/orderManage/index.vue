<template>
  <div>
    <div class="distributor">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="订单编号" style="font-size:16px;">
          <el-input placeholder="请输入订单编号" v-model="searchValue.orderno" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getOrderList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部订单" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderno" label="订单编号"> </el-table-column>
          <el-table-column prop="buyerWechatID" label="消费者微信ID"> </el-table-column>
          <el-table-column prop="buyerName" label="消费者微信昵称"> </el-table-column>
          <el-table-column prop="distributorName" label="分销商姓名"> </el-table-column>
          <el-table-column prop="drugName" label="药品名称"> </el-table-column>
          <el-table-column prop="number" label="药品数量"> </el-table-column>
          <el-table-column prop="createTime" label="订单创建时间">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间"> </el-table-column>
          <el-table-column prop="dealState" label="交易状态">
            <template slot-scope="scope">
              <div>
                <el-button type="text" v-if='scope.row.dealState=="待付款"'>待付款</el-button>
                <el-button type="text" v-else-if='scope.row.dealState=="待发货"'>待发货</el-button>
                <el-button type="text" v-else-if='scope.row.dealState=="待收货"'>待收货</el-button>
                <el-button type="text" v-else-if='scope.row.dealState=="待评价"'>待评价</el-button>
                <el-button type="text" v-else-if='scope.row.dealState=="已取消"'>已取消</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="distributorName" label="订单支付时绑定分销商"> </el-table-column>
        </el-table>
        <div class="block" v-if="total>0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchValue.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="searchValue.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderno" label="订单编号"> </el-table-column>
          <el-table-column prop="buyerWechatID" label="消费者微信ID"> </el-table-column>
          <el-table-column prop="buyerName" label="消费者微信昵称"> </el-table-column>
          <el-table-column prop="distributorName" label="分销商姓名"> </el-table-column>
          <el-table-column prop="drugName" label="药品名称"> </el-table-column>
          <el-table-column prop="number" label="药品数量"> </el-table-column>
          <el-table-column prop="ordertype" label="订单类型"> </el-table-column>
          <el-table-column prop="createTime" label="订单创建时间">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间"> </el-table-column>
          <el-table-column prop="dealState" label="订单状态">
            <el-button plain size="small" type="primary" disabled>待付款</el-button>
          </el-table-column>
        </el-table>
        <div class="block" v-if="total>0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchValue.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="searchValue.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待发货" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderno" label="订单编号"> </el-table-column>
          <el-table-column prop="buyerWechatID" label="消费者微信ID"> </el-table-column>
          <el-table-column prop="buyerName" label="消费者微信昵称"> </el-table-column>
          <el-table-column prop="distributorName" label="分销商姓名"> </el-table-column>
          <el-table-column prop="drugName" label="药品名称"> </el-table-column>
          <el-table-column prop="number" label="药品数量"> </el-table-column>
          <el-table-column prop="ordertype" label="订单类型"> </el-table-column>
          <el-table-column prop="createTime" label="订单创建时间">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间"> </el-table-column>
          <el-table-column prop="dealState" label="订单状态">
            <template slot-scope="scope">
              <el-button v-if="scope.row.dealState=='待发货'" size="small" type="warning" plain @click="changeState(scope.row)">待发货</el-button>
              <el-button v-else size="small" type="success" @click="changeState(scope.row)">待收货</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" v-if="total>0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchValue.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="searchValue.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待收货" name="fourth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderno" label="订单编号"> </el-table-column>
          <el-table-column prop="buyerWechatID" label="消费者微信ID"> </el-table-column>
          <el-table-column prop="buyerName" label="消费者微信昵称"> </el-table-column>
          <el-table-column prop="distributorName" label="分销商姓名"> </el-table-column>
          <el-table-column prop="drugName" label="药品名称"> </el-table-column>
          <el-table-column prop="number" label="药品数量"> </el-table-column>
          <el-table-column prop="ordertype" label="订单类型"> </el-table-column>
          <el-table-column prop="createTime" label="订单创建时间">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间"> </el-table-column>
          <el-table-column prop="dealState" label="订单状态">
            <el-button size="small" type="success" plain disabled>待收货</el-button>
          </el-table-column>
        </el-table>
        <div class="block" v-if="total>0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchValue.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="searchValue.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待评价" name="fifth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="orderno" label="订单编号"> </el-table-column>
          <el-table-column prop="buyerWechatID" label="消费者微信ID"> </el-table-column>
          <el-table-column prop="buyerName" label="消费者微信昵称"> </el-table-column>
          <el-table-column prop="distributorName" label="分销商姓名"> </el-table-column>
          <el-table-column prop="drugName" label="药品名称"> </el-table-column>
          <el-table-column prop="number" label="药品数量"> </el-table-column>
          <el-table-column prop="ordertype" label="订单类型"> </el-table-column>
          <el-table-column prop="createTime" label="订单创建时间">
          </el-table-column>
          <el-table-column prop="dealTime" label="交易时间"> </el-table-column>
          <el-table-column prop="dealState" label="订单状态">
            <el-button size="small" type="info" plain disabled>待评价</el-button>
          </el-table-column>
        </el-table>
        <div class="block" v-if="total>0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchValue.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="searchValue.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [],
      total: 0,     // 分页总数
      searchValue: {
        orderno: "",
        dealState: null,
        pageNum: 1,
        pageSize: 5
      },

    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      if (tab.label == "待付款") {
        this.getOrderList("待付款")
      } else if (tab.label == "待发货") {
        this.getOrderList("待发货")
      } else if (tab.label == "待收货") {
        this.getOrderList("待收货")
      } else if (tab.label == "待评价") {
        this.getOrderList("待评价")
      } else if (tab.label == "全部订单") {
        this.getOrderList("全部订单")
      }
    },
    // ----------------------获取数据----------------------------
    getOrderList (state) {
      if (state == '待付款') {
        this.searchValue.dealState = "待付款"
      } else if (state == "待发货") {
        this.searchValue.dealState = "待发货"
      } else if (state == "待收货") {
        this.searchValue.dealState = "待收货"
      } else if (state == "待评价") {
        this.searchValue.dealState = "待评价"
      } else if (state == "全部订单") {
        this.searchValue.dealState = null
      }
      this.$instance1({
        method: 'get',
        url: '/sOrder/queryDrugsOrder',
        params: this.searchValue
      })
        .then(res => {
          console.log(res)
          this.tableData = res.data.list
          console.log('tableData', res)
          this.total = res.data.total
        })
        .catch(err => {
          console.log(err)
        })
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.searchValue.pageSize = val
      this.getOrderList()
    },
    handleCurrentChange (val) {
      this.searchValue.pageNum = val
      this.getOrderList()
    },
    // -------------------------------修改订单状态---------------------------
    change (params) {
      this.$instance1({
        method: "put",
        url: "/sOrder/modifyDrugsOrder",
        params
      }).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          //   this.getOrderList()
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    changeState (row) {
      // if (row.dealState == "待付款") {
      //   this.change({
      //     id: row.id,
      //     number: row.number,
      //     dealState: "待发货"
      //   })
      // } else if (row.dealState == "待发货") {
      //   this.change({
      //     id: row.id,
      //     number: row.number,
      //     dealState: "待收货"
      //   })

      // } else if (row.dealState == "待收货") {
      //   this.change({
      //     id: row.id,
      //     number: row.number,
      //     dealState: "待评价"
      //   })

      // } else if (row.dealState == "待评价") {
      //   this.change({
      //     id: row.id,
      //     number: row.number,
      //     dealState: "待付款"
      //   })
      // }
      if (row.dealState == "待发货") {
        this.$confirm('状态更改为待收货, 是否继续?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.dealState = '待收货'
          this.change({
            id: row.id,
            number: row.number,
            dealState: "待收货"
          })
        }).catch(() => { });

      } else {
        this.$confirm('状态更改为待收货, 是否继续?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.dealState = '待发货'
          this.change({
            id: row.id,
            number: row.number,
            dealState: "待发货"
          })
        })
      }
      //   this.change({
      //     id: row.id,
      //     number: row.number,
      //     dealState: "待收货"
      //   })
    },
  },
  created () {
    this.getOrderList()
  }
}
</script>
<style scoped>
.block {
  margin: 40px;
}
</style>
