<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <!-- <div class="line"></div> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang='scss'>
.app-main {
  /*50 = navbar  */
  height: calc(100vh - 113px);
  width: 90%;
  position: relative;
  border-right: 1px solid #ccc;
  overflow: auto;
  padding: 50px;
  margin-top: 3px;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
