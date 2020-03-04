# public_chart
Public chart service for front-end.

# 运行演示

[https://dashiren.cn/public-chart/dist/index.html][1]


# 本地开发运行
`npm run serve` 启动管理台

`npm run charts-dev` 启动charts组件库

# 打包部署

`npm run charts-build` 打包charts组件库，将会打包到管理台public文件夹中作为静态资源

`npm run build` 打包管理台

全局安装 `npm i -g serve`

运行 `serve -s dist` 可以在本地查看打包后的项目

# 项目说明
当前项目通过vue-cli建立，后台主要用于开发实例和文档界面。

根目录中的charts为图表组件，其有单独的webpack配置

因此可以当作是2个项目集合到了一起，项目在开发和打包阶段需要启动2个命令，对文档后台和图表库进行处理。
如果不想用当前的vue-cli来作为文档后台，可以把charts文件夹抽离出去，并在其中加入package.json，在其他的后台项目中，需要对devserver做下代理配置，参考vue.config.js
对charts打包出来的文件目录也需要修改，把组件库打包到后台项目的静态资源目录。

charts中的components子文件夹是以三方库划分，比如我们现在有3个文件夹，echarts、antv、highcharts，每个文件夹里面是需要封装的图表组件，一个js文件会打包成一个html变成一个iframe组件。本项目charts最终打包出来会放到public/charts中，可以自行查看打包出来的效果。/charts/charts.config.js主要用来做一些三方库的配置，具体可以看文件夹里的注释

# 博客地址
说明了方案的由来和详细情况
[https://www.cnblogs.com/1wen/p/12258884.html][2]

#### 老铁们来都来了，觉得不错的话，多多双击点赞666～

[1]: https://dashiren.cn/public-chart/dist/index.html#/
[2]: https://www.cnblogs.com/1wen/p/12258884.html