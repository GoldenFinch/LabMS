<template>
    <div class="Purchasecontainer" :style="{left: left}">
        <div class="layoutPurchase">
            <div style="margin-left: 10%">
                <el-button
                        type="primary"
                        icon="el-icon-circle-plus"
                        style="background-color:#f6ca9d; border-color:#f6ca9d; margin:30px;width:150px;"
                        @click='Add'>新增采购</el-button>
                <el-input id="input_name" v-model="input_name" placeholder="请输入申请者名称"
                          style="width: 200px; margin-right:30px;" clearable></el-input>
                <el-button
                        type="primary"
                        style="background-color:#f6ca9d; border-color:#f6ca9d;width:150px;"
                        @click='Search' icon="el-icon-search">查 询</el-button>
            </div>
            <el-table
                    :data="tableData"
                    border
                    :default-sort="{prop:'num', order:'descending'}"
                    style="width: 100%">
                <el-table-column
                        prop="num"
                        label="订单编号"
                        sortable
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="申请人"
                        sortable
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="list"
                        label="申请耗材"
                        sortable
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="申请时间"
                        sortable
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="desc"
                        label="描述"
                        sortable
                        width="200">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button @click="Detail(scope.row)" type="text" size="small">详情</el-button>
                        <el-button @click="Edit(scope.row)" type="text" size="small">通过</el-button>
                        <el-button @click="Delete(scope.row)" type="text" size="small">拒绝</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Purchase",
        props: ['left'],
        data () {
            return {
                tableData:[
                    {num: 0,name: '张三', list: "硫酸*10\n硫酸钠*10", time: '2020-11-15',desc:'学生实验'},
                    {num: 1,name: '张三', list: "酚酞*15\n硫酸铜*15", time: '2020-11-15',desc:'学生实验'},
                    {num: 2,name: '张三', list: "盐酸*20\n硫酸钠*20", time: '2020-11-15',desc:'学生实验'},
                    {num: 3,name: '张三', list: "氯化钠*25\n硫酸钠*25", time: '2020-11-15',desc:'学生实验'}
                ]
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .Purchasecontainer{
        height: 100%;
        width: 100%;
        /* background-color: #3399ff; */
    }
    .layoutPurchase{
        height: 100%;
        border: 1px solid #d7dde4;
        transition-duration: 400ms;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-content: center;
        color:black;
    }
</style>