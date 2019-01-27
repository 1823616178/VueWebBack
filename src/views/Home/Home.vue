<template>
  <div class="home">
    <News></News>
    <Course></Course>
    <Card></Card>
    <Cardcourse></Cardcourse>
    <Rec></Rec>
  </div>
</template>

<script>
// @ is an alias to /src
import Course from './Index/carouse.vue'
import News from './Index/News.vue'
import Card from './Index/cardimg.vue'
import Rec from './Index/recommend.vue'
import Cardcourse from './Index/cardcouse.vue'
export default {
  name: 'home',
  components: {
    Course, News, Card, Rec, Cardcourse
  },
  data () {
    return {
    }
  },
  created: function () {
    console.log(window.localStorage)
    console.log(this.$store.state)
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

