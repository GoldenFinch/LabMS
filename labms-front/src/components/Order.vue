<template>
  <div class="Ordercontainer" :style="{left: left}">
    <div class="layoutOrder">这是实验开放平台
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuExample',
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
  }
</style>
