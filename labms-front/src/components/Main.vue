<template>
  <div class="container">
    <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            class="menuclass"
            @select="MainMenuSelect"
            background-color="#2E2F34"
            text-color="#b69779"
            active-text-color="#f6ca9d">
      <div id="logo">
        <img src="../assets/logo.png" style="height: 35px;width: 35px;">
      </div>
      <div id="menustretch" @click="menustretchclick()">
        <img src="../assets/menu.png" style="height: 25px;width: 25px;">
      </div>
      <el-menu-item index="1"><i class="el-icon-s-home" style="color: #b69779;padding-bottom: 4px;"></i>主页</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-s-grid" style="color: #b69779;padding-bottom: 4px;"></i>菜单</el-menu-item>
      <div id="menuuser">
        <a v-if="cookiesname" style="color:#b69779" :href='getLoginUrl()'>登录</a>
        <p v-if="!cookiesname" style="color: #b69779;cursor: pointer" @click="signout()">欢迎您,{{this.$cookies.get('private').name}},点击退出</p>
      </div>
    </el-menu>
    <div class="content">
      <router-view v-bind:isCollapse="isCollapse" v-bind:left="left"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      cookiesname: true,
      activeIndex: '1',
      isCollapse: true,
      left: '50px'
    }
  },
  methods: {
    MainMenuSelect (key) {
      if (key === '1') {
        console.log(111)
        document.getElementById('menustretch').style.display = 'none'
        document.getElementById('logo').style.width = '150px'
        this.$router.push('/home')
      } else if (key === '2') {
        document.getElementById('menustretch').style.display = 'flex'
        if (this.isCollapse) {
          document.getElementById('logo').style.width = '50px'
        } else {
          document.getElementById('logo').style.width = '150px'
        }
        this.$router.push('/menu')
      }
    },
    menustretchclick () {
      if (this.isCollapse) {
        this.isCollapse = false
        document.getElementById('logo').style.width = '150px'
        this.left = '150px'
      } else {
        this.isCollapse = true
        document.getElementById('logo').style.width = '50px'
        this.left = '50px'
      }
    },
    signout () {
      this.$cookies.remove('private')
      this.$cookies.remove('token')
      this.cookiesname = true
      this.$router.go(0)
    },
    getLoginUrl () {
      return 'http://' + this.hostUrl + '/login'
    }
  },
  mounted () {
    if (this.$route.path === '/home') {
      this.activeIndex = '1'
    } else if (this.$route.path.indexOf('/menu') !== -1) {
      this.activeIndex = '2'
      document.getElementById('menustretch').style.display = 'flex'
      document.getElementById('logo').style.width = '50px'
    }
    if (this.$cookies.get('private') !== null) {
      this.cookiesname = false
    }
  }
}
</script>

<style scoped>
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
  .menuclass{
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .content{
    flex: auto;
    margin-top: -1px;
  }
  #logo{
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 150px;
    height: 100%;
    transition-duration: 400ms;
  }
  #menustretch{
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 5%;
    height: 100%;
    cursor: pointer;
    outline: none;
  }
  #menustretch:hover{
    background-color: #29282A;
  }
  #menuuser{
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    color: #b69779;
  }
</style>
