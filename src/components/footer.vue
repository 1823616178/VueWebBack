<template>
  <el-row type="flex"
          justify="center">
    <el-card class="footer_one">
      <div slot="header"
           class="clearfix">
        <span>卡片名称</span>
      </div>
      <div v-for="o in 4"
           :key="o"
           class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-card class="footer_one">
      <div slot="header"
           class="clearfix">
        <span>卡片名称</span>
      </div>
      <div v-for="o in 4"
           :key="o"
           class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-card class="footer_one">
      <div slot="header"
           class="clearfix">
        <span>卡片名称</span>
      </div>
      <div v-for="o in 4"
           :key="o"
           class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
.firstText {
  position: relative;
  text-align: center;
  color: #99a2aa;
}
.twiceText {
  display: inline;
  margin-left: 10%;
}
.footLeft {
  position: relative;
  text-align: center;
}
.footer_one {
  position: relative;
  display: flex;
  height: 100%;
  width: 33%;
  margin-left: 20px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
