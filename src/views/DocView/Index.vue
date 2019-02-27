<template>
  <div>
    <Doc />
    <docbody />
  </div>
</template>

<script>
import Doc from './View/Header.vue'
import Docbody from './View/body.vue'
export default {
  name: 'DocView',
  components: {
    Doc, Docbody
  }
}
</script>

<style>
</style>
