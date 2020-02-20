<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" class="my_dialog" width="70%">
      <el-container style="height:100%">
        <el-aside width="50%" height="90%">
          <div>
            <el-input placeholder="请输入药品名称" prefix-icon="el-icon-search" v-model.trim="goods" style="width:60%" clearable></el-input>
            <el-button type="primary" style="margin-left:20px;" @click="getGoodsList">搜索</el-button>
          </div>
          <el-table :data="drugName" style="width: 100%">
            <el-table-column label="药品名称">
              <template slot-scope="scope">
                <div @click="getDrugInfo(scope.$index,scope.row)">{{scope.row.drugName}}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <el-form ref="form" :model="drugInfo" label-width="120px">
            <el-form-item label="名称">
              <el-input v-model="drugInfo.drugName" placeholder="请输入名称" style="width:82%"></el-input>
            </el-form-item>
            <!-- <el-form-item label="数量">
              <el-input v-model="drugInfo.drugInventory.number" placeholder="请输入数量" style="width:82%" @change="getNumber"></el-input>
            </el-form-item> -->
            <el-form-item label="药品原价">
              <el-input v-model="drugInfo.oldPrice" placeholder="请输入药品原价" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item label="药品现价">
              <el-input v-model="drugInfo.price" placeholder="请输入药品现价" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item class="confirm">
              <el-button type="primary" @click="racking">确定</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-dialog>
    <!-- 修改的对话框 -->
    <el-dialog :visible.sync="dialogVisible1" width="50%" center key="form2">
      <el-form label-width="100px" :model="drugInfo1" ref="form1">
        <el-form-item label="药品名称">
          <el-input v-model="drugInfo1.drugName" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品类型">
          <el-input v-model="drugInfo1.drugType" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="规格">
          <el-input v-model="drugInfo1.speciFication" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品参数">
          <el-input v-model="drugInfo1.drugBatching" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="食用方法">
          <el-input v-model="drugInfo1.eatMethod" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品原价">
          <el-input v-model="drugInfo1.priceOriginal" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品现价">
          <el-input v-model="drugInfo1.priceDiscount" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload class="upload-demo" ref="upload4" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible2">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情主图">
          <el-upload class="upload-demo" ref="upload5" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible2">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情轮播图">
          <el-upload class="upload-demo" ref="upload6" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="5" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle3" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible2">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="handleEdit">确 定</el-button>
      </span>
    </el-dialog>
    <el-header>
      <el-button style="margin-bottom:12px;float:left" @click="add">十 上架</el-button>
      <el-form :inline="true" class="demo-form-inline" style="float:left;margin-left:50px;">
        <el-form-item style="font-size:16px;">
          <el-input placeholder="请输入药品名称" clearable v-model="data.drugName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="drugName" label="药品名称"> </el-table-column>
      <el-table-column prop="drugType" label="药品类型"> </el-table-column>
      <el-table-column prop="speciFication" label="规格"> </el-table-column>
      <el-table-column prop="drugBatching" label="药品参数"> </el-table-column>
      <el-table-column prop="eatMethod" label="食用方法"> </el-table-column>
      <el-table-column prop="number" label="药品数量"> </el-table-column>
      <el-table-column prop="priceOriginal" label="药品原价"> </el-table-column>
      <el-table-column prop="priceDiscount" label="药品现价"> </el-table-column>
      <el-table-column label="缩略图">
        <template slot-scope="scope">
          <img class="busLicen" :src="url+scope.row.drugImageThumbnail" alt />
        </template>
      </el-table-column>
      <el-table-column label="详情主图">
        <template slot-scope="scope">
          <img class="busLicen" :src="url+scope.row.drugImageDetails" alt />
        </template>
      </el-table-column>
      <el-table-column label="详情轮播图" width="200%" prop="drugImageCarousels">
        <template slot-scope="scope">
          <div>
            <img v-for="item in scope.row.drugImageCarousels.split(';')" :key="item" class="busLicen" :src="url+item" alt />

          </div>
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" :type="scope.row.state==0?'success':'danger'" @click="changStatus(scope.$index, scope.row)">{{scope.row.state==0?"上架":"下架"}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5,10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// 出售中的药品 
export default {
  data () {
    return {
      url: "http://39.107.33.189:8443",
      tableData: [],
      dialogVisible: false,
      dialogVisible1: false,
      drugName: [],
      goods: "",
      // 分页数据
      total: 0,
      status: false, // 上下架切换状态
      // 药品其他信息
      drugInfo: {
      },
      drugInfo1: {

      },
      dialogImageUrl: '',
      dialogVisible2: false,
      data: {
        drugName: "",
        pageNum: 1,
        pageSize: 5,
      }
    }
  },
  methods: {
    // ----------------------------------获取------------------------------
    getData () {
      this.$instance1({
        method: "get",
        url: "/drugSale/queryDrugSales",
        params: this.data
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total;
      }).catch((err) => {
        console.log(err)
      })
    },
    // -------------------------------------------商品搜索-----------------------------
    // 获取未上架商品列表名称
    getGoodsList () {
      this.$instance1({
        method: "get",
        url: "/drug/queryDrugUnSale",
        params: {
          drugName: this.goods
        }
      })
        .then(res => {
          this.drugName = res.data;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    // -------------------------------根据点击药品名称获取药品其他信息----------------
    getDrugInfo (index, row) {
      this.drugInfo = {
        ...row,
        oldPrice: '',
        price: ''
      }

    },
    // -------------------------------------------编辑---------------------------
    edit (index, row) {
      this.dialogVisible1 = true

      this.drugInfo1 = {
        ...row
      }
      console.log('drugInfo1', this.drugInfo1)

    },
    // 点击确定编辑
    handleEdit () {
      this.$refs['form1'].validate((valid) => {
        if (valid) {
          let formData = new FormData()
          formData.append('drugSaleId', this.drugInfo1.id)
          formData.append('drugid', this.drugInfo1.drugID)
          formData.append('drugName', this.drugInfo1.drugName)
          formData.append('drugType', this.drugInfo1.drugType)
          formData.append('drugBatching', this.drugInfo1.drugBatching)
          formData.append('specification ', this.drugInfo1.speciFication)
          formData.append('eatMethod ', this.drugInfo1.eatMethod)
          formData.append('priceOriginal ', this.drugInfo1.priceOriginal)
          formData.append('priceDiscount ', this.drugInfo1.priceDiscount)

          for (let i = 0; i < this.$refs.upload4.uploadFiles.length; i++) {
            formData.append('drugImageThumbnail', this.$refs.upload4.uploadFiles[i].raw)
          }
          for (let i = 0; i < this.$refs.upload5.uploadFiles.length; i++) {
            formData.append('drugImageDetails', this.$refs.upload5.uploadFiles[i].raw)
          }
          for (let i = 0; i < this.$refs.upload6.uploadFiles.length; i++) {
            formData.append('drugImageCarousels', this.$refs.upload6.uploadFiles[i].raw)
          }

          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }

          this.$instance2({
            method: "post",
            url: "/drugSale/modifyDrugSales",
            data: formData,
            config
          }).then((res) => {
            console.log(res)
            if (res.data.code == 1) {
              this.$message({
                message: "修改成功",
                type: "warning"
              })
              this.getData()

            }
            this.$refs.upload4.clearFiles()
            this.$refs.upload5.clearFiles()
            this.$refs.upload6.clearFiles()
          }).catch((err) => {
            console.log(err)
          })

          this.dialogVisible1 = false

        } else {
          window.console.log('error submit!!')
          return false
        }
      })

    },
    // 5设置超过9张图给与提示
    exceedHandle1 () {
      alert('您现在选择已超过1张图，请重新选择')
    },
    exceedHandle3 () {
      alert('您现在选择已超过5张图，请重新选择')
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

    // --------------------------------------上架商品-----------------------------------------
    racking () {
      this.dialogVisible = false;
      let formData = new FormData();
      formData.append('drugID', this.drugInfo.drugid)
      // formData.append('number', this.drugInfo.drugInventory.number)
      formData.append('state', 1)
      formData.append('priceOriginal', this.drugInfo.oldPrice)
      formData.append('priceDiscount', this.drugInfo.price)
      this.$instance1({
        method: "post",
        url: "/drugSale/addDrugSale",
        data: formData
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "上架成功！",
            type: "success"
          })
          this.getData()
        } else if (res.data.code == 0) {
          confirm(res.data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    add () {
      this.dialogVisible = true
      this.getGoodsList();
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val;
      this.getData();
    },
    handleCurrentChange (val) {
      this.data.pageNum = val;
      this.getData()
    },
    // ---------------------------------上架下架进行切换--------------------------
    changStatus (index, row) {
      this.$instance1({
        method: "put",
        url: "/drugSale/modifyDrugSaleState",
        params: {
          id: row.id
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.getData()
        }
      }).catch((err) => {
        console.log(err)
      })

    }
  },
  created () {
    this.getData()
    this.getGoodsList();
  }
}
</script>
<style scoped>
.add {
  background: #fff;
  /* margin-bottom: 10px; */
}
.Syhover tr,
.Syhover td {
  border-top: 1px #efefef solid;
  width: 100%;
  display: block;
}
.el-dialog__body {
  height: 60% !important;
}
.block {
  margin: 40px;
}
.busLicen {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
