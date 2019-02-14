<template>
  <el-row type="flex"
          justify="center"
          align="middle">
    <el-col span="15"
            style="margin-top:20px;margin-bottom:20px;">
      <el-card class='imageBody'>
        <el-table :data="tableData3"
                  height="300"
                  border
                  style="width: 100%"
                  class="tableHeader">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="新闻">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style>
.imgbodyTwo {
  background-color: aquamarine;
}
</style>
