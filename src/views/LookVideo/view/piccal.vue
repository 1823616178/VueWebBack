<template>
  <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"></video-player>
</template>

<script>
export default {
  created () {
    console.log(this.$refs)
  },
  methods: {
  },
  computed: {
  },
  data () {
    return {
      playerOptions: {
        autoplay: true,
        muted: true,
        language: 'zh-CN',
        asoectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://gz.bcebos.com/v1/videoruyan/video/Scratch/综合实战案例★★/Scratch传感器案例 Scratch传感板安装_高清.mp4",
        }],
        poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
      }
    }
  }
}
</script>

<style>
</style>
