<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle">
      <el-slider v-model="iframe"
                 vertical
                 max="1000"
                 height="200px"
                 class="blockSlider">
      </el-slider>
      <el-col :span="spanHeight">
        <iframe align="middle"
                frameborder="1"
                width="100%"
                :height="iframe"
                class="iframeView"
                :src="docUrl"></iframe>
      </el-col>
    </el-row>
    <el-row type="flex"
            justify="center">
      <el-col span="15">
        <el-slider v-model="spanHeight"
                   class="demonstration"
                   show-stops='true'
                   max="24"></el-slider>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data () {
    return {
      docUrl: '',
      MSurl: 'https://view.officeapps.live.com/op/view.aspx?src=',
      spanHeight: 10,
      iframe: 900
    }
  },
  created () {
    var id = this.$route.params.id
    console.log(id)
    this.axios.post('/api/getdocfile', { id: id }).then((result) => {
      console.log(result)
      var doc = result.data.doc.image_uri
      this.docUrl = this.MSurl + doc
      console.log(this.docUrl)
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
  }

}
</script>

<style>
.buttonIndexCss {
  position: relative;
  z-index: 989;
}
.iframeView {
  position: relative;
}
.demonstration {
  position: relative;
}
.blockSlider {
  position: absolute;
  top: 100px;
}
</style>

