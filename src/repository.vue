<template>
  <el-col>您已经退出登录</el-col>
</template>

<script type="application/ecmascript">
import types from './store/store.js'
export default {
  created () {
    this.$store.commit(types.LOGIN)
    // this.reload()
    console.log(this.$store.commit(types.LOGIN))
    this.router.go(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
