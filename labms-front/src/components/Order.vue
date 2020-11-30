<template>
  <div class="Ordercontainer" :style="{left: left}">
    <div class="layoutOrder">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
      @select="handleSelect" active-text-color="#f6ca9d">
        <el-menu-item index="0">实验室预约</el-menu-item>
        <el-menu-item index="1">我的中心</el-menu-item>
      </el-menu>
      <div class="line"></div>
      <div class="Ordercontent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: ['left'],
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key) {
      if (key === '0') {
        if (this.$route.path !== '/menu/order/orderlab') {
          this.$router.push('/menu/order/orderlab')
        }
      } else if (key === '1') {
        if (this.$route.path !== '/menu/order/myorder') {
          this.$router.push('/menu/order/myorder')
        }
      }
    }
  },
  mounted () {
    if (this.$route.path === '/menu/order/orderlab') {
        this.activeIndex = '0'
    } else if (this.$route.path === '/menu/order/myorder') {
        this.activeIndex = '1'
    }
  }
}
</script>

<style scoped>
  .Ordercontainer{
    height: 100%;
    width: 100%;
  }
  .layoutOrder{
    height: 100%;
    border: 1px solid #d7dde4;
    transition-duration: 400ms;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    color:black
  }
</style>
