<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link key="collapse" class="sidebar-logo-link" to="/">
        <!-- <img v-if="logo" :src="logo" class="sidebar-logo" /> -->
        <h1 class="sidebar-title">{{ title }}
        </h1>
            <p>
                <i></i>
                <i></i>
                <i></i>
            </p>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '六顺购',
      logo: require('../../../assets/logo1.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 110px;
  // line-height: 50px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    border-right: 1px solid #ccc;
    p{
        width: 100%;
        height: 30px;
        background: #e8e8e8;
        display: flex;
        justify-content: space-around;        
        justify-items: center;
        align-items: center;
        position: relative;
        i{
            display:inline-block;
            width: 3px;
            height: 20px;
            background: #fff;
        }
    }
    & .sidebar-logo {
      // width: 150px;
      // height: 120px;
      // line-height: 120px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #1d94e7;
      // background: blue;
      font-weight: 600;
      line-height: 80px;
      font-size: 30px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
