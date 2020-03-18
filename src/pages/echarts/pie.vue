<template>
  <div>
    <iframe :src="src" frameborder="0" ref="ifa" :width="width" :height="height" @load="onloadPage"></iframe>
    <div>
      宽：
      <el-input class="inline-form" v-model="width"></el-input>
    </div>
    <div>
      高：
      <el-input class="inline-form" v-model="height"></el-input>
    </div>
    <div>
      名称：
      <el-input class="inline-form" v-model="name" placeholder="名称"></el-input>
    </div>
    <div>
      数据：
      <el-input type="textarea" class="inline-form" v-model="list" placeholder="数据"></el-input>
      <el-button type="text" @click="toRender">更新数据</el-button>
    </div>
    <el-button type="text" @click="renderCoder">生成代码</el-button>
    <div v-show="dom">
      <div>dom:</div>
      <pre v-html="$prismJs(dom)"></pre>
    </div>
    <div v-show="js">
      <div>js:</div>
      <pre v-html="$prismJs(js)"></pre>
    </div>
  </div>
</template>
<script>
const _origin = location.origin;
const _basePath = _origin + "/charts/echarts/v1";
export default {
  meta: {
    title: "饼状图"
  },
  data() {
    return {
      src: _basePath + "/pie.html",
      width: "50%",
      height: "300",
      name: "发烧病例",
      list: `[{"value":"9","name":"1月","color":"#49bf85"},{"value":"12","name":"2月","color":"#3398db"},{"value":"4","name":"3月","color":"#f05654"}]`,

      dom: "",
      js: ""
    };
  },
  methods: {
    renderCoder() {
      this.dom = `
				<iframe
					src="${this.src}"
					frameborder="0"
					ref="ifa"
					width="${this.width}"
					height="${this.height}"
					@load="onloadPage"
				></iframe>
			`;
      this.js = `
				onloadPage() {
					let values = ${this.list};
					this.$refs.ifa.contentWindow.postMessage(
						{
							name: '${this.name}',
							values,
							option: { }
						},
						'${this.src}'
					);
				}
			`;
    },
    toRender() {
      this.onloadPage();
    },
    onloadPage() {
      let values = JSON.parse(this.list);
      //
      this.$refs.ifa.contentWindow.postMessage(
        {
          name: this.name,
          values,
          option: {}
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