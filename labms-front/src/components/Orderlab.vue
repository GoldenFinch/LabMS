<template>
  <div class="Orderlabcontainer" :style="{left: left}">
      <div class="layoutOrderlab">
         <div class="orderrules">实验室座位预约规则（暂行）<br>
1、本座位管理系统具备预约、签离等功能，目前涵盖的范围为中南大学新校区、铁道校区实验室的座位，座位开放使用时间以各校区实验室规定为准。
<br>
2、师生预约当日或次日的座位,预约成功后师生可以使用该座位至当日座位关闭时间；登录方式使用学校统一身份认证。
<br>
3、预约当日座位的师生预约成功后只能取消1次,并在60分钟内刷卡进入实验室签到。
<br>
4、预约次日座位的师生,需在次日早上8：30前刷卡进入实验室签到。
<br>
5、预约后未签到的师生将被记录违规1次,未签到违规满3次,将被暂停选座位权利3天。
<br>
6、如需取消次日的预约,需在次日8：30前取消预约,具体操作：点击我的中心--我的预约--取消预约。
<br>
7、师生如需离开实验室，如无需保留座位：在签离机或预约机上刷卡“签离”释放座位；未做签离操作的师生，系统将在实验室关闭后或该师生再次刷门禁进入时记“未签离”违规1次。
<br>
未签离违规满3次,将被暂停选座位权利3天。
<br>
8、临时离开方式：出实验室前在预约机上刷卡并选择“临时离开”；选择“临时离开”座位保留60分钟。
<br>
9、已选择“临时离开”的师生返回座位时，须签到即可继续使用原座位，签到方法有两种：1、从通道机刷卡入实验室，2、未出实验室师生在预约机上刷卡签到；
<br>
60分钟内未返回签到，系统将自动释放座位以供他人选用，并记录“临时离开未归”违规1次，临时离开未归违规满3次,将被暂停选位权利3天。
<br>
10、师生须维护室内秩序，不得以任何形式占座，不得随意移动桌椅。工作人员有权清理占座物品，遗失损坏由占座者自行负责。</div>
          </div>
    <div class="line"></div>
    <!-- 表格开始 -->
    <el-table 
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    style="width:100%"
    :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}">
        <el-table-column prop="date" label="日期" width="200" sortable> </el-table-column>
        <el-table-column prop="labname" label="实验室名称" width="400" sortable> </el-table-column>
        <el-table-column prop="totalseat" label="座位总量" width="150" sortable> </el-table-column>
        <el-table-column prop="remainseat" label="座位剩余量" width="150" sortable> </el-table-column>
        <el-table-column label="操作" width="200">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">预约选座</el-button>
            <!-- <el-button type="text" size="small">编辑</el-button> -->
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
</template>

<script>
export default {
  name: 'Orderlab',
  props: ['left'],
  data () {
    return {
      tableData:[{
        date:'2020-11-29',
        labname:'数学学院中心实验室',
        totalseat:'200',
        remainseat:'100'
      },{
        date:'2020-11-29',
        labname:'基础物理国家级实验教学示范中心',
        totalseat:'300',
        remainseat:'101'
      },{
        date:'2020-11-29',
        labname:'稀土材料化学及应用国家重点实验室',
        totalseat:'180',
        remainseat:'102'
      },{
        date:'2020-11-29',
        labname:'现代光学研究所',
        totalseat:'220',
        remainseat:'103'
      },{
        date:'2020-11-29',
        labname:'人工微结构与介观物理国家重点实验室',
        totalseat:'210',
        remainseat:'104'
      },{
        date:'2020-11-29',
        labname:'大气物理与天气诊断实验室',
        totalseat:'230',
        remainseat:'105'
      },{
        date:'2020-11-29',
        labname:'核物理和核技术教学实验室',
        totalseat:'180',
        remainseat:'106'
      },{
        date:'2020-11-29',
        labname:'分子动态与稳态结构国家重点实验室',
        totalseat:'2500',
        remainseat:'107'
      }],

      //和分页相关的变量 
      total:undefined,  // 总页数
      pageSize:5,
      currentPage:1,
      currentPageData:[], //当前页显示内容
    }
  },
  methods: {
    // handleClick(row){

    // }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .Orderlabcontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutOrderlab{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      /* display: flex; */
      flex-direction: column;
      color:black
  }
  .orderrules{
    height:0px
  }
</style>
