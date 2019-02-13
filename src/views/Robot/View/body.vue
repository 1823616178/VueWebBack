<template>
  <el-col class="htmleaf-header">
    <div id="wrap">
      <a href="#"
         class="hb">
        <div class="c">
          <img src="../../../plugins/whirligig/images/1.jpg"
               alt="" />
          <div class="txt">
            <h1>Title here</h1>
            <p>Some longer text here thats wide enough to span on several lines.</p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="../../../plugins/whirligig/images/1.jpg"
             alt="" />
      </div>
      <a href="#"
         class="hb">
        <div class="c">
          <img src="../../../plugins/whirligig/images/2.jpg"
               alt="" />
          <div class="txt">
            <h1>Title here</h1>
            <p>Some longer text here thats wide enough to span on several lines.</p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="../../../plugins/whirligig/images/2.jpg"
             alt="" />
      </div>
      <a href="#"
         class="hb">
        <div class="c">
          <img src="../../../plugins/whirligig/images/3.jpg"
               alt="" />
          <div class="txt">
            <h1>Title here</h1>
            <p>Some longer text here thats wide enough to span on several lines.</p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="../../../plugins/whirligig/images/3.jpg"
             alt="" />
      </div>
      <a href="#"
         class="hb">
        <div class="c">
          <img src="../../../plugins/whirligig/images/4.jpg"
               alt="" />
          <div class="txt">
            <h1>Title here</h1>
            <p>Some longer text here thats wide enough to span on several lines.</p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="../../../plugins/whirligig/images/4.jpg"
             alt="" />
      </div>
    </div>
  </el-col>
</template>

<script>
// import $ from '../../../plugins/whirligig/js/jquery-1.11.0.min.js'
import $ from 'jQuery'
export default {
  created () {
    $(document).ready(function () {
      var docWidth = $('body').width(),
        $wrap = $('#wrap'),
        $images = $('#wrap .hb'),
        slidesWidth = $wrap.width();

      $(window).on('resize', function () {
        docWidth = $('body').width();
        slidesWidth = $wrap.width();
      })

      $(document).mousemove(function (e) {
        var mouseX = e.pageX,
          offset = mouseX / docWidth * slidesWidth - mouseX / 2;

        $images.css({
          '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
          'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
      });
    })
  }
}
</script>

<style>
@import url("../../../plugins/whirligig/css/htmleaf-demo.css");
@import url("../../../plugins/whirligig/css/style.css");
</style>
