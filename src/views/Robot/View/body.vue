<template>
  <el-row type="flex"
          justify="center"
          align="middle"
          gutter="10">
    <el-col span="8">
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 2"
                            :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col span="8">
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 2"
                            :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col span="8">
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 2"
                            :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style>
.image {
  position: relative;
  height: 100%;
  width: 100%;
}
.robotView {
  width: 100%;
  height: 600px;
  background-color: #f0f0f0;
}
</style>
