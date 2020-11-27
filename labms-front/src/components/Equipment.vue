// 怎么让表单宽度缩小点
//表单里，点击确定x和取消按钮都没反应，不应该是dialogVisible=false吗？？？？
//详情的按钮根本点不了，但是编辑可以点
//表单验证的功能失效？？
//分页怎么不显示数字
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
      <el-table-column prop="equipNumber" label="编号"  width="150" sortable></el-table-column>
      <el-table-column prop="equipName" label="名称"  width="150" sortable></el-table-column>
      <el-table-column prop="type" label="型号"  width="150" sortable></el-table-column>
      <el-table-column prop="size" label="规格"  width="150" sortable></el-table-column>
      <el-table-column prop="factory" label="厂家" width='150' sortable></el-table-column> 
      <el-table-column prop="quantity" label="数量" width='150' sortable></el-table-column> 
      <el-table-column label="操作" width="200">
      <template slot-scope="scope">
        <el-button @click="Detail(scope.row)" type="text" size="small">详情</el-button>
        <el-button @click="Edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="Delete(scope.row)" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
      </el-table>
      <!-- 表格结束 -->

      <!-- 表单开始 -->
      <el-dialog :title="title" :visible.sync="dialogFormVisible" custom-class="customWidth">
        <el-form :model="form" :rules='rule' ref="Form">
          <!-- form -->
          <el-form-item label="编号" prop="equipNumber" :label-width="formLabelWidth">
            <el-input v-model="form.equipNumber" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="equipName" :label-width="formLabelWidth">
            <el-input v-model="form.equipName" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="型号" prop="type" :label-width="formLabelWidth">
            <el-input v-model="form.type" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="规格" prop="size" :label-width="formLabelWidth">
            <el-input v-model="form.size" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="厂家" prop="factory" :label-width="formLabelWidth">
            <el-input v-model="form.factory" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="quantity" :label-width="formLabelWidth">
            <el-input v-model="form.quantity" auto-complete="off" style="width:300px"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible= false">取 消</el-button>
          <el-button type="primary" @click="BtnOk('Form')"
          style="background-color:#f6ca9d; border-color:#f6ca9d;">确 定</el-button>
        </div>

      </el-dialog>
      <!-- 表单结束 -->

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
        equipNumber:'111',
        equipName:'222',
        type:'333',
        size:'444',
        factory:'55',
        quantity:'555'
      }],

      //模态框的相关数据
      diglogFormVisible:false,
      title:'新增设备',
      form:{
        equipNumber:'',
        equipName:'',
        type:'',
        size:'',
        factory:'',
        quantity:''
      },
      formLabelWidth:'200px',
      id:'',
      idDis:false,
      rules: {
        equipNumber:[{required:true,message:'编号不能为空'}],
        equipName:[{required:true,message:'名称不能为空'}],
        type:[{required:true,message:'型号不能为空'}],
        size:[{required:true,message:'规格不能为空'}],
        factory:[{required:true,message:'厂家不能为空'}],
        quantity:[{required:true,message:'数量不能为空'}],
      },

      //和分页相关的变量
      total:undefined,  // 总页数
      pageSize:5,
      currentPage:1,
      currentPageData:[], //当前页显示内容
    }
  },
  created(){
      this.GetAllData();
  },
  methods: {
    handleCurrentChange(){
      this.GetAllData();
    },
    Search(){

    },
    clearText(){
      this.input_id='';
      this.input_name='';
      this.GetAllData();
    },
    GetAllData(){

    },
    Add(){
      this.title='新增设备';
      this.dialogFormVisible=true;
      this.form={};
      this.idDis=false;
    },
    Detail(row){
      this.title='设备详情';
      this.diglogFormVisible=true;
      this.form=row;
      this.idDis=true;
    },
    Edit(row){
      this.title='编辑设备';
      this.dialogFormVisible=true;
      this.form=row;
      this.idDis=true;
    },
    //确认新增的按钮
    BtnOk(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){

          this.dialogFormVisible=false;
        }else{
          console.log('失败')
        }         
    })
    },
    //删除
    Delete(){
      this.$confirm('此操作将永久删除该设备, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //  ///  id  ==> 后台  我们要删除  删除  谨慎
          //  axios.put('/device/'+row.serialnum+'/delete',{
          //    active:0,
          //  })
          //  .then((response)=>{
          //    this.$notify.success({
          //         title: '成功',
          //         message: '冻结成功！！！'
          //       });
          //    this.GetAllData();
          //  }).catch((error)=>{
          //     this.$notify.error({
          //         title: '失败',
          //         message: '冻结失败！！！'
          //       });
          //  })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });       
    }
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
