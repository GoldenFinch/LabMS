<template>
  <div class="RecordScorescontainer" :style="{left: left}">
      <div class="layoutRecordScores">

        

        <!-- 分页开始 -->
        <div class="page" style="position: absolute; bottom: 40px;right: 20px;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current-page.sync="currentPage"
            @current-change="handleCurrentChange"
            >
          </el-pagination>
        </div>
        <!-- 分页结束 -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecordScores',
  props: ['left'],
  data () {
    return {
      tableData:[],

      //和分页相关的变量 
      total:undefined,  // 总页数
      pageSize:7,
      currentPage:1,
      currentPageData:[], //当前页显示内容
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
  .RecordScorescontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutRecordScores{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      /* display: flex; */
      flex-direction: column;
      color:black
  }
</style>
