<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
body {
  font-size: 62.5%;
}
.el-dialog {
  overflow: hidden;
  min-height: 65%;
  margin-top: 5% !important;
}
.el-dialog__body {
  height: 80% !important;
}
.el-aside,
.el-main {
  overflow: hidden;
}
.el-table .cell{
  text-align: center;
}

</style>
