const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();
const fs = require('fs');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const _componentsPath = path.resolve(cwd, 'charts/components');


const join = require('path').join;

//收集组件库和需要输出的组件
function collectFiles(dirPath){
		let chartsLibrary = [];
    function findFile(path, lib){
        let dirFiles = fs.readdirSync(path);
        dirFiles.forEach(function (item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
							let currentLib = null;
							//如果是commponent的子文件夹，名称就是我们的图表库（约定）
							if(_componentsPath == path){
								currentLib = {
									libraryName: item,
									files: []
								}
								chartsLibrary.push(currentLib);
							}
							findFile(fPath, currentLib || lib);
            }
            if (stat.isFile() === true) {
							//base作为基础代码，不被作为我们输出的组件,所以排除
							if(fPath.indexOf('base.js') == -1 && lib){
								lib.files.push(fPath.replace(dirPath, ''));
							}
						}
        });
    }
		findFile(dirPath);
    return chartsLibrary;
}
 
module.exports = () => {
	let entrys = {},
		HtmlWebpackPlugins = [],
		cacheGroups = {};
	const chartsLibrary = collectFiles(_componentsPath);
	console.log(chartsLibrary)
	chartsLibrary.forEach(lib => {
		cacheGroups[lib.libraryName] = {
			test: /[\\/]node_modules[\\/]/,
			chunks: 'all',
			enforce: true,
			priority: 10,
			name: lib.libraryName
		}
		lib.files.forEach(item => {
			let name = item.split('.')[0];
			if(name[0] == '/') name = name.slice(1);
			console.log(name)
			entrys[name] = path.resolve(cwd, 'charts/components/' + item);
			HtmlWebpackPlugins.push(
				new HtmlWebpackPlugin({
					filename: `${name}.html`,
					template: path.resolve(cwd, 'charts/index.html'),
					chunks: [name, lib.libraryName]
				})
			);
		});
	});
	console.log(entrys)
	//console.log(HtmlWebpackPlugins)

	return {
		mode: 'development',
		//mode: 'production',
		entry: {
			'echarts': 'echarts',
			...entrys,
		},
		stats: 'errors-only',
		output: {
			path: path.resolve(cwd, 'dist/charts'),
			filename: '[name].js'
		},
		optimization:{
			splitChunks: {
				cacheGroups: {
					...cacheGroups
				}
			}
		},
		// externals:{
		// 	echarts: 'echarts'
		// },
		plugins: [
			...HtmlWebpackPlugins
		]
	};
};
