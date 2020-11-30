<template>
  <div class="OfferCoursescontainer" :style="{left: left}">
    <div class="layoutOfferCourses">
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="课程编号" prop="id">
            <el-input v-model="form.id" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="课程名称" prop="name">
            <el-input v-model="form.name" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="实验地点" prop="region">
            <el-select v-model="form.region" placeholder="请选择实验室">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="实验时间" required>
            <el-col :span="11">
            <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="是否需要打开实验室电脑" label-width="200px" prop="openpc">
            <el-switch v-model="form.openpc"></el-switch>
        </el-form-item>
        <el-form-item label="实验性质" prop="type">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="授课教学" name="type"></el-checkbox>
            <el-checkbox label="自主探究" name="type"></el-checkbox>
            <el-checkbox label="小组实验" name="type"></el-checkbox>
            <el-checkbox label="独自实验" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="实验资源" prop="resource">
            <el-radio-group v-model="form.resource">
            <el-radio label="自备"></el-radio>
            <el-radio label="从实验室获取"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="实验形式" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="warning" @click="Submit('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferCourses',
  props: ['left'],
  data () {
    return {
     form: {
        id:'',
        name: '',
        region: '',
        date1: '',
        date2: '',
        openpc: false,
        type: [],
        resource: '',
        desc: ''
        },
        rules: {
          id:[
              {required: true, message: '请输入课程编号', trigger: 'blur'}
          ],
          name: [
            { required: true, message: '请输入课程名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择实验地点', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个实验性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择实验资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写实验形式', trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    Submit(form) {
      console.log('submit!');
      this.$refs[form].validate((valid) => {
            if (valid) {
            alert('submit!');
            } else {
            console.log('error submit!!');
            return false;
            }
        });
    },
    resetForm(form){
        this.$refs[form].resetFields();
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .OfferCoursescontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutOfferCourses{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      /* display: flex; */
      flex-direction: column;
      color:black
  }
</style>
