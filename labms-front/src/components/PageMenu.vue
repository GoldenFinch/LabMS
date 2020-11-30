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
        <i class="el-icon-school"></i>
        <span slot="title">实验教学中心</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-s-platform"></i>
        <span slot="title">实验开放平台</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-release"></i>
        <span slot="title">仪器设备管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-claim"></i>
        <span slot="title">低值品与耗材</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-finance"></i>
        <span slot="title">项目与采购</span>
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
        if (this.$route.path !== '/menu/teach') {
          this.$router.push('/menu/teach')
        }
      } else if (key === '1') {
        if (this.$route.path !== '/menu/order') {
          this.$router.push('/menu/order')
        }
      }else if(key==='2'){
        if(this.$route.path!=='/menu/equipment'){
          this.$router.push('/menu/equipment')
        }
      }else if (key==='3'){
        if (this.$router.path!=='/menu/material'){
          this.$router.push('/menu/material')
        }
      }else if (key==='4'){
        if (this.$router.path!=='/menu/purchase'){
          this.$router.push('/menu/purchase')
        }
      }
    }
  },
  mounted () {
    if (this.$route.path === '/menu/teach') {
      this.activeIndex = '0'
    } else if (this.$route.path === '/menu/order') {
      this.activeIndex = '1'
    }else if (this.$router.path ==='/menu/equipment'){
      this.activeIndex = '2'
    }else if (this.$router.path ==='/menu/material'){
      this.activeIndex='3'
    }else if(this.$router.path ==='/menu/purchase'){
      this.activeIndex='4'
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
