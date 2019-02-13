<template>
  <div>
    <robotHead></robotHead>
    <robotbody></robotbody>
  </div>
</template>

<script>
import robotHead from './View/Heard.vue'
import robotbody from './View/body.vue'
export default {
  name: 'robot',
  components: {
    robotHead, robotbody
  }
}
</script>

<style>
</style>
