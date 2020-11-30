<template>
  <div class="Materialcontainer" :style="{left: left}">
      <div class="layoutMaterial">
          <el-menu :default-active="defaultactiveIndex" class="el-menu-demo" mode="horizontal"
                   @select="handleSelect" active-text-color="#f6ca9d">
              <el-menu-item index="1">耗材库</el-menu-item>
              <el-menu-item index="2">已选耗材</el-menu-item>
              <el-menu-item index="3">订单审核</el-menu-item>
          </el-menu>
          <div class="contentMaterial" v-if="Mode==='1'">
              <div style="margin-left: 10%">
                  <el-button
                          type="primary"
                          icon="el-icon-circle-plus"
                          style="background-color:#f6ca9d; border-color:#f6ca9d; margin:30px;width:150px;"
                          @click='Add'>新增耗材</el-button>
                  <el-input id="input_name" v-model="input_name" placeholder="请输入耗材名称"
                            style="width: 200px; margin-right:30px;" clearable></el-input>
                  <el-button
                          type="primary"
                          style="background-color:#f6ca9d; border-color:#f6ca9d;width:150px;"
                          @click='Search' icon="el-icon-search">查 询</el-button>
              </div>
              <el-col :span="6" v-for="(item, key) in MaterialData" :key="key">
                  <el-card style="margin-left: 10px;margin-top: 10px">
                      <img v-bind:src="item.url" alt="" style="height: 250px">
                      <div style="padding: 14px;display: flex;flex-direction: column">
                          <span>耗材编号：{{item.num}}</span>
                          <span>耗材名称：{{item.name}}</span>
                          <span><el-button type="text">添加</el-button></span>
                      </div>
                  </el-card>
              </el-col>
          </div>
          <div class="contentMaterial" v-if="Mode==='2'">
              <div style="margin-top: 20px;margin-bottom: 20px;margin-left: 10%">
                  <el-button type="primary" style="background-color:#f6ca9d; border-color:#f6ca9d;width:150px;" >申 请</el-button>
                  <el-button icon="el-icon-delete" style="width:150px;">清 空</el-button>
              </div>
              <el-table
                  :data="MyData"
                  border
                  style="width: 100%">
                  <el-table-column
                          prop="num"
                          label="编号"
                          width="200">
                  </el-table-column>
                  <el-table-column
                          prop="name"
                          label="名称"
                          width="200">
                  </el-table-column>
                  <el-table-column
                          prop="factory"
                          label="厂家"
                          width="200">
                  </el-table-column>
                  <el-table-column
                          prop="quantity"
                          label="数量"
                          width="200">
                  </el-table-column>
                  <el-table-column
                          prop="quantity"
                          label="操作"
                          width="200">
                      <template slot-scope="scope">
                          <el-button @click="Detail(scope.row)" type="text" size="small">详情</el-button>
                          <el-button @click="Edit(scope.row)" type="text" size="small">修改</el-button>
                          <el-button @click="Delete(scope.row)" type="text" size="small">删除</el-button>
                      </template>
                  </el-table-column>
              </el-table>
          </div>
          <div class="contentMaterial" v-if="Mode==='3'">
              <el-table
                      :data="tableData"
                      style="width: 100%">
                  <el-table-column type="expand">
                      <template slot-scope="props">
                          <el-form label-position="left" inline class="demo-table-expand">
                              <el-form-item label="商品名称">
                                  <span>{{ props.row.name }}</span>
                              </el-form-item>
                              <el-form-item label="所属店铺">
                                  <span>{{ props.row.shop }}</span>
                              </el-form-item>
                              <el-form-item label="商品 ID">
                                  <span>{{ props.row.id }}</span>
                              </el-form-item>
                              <el-form-item label="店铺 ID">
                                  <span>{{ props.row.shopId }}</span>
                              </el-form-item>
                              <el-form-item label="商品分类">
                                  <span>{{ props.row.category }}</span>
                              </el-form-item>
                              <el-form-item label="店铺地址">
                                  <span>{{ props.row.address }}</span>
                              </el-form-item>
                              <el-form-item label="商品描述">
                                  <span>{{ props.row.desc }}</span>
                              </el-form-item>
                          </el-form>
                      </template>
                  </el-table-column>
                  <el-table-column
                          label="订单编号"
                          prop="num">
                  </el-table-column>
                  <el-table-column
                          label="申请人"
                          prop="name">
                  </el-table-column>
                  <el-table-column
                          label="描述"
                          prop="desc">
                  </el-table-column>
              </el-table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Material',
  props: ['left'],
  data () {
    return {
        defaultactiveIndex: '1',
        Mode: '1',
        input_name: '',
            MyData:[
            {num:0,name:'20%硫酸10ml',factory:'沈阳工业公司',quantity:2}
        ],
        MaterialData:[
            {num: 0, url: require('../MaterialPic/NaCl.jpg'), name: 'NaCl（氯化钠）'},
            {num: 1, url: require('../MaterialPic/H2SO4.jpg'), name: '硫酸'},
            {num: 2, url: require('../MaterialPic/HCl.jpg'), name: '盐酸'},
            {num: 3, url: require('../MaterialPic/CuSO4.jpg'), name: '硫酸铜'},
            {num: 4, url: require('../MaterialPic/NaSO4.jpg'), name: '硫酸钠'}
        ],
        tableData:[

        ]
    }
  },
  methods: {
      handleSelect(key){
          this.Mode = key
      },
      Detail(row){
          row
      },
      Edit(row){
          row
      },
      Delete(row){
          row
      },
      Add(){
      },
      Search(){
      }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .Materialcontainer{
      height: 100%;
      width: 100%;
      /* background-color: #3399ff; */
  }
  .layoutMaterial{
      height: 100%;
      border: 1px solid #d7dde4;
      transition-duration: 400ms;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-content: center;
      color:black;
  }
    .contentMaterial{
        flex: auto;
    }
</style>
