<template>
  <div>
    <el-select v-model="value" placeholder="请选择" style="float:right;margin:0 20px 40px 0" @change="selectGet">
      <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.label">
      </el-option>
    </el-select>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="distributorName" label="姓名"> </el-table-column>
      <el-table-column prop="distributorTelephone" label="电话"> </el-table-column>
      <el-table-column prop="distributorAddress" label="地址"> </el-table-column>
      <el-table-column prop="organizationIndividual" label="类型"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="editDistributors(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="removeDistributors(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column label="生成二维码">
        <template slot-scope="scope">
          <el-button size="small" @click="generateCode(scope.$index, scope.row)" type="success">生成二维码</el-button>
          <el-dialog :visible.sync="dialogForm2Visible">
            <img :src="imgCode" alt="" style="width:200px">
            <p style="margin-top:120px">
              <el-button type="success" @click="download()">下载小程序码</el-button>
            </p>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分销商名称" :label-width="formLabelWidth">
          <el-input v-model="form.distributorName" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="分销商电话" :label-width="formLabelWidth">
          <el-input v-model="form.distributorTelephone" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="分销商地址" :label-width="formLabelWidth">
          <el-input v-model="form.distributorAddress" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        <el-form-item label="分销商分类" :label-width="formLabelWidth">
          <el-input v-model="form.organizationIndividual" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>
    <div style="margin:40px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
function download (href, name) {
  let eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.href = href
  eleLink.click()
  eleLink.remove()
}

export default {
  data () {
    return {
      tableData: [],
      dialogFormVisible: false,
      dialogForm2Visible: false,
      imgCode: '',
      form: {
        distributorName: '',
        distributorTelephone: '',
        distributorAddress: '',
        organizationIndividual: ''
      },
      formLabelWidth: '120px',
      // 分页数据
      total: 0,
      options: [
        {
          id: 3,
          label: "首页"
        },
        {
          id: 0,
          label: "顺奇治"
        }, {
          id: 1,
          label: '顺其升'
        }, {
          id: 2,
          label: '顺忆'
        }],
      value: '',
      data: {
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  methods: {
    // ---------------拿到输入框的值------------------
    selectGet (vId) {
      let obj = {};
      obj = this.options.find((item) => {//这里的selectList就是上面遍历的数据源
        return item.id === vId;//筛选出匹配数据
      });
      // console.log(obj.label);//我这边的name就是对应label的
      // console.log(obj.id);
      console.log(this.value)
    },
    downloadByBlob (url, name) {
      console.log('url', url);
      let image = new Image()
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url
      image.onload = () => {
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, image.width, image.height)
        canvas.toBlob((blob) => {
          let url = URL.createObjectURL(blob)


          download(url, name)
          // 用完释放URL对象
          URL.revokeObjectURL(url)
        })
      }
    },
    // 生成二维码
    generateCode (index, row) {
      if (this.value == "首页") {
        this.value = "index"
      }
      // console.log(row)
      this.$instance1({
        method: "get",
        url: "/distributor/productQrCode",
        params: {
          type: this.value,
          distributorId: row.distributorid
        }
      }).then((res) => {

        console.log(res.data.data)
        let hreLocal = "";
        hreLocal = 'http://39.107.33.189:8443' + res.data.data
        console.log('hreLocal', hreLocal)
        this.imgCode = hreLocal
        this.dialogForm2Visible = true
      }).catch((err) => {
        console.log(err)
      })

    },
    // ------------------------下载二维码--------------------
    download () {
      this.downloadByBlob(this.imgCode, this.value)
    },
    // ----------------------------获取-------------------------
    getData () {
      this.$instance1({
        method: "get",
        url: "/distributor/queryDistributors",
        params: this.data

      }).then((res) => {
        this.tableData = res.data.data.list
        this.total = res.data.data.total
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // --------------------------------编辑-----------------------------
    editDistributors (index, row) {
      console.log(row)
      this.dialogFormVisible = true
      this.form.distributorid = row.distributorid
      this.form.distributorName = row.distributorName
      this.form.distributorTelephone = row.distributorTelephone
      this.form.distributorAddress = row.distributorAddress
      this.form.organizationIndividual = row.organizationIndividual

    },
    edit () {
      this.dialogFormVisible = false
      this.$instance1({
        method: "put",
        url: "/distributor/modifyDistributor",
        params: {
          distributorid: this.form.distributorid,
          distributorName: this.form.getdistributorName,
          distributorTelephone: this.form.distributorTelephone,
          distributorAddress: this.form.distributorAddress,
          organizationIndividual: this.form.organizationIndividual
        }
      }).then((res) => {
        console.log(res)
        if (res.status == 200) {
          this.$message({
            message: "修改成功",
            type: "success"
          })
          this.getData()
        }

      }).catch((err) => {
        console.log(err)
      })

    },
    // ---------------------------删除---------------------------
    removeDistributors (index, row) {
      this.$instance1({
        method: "delete",
        url: "/distributor/removeDistributor/" + row.distributorid

      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "删除成功",
            type: "danger"
          })
          this.getData(this.pageNum, this.pageSize)
        }
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
</style>
