<template>
  <div class="layoutteam" :style="{left: left}">
  </div>
</template>

<script>
export default {
  name: 'MenuTeam',
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
  .layoutteam{
    border: 1px solid #d7dde4;
    height: 99%;
    left: 50px;
    right: 10px;
    margin-left: 15px;
    background: #f5f7f9;
    color: black;
    transition-duration: 400ms;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
