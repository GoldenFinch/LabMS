<template>
  <div class="Examplecontainer" :style="{left: left}">
    <div class="layoutExample">
        <div>这是实验教学中心</div>
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
  .Examplecontainer{
    height: 100%;
    width: 100%;
  }
  .layoutExample{
    height: 100%;
    border: 1px solid #d7dde4;
    transition-duration: 400ms;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
