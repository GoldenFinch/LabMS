<template>
  <el-carousel class="container" :interval="5000" arrow="always">
    <el-carousel-item class="container" v-for="(item,index) in imgList" :key="index">
      <img v-bind:src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default{
  name: 'PageHome',
  data () {
    return {
      carouselHeight: 2000,
      screenWidth: 0,
      imgList: [
        {url: require('../assets/carousel1.png')},
        {url: require('../assets/carousel2.png')},
        {url: require('../assets/carousel3.png')},
        {url: require('../assets/carousel4.png')}
      ]
    }
  },
  methods: {
    setSize () {
      //this.carouselHeight = 400 / 1920 * this.screenWidth
    }
  },
  mounted () {
    //this.screenWidth = window.innerWidth
    //this.setSize()
    window.onresize = () => {
      //this.screenWidth = window.innerWidth
      //this.setSize()
    }
  }
}
</script>

<style scoped>
  .container{
    height: 10%;
    width: 10%;
  }
  img{
    width: auto;
    height: inherit;
  }
  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
  }
</style>
