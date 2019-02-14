<template>
  <el-row type="flex"
          justify="center"
          align="middle">
    <el-col span="24">
      <el-card class="entr">
        <div class="entrView">
          <el-row type="flex"
                  justify="center"
                  align="middle"
                  gutter="5">
            <el-col>
              <div>
                <el-carousel height="360px"
                             class="cardImgView">
                  <el-carousel-item v-for="item in 4"
                                    :key="item">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
            <el-col>
              <el-card class="cardTextView">
                <el-col>
                  <el-popover placement="top-start"
                              title="标题"
                              width="200"
                              trigger="hover"
                              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">>
                    <el-button slot="reference"
                               type="success"
                               size="medium"
                               circle
                               class="circleView">click 激活</el-button>
                  </el-popover>
                  <el-popover placement="top-start"
                              title="标题"
                              trigger="hover"
                              width="200"
                              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference"
                               type="success"
                               size="medium"
                               circle
                               class="circleView">click 激活</el-button>
                  </el-popover>
                  <el-popover placement="top-start"
                              title="标题"
                              width="200"
                              trigger="hover"
                              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference"
                               type="success"
                               size="medium"
                               circle
                               class="circleView">click 激活</el-button>
                  </el-popover>
                  <el-popover placement="top-start"
                              title="标题"
                              width="200"
                              trigger="hover"
                              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference"
                               type="success"
                               size="medium"
                               circle
                               class="circleView">click 激活</el-button>
                  </el-popover>
                </el-col>
                <el-col :span="24">
                  <el-button type="success"
                             plain
                             class='cardClickView'>成功按钮</el-button>
                </el-col>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
.entr {
  height: 400px;
  background-color: aqua;
  width: 100%;
  margin-top: 20px;
}
.entrView {
  display: flex;
  justify-content: center;
  background-color: blueviolet;
  width: 100%;
  height: 360px;
}
.cardImgView {
  position: relative;
  width: 450px;
  height: 360px;
  background-color: cadetblue;
}
.cardTextView {
  height: 360px;
  width: 1000px;
}
.circleView {
  height: 100px;
  width: 100px;
  margin-left: 50px;
}
.typeBottom {
  z-index: 999;
  display: inline;
}
.cardClickView {
  height: 100px;
  width: 50%;
  background-color: aqua;
}
</style>
