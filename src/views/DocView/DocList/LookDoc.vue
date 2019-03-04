<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle"
            v-loading.fullscreen.lock="fullscreenLoading">
      <el-col span="15">
        <h1 class="OnTitle">{{docTitle}}</h1>
      </el-col>
    </el-row>
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
      <el-col span="9">
        <el-slider v-model="spanHeight"
                   class="demonstration"
                   show-stops='true'
                   max="24"></el-slider>
        <p class="warnText">调整宽度</p>
      </el-col>
    </el-row>
    <el-row type="flex"
            justify="center"
            align="middle">
      <el-col span="10">
        <el-button plain><a :href="DocDownloadUrl"
             @click="onOPenButton">点击下载文档</a></el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data () {
    return {
      docUrl: '',
      docTitle: '',
      MSurl: 'https://view.officeapps.live.com/op/view.aspx?src=',
      spanHeight: 10,
      iframe: 500,
      DocDownloadUrl: '',
      DocType: '',
      fullscreenLoading: true
    }
  },
  created () {
    var id = this.$route.params.id
    console.log(id)
    this.axios.post('/api/getdocfile', { id: id }).then((result) => {
      if (result) {
        this.fullscreenLoading = false
        console.log(result)
        var doc = result.data.doc.image_uri
        this.docUrl = this.MSurl + doc
        this.docTitle = result.data.doc.title
        this.DocDownloadUrl = result.data.doc.image_uri
        let Docsplit = this.DocDownloadUrl.split(".")
        this.DocType = Docsplit.pop()
        console.log(DocType)
      }
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    onOPenButton (value) {
      this.$notify({
        title: '下载成功',
        message: '下载成功请前往文件夹查看',
        offset: 100
      });
    }
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
.OnTitle {
  position: relative;
  line-height: 40px;
}
.warnText {
  line-height: 5px;
  color: dimgrey;
}
</style>

