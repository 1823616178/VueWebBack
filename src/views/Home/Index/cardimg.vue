<template>
  <el-row>
    <el-col :span="4"
            v-for='(item,index) in card'
            :key="index">
      <el-card :body-style="{ padding: '0px'}"
               class="cardMarin">
        <img :src="item.pic_url"
             class="image2">
        <div style="padding: 14px;">
          <span>{{item.name}}</span>
        </div>
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
    }
  },
  created: function () {
    this.axios.post('/api/cardimg', { index: 6 }).then((res) => {
      window.console.log(res)
      this.card = res.data
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
