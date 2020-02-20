<template>
  <div>
    <!-- 添加商品的弹出框 -->
    <el-dialog :visible.sync="centerDialogVisible1" width="50%" center key="form1">
      <el-form label-width="100px" :model="formLabelAlign" ref="form">
        <el-form-item label="药品名称" prop="name">
          <el-input v-model="formLabelAlign.name" style="width:70%"></el-input>
        </el-form-item>
        <!-- <el-form-item label="药品类型" prop="type">
          <el-input v-model="formLabelAlign.type" style="width:70%"></el-input>
        </el-form-item> -->
        <el-form-item label="药品类型" prop="type">
          <el-select v-model="formLabelAlign.type" placeholder="请选择">
            <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="规格" prop="specification">
          <el-input v-model="formLabelAlign.specification" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品参数" prop="parameter">
          <el-input v-model="formLabelAlign.parameter" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="食用方法" prop="eatMethod">
          <el-input v-model="formLabelAlign.eatMethod" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品库存" prop="repertory">
          <el-input v-model="formLabelAlign.repertory" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload class="upload-demo" ref="upload1" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情主图">
          <el-upload class="upload-demo" ref="upload2" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情轮播图">
          <el-upload class="upload-demo" ref="upload3" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="5" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle3" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改商品的弹出框 -->
    <el-dialog :visible.sync="centerDialogVisible2" width="50%" center key="form2">
      <el-form label-width="100px" :model="formLabelAlign2" ref="form1">
        <el-form-item label="药品名称">
          <el-input v-model="formLabelAlign2.name" style="width:70%"></el-input>
        </el-form-item>
        <!-- <el-form-item label="药品类型">
          <el-input v-model="formLabelAlign2.type" style="width:70%"></el-input>
        </el-form-item> -->
        <el-form-item label="药品类型">
          <el-select v-model="formLabelAlign2.type" placeholder="请选择">
            <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="规格">
          <el-input v-model="formLabelAlign2.specification" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品参数">
          <el-input v-model="formLabelAlign2.parameter" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="食用方法">
          <el-input v-model="formLabelAlign2.eatMethod" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="药品库存">
          <el-input v-model="formLabelAlign2.repertory" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload class="upload-demo" ref="upload4" list-type="picture-card" :action="url+ '/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情主图">
          <el-upload class="upload-demo" ref="upload5" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle1" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情轮播图">
          <el-upload class="upload-demo" ref="upload6" list-type="picture-card" :action="url+'/drug/addDrug'" :limit="5" :on-preview="handlePictureCardPreview" :on-exceed="exceedHandle3" :auto-upload="false" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
    <el-header>
      <el-button style="margin-bottom:12px;float:left" @click="add">十 增加</el-button>
      <el-form :inline="true" class="demo-form-inline" style="float:left;margin-left:50px;">
        <el-form-item style="font-size:16px;">
          <el-input placeholder="请输入药品名称" clearable v-model="data.drugName" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getGoodsList">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="drugName" label="药品名称"></el-table-column>
      <el-table-column prop="drugType" label="药品类型" width="80%"></el-table-column>
      <el-table-column prop="specification" label="规格" width="80%"></el-table-column>
      <el-table-column prop="drugBatching" label="药品参数" width="80%"></el-table-column>
      <el-table-column prop="eatMethod" label="食用方法" width="80%"></el-table-column>
      <el-table-column prop="drugInventory.number" label="库存数量" width="80%"></el-table-column>
      <el-table-column label="缩略图">
        <template slot-scope="scope">
          <img :src="url+scope.row.drugImageThumbnail" width="50 " height="50 " />
        </template>
      </el-table-column>
      <el-table-column label="详情主图">
        <template slot-scope="scope">
          <img :src="url+((scope.row.drugImageDetails).split(';')[0])" width="50 " height="50 " />
        </template>
      </el-table-column>
      <el-table-column prop="drugImageCarousels" label="详情轮播图">
        <!-- 详情轮播图为多张，其余 为一张 -->
        <template slot-scope="scope">
          <div>
            <img v-for="(item,index) in scope.row.drugImageCarousels.split(';')" :key="index" :src="url+item" width="50" height="50" />
          </div>

        </template>
      </el-table-column>
      <el-table-column label="操作 " width="200px">
        <template slot-scope="scope">
          <el-button size="mini " @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // --------------------数据data-------------------------
  data () {
    return {
      url: "http://39.107.33.189:8443",
      tableData: [],
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      formLabelAlign: {
        name: '',
        type: '',
        specification: '',
        parameter: '',
        eatMethod: "",
        repertory: ''
      },
      formLabelAlign2: {
        name: '',
        type: '',
        specification: '',
        parameter: '',
        eatMethod: "",
        repertory: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      img: [],
      drugid: '', //编辑商品时需要用到
      // 分页数据
      total: 0,
      data: {
        drugName: "",
        pageNum: 1,
        pageSize: 5,
      },
      options: [
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

    }
  },
  methods: {
    // ----------------------获取所有商品列表--------------------
    getGoodsList () {
      this.$instance1({
        method: 'get',
        url: '/drug/queryDrugs',
        params: this.data
      })
        .then(res => {
          window.console.log(res)
          this.tableData = res.data.list
          this.total = res.data.total
        })
        .catch(err => {
          window.console.log(err)
        })
    },
    // ------------------------------------------删除商品-----------------------------
    // 删除
    handleDelete (index, row) {
      this.$instance1({
        method: 'delete',
        url: '/drug/removeDrugs',
        params: {
          ids: row.drugid
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.getGoodsList()
            this.$message({
              message: '删除成功！',
              type: 'warning'
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // -----------------------------------修改商品--------------------------------------
    // 点击编辑按钮
    handleEdit (index, row) {
      this.centerDialogVisible2 = true
      this.formLabelAlign2.name = row.drugName
      this.formLabelAlign2.type = row.drugType
      this.formLabelAlign2.parameter = row.drugBatching
      this.formLabelAlign2.specification = row.specification
      this.formLabelAlign2.eatMethod = row.eatMethod
      this.formLabelAlign2.repertory = row.drugInventory.number

      this.drugid = row.drugid
      console.log(this.drugid)
    },

    edit () {
      this.$refs['form1'].validate((valid) => {
        if (valid) {
          let formData = new FormData()
          formData.append('drugid', this.drugid)
          formData.append('drugName', this.formLabelAlign2.name)
          formData.append('drugType', this.formLabelAlign2.type)
          formData.append('drugBatching', this.formLabelAlign2.parameter)
          formData.append('specification', this.formLabelAlign2.specification)
          formData.append('eatMethod', this.formLabelAlign2.eatMethod)
          formData.append('number', this.formLabelAlign2.repertory)

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

          this.$instance1({
            method: 'post',
            url: '/drug/modifyDrugs',
            data: formData,
            config
          })
            .then(res => {
              window.console.log(res)
              if (res.data.code == 1) {
                this.getGoodsList()
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
              }
            })
            .catch(err => {
              window.console.log(err)
            })

          this.centerDialogVisible2 = false
          this.$refs.upload4.clearFiles()
          this.$refs.upload5.clearFiles()
          this.$refs.upload6.clearFiles()


        } else {
          window.console.log('error submit!!')
          return false
        }
      })


    },

    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getGoodsList()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getGoodsList()
    },
    // --------------------------------------上传----------------------

    // 1，上传前移除事件
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },

    // 3，点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // --------------------------增加商品-------------------
    add () {
      this.centerDialogVisible1 = true
    },
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log('formLabelAlign', this.formLabelAlign)
          let mydata = new FormData()
          mydata.append('drugName', this.formLabelAlign.name)
          mydata.append('drugType', this.formLabelAlign.type)
          mydata.append('drugBatching', this.formLabelAlign.parameter)
          mydata.append('specification', this.formLabelAlign.specification)
          mydata.append('eatMethod', this.formLabelAlign.eatMethod)
          mydata.append('number',
            this.formLabelAlign.repertory * 1
          )

          for (let i = 0; i < this.$refs.upload1.uploadFiles.length; i++) {
            mydata.append('drugImageThumbnail', this.$refs.upload1.uploadFiles[i].raw)
          }
          for (let i = 0; i < this.$refs.upload2.uploadFiles.length; i++) {
            mydata.append('drugImageDetails', this.$refs.upload2.uploadFiles[i].raw)
          }
          for (let i = 0; i < this.$refs.upload3.uploadFiles.length; i++) {
            mydata.append('drugImageCarousels', this.$refs.upload3.uploadFiles[i].raw)
          }

          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          this.$instance1({
            method: "post",
            url: "/drug/addDrug",
            data: mydata,
            config
          }).then((res) => {
            console.log(res)
            if (res.data.code == 1) {
              this.$message({
                message: "上传成功",
                type: "success"
              })
              console.log(this.$refs.form);
              this.resetForm('form')

            }
            this.centerDialogVisible1 = false
            // 清空图片
            this.$refs.upload1.clearFiles()
            this.$refs.upload2.clearFiles()
            this.$refs.upload3.clearFiles()
            //   表单重置
            this.$refs.form.resetFields()
            this.getGoodsList()


            console.log('form', this.$refs.form)
          })
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
    }
  },
  created () {
    this.getGoodsList()
  }
}
</script>
<style scoped>
.el-upload--picture-card,
.el-upload-list__item-actions {
  width: 20% !important;
  height: 20% !important;
}
.block {
  margin: 40px;
}
img {
  width: 50px !important;
  height: 50px !important;
}
</style>
