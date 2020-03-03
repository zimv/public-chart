const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chartsConfig = require('./charts.config');
const cwd = process.cwd();
const fs = require('fs');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const _componentsPath = path.resolve(cwd, 'charts/components');


const join = require('path').join;

//收集组件库和需要输出的组件
function collectFiles(){
    function findFile(path, lib){
        let dirFiles = fs.readdirSync(path);
        dirFiles.forEach(function (item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
							findFile(fPath, lib);
            }
            if (stat.isFile() === true) {
							//base作为基础代码，不被作为我们输出的组件,所以排除
							if(!lib.excludeComponents.some(item=>{
								return fPath.includes(item)
							})){
								lib.files.push(fPath.replace(_componentsPath, ''));
							}
						}
        });
    }

		let chartsLibrary = [];
		chartsConfig.chartLibrary.forEach(lib=>{
			let currentLib = {
				...lib,
				files: []
			};
			chartsLibrary.push(currentLib);
			findFile(`${_componentsPath}/${lib.dir}`, currentLib);
		})
    return chartsLibrary;
}
 
module.exports = () => {
	let libraryEntrys = {},
		entrys = {},
		HtmlWebpackPlugins = [],
		cacheGroups = {};
	const chartsLibrary = collectFiles();
	//console.log(chartsLibrary)
	chartsLibrary.forEach(lib => {
		cacheGroups[lib.libraryName] = {
			chunks: "all",
			test: new RegExp(lib.splitChunkTest),
			name: lib.libraryName, //分隔出来的 chunk 名称
			priority: 20,
			minChunks: 1
		}
		libraryEntrys[lib.libraryName] = lib.libraryName;
		lib.files.forEach(item => {
			let name = item.split('.')[0];
			if(name[0] == '/') name = name.slice(1);
			//console.log(name)
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
	//console.log(entrys)
	//console.log(HtmlWebpackPlugins)
	//console.log(libraryEntrys)
	console.log(cacheGroups)
	return {
		mode: 'development',
		//mode: 'production',
		entry: {
			...libraryEntrys,
			...entrys,
		},
		stats: 'errors-only',
		output: {
			path: path.resolve(cwd, 'public/charts'),
			filename: '[name].js'
		},
		optimization:{
			splitChunks: {
				// chunks (chunk) {
				// 	console.log(chunk.name)
				// 	return chunk.name!='highcharts' && chunk.name!='echarts' && chunk.name!='@antv/g2';
				// },
				cacheGroups: {
					...cacheGroups
				}
			}
		},
		plugins: [
			...HtmlWebpackPlugins
		]
	};
};

