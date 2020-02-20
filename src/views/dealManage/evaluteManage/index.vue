<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部评价" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <template slot-scope="scope">
              <div @click="changeState(scope.$index, scope.row)">
                <el-button plain size="small" type="primary" v-if="scope.row.auditState == '正在审核'" class="button">正在审核</el-button>
                <el-button size="small" type="warning" plain v-else-if="scope.row.auditState == '未通过'" class="button">未通过</el-button>
                <el-button size="small" type="success" plain v-else-if="scope.row.auditState == '已通过'" class="button">已通过</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" v-if="total > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="正在审核" name="fourth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="primary" plain class="button" disabled>正在审核</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" v-if="total > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fifth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="warning" plain class="button" disabled>未通过</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" v-if="total > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="sixth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="success" plain class="button" disabled>已通过</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" v-if="total > 0">
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
      // 分页数据
      total: 0,
      data: {
        auditState: null,
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  methods: {

    // -----------------------------------正在审核、未通过、已通过获取数据-------------------------
    handleClick (tab, event) {
      if (tab.label == "正在审核") {
        this.getDataList("正在审核")
      } else if (tab.label == "未通过") {
        this.getDataList("未通过")
      } else if (tab.label == "已通过") {
        this.getDataList("已通过")
      } else if (tab.label == "全部评价") {
        this.getDataList()
      }
    },
    // ---------------------------------获取数据-------------------------------------------
    getDataList (state) {
      this.$instance1({
        method: 'get',
        url: '/docomment/queryDoComment',
        params: {
          ...this.data,
          auditState: state
        }
      })
        .then(res => {
          console.log(res)

          this.tableData = res.data.list
          this.total = res.data.total
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ------------------------------修改状态------------------------------------------
    chang(params){
      this.$instance1({
          method: 'put',
          url: '/docomment/modifyDoComment',
          params
        })
          .then(res => {
            if (res.data.code == 1) {
              this.getDataList()
            }
          })
          .catch(err => {
            console.log(err)
          })
    },
    changeState (index, row) {
      if (row.auditState == '正在审核') {
        this.chang({
          ...row,
          auditState: '未通过'
        })
      } else if (row.auditState == '未通过') {
         this.chang({
          ...row,
          auditState: '已通过'
        })
      } else if (row.auditState == '已通过') {
         this.chang({
          ...row,
          auditState: '正在审核'
        })
      }
    },

    // -----------------------------------删除评论----------------------------
    handleDelete (index, row) {
      this.$instance2({
        method: 'delete',
        url: '/docomment/removeDoComment/',
        params: {
          id: row.userid
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.getDataList()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getDataList()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getDataList()
    }
  },
  created () {
    this.getDataList()
  }
}
</script>
<style scoped>
.button {
  width: 80px;
}
</style>
