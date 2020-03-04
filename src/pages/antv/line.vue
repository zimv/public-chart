<template>
  <div>
    <iframe :src="src" frameborder="0" ref="ifa" :width="width" :height="height" @load="onloadPage"></iframe>
    <center>这里不做封装，只是说明可以支持多库并存</center>
  </div>
</template>
<script>
const _origin = location.origin;
const _basePath = _origin + "/charts/antv";
export default {
  meta: {
    title: "折线图"
  },
  data() {
    return {
      src: _basePath + "/line.html",
      width: 300,
      height: 300
    };
  },
  methods: {
    onloadPage() {
      this.$refs.ifa.contentWindow.postMessage(
        {
          data: [
            { genre: "Sports", sold: 275 },
            { genre: "Strategy", sold: 115 },
            { genre: "Action", sold: 120 },
            { genre: "Shooter", sold: 350 },
            { genre: "Other", sold: 150 }
          ],
          position: "genre*sold",
          width: parseInt(this.width),
          height: parseInt(this.height)
        },
        this.src
      );
    }
  }
};
</script>

<style lang="less" scope>
.ver-m {
  vertical-align: middle;
}
.ml-5 {
  margin-left: 5px;
}
</style>