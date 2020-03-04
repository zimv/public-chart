<template>
  <div>
    <iframe :src="src" frameborder="0" ref="ifa" :width="width" :height="height" @load="onloadPage"></iframe>
    <center>这里不做封装，只是说明可以支持多库并存</center>
  </div>
</template>
<script>
const _origin = location.origin + "/public-chart/dist";
const _basePath = _origin + "/charts/highcharts";
export default {
  meta: {
    title: "折线图"
  },
  data() {
    return {
      src: _basePath + "/line.html",
      width: "50%",
      height: "300"
    };
  },
  methods: {
    onloadPage() {
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