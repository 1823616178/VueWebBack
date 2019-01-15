<template>
  <el-row type="flex"
          justify="space-between"
          align="top"
          style="top:10px">
    <el-col span="7"
            class="footLeft">
      <div class="firstText">关于我们</div>
      <div class="twiceText">儒燕科技有限公司</div>
      <div class="twiceText">儒燕创客学院</div>
      <div class="twiceText">加入我们</div>
    </el-col>
    <el-col span="7"
            class="footLeft">
      <div class="firstText">儒燕科技有限公司</div>
      <div class="twiceText">微信小程序</div>
      <div class="twiceText">儒燕创客学院</div>
      <div class="twiceText">加入我们</div>
    </el-col>
    <el-col span="7"
            class="footLeft">
      <img src="https://gz.bcebos.com/v1/ruyan/ruyan2/xiaochengxu.png"
           style="" />
    </el-col>
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
</style>
