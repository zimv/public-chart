const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const cwd = process.cwd();
const port = 9092;
const config = require('./webpack.base');

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.resolve(cwd, 'charts/components'), {
	ignoreInitial: true
});

watcher.on('add', start);

let server;
let compiler;
function start() {
	if (server) server.close();
	console.log(123);
	compiler = webpack(config());
	server = new webpackDevServer(compiler, {
		contentBase: path.resolve(cwd, 'charts/components'),
		watchContentBase: true,
		compress: true,
		port: 9092
	});

	server.listen(port, 'localhost', () => {
		console.log(`dev server listening on port ${port}`);
	});
}
start();
