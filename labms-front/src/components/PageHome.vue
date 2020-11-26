<template>
  <div class="Homecontainer">
    <img class="img1" id="img1" v-bind:src="imgList[0].url" alt="">
    <img class="img2" id="img2" v-bind:src="imgList[1].url" alt="">
    <img class="img3" v-bind:src="imgList[2].url" alt="">
    <img class="img4" v-bind:src="imgList[3].url" alt="">
  </div>
</template>

<script>
export default{
  name: 'PageHome',
  data () {
    return {
      imgList: [
        {url: require('../assets/carousel1.png')},
        {url: require('../assets/carousel2.png')},
        {url: require('../assets/carousel3.png')},
        {url: require('../assets/carousel4.png')}
      ]
    }
  },
  methods: {
  },
  mounted () {
    setTimeout(() => {
      document.getElementById("img1").style.opacity=1
    }, 500)
    window.onscroll = function () {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 700){
        document.getElementById("img2").style.left="0px"
      }
    }
  }
}
</script>

<style scoped>
  .Homecontainer{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  img{
    width: 68%;
    margin-left: 16%;
    margin-right: 16%;
  }
  .img1{
    position: absolute;
    opacity: 0;
    transition-duration: 2000ms;
  }
  .img2{
    position: absolute;
    top: 1000px;
    left: -100%;
    transition-duration: 500ms;
  }
  .img3{
    position: absolute;
    top: 1900px;
  }
  .img4{
    position: absolute;
    top: 2800px;
  }
  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
  }
</style>
