<template>
  <div class="Teachcontainer" :style="{left: left}">
      <div class="layoutTeach">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" 
        @select="handleSelect" active-text-color="#f6ca9d">
        <el-menu-item index="0">开设实验课</el-menu-item>
        <el-submenu index="1">
          <template slot="title">录入实验成绩</template>
          <el-menu-item index="1-1">迈克尔逊干涉仪</el-menu-item>
          <el-menu-item index="1-2">杨氏模量</el-menu-item>
          <el-menu-item index="1-3">单缝衍射</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">人员考勤</template>
          <el-menu-item index="2-1">通信1701</el-menu-item>
          <el-menu-item index="2-2">通信1702</el-menu-item>
          <el-menu-item index="2-3">通信1703</el-menu-item>
          <el-menu-item index="2-4">通信1704</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line"></div>
      <div class="Teachcontent">
        <router-view></router-view>
      </div>
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
    handleSelect(key){
      if (key === '0') {
        if (this.$route.path !== '/menu/teach/offercourses') {
          this.$router.push('/menu/teach/offercourses')
        }
      } else if (key === '1-1') {
        if (this.$route.path !== '/menu/teach/recordscores') {
          this.$router.push('/menu/teach/recordscores')
        }
      }else if(key==='2-1'){
        if(this.$route.path!=='/menu/teach/attendance'){
          this.$router.push('/menu/teach/attendance')
        }
      }
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
