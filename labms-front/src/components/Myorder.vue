<template>
  <div class="Myordercontainer" :style="{left: left}">
      <div class="layoutMyorder">

        <!-- 表格开始 -->
        <el-table 
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width:100%"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}">
            <el-table-column prop="orderid" label="预约号" width="150" sortable> </el-table-column>
            <el-table-column prop="labname" label="预约空间" width="300" sortable> </el-table-column>
            <el-table-column prop="starttime" label="开始时间" width="200" sortable> </el-table-column>
            <el-table-column prop="endtime" label="结束时间" width="200" sortable> </el-table-column>
            <el-table-column prop="status" label="当前状态" width="100" sortable> </el-table-column>
            <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button v-if="scope.row.status==='预约成功'" @click="Cancel(scope.row)" type="warning" icon="el-icon-remove" size="small">取消预约</el-button>
              <el-button @click="Delete(scope.row)" type="danger" icon="el-icon-delete" size="small">删除</el-button>
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

      <div class="line"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Myorder',
  props: ['left'],
  data () {
    return {
      tableData:[{
        orderid:'202011300804',
        labname:'铁道校区-一楼-铁道一楼B区:TF1B039',
        starttime:'2020-11-30 08:24:28',
        endtime:'2020-11-30 22:00:00',
        status:'使用中'
      },{
        orderid:'202011300798',
        labname:'铁道校区-一楼-铁道一楼B区:TF1B004',
        starttime:'2020-12-01 07:30:00',
        endtime:'2020-12-01 22:00:00',
        status:'预约成功'
      },{
        orderid:'202011295083',
        labname:'铁道校区-一楼-铁道一楼B区:TF1B077',
        starttime:'2020-11-30 07:30:00',
        endtime:'2020-11-30 22:00:00',
        status:'用户取消'
      },{
        orderid:'202011294308',
        labname:'铁道校区-一楼-铁道一楼B区:TF1B007',
        starttime:'2020-11-29 17:57:51',
        endtime:'2020-11-29 22:00:00',
        status:'已使用'
      },{
        orderid:'202011275147',
        labname:'铁道校区-一楼-铁道一楼A区:TF1A033',
        starttime:'2020-11-27 18:46:07',
        endtime:'2020-11-27 22:00:00',
        status:'已关闭'
      },{
        orderid:'202011274661',
        labname:'铁道校区-一楼-铁道一楼A区:TF1A093',
        starttime:'2020-11-27 17:59:14',
        endtime:'2020-11-27 22:00:00',
        status:'已使用'
      },{
        orderid:'202011271084',
        labname:'铁道校区-一楼-铁道一楼B区:TF1B077',
        starttime:'2020-11-28 07:30:00',
        endtime:'2020-11-28 22:00:00',
        status:'已使用'
      }],

      //和分页相关的变量 
      total:undefined,  // 总页数
      pageSize:7,
      currentPage:1,
      currentPageData:[], //当前页显示内容
    }
  },
  methods: {
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .Myordercontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutMyorder{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      /* display: flex; */
      flex-direction: column;
      color:black
  }
</style>
