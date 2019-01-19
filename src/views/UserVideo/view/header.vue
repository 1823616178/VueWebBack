<template>
  <!-- <el-row type="flex"
          justify="center">
    <el-col span="4.9">
      <div class="gridhead">
        <img src="https://catca.oss-cn-beijing.aliyuncs.com/uploads/image/70/70bd94cb028a21d41fe32b53ef136bdd.jpg"
             height="300px;" />
      </div>
    </el-col>

  </el-row> -->
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0"
                 type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4"
         :key="o"
         class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'head'
}
</script>

<style>
.gridhead {
  box-shadow: 10px 10px 5px #888888;
  margin: 0 auto;
}
.Ptitle {
  font-size: 20px;
  display: flex;
  text-align: start;
  height: 300px;
}
.text {
  font-size: 14px;
  line-height: 10px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
