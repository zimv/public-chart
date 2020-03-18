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
      刻度名色：
      <el-color-picker class="ver-m" v-model="keyColor" @change="toRender"></el-color-picker>
      <span class="ver-m ml-5">{{keyColor}}</span>
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
const _origin = location.origin + "/public-chart/dist";
const _basePath = _origin + "/charts/echarts/v1";
export default {
  meta: {
    title: "堆叠柱状图"
  },
  data() {
    return {
      src: _basePath + "/stack-bar.html",
      width: "30%",
      height: "200",
      keyColor: "#333",
      list: `{"keys":["成都","北京","上海"],"stacks":[{"stack":1,"name":"中医馆","color":"#49bf85","data":[1,2,3]},{"stack":1,"name":"手术中心","color":"#3398db","data":[4,5,6]},{"stack":1,"name":"诊所","color":"#f05654","data":[10,11,12]}]}`,

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
      const list = JSON.parse(this.list);
      const keys = JSON.stringify(list.keys),
        stacks = JSON.stringify(list.stacks);
      this.js = `
				onloadPage() {
					let keys = ${keys},
						stacks = ${stacks};
					this.$refs.ifa.contentWindow.postMessage(
						{
							keys,
							stacks,
							option: { keyColor: ${this.keyColor} }
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
      const { keys, stacks } = JSON.parse(this.list);

      this.$refs.ifa.contentWindow.postMessage(
        {
          keys,
          stacks,
          option: { keyColor: this.keyColor }
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