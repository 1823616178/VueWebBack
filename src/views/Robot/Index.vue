<template>
  <div>
    <robotHead></robotHead>
    <robotbodytwo />
    <robotbody></robotbody>
    <entr />
  </div>
</template>

<script>
import robotHead from './View/Heard.vue'
import robotbody from './View/body.vue'
import robotbodytwo from './View/bodyTwo.vue'
import entr from './View/entr.vue'
export default {
  name: 'robot',
  components: {
    robotHead, robotbody, robotbodytwo, entr
  }
}
</script>

<style>
</style>
