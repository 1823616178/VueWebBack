<template>
  <div id="app">
    <el-container>
      <el-aside width="155px"
                v-if="isRouterAlive">
        <Nav />
      </el-aside>
      <el-container>
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
import Heard from '@/components/Header/Index.vue'
export default {
  components: {
    Nav, Footer, Heard
  },
  provide () {
    return {
      reload: this.reload,
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
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
.el-header {
  background-color: aqua;
  position: relative;
  line-height: 100%;
  height: 100%;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
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
