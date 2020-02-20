<template>
  <div>
    <div style="margin-bottom:40px;position:relative;">
      <p style="font-size:16px;">当前活动
        <span style="font-size:20px;color:#195;margin:0 20px">五一买一送三</span>
        <span>活动进行中</span>
      </p>
      <div style="float:right;position:absolute;right:40%;top:0;">
        <el-button type="primary" plain>暂停</el-button>
        <el-button type="success" plain>恢复</el-button>
        <el-button type="info" plain>结束</el-button>
      </div>
    </div>
    <el-button style="margin-bottom:12px;" @click="add">十 增加</el-button>
    <!-- 增加套框 -->
    <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
      <el-form label-width="100px" :model="formLabelAlign">
        <el-form-item label="活动编号">
          <el-input v-model="formLabelAlign.activityno"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="formLabelAlign.activityName"></el-input>
        </el-form-item>
        <el-form-item label="活动内容">
          <el-input v-model="formLabelAlign.activityContent"></el-input>
        </el-form-item>
        <el-form-item label="活动类型">
          <el-input v-model="formLabelAlign.activityType"></el-input>
        </el-form-item>
        <el-form-item label="活动开始时间">
          <div class="block">
            <el-date-picker v-model="formLabelAlign.activityStarttime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="活动结束时间">
          <div class="block">
            <el-date-picker v-model="formLabelAlign.activityEndtime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="活动状态">
          <el-input v-model="formLabelAlign.activityState"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addActivity">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改弹框  -->
    <el-dialog :visible.sync="centerDialogVisible1" width="30%" center>
      <el-form label-width="100px" :model="formLabelAlign1">
        <el-form-item label="活动编号">
          <el-input v-model="formLabelAlign1.activityno"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="formLabelAlign1.activityName"></el-input>
        </el-form-item>
        <el-form-item label="活动内容">
          <el-input v-model="formLabelAlign1.activityContent"></el-input>
        </el-form-item>
        <el-form-item label="活动类型">
          <el-input v-model="formLabelAlign1.activityType"></el-input>
        </el-form-item>
        <el-form-item label="活动开始时间">
          <div class="block">
            <el-date-picker v-model="formLabelAlign1.activityStarttime" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="活动结束时间">
          <div class="block">
            <el-date-picker v-model="formLabelAlign1.activityEndtime" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="活动状态">
          <el-input v-model="formLabelAlign1.activityState"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="editActivity">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="activityno" label="活动编号">
      </el-table-column>
      <el-table-column prop="activityName" label="活动名称">
      </el-table-column>
      <el-table-column prop="activityContent" label="活动内容">
      </el-table-column>
      <el-table-column prop="activityType" label="活动类型">
      </el-table-column>
      <el-table-column prop="activityStarttime" label="活动开始时间">
      </el-table-column>
      <el-table-column prop="activityEndtime" label="活动结束时间">
      </el-table-column>
      <el-table-column label="活动状态">
        <template slot-scope="scope">
          <div>
            <el-button v-if="scope.row.activityState==1" size="mini" type="text">未取消</el-button>
            <el-button v-else size="mini" type="text">已取消</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <div>
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="cancelActivity(scope.row)">取消</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin:40px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../../../common/common.js'
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
export default {
  data () {
    return {
      tableData: [
      ],
      centerDialogVisible: false,
      centerDialogVisible1: false,
      formLabelAlign: {
      },
      formLabelAlign1: {
      },
      data: {
        pageNum: 1,
        pageSize: 5
      },
      total: 0
    }
  },
  methods: {
    add () {
      this.centerDialogVisible = true
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getActivity()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getActivity()
    },
    getActivity () {
      this.$instance1({
        method: "get",
        url: "/saleActivityplan/querySaleActivityplans",
        params: this.data
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total
      }).catch((err) => {
        console.log(err)
      })
    },
    // -----------------------添加活动计划--------------------
    addActivity () {
      // var oldTime = (new Date("2012/12/25 20:11:11")).getTime();
      // var curTime = new Date(oldTime).format("yyyy-MM-dd");
      let oldTime = (new Date(this.formLabelAlign.activityStarttime)).getTime()
      this.formLabelAlign.activityStarttime = new Date(oldTime).format('yyyy-MM-dd hh:mm:ss')
      // this.formLabelAlign.activityStarttime = this.formLabelAlign.activityStarttime.format('yyyy-MM-dd hh:mm:ss')
      // this.formLabelAlign.activityEndtime = this.formLabelAlign.activityEndtime.format('yyyy-MM-dd hh:mm:ss')
      let oldTime1 = (new Date(this.formLabelAlign.activityEndtime)).getTime()
      this.formLabelAlign.activityEndtime = new Date(oldTime1).format('yyyy-MM-dd hh:mm:ss')
      this.centerDialogVisible = false
      let formData = new FormData()
      formData.append('activityStarttime', this.formLabelAlign.activityStarttime)
      formData.append('activityEndtime', this.formLabelAlign.activityEndtime)
      formData.append('activityName', this.formLabelAlign.activityName)
      formData.append('activityContent', this.formLabelAlign.activityContent)
      formData.append('activityno', this.formLabelAlign.activityno)
      formData.append('activityType', this.formLabelAlign.activityType)
      formData.append('activityState', this.formLabelAlign.activityState)



      this.$instance1({
        method: "post",
        url: "/saleActivityplan/addSaleActivityplan",
        data: formData
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "增加成功",
            type: "success"
          })
          this.getActivity()
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // -----------------------修改活动计划-------------------------
    edit (row) {
      this.centerDialogVisible1 = true
      this.formLabelAlign1 = {
        ...row
      }

      console.log(this.formLabelAlign1)

    },
    editActivity () {
      let oldTime = (new Date(this.formLabelAlign.activityStarttime)).getTime()
      this.formLabelAlign.activityStarttime = new Date(oldTime).format('yyyy-MM-dd hh:mm:ss')
      // this.formLabelAlign.activityStarttime = this.formLabelAlign.activityStarttime.format('yyyy-MM-dd hh:mm:ss')
      // this.formLabelAlign.activityEndtime = this.formLabelAlign.activityEndtime.format('yyyy-MM-dd hh:mm:ss')
      let oldTime1 = (new Date(this.formLabelAlign.activityEndtime)).getTime()
      this.formLabelAlign.activityEndtime = new Date(oldTime1).format('yyyy-MM-dd hh:mm:ss')
      this.centerDialogVisible1 = false
      this.$instance1({
        method: "post",
        url: "/saleActivityplan/modifySaleActivityplan",
        params: {
          ...this.formLabelAlign1
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "修改成功",
            type: "success"
          })
          this.getActivity()

        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // -------------------------------------取消活动--------------------------
    cancelActivity (row) {
      this.$instance1({
        method: "delete",
        url: "/saleActivityplan/removeSaleActivityplan",
        params: {
          id: row.id
        }

      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "取消成功",
            type: "success"
          })
          this.getActivity()

        }
      }).catch((err) => {
        console.log(err)
      })

    }
  },
  created () {
    this.getActivity()
  }
}
</script>
<style scoped>
</style>
