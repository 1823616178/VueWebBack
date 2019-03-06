<template>
  <div id="app">
    <el-container>
      <!-- <el-aside width="150px"
                v-if="isRouterAlive">
        <Nav class="NavClassCss" />
      </el-aside> -->
      <el-container>
        <el-row type="flex"
                justify="start"
                align="middle"
                class="el-headerCSS">
          <el-col span="10"
                  offset="2">
            <el-header :style="HeaderCss">
              <img src='https://gz.bcebos.com/v1/videoruyan/images/ruyanTitle.png'
                   height="100%" />
            </el-header>
          </el-col>
          <el-col offset="1"
                  span="6">

            <el-input v-model="input"
                      placeholder="搜索课程" />
            <el-button @click="SearchCourse">点击搜索</el-button>

          </el-col>
        </el-row>
        <Nav class="NavClassCss" />
        <el-main>
          <router-view />
        </el-main>
        <el-footer height='200px'>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/footer.vue'
export default {
  components: {
    Nav, Footer
  },
  provide () {
    return {
      reload: this.reload,
    }
  },
  data () {
    return {
      input: '',
      HeaderCss: 'height:100px',
      widdth: '',
      isRouterAlive: true
    }
  },
  created () {
    console.log(this.widdth)
  },
  methods: {
    SearchCourse () {
      var title = this.input
      this.axios.post('/api/searchCourse', { data: title }).then((result) => {
        console.log(result)
      }).catch((err) => {

      });
    },
    SwitchWith (value) {
      console.log(value)
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.el-headerCSS {
  background-color: #f5f5f5;
}
.switchNav {
  position: absolute;
  z-index: 100;
  margin-top: 1%;
  margin-left: 1%;
}
.mainBar {
  position: absolute;
  z-index: -1;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.Navclass {
  position: relative;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 100px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
