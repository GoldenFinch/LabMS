<template>
  <div class="Teachcontainer" :style="{left: left}">
      <div class="layoutTeach">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Teach',
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
  .Teachcontainer{
      height: 100%;
      width: 100%;
      background-color: #3399ff;
  }
  .layoutTeach{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
  }
</style>
