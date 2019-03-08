<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle"
            class="switchandCSS">
      <el-menu default-active="activeIndex2"
               class="el-menu-vertical-demo"
               router="true"
               mode="horizontal"
               ref="abc"
               width="100%">
        <el-menu-item index="/"> <i class="el-icon-setting"></i><span slot="title">首页</span>
        </el-menu-item>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>课程</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/course">小学</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/robot"
                      disabled>
          <i class="el-icon-document"></i>
          <span slot="title">机器人考级</span>
        </el-menu-item>
        <el-menu-item index="/doc">
          <i class="el-icon-setting"></i>
          <span slot="title">儒燕文档</span>
        </el-menu-item>
        <el-menu-item index="/robot/test"
                      disabled>
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
    </el-row>
  </div>
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
      SwitchWinth: ''
    };
  },
  created: function () {
    this.type = store.state.token;
    this.router = router.options.routes
  },
  mounted () {
    this.SwitchWinth = this.$refs.abc.$el.clientWidth
  },
  methods: {
    getWidthdata () {
      console.log(this.$store)
      this.$emit('SwitchWith', this.SwitchWinth)
    },
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
.switchandCSS {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.el-menu-item-group {
  position: relative;
  text-align: center;
}
</style>
