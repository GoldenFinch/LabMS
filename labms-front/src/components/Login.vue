<template>
  <div class="login">
    <div class="bgd">
      <canvas
        id= 'myCanvas'
        @mousemove="mousemove"
        :width= 'width'
        :height= 'height'>
      </canvas>
    </div>
    <div class="loginbox">
      <h4 style="margin: 10px; font-weight: lighter;font-size: 18px; margin-bottom: 10px;">登录</h4>
      <Form ref="loginForm" :model="loginForm" :rules="loginRules" inline>
        <Form-item prop="loginusername">
          <Row>
            <Col span="2">
              <img class="image" src="../assets/username.png">
            </Col>
            <Col span="22">
              <input class="inp" type="text" v-model="loginForm.username" placeholder="  用户名"></input>
            </Col>
          </Row>
        </Form-item>
        <Form-item prop="loginpassword">
          <Row>
            <Col span="2">
              <img class="image" src="../assets/password.png">
            </Col>
            <Col span="22">
              <input class="inp" type="password" v-model="loginForm.password" placeholder="  密码"></input>
            </Col>
          </Row>
        </Form-item>
        <FormItem>
          <Button class="loginbutton" type="primary" @click="loginSubmit()">登录</Button>
        </FormItem>
      </Form>
      <h4 style="margin: 10px; font-weight: lighter;font-size: 12px">欢迎登录！</h4>
      <a style="font-size: 12px" @click="showregisterbox()">没有账号?点这里注册</a>
    </div>
    <div class="registerbox" id="registerbox">
      <h4 style="font-weight: lighter;font-size: 17px; margin-bottom: 0px">注册</h4>
      <div>
        <a style="font-size: 10px;font-weight: lighter;#39f: white;margin-right: 50%; margin-bottom: 10px">*请输入7~12位数字和字母作为用户名和密码</a>
      </div>
      <Form rel="registerForm" :model="registerForm" inline>
        <FormItem prop="username">
          <Row>
            <Col span="2">
              <img class="image" src="../assets/username.png">
            </Col>
            <Col span="22">
              <input class="inp" type="text" v-model="registerForm.username" placeholder="  用户名"></input>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="password">
          <Row>
            <Col span="2">
              <img class="image" src="../assets/password.png">
            </Col>
            <Col span="22">
              <input class="inp" :type='passwordtype' v-model="registerForm.password" placeholder="  密码"></input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          身份：
          <Dropdown trigger="click" style="width: 100px;">
            <a>
              {{registerForm.identity}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem @click.native="selectLevel('管理员')">管理员</DropdownItem>
              <DropdownItem @click.native="selectLevel('老师')">老师</DropdownItem>
              <DropdownItem @click.native="selectLevel('学生')">学生</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormItem>
        <FormItem prop="name">
          <Row>
            <Col span="2">
              <img class="image" src="../assets/username.png">
            </Col>
            <Col span="22">
              <input class="inp" type="text" v-model="registerForm.name" placeholder="  您的真实姓名"></input>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button id="registerbutton" type="primary" @click="registerSubmit()" style="background-color: transparent;color: #39f;">注册</Button>
        </FormItem>
      </Form>
      <div>
        <Button type="primary" @click="showregisterpassword()" v-text='buttontext' style="background-color: transparent;width: 75px;height:23px;color:#39f;padding: 0;margin: 0;">显示密码</Button>
      </div>
      <div @click="hideregisterbox()" style="cursor: pointer;">
        <img src="../assets/up.png" style="position: absolute;bottom: 0;padding: 0;left:49.5%;height: 20px;width: 30px;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        canvas: null,
        context: null,
        stars: [],     //星星数组
        shadowColorList: [
          "#39f000",
          "#ec5707",
          "#b031d4",
          "#22e6c7",
          "#92d819",
          "#14d7f1",
          "#e23c66"
        ], //阴影颜色列表
        directionList:["leftTop","leftBottom","rightTop","rightBottom"],//星星运行方向
        speed: 0.17,//星星运行速度
        Ball: class Ball{
          constructor (radius) {
            this.x= 0;
            this.y=0;
            this.radius=radius;
            this.color="";
            this.shadowColor="";
            this.direction="";
          }
          draw(context){
            context.save();
            //context.translate(this.x,this.y);
            context.lineWidth=this.lineWidth;
            var my_gradient=context.createLinearGradient(this.x-this.radius,this.y-this.radius,this.x+this.radius+10,this.y+this.radius+10);
            my_gradient.addColorStop(0,this.color);
            my_gradient.addColorStop(1,this.shadowColor);
            context.fillStyle=my_gradient;
            context.beginPath();
            context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
            context.stroke();

            context.shadowColor=this.shadowColor;
            //context.shadowOffsetX=0;
            //context.shadowOffsetY=0;
            context.shadowBlur=20;

            context.fill();
            context.restore();
          }
        }, //工厂定义Ball类
        width:window.innerWidth,
        height:window.innerHeight,
        mouseX: -1,
        mouseY: -1,
        loginForm: {    //表单字段
          username: '',
          password: ''
        },
        loginRules: {   //表单字段限制规则
          username: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        },

        registerForm: {
          username: '',
          password: '',
          identity: '选择身份',
          name: ''
        },
        passwordtype: "password",
        buttontext: "显示密码",
        passwordhide: true,
      }
    },
    methods: {
      //提交登录表
      loginSubmit(name) {
        var reg= /^[0-9a-zA-Z]{7,12}$/;
        if((reg.test(this.loginForm.username)===false)||(reg.test(this.loginForm.password)===false)){
          this.$Notice.error({
            title: '格式不正确!',
          })
        }else{
          this.axios.post("/api/login",this.loginForm).then(res => {
            if(res.data.code===1){
              this.$Notice.error({
                title: res.data.msg,
              })
            }else if(res.data.code===0){
              this.$root.USER = res.data.data
              //console.log(this.$user)
              this.$Notice.success({
                title: '登录成功!',
              });
              //跳转
              let from =this.$route.query.from;
              if(from!==undefined){
                this.$router.push('/'+this.$route.query.from)
              }else{
                this.$router.push('/home');
              }
            }
          })
        }
      },
      //提交注册表
      registerSubmit() {
        var reg= /^[0-9a-zA-Z]{7,12}$/;
        //字段验证
        if((reg.test(this.registerForm.username)===false)||(reg.test(this.registerForm.password)===false)||(this.registerForm.name=="")||(this.registerForm.identity=="选择身份")){
          this.$Notice.error({
            title: '格式不正确!',
          })
        }else{
          this.$Notice.open({
            title: '已提交，稍等，请勿重复注册!',
          });
          //document.getElementById("registerbutton").disabled=true;
          this.axios.post("/api/register",this.registerForm).then(res =>{
            if (res.data.code===0){
              this.$Notice.success({
                title: '注册成功!',
              });
            }else if(res.data.code===1){
              this.$Notice.error({
                title: res.data.msg,
              })
              document.getElementById("registerbutton").disabled=false;
            }
          })
        }
      },
      //显示注册表
      showregisterbox(){
        document.getElementById("registerbox").style.top="0px";
      },
      //隐藏注册表
      hideregisterbox(){
        document.getElementById("registerbox").style.top="-200px";
      },
      showregisterpassword(){
        if(this.passwordhide){
          this.passwordtype="text";
          this.buttontext="隐藏密码";
          this.passwordhide=false;
        }else{
          this.passwordtype="password";
          this.buttontext="显示密码";
          this.passwordhide=true;
        }
      },
      //选择身份
      selectLevel(name){
        this.registerForm.identity = name
      },
      mousemove(e){
        if ((this.mouseX===-1)&&(this.mouseY===-1)){
          this.mouseX=e.offsetX;
          this.mouseY=e.offsetY;
        }else{
          var moveX=(e.offsetX-this.mouseX);
          var moveY=(e.offsetY-this.mouseY);
            for (var i=0;i<this.stars.length;i++){
              if (i%7===0){
                this.stars[i].x += moveX*0.15;
                this.stars[i].y += moveY*0.15;
              }else if (i%6===1){
                this.stars[i].x += moveX * 0.1;
                this.stars[i].y += moveY * 0.1;
              }else if(i%5===1){
                this.stars[i].x += moveX * 0.01;
                this.stars[i].y += moveY * 0.01;
              }else{
                this.stars[i].x += moveX*0.05;
                this.stars[i].y += moveY*0.05;
              }
            }
          this.mouseX=e.offsetX;
          this.mouseY=e.offsetY;
        }
      },
      //重复动画
      drawFrame(){
        let animation = requestAnimationFrame(this.drawFrame);
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.createStar(false);
        this.stars.forEach(this.moveStar);
        this.drawline();
      },
      //画线
      drawline(){
        for(var i=0;i<this.stars.length;i++){
          for(var j=i+1;j<this.stars.length;j++){
            var distance = Math.sqrt(Math.pow(this.stars[i].x - this.stars[j].x,2)+Math.pow(this.stars[i].y - this.stars[j].y,2));
            if (distance < 70){
              this.context.beginPath();
              this.context.lineWidth="1.2";
              this.context.strokeStyle="#473F8B";
              this.context.moveTo(this.stars[i].x,this.stars[i].y);
              this.context.lineTo(this.stars[j].x,this.stars[j].y);
              this.context.stroke();
            }
          }
        }
      },
      //实例化星星
      createStar(param){
        let now =new Date();
        if(param){
          //初始化星星
          for (var i=0;i<120;i++){
            const radius=5;
            let star=new this.Ball(radius);
            star.x=Math.random()*this.canvas.width;
            star.y=Math.random()*this.canvas.height;
            star.color="#ffffff";
            star.shadowColor=this.shadowColorList[Math.floor(Math.random()*7)];
            star.direction=this.directionList[Math.floor(Math.random()*4)];
            this.stars.push(star);
          }
        }
      },
      //星星移动
      moveStar(star,index){
        if(star.y-this.canvas.height>0){
          //触底
          if (Math.floor(Math.random()*2)===1){
            star.direction="leftTop";
          }else{
            star.direction="rightTop";
          }
        }else if(star.y<2){
          //触顶
          if(Math.floor(Math.random()*2)===1){
            star.direction="leftBottom";
          }else{
            star.direction="rightBottom";
          }
        }else if(star.x<2){
          //左边
          if(Math.floor(Math.random()*2)===1){
            star.direction="rightTop";
          }else{
            star.direction="rightBottom";
          }
        }else if(star.x-this.canvas.width>0){
          //右边
          if(Math.floor(Math.random()*2)===1){
            star.direction="leftTop";
          }else{
            star.direction="leftBottom";
          }
        }
        if(star.direction==="leftTop"){
          star.y-=star.radius*this.speed;
          star.x-=star.radius*this.speed;
        }else if (star.direction==="leftBottom"){
          star.y+=star.radius*this.speed;
          star.x-=star.radius*this.speed;
        }else if (star.direction==="rightTop"){
          star.y-=star.radius*this.speed;
          star.x+=star.radius*this.speed;
        }else if (star.direction==="rightBottom"){
          star.y+=star.radius*this.speed;
          star.x+=star.radius*this.speed;
        }
        star.draw(this.context);
        //star.drawline(this.context,index,this.stars);
      },
    },
    mounted: function() {
      //获取url上的参数
      //let id=this.$route.query.from;
      //console.log(from);
      this.canvas=document.getElementById("myCanvas");
      this.context=this.canvas.getContext("2d");
      this.createStar(true);
      this.drawFrame();
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
    background-image: url("../assets/bg.png");
    background-size: 100% 100%;
    background-repeat: repeat;
    background-position: center;
  }
  .bgd{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    overflow: hidden;
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
  .registerbox{
    position: absolute;
    width: 100%;
    height: 200px;
    top: -200px;
    left: 0;
    transition-duration: 300ms;
    padding: 30px 30px 0px 30px;
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
    margin-left: 20px;
    font-size: 14px;
  }
  .loginbutton{
    width: 100px;
    height: 40px;
    background-color: transparent;
    color: #39f;
  }
  .iconfont {
    color: #fff;
  }
  .image{
    width: 20px;
    height: 25px;
    padding-top: 5px;
  }
  input::-webkit-input-placeholder{ color: rgba(255,255,255, .5); font-weight: lighter; font-size: 13px; }  /* WebKit, Blink, Edge */
  input::-moz-placeholder{  color: rgba(255,255,255, .5); font-weight: lighter; font-size: 13px; }          /* Mozilla Firefox 19+ */
  input:-moz-placeholder{ color: rgba(255,255,255, .5); font-weight: lighter; font-size: 13px; }            /* Mozilla Firefox 4 to 18 */
  input:-ms-input-placeholder{  color: rgba(255,255,255, .5);; font-weight: lighter; font-size: 13px; }      /* Internet Explorer 10-11 */
</style>
