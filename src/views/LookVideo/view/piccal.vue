<template>
  <el-row type="flex"
          justify="center">
    <el-col span="15">
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)">
      </video-player>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        autoplay: false,
        fluid: true,
        muted: false,
        language: 'zh-CN',
        asoectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            src: "",
            type: "video/mp4"
          }
        ],
        poster: "https://gz.bcebos.com/v1/videoruyan/2019-01-24 (1).png",
      }
    }
  },
  beforeCreate () {
    var id = this.$route.params.id
    this.axios.post('/api/gaveVideo', { id: id }).then((result) => {
      this.playerOptions.sources[0].src = result.data.src
      this.playerOptions.sources[0].type = result.data.type
      console.log(this.playerOptions.sources)
    }).catch((err) => {
      console.log(err)
    });
    console.log(this.$refs)
  },
  methods: {
    onPlayerPlay (player) {
      console.log(player)
    }
  },
  computed: {
  },
}
</script>

<style>
.vjs-custom-skin {
  width: 100%;
}
</style>
