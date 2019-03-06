<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle"
            style="margin-top:20px;">
      <el-col span="15">
        <el-card class="clearfix">
          <el-row type="flex"
                  justify="start"
                  align="middle">
            <el-col span="24"
                    class="CardSpanView">
              <span>儒燕视频</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col span="3"
                    v-for="(o, index) in img"
                    :key="index"
                    :offset="0?2:2"
                    style="margin-top:15px;">
              <el-button @click="jumpUrl2(o.id)">
                <el-card :body-style="{ padding: '0px' }"
                         class="IndexVideoCard">
                  <img :src="o.pic_url"
                       class="image"
                       height="100%"
                       width="100%">
                </el-card>
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col span="3">
        <el-card class="ThisCardA">
          <div v-for="(o,index) in TextVideo"
               :key="index"
               class="text item">
            <el-button @click="jumpUrl(o.id)"
                       class="jumpText"
                       type="text">{{o.title}}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'cardcouse',
  created () {
    this.axios.get('/api/gaveindeximg').then((result) => {
      console.log(result)
      this.img = result.data.img
      this.TextVideo = result.data.TextVideo
    }).catch((err) => {

    });
  },
  data () {
    return {
      img: [],
      TextVideo: [],
    }
  },
  methods: {
    jumpUrl (value) {
      console.log(value)
      this.$router.push({
        path: '/look/' + value,
      })
    },
    jumpUrl2 (value) {
      this.$router.push({
        path: '/video/' + value
      })
    }
  }

}
</script>

<style>
.jumpText {
  line-height: 1px;
}
.ThisCardA {
  line-height: 10px;
}
.CardSpanView {
  position: relative;
  line-height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  margin-top: 5px;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin-top: 200px;
}
.IndexVideoCard {
  position: relative;
  width: 150px;
  height: 200px;
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

.image {
  width: 100%;
  display: block;
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
