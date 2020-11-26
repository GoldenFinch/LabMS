<template>
  <div class="Menucontainer">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="VerticalMenuSelect"
      background-color="#2E2F34"
      text-color="#b69779"
      active-text-color="#f6ca9d">
      <el-menu-item index="0">
        <i class="el-icon-user-solid"></i>
        <span slot="title">示例</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-coordinate"></i>
        <span slot="title"></span>
      </el-menu-item>
    </el-menu>
    <div class="Menucontent">
      <router-view v-bind:left="left"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isCollapse', 'left'],
  data () {
    return {
      activeIndex: '100'
    }
  },
  methods: {
    VerticalMenuSelect (key) {
      if (key === '0') {
        if (this.$route.path !== '/menu/example') {
          this.$router.push('/menu/example')
        }
      } else if (key === '1') {
        if (this.$route.path !== '/menu/') {
          this.$router.push('')
        }
      }
    }
  },
  mounted () {
    if (this.$route.path === '/menu/example') {
      this.activeIndex = '0'
    } else if (this.$route.path === '/menu/') {
      this.activeIndex = '1'
    }
  }
}
</script>

<style scoped>
  .Menucontainer{
    width: 100%;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    float: left;
    width: 150px;
    min-height: 100%;
  }
  .el-menu-vertical-demo {
    float: left;
    width: 50px;
    min-height: 100%;
  }
  .Menucontent{
    height: 100%;
    width: 100%;
  }
</style>
