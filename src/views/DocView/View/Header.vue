<template>
  <el-row type="flex"
          justify="center"
          align="middle">
    <el-col span="24">
        <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
</style>
