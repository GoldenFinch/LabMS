<template>
  <div class="Homecontainer">
    <el-carousel :interval="5000" arrow="always" :height="carouselHeight">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img v-bind:src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default{
  name: 'PageHome',
  data () {
    return {
      carouselHeight: '800px',
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
      this.carouselHeight = 533 / 800 * this.screenWidth
    }
  },
  mounted () {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    this.screenWidth = window.innerWidth
    //this.setSize()
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      //this.setSize()
    }
  }
}
</script>

<style scoped>
  .Homecontainer{
    height: 100%;
    width: 100%;
  }
  img{
    width: auto;
    height: inherit;
  }
  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
  }
</style>
