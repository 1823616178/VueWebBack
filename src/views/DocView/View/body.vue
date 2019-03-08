<template>
  <el-row style="margin-top:40px;"
          v-loading.fullscreen.lock="loading">
    <el-col :span="8"
            v-for="(o, index) in card"
            :key="index">
      <el-button :body-style="{ padding: '0px' }"
                 class="carCssView"
                 @click="onclick(o.id)">
        <img :src="o.imgurl"
             class="image">
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      card: [],
      loading: true
    }
  },
  created: function () {
    this.axios.post('/api/cardimg', { index: 6 }).then((res) => {
      if (res) {
        this.loading = false
        window.console.log(res)
        this.card = res.data
      }
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    onclick (value) {
      console.log(value)
      this.$router.push({
        path: '/doc/doclist/' + value
      })
    }
  }

}
</script>

<style>
.carCssView {
  position: relative;
}
</style>
