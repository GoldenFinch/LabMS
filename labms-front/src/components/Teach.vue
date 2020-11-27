<template>
  <div class="Teachcontainer" :style="{left: left}">
      <div class="layoutTeach">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" 
        @select="handleSelect" active-text-color="#f6ca9d">
        <el-menu-item index="1">开设实验课</el-menu-item>
        <el-submenu index="2">
          <template slot="title">录入实验成绩</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">人员考勤</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Teach',
  props: ['left'],
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .Teachcontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutTeach{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      color:black
  }
</style>
