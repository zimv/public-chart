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
const _origin = location.origin;
const _basePath = _origin + "/charts/highcharts";
export default {
  meta: {
    title: "折线图"
  },
  data() {
    return {
      src: _basePath + "/line.html",
      width: "50%",
      height: "300",
      list: `{"keys":["成都","北京","上海"],"lines":[{"name":"中医馆","color":"#49bf85","data":[1,2,3]},{"name":"手术中心","color":"#3398db","data":[4,5,6]},{"name":"诊所","color":"#f05654","data":[10,11,12]}]}`,

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

      const { lines, keys } = JSON.parse(this.list);
      this.js = `
				onloadPage() {
					let keys = ${JSON.stringify(keys)},
						lines = ${JSON.stringify(lines)};
					
					this.$refs.ifa.contentWindow.postMessage(
						{
							keys,
							lines,
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
      const { lines, keys } = JSON.parse(this.list);
      this.$refs.ifa.contentWindow.postMessage(
        {
          option: {
            chart: {
              type: "bar"
            },
            title: {
              text: "各洲不同时间的人口条形图"
            },
            subtitle: {
              text: "数据来源: Wikipedia.org"
            },
            xAxis: {
              categories: ["非洲", "美洲", "亚洲", "欧洲", "大洋洲"],
              title: {
                text: null
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: "人口总量 (百万)",
                align: "high"
              },
              labels: {
                overflow: "justify"
              }
            },
            tooltip: {
              valueSuffix: " 百万"
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: true,
                  allowOverlap: true // 允许数据标签重叠
                }
              }
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "top",
              x: -40,
              y: 100,
              floating: true,
              borderWidth: 1,
              shadow: true
            },
            series: [
              {
                name: "1800 年",
                data: [107, 31, 635, 203, 2]
              },
              {
                name: "1900 年",
                data: [133, 156, 947, 408, 6]
              },
              {
                name: "2008 年",
                data: [973, 914, 4054, 732, 34]
              }
            ]
          }
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