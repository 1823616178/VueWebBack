
<template>
  <el-row>
    <el-col span="24">
      <el-carousel :interval="5000"
                   arrow="always">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <div class="block">
      <el-cascader placeholder="试试搜索：指南"
                   :options="options"
                   filterable></el-cascader>
    </div>
    <div>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>
      <el-table ref="filterTable"
                :data="tableData"
                style="width: 100%">
        <el-table-column prop="date"
                         label="日期"
                         sortable
                         width="180"
                         column-key="date"
                         :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                         :filter-method="filterHandler">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         :formatter="formatter">
        </el-table-column>
        <el-table-column prop="tag"
                         label="标签"
                         width="100"
                         :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                         :filter-method="filterTag"
                         filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'zhinan',
        label: '小学',
        children: [{
          value: 'yinianji',
          label: '一年级',
        },
        {
          value: 'yinianji',
          label: '二年级',
        },
        {          value: 'yinianji',
          label: '三年级',
        },
        {
          value: 'yinianji',
          label: '四年级',
        },
        {
          value: 'yinianji',
          label: '五年级',
        },
        {
          value: 'yinianji',
          label: '六年级',
        }]
      }],
      cardimg: [],
      value4: null
    }
  },
  created () {
    this.axios.post('/api/cardimg', { token: "sun" }).then((result) => {
      // this.options = result.data.name
      // this.year = result.data.year
      this.cardimg = result.data
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style>
.Viewrow {
  display: inline-block;
}
.bg-purple {
  background-color: #666;
}
.list-m {
  margin: 0px 50px;
  margin-top: 10px;
  margin-left: 17px;
  display: inline-block;
  vertical-align: top;
}
.title1 {
  letter-spacing: 1px;
  font-size: 17px;
  height: 40px;
  line-height: 40px;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  display: flex;
}
.stitle {
  font-size: 14px;
  height: 40px;
  line-height: 20px;
  color: #666;
  display: flex;
  width: 300px;
  overflow: hidden;
}
.list-r {
}
.mfst {
  position: relative;
  text-align: center;
  margin-left: 6px;
  color: #fe9900;
  cursor: pointer;
}
.ksz {
  margin-top: 30px;
  display: flex;
}
.class-img {
  width: 260px;
  height: 156px;
  position: relative;
}
.list {
  height: 155px;
  border-bottom: 1px dashed #aaaaaa;
  padding: 16px 0px;
  /* display: flex; */
}
.ViewBox1 {
  border: 1px solid #f2f2f2;
  height: 500px;
  /* display: flex; */
}
.fontView {
  position: initial;
  width: 20px;
  height: 10px;
}

.SelectView {
  width: 100%;
  margin-right: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
