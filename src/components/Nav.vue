<template>
  <el-row class="tac">
    <vue-particles color="#dedede"
                   :particleOpacity="0.7"
                   :particlesNumber="80"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#dedede"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="3"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="mainView">
    </vue-particles>
    <el-col :span="12">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               router="true">
        <el-menu-item index="/"> <i class="el-icon-setting"></i><span slot="title">首页</span>
        </el-menu-item>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>课程</span>
          </template>
          <el-menu-item-group>
            <template slot="title">小学</template>
            <el-menu-item index="/course">小学</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/">
          <i class="el-icon-document"></i>
          <span slot="title">机器人考级</span>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-setting"></i>
          <span slot="title">儒燕文档</span>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-setting"></i>
          <span slot="title">公司新闻</span>
        </el-menu-item>
        <el-menu-item index="/Login"
                      v-if='type==="undefined"'>
          <i class="el-icon-setting"></i>
          <span slot="title">登录</span>
        </el-menu-item>
        <el-menu-item v-else>
          <i class="el-icon-setting"></i>
          <span slot="title"
                @click="LogOut">退出登录</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import store from '../store/store'
import * as types from '../store/types'
import router from '../router';
export default {
  inject: ['reload'],
  name: 'Nav',
  data () {
    return {
      isCollapse: false,
      type: '',
      router: [],
    };
  },
  created: function () {
    this.type = store.state.token;
    this.router = router.options.routes
  },
  methods: {
    LogOut () {
      this.$store.commit(types.LOGIN)
      sessionStorage.removeItem('token')
      console.log(this.$store.commit(types.LOGIN))
      router.go(0)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 100%;
}
</style>
