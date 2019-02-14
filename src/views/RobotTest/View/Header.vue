<template>
  <el-row class='HeadView'>
    <el-col span="24">
      <el-card class="TestHeardView"></el-card>
    </el-col>
    <el-col>
      <el-card class="paper">
        <el-row type="flex"
                justify="center"
                span="15"
                v-for="item in 6"
                :key="item">
          <el-col span="16"
                  style="margin-top:20px;">
            <el-card>

              <h1 class='paperHight'>
                <el-tag class="testTag">{{item}}</el-tag>下列人物形象中，哪一个是机器人？
              </h1>
              <img src="" />
              <div style="margin-top: 20px">
                <el-radio-group v-model="radio8"
                                size="mini">
                  <el-radio label="1"
                            border>备选项1</el-radio>
                  <el-radio label="2"
                            border>备选项2</el-radio>
                </el-radio-group>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: [
        '1', '2'
      ]
    };
  }
}
</script>

<style>
.HeadView {
  display: initial;
}
.TestHeardView {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: aquamarine;
}
.paper {
  margin-top: 20px;
  height: 100%;
}
.paperHight {
  line-height: 15px;
  text-align: left;
  margin-left: 50px;
  font-size: 25px;
  color: lightslategrey;
}
.testTag {
  margin-right: 20px;
}
</style>
