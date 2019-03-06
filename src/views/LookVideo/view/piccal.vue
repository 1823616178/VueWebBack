<template>
  <el-row type="flex"
          justify="center">
    <el-col span="15">
      <div class='player'>
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
                      @play="onPlayerPlay($event)"
                      @pause="onPlayerPause($event)"
                      @loadeddata="onPlayerLoadeddata($event)">
        </video-player>
      </div>
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
        poster: "",
        notSupportedMessage: '正在缓存，稍事等待',
      }
    }
  },
  beforeCreate () {
    // console.log(VueVideoPlayerADS)
  },
  created () {
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
      console.log('play' + player)
    },
    onPlayerLoadeddata (player) {
      console.log('load')
      console.log(player)
    },
    onPlayerPause (player) {
      console.log('pause' + player)
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
}
</script>

<style>
.vjs-custom-skin {
  width: 100%;
}
</style>
