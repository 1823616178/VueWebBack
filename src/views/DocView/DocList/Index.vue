<template>
  <div>
    <el-row type="flex"
            justify="center"
            align="middle"
            v-loading.fullscreen.lock="fullscreenLoading"
            element-loading-spinner="el-icon-loading"
            element-loading-text="别着急好戏在后头">
      <el-col span="15">
        <el-card class="box-card"
                 span="15">
          <div v-for="(item,index) in List"
               :key="index">
            <el-card span="10"
                     class="DocListCard">
              <el-button type="text"
                         :ref="item.id"
                         @click='GetDocMeth(item,id)'
                         class="el-buttonView">{{item.title}}</el-button>
            </el-card>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex"
            justify="center"
            align="middle">
      <el-pagination :page-size="10"
                     layout="prev, pager, next"
                     :total="page_mix"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullscreenLoading: true,
      List: [],
      hrefUrl: '',
      page_mix: '',
      page_now: 0,
      year: '',
    }
  },
  created () {
    this.year = this.$route.params.id
    this.axios.post('/api/doclist', { id: this.year, page: this.page_now }).then((result) => {
      console.log(result)
      if (result) {
        this.fullscreenLoading = false
        this.List = result.data.docList
        this.page_mix = result.data.amount
      }
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    GetDocMeth (value) {
      console.log(value)
      this.$router.push({
        path: '/doc/doclist/docWiew/' + value.id
      })
    },
    handleCurrentChange (val) {
      var id = val
      this.axios.post('/api/doclist', { id: this.year, page: val }).then((result) => {
        this.List = result.data.docList
      }).catch((err) => {

      });
    },
    handleSizeChange (val) {
      console.log(val)
    }
  }
}
</script>

<style>
.box-card {
  position: relative;
}
.el-buttonView {
  position: relative;
  width: 80%;
}
.DocListCard {
  position: relative;
  line-height: 20px;
}
</style>
