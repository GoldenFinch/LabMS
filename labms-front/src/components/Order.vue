<template>
  <div class="Ordercontainer" :style="{left: left}">
    <div class="layoutOrder">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
      @select="handleSelect" active-text-color="#f6ca9d">
        <el-menu-item index="1">实验室预约</el-menu-item>
        <el-menu-item index="2">我的中心</el-menu-item>
      </el-menu>
      <div class="line"></div>
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
  },
  mounted () {
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
