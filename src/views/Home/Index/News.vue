<template>
  <div class="block"
       v-loading="getSteamYes">
    <el-carousel height="500px">
      <el-carousel-item v-for="(src,index) in getImage"
                        :key="index">
        <img :src="src.img"
             height="100%"
             width="100%" />
        <h3></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home_new',
  data () {
    return {
      getImage: [],
      Text: 'Hello',
      getSteamYes: true
    }
  },
  created: function () {
    this.axios.get('/api/img').then((res) => {
      if (res) {
        this.getSteamYes = false;
      }
      this.getImage = res.data
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    });
  },
}
</script>

<style>
</style>
