//表单里，点击确定x和取消按钮都没反应，不应该是dialogVisible=false吗？？？？
//详情的按钮根本点不了，但是编辑可以点
//表单验证的功能失效？？
//分页怎么不显示数字 可能是没有向后端请求数据的原因
<template>
  <div class="Equipmentcontainer" :style="{left: left}">
    <div class="layoutEquipment">
      <!-- 搜索相关开始 -->
      <el-button 
      type="primary" 
      icon="el-icon-circle-plus"
      style="background-color:#f6ca9d; border-color:#f6ca9d; margin:30px;width:150px;" 
      @click='Add'>新增设备</el-button>
      <el-input id="input_id" v-model="input_id" placeholder="请输入设备编号"
      style="width: 200px; margin-right:30px;" clearable></el-input>
      <el-input id="input_name" v-model="input_name" placeholder="请输入设备名称"
      style="width: 200px; margin-right:30px;" clearable></el-input>
      <el-button 
      type="primary" 
      style="background-color:#f6ca9d; border-color:#f6ca9d;width:150px;" 
      @click='Search' icon="el-icon-search">查 询</el-button>
      <el-button @click="clearText" icon="el-icon-delete" style="width:150px;">清 空</el-button>
      <!-- 搜索相关结束 -->

      <!-- 表格开始 -->
      <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}">
      <el-table-column prop="equipNumber" label="仪器编号"  width="150" sortable></el-table-column>
      <el-table-column prop="equipName" label="仪器名称"  width="200" sortable></el-table-column>
      <el-table-column prop="type" label="仪器型号"  width="150" sortable></el-table-column>
      <el-table-column prop="factory" label="生产厂家" width='200' sortable></el-table-column> 
      <el-table-column prop="lab" label="所属实验室"  width="250" sortable></el-table-column>
      <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <!-- @click="Detail(scope.row)"  -->
        <el-button @click="Edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="Delete(scope.row)" type="text" size="small">删除</el-button>
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
  name: 'Equipment',
  props: ['left'],
  data () {
    return {
      input_id:'',
      input_name:'',
      tableData:[{
        equipNumber:'202009954',
        equipName:'无液氮极低温系统',
        type:'TRON-DR-15-500',
        factory:'牛津',
        lab:'量子材料科学中心'
      },{
        equipNumber:'202009795',
        equipName:'基于智能解译的地质野外实习区域填图平台',
        type:'定制开发',
        factory:'易智瑞信息技术有限公司',
        lab:'地球科学国家级实验教学示范中心(地质教学实验中心)'
      },{
        equipNumber:'202009760',
        equipName:'荧光定量PCR仪',
        type:'5815916001',
        factory:'罗氏',
        lab:'环境与生态国家级实验教学示范中心'
      },{
        equipNumber:'202009759',
        equipName:'高级光合荧光测量系统',
        type:'LI-6800',
        factory:'LI-COR',
        lab:'化学生物学实验室'
      },{
        equipNumber:'202009672',
        equipName:'高功率激光器电源',
        type:'62536526AA',
        factory:'武汉东隆科技有限公司',
        lab:'重离子所'
      }],

      //和分页相关的变量 
      total:undefined,  // 总页数
      pageSize:5,
      currentPage:1,
      currentPageData:[], //当前页显示内容
      equipNumber:'',
      equipName:'',
    }
  },
  created(){
    //向后台请求数据
    this.GetAllData();
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
  }
  .layoutEquipment{
    /* height: 100%; */
    border: 1px solid #d7dde4;
    transition-duration: 400ms;
    overflow-x: hidden;
    /* display: flex; */
    flex-direction: column;
    color: black;
  }
  .customWidth{
    width:500px;
  }
</style>
