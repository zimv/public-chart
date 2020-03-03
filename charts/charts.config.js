module.exports = {
  //最初本来根据components里的文件夹命名来自动收集依赖和生成组件路径的，但是出现了@antv/g2，文件夹命名不能使用特殊字符，因此需要此配置
  //splitChunkTest指定一个正则，需要打包的三方图表库的依赖
  chartLibrary: [{
    dir: 'antv',/* charts/compontents中的文件夹 */
    libraryName: '@antv/g2',
    splitChunkTest: '[\\/]node_modules[\\/]@antv/g2',
    excludeComponents: ['base.js'] //排除一些不生成为静态资源图表组件的js
  },{
    dir: 'echarts',
    libraryName: 'echarts',
    splitChunkTest: '[\\/]node_modules[\\/](echarts|zrender)',//需要注意echarts依赖了zrender，所以需要公共打包到一起
    excludeComponents: ['base.js']
  },{
    dir: 'highcharts',
    libraryName: 'highcharts',
    splitChunkTest: '[\\/]node_modules[\\/]highcharts',
    excludeComponents: ['base.js']
  }]
}