<template>
  <div class="login">
    <div class="loginbox">
      <h4 style="margin: 10px; font-weight: lighter;font-size: 18px; margin-bottom: 10px;">登录</h4>
      <el-form :model="loginForm">
        <el-form-item prop="loginphone">
          <input class="inp" type="text" v-model="loginForm.loginphone" placeholder="  手机号"/>
        </el-form-item>
        <el-form-item>
          <Button class="loginbutton" type="primary" @click="loginSubmit()">登录</Button>
        </el-form-item>
      </el-form>
      <a style="margin: 10px; font-weight: lighter;font-size: 12px" :href='getMainUrl()'>游客登录<br></a>
      <a style="font-size: 12px">没有账号?点这里注册</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        loginphone: null
      }
    }
  },
  methods: {
    loginSubmit () {
      var reg = /^[0-9a-zA-Z]{1,}$/
      if (reg.test(this.loginForm.loginphone) === false) {
        this.$message({
          message: '格式不正确！',
          type: 'warn'
        })
      } else {
        var formData = new FormData()
        formData.append('phone', this.loginForm.loginphone)
        this.axios.post('/api/authority/login', formData, {headers: {}}).then(res => {
          if (res.data.status === true) {
            // console.log(res)
            this.$cookies.set('token', res.headers.token)
            this.$cookies.set('private', res.data.result.private)
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
            let from = this.$route.query.from
            if (from !== undefined) {
              this.$router.push('/' + this.$route.query.from)
            } else {
              this.$router.push('/')
            }
          } else {
            this.$message({
              message: '登陆失败',
              type: 'error'
            })
          }
        })
      }
    },
    getMainUrl () {
      return 'http://' + this.hostUrl
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .login{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    color: #fff;
    font-size: 16px;
  }
  .loginbox{
    position: absolute;
    width: 300px;
    height: 350px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 40px 40px 0px 40px;
    box-shadow: -15px -15px 15px rgba(6, 17, 47, 0.7);
    capacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }
  .inp{
    height: 25px;
    border: none;
    color: #39f;
    background-color: transparent;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-size: 14px;
  }
  .loginbutton{
    width: 100px;
    height: 40px;
    background-color: transparent;
    color: #39f;
  }
</style>
