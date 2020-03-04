<template>
  <div>
    <center>这里不做界面优化了，可以通过一个界面收集相关页面,方便测试</center>
    <br>
    <iframe :src="src" :width="width" :height="height"></iframe>
    <br>
    <iframe :src="src2" :width="width" :height="height"></iframe>
    <br>
    <iframe :src="src3" :width="width" :height="height"></iframe>
  </div>
</template>
<script>
const _origin = location.origin;
const _basePath = _origin + "/public-chart/dist/index.html#";
export default {
  meta: {
    title: "集合"
  },
  data() {
    return {
      src: _basePath + "/echarts/line",
      src2: _basePath + "/antv/line",
      src3: _basePath + "/highcharts/line",
      width: "100%",
      height: 300
    };
  }
};
</script>
