<template>
  <div>
    <div v-for="item in mainTitle" :key="item">
      <p>{{ item }}</p>
      <div class="module" style="height:auto;">
        <el-row :gutter="20" class="main">
          <el-col :span="4" class="list" style="padding:0;margin:0 15px 30px;" v-for="(item, index) in 6" :key="index">
            <!-- <i class="icon_edit">
              <img src="../assets/edit.png" alt="" />

            </i> -->
            <span style="position:relative;display:block;">
              <img src="../../../assets/shop-img.png" alt="" />
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" style=" position: absolute;width:214px;top:0;left:10%;">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              </el-upload>
            </span>
            <!-- <p class="name">金克 槐耳颗粒20*6袋...</p> -->
            <input class="name" value="金克 槐耳颗粒20*6袋...
" style="border:none;" />
            <p>
              <!-- <span class="price">￥129</span>
              <s class="old-price">￥139.9</s> -->
              <input type="text" class="new_price price" value="￥129" />
              <input type="text" class="old_price price" value="￥139.9" />
            </p>
          </el-col>
          <el-col :span="4" class="list add" style="padding:0;margin:0 15px 30px;">
            <img src="../../../assets/add_to.png" alt="" @click="addDrug()" />
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="药品名称">
          <el-input v-model="form.drugName" placeholder="请输入药品名称"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="desc">
          <img src="../../../assets/default_img.png" alt="" class="default_img" />
          <img src="../../../assets/default_img.png" alt="" class="default_img" />
          <img src="../../../assets/default_img.png" alt="" class="default_img" />
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
            <p class="upload">上传</p>
          </el-upload>
        </el-form-item>
        <el-form-item label="药品类型">
          <el-radio-group v-model="form.radio">
            <el-radio label="顺其治"></el-radio>
            <el-radio label="顺其升"></el-radio>
            <el-radio label="顺忆"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price" placeholder="请输入价格" class="add_price"></el-input>
          折扣
          <el-select v-model="form.discount" placeholder="请选择" class="discount">
            <el-option label="7.8" value=""></el-option>
            <el-option label="8" value=""></el-option>
            <el-option label="9.9" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="confirm">
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageUrl: '',
      flag: false,
      mainTitle: ['顺其治', '顺其升', '顺忆'],
      dialogVisible: false,
      form: {
        drugName: '',
        radio: '顺其治',
        drugType: ['顺其治', '顺其升', '顺忆'],
        price: '',
        discount: ''
      },
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      window.console.log(file, fileList)
    },
    handlePreview (file) {
      window.console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
        files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？${fileList}`)
    },
    addDrug () {
      this.dialogVisible = true
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.main {
  /* width: 1540px; */
  height: auto;
}
.shop_price {
  overflow: hidden;
}
.list {
  /* width: 311px; */
  height: 302px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(204, 204, 204, 1);
  padding: 0;
  display: table-cell;
  text-align: center;
  position: relative;
}
.module {
  background: #fff;
  padding: 30px;
  /* min-height: 800px; */
}
p {
  color: rgba(102, 102, 102, 1);
  font-size: 20px;
  line-height: 40px;
}
img {
  display: inline-block;
  width: 80%;
  height: 180px;
  margin: 0 auto;
}
.name {
  text-align: center;
  font-size: 16px;
  width: 100%;
  color: rgba(51, 51, 51, 1);
  margin: 30px 0 10px;
}
.new_price {
  font-size: 14px;
  color: #e33931;
  float: left;
}
.old_price {
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
  float: right;
}
.list p {
  margin: 10px 20px;
}
.avatar-uploader {
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload {
  /* border: 1px dashed #d9d9d9; */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 80px;
  vertical-align: middle;
  color: #8c939d;
  width: 100%;
  height: 100%;
  line-height: 4.5 !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.icon_edit {
  position: absolute;
  width: 19px;
  height: 19px;
  display: inline-block;
  right: 10px;
  top: 10px;
  display: none;
}
.icon_edit img {
  width: 100%;
  height: 100%;
}

.edit_value {
  height: 30px;
}
.add {
  position: relative;
}
.add img {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.default_img {
  width: 115px;
  height: 84px;
  margin-right: 16px;
}
.upload {
  width: 54px;
  height: 30px;
  border: 1px solid rgba(29, 148, 231, 1);
  color: rgba(29, 148, 231, 1);
  font-size: 16px;
  text-align: center;
  line-height: 30px;
}
.add_price {
  display: inline-block;
  width: 170px !important;
  margin: 0 20px 0 0;
}
.discount {
  width: 116px !important;
}
.price {
  width: 50px;
  border: none;
}
</style>
