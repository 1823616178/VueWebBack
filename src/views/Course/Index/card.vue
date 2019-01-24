<template>
  <el-row>
    <el-col span="24">
      <el-carousel :interval="5000"
                   arrow="always">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <div class="block">
      <el-cascader placeholder="选择年级"
                   :options="options"
                   filterable
                   :change-on-select="true"
                   @change="handlechange"></el-cascader>
    </div>
    <div>
      <el-row style="flex"
              justify="center"
              align="top">
        <el-col :span="4"
                v-for="(item,index) in cardimg"
                :key="index">
          <el-card :body-style="{ padding: '0px' }"
                   class="elCard">
            <img :src="item.pic_url"
                 class="image">
            <div class="bottom clearfix">
              <el-button type="success"
                         @click="onSubmit(item.id)">点击观看</el-button>
              <el-tag type="success"
                      style="margin-top:5px;">{{item.name}}</el-tag>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import * as  types from '../../../store/types'
export default {
  data () {
    return {
      options: [{
        value: 'xiaoxue',
        label: '小学',
        children: [{
          value: 'yinianji',
          label: '一年级',
        },
        {
          value: 'ernianji',
          label: '二年级',
        },
        {          value: 'sannianji',
          label: '三年级',
        },
        {
          value: 'sinianji',
          label: '四年级',
        },
        {
          value: 'wunianji',
          label: '五年级',
        },
        {
          value: 'liunianji',
          label: '六年级',
        }]
      }],
      cardimg: [],
      value4: null,
    }
  },
  created () {
    this.axios.post('/api/cardimg', { token: this.$store.state.token }).then((result) => {
      this.cardimg = result.data
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    handlechange (value) {
      console.log(value[1])
      this.axios.post('/api/ycourse', { token: this.$store.state.token, crouse: value }).then((result) => {
        console.log(result)
        this.cardimg = result.data
      })
      console.log(this)
    },
    onSubmit (value) {
      var id = value
      this.$router.push({
        path: '/video/' + id,
      })
    }
  },
}
</script>

<style>
.Viewrow {
  display: inline-block;
}
.bg-purple {
  background-color: #666;
}
.list-m {
  margin: 0px 50px;
  margin-top: 10px;
  margin-left: 17px;
  display: inline-block;
  vertical-align: top;
}
.elCard {
  height: 350px;
  width: 200px;
  margin-top: 20px;
}
.title1 {
  letter-spacing: 1px;
  font-size: 17px;
  height: 40px;
  line-height: 40px;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  display: flex;
}
.stitle {
  font-size: 14px;
  height: 40px;
  line-height: 20px;
  color: #666;
  display: flex;
  width: 300px;
  overflow: hidden;
}
.VideoText {
  display: flex;
  justify-content: center;
  width: 50%;
}
.list-r {
}
.mfst {
  position: relative;
  text-align: center;
  margin-left: 6px;
  color: #fe9900;
  cursor: pointer;
}
.ksz {
  margin-top: 30px;
  display: flex;
}
.class-img {
  width: 260px;
  height: 156px;
  position: relative;
}
.list {
  height: 155px;
  border-bottom: 1px dashed #aaaaaa;
  padding: 16px 0px;
  /* display: flex; */
}
.ViewBox1 {
  border: 1px solid #f2f2f2;
  height: 500px;
  /* display: flex; */
}
.fontView {
  position: initial;
  width: 20px;
  height: 10px;
}

.SelectView {
  width: 100%;
  margin-right: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
  width: 200px;
  height: 250px;
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
