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
      柱状色：
      <el-color-picker class="ver-m" v-model="color" @change="toRender"></el-color-picker>
      <span class="ver-m ml-5">{{color}}</span>
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
      <div>{{dom}}</div>
    </div>
    <div v-show="js">
      <div>js:</div>
      <div>{{js}}</div>
    </div>
  </div>
</template>
<script>
const _origin = location.origin + "/public-chart/dist";
const _basePath = _origin + "/charts/echarts/v1";
export default {
  meta: {
    title: "柱状图"
  },
  data() {
    return {
      src: _basePath + "/bar.html",
      width: "30%",
      height: "200",
      color: "#3398DB",
      keyColor: "#333",
      name: "访问量",
      list: `{"keys":["1月","2月","3月"],"values":[12,2,4]}`,

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

      const { keys, values } = JSON.parse(this.list);
      this.js = `
				onloadPage() {
					let keys = ${JSON.stringify(keys)},
						values = ${JSON.stringify(values)};
					this.$refs.ifa.contentWindow.postMessage(
						{
							name: '${this.name}',
							keys,
							values,
							option: { color: '${this.color}', keyColor: '${this.keyColor}' }
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
      const { keys, values } = JSON.parse(this.list);
      //
      this.$refs.ifa.contentWindow.postMessage(
        {
          name: this.name,
          keys,
          values,
          option: { color: this.color, keyColor: this.keyColor }
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