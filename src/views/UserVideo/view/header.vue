<template>
  <el-row type="flex"
          justify="center">
    <el-col span="15">
      <el-card class="box-cardView">
        <div slot="header"
             class="clearfix">
          <img src="https://catca.oss-cn-beijing.aliyuncs.com/uploads/image/70/70bd94cb028a21d41fe32b53ef136bdd.jpg"
               class="carImage2" />
        </div>
        <div class="text item">

        </div>
      </el-card>
      <el-card class="box-card">
        <div v-for="(item,index) in item"
             :key="index">
          <el-card shadow="always">
            <div class="inlineView">
              <p class="familyFinal">{{item.content}}</p>
              <div class="popoverView">
                <el-popover placement="top-start"
                            title="标题"
                            width="200"
                            trigger="hover"
                            content="购买儒燕365后可观看全部">
                  <el-button slot="reference"
                             v-bind="text">{{text}}</el-button>
                </el-popover>
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      item: [],
      name: [],
      text: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    var id = this.$route.params.id
    this.axios.post('/api/catalog', { id: id }).then((result) => {
      console.log(result)
      this.item = result.data
    }).catch((err) => {
      console.log(err)
    });

  }
}
</script>

<style>
.gridhead {
  box-shadow: 10px 10px 5px #888888;
  margin: 0 auto;
}
.Ptitle {
  font-size: 20px;
  display: flex;
  text-align: start;
  height: 300px;
}
.text {
  font-size: 14px;
  line-height: 10px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
}
.clearfix:after {
  clear: both;
}
.CardP {
  line-height: 10px;
}
.box-cardView {
  width: 100%;
  line-height: 0px;
  display: flex;
}
.box-card {
  width: 100%;
  line-height: 0px;
}
.carImage2 {
  position: relative;
  width: 200px;
  height: 280px;
  margin-left: 300px;
}
.inlineView {
  display: flex;
  text-align: left;
  margin-left: 10%;
}
.familyFinal {
  margin-right: 50%;
}
.popoverView {
  position: absolute;
  right: 500px;
}
</style>
