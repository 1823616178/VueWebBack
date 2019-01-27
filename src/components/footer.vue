<template>
  <el-row type="flex"
          justify="center">
    <el-card class="footer_one">
      <div slot="header"
           class="clearfix">
        <span>儒燕科技有限公司</span>
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
  height: 100%;
  line-height: 20px;
  width: 33%;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
}
.clearfix:before,
.clearfix:after {
  display: block;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
