<template>
  <div class="Equipmentcontainer" :style="{left: left}">
    <div class="layoutEquipment">这是仪器设备管理
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
  .Equipmentcontainer{
    height: 100%;
    width: 100%;
    background-color: #3399ff;
  }
  .layoutEquipment{
    height: 100%;
    border: 1px solid #d7dde4;
    transition-duration: 400ms;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    color: black;
  }
</style>
