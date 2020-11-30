<template>
  <div class="RecordScorescontainer" :style="{left: left}">
      <div class="layoutRecordScores">

        <!-- 表格开始 -->
        <el-table 
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width:100%"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}">
            <el-table-column prop="stuid" label="学生学号" width="150" sortable> </el-table-column>
            <el-table-column prop="stuname" label="学生姓名" width="150" sortable> </el-table-column>
            <el-table-column prop="courseid" label="课程编号" width="150" sortable> </el-table-column>
            <el-table-column prop="testname" label="实验名称" width="200" sortable> </el-table-column>
            <el-table-column prop="time" label="实验时间" width="200" sortable> </el-table-column>
            <el-table-column prop="status" label="录入状态" width="150" sortable> </el-table-column>
            <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button v-if="scope.row.status==='未录入'" @click="Record(scope.row)" 
              type="primary" icon="el-icon-edit" size="small">录入</el-button>
              <el-button v-else @click="Edit(scope.row)" type="success" icon="el-icon-check" size="small">修改</el-button>
            </template>
            </el-table-column>
        </el-table>
        <!-- 表格结束 -->

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
      tableData:[{
          stuid:'0905170422',
          stuname:'Alice',
          courseid:'A101',
          testname:'迈克尔逊干涉仪',
          time:'2020-11-30',
          status:'已录入'
      },{
          stuid:'0905170423',
          stuname:'Bob',
          courseid:'A101',
          testname:'迈克尔逊干涉仪',
          time:'2020-11-30',
          status:'已录入'
      },{
          stuid:'0905170424',
          stuname:'Cindy',
          courseid:'A101',
          testname:'迈克尔逊干涉仪',
          time:'2020-11-30',
          status:'未录入'
      },{
          stuid:'0905170425',
          stuname:'David',
          courseid:'A101',
          testname:'迈克尔逊干涉仪',
          time:'2020-11-30',
          status:'未录入'
      },{
          stuid:'0905170426',
          stuname:'Eve',
          courseid:'A101',
          testname:'迈克尔逊干涉仪',
          time:'2020-11-30',
          status:'未录入'
      }],

      //和分页相关的变量 
      total:undefined,  // 总页数
      pageSize:5,
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
