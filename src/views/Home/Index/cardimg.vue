<template>
  <el-row>
    <el-col :span="8"
            v-for="(o, index) in card"
            :key="index"
            v-loading="YesGet">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="o.imgurl"
             class="image">
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      card: [],
      YesGet: true
    }
  },
  created: function () {
    this.axios.post('/api/cardimg', { index: 6 }).then((res) => {
      if (res) {
        this.YesGet = false
        window.console.log(res)
        this.card = res.data
      }
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style>
.cardMarin {
  margin-right: 20px;
  margin-bottom: 20px;
  line-height: 100px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image2 {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
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
