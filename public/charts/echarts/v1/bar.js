/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"echarts/v1/bar": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./charts/components/echarts/v1/bar.js","echarts"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./charts/components/echarts/base.js":
/*!*******************************************!*\
  !*** ./charts/components/echarts/base.js ***!
  \*******************************************/
/*! exports provided: onMessage, createChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onMessage\", function() { return onMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChart\", function() { return createChart; });\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n//因为在做webpack配置的时候，把三方库作为公共包了，这里引入会导致三方库被再次打包到组件里，不要import引入\n\n//监听页面放大缩小\nwindow.addEventListener('resize', onResize);\n\nlet resizeTimeout;\nlet $chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(document.getElementById('chart'));\n\nfunction onResize() {\n\tclearTimeout(resizeTimeout);\n\tconsole.log('resize');\n\tconsole.log(document.body.clientWidth);\n\tresizeTimeout = setTimeout(() => {\n\t\t$chart.resize();\n\t}, 500);\n}\n\nconst onMessage = receiveMessage => {\n\twindow.addEventListener('message', receiveMessage);\n};\nfunction createChart(option) {\n\t$chart.setOption(option, true);\n}\n\n\n//# sourceURL=webpack:///./charts/components/echarts/base.js?");

/***/ }),

/***/ "./charts/components/echarts/v1/bar.js":
/*!*********************************************!*\
  !*** ./charts/components/echarts/v1/bar.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./charts/components/echarts/base.js\");\n\n\nObject(_base__WEBPACK_IMPORTED_MODULE_0__[\"onMessage\"])(e => {\n\tconsole.log(e);\n\tconst { name, keys, values, option } = e.data;\n\t//加强判断，避免webpack等其它数据\n\tif (!keys || !values) return;\n\tconst opt = setOption(name, keys, values, option || {});\n\tObject(_base__WEBPACK_IMPORTED_MODULE_0__[\"createChart\"])(opt);\n});\nconsole.log(1);\n//默认配置\nconst _defaultOpt = {\n\tcolor: ['#3398DB'],\n\tkeyColor: '#333'\n};\nfunction setOption(name, keys, values, customOption) {\n\tlet _color = customOption.color || _defaultOpt.color;\n\tlet _keyColor = customOption.keyColor || _defaultOpt.keyColor;\n\n\tlet option = {\n\t\tcolor: _color,\n\t\tgrid: {\n\t\t\tleft: 0,\n\t\t\ttop: '10%',\n\t\t\tright: 0,\n\t\t\tbottom: '15%'\n\t\t},\n\t\ttooltip: {\n\t\t\ttrigger: 'item',\n\t\t\tformatter: '{a}: {c}'\n\t\t},\n\t\txAxis: [\n\t\t\t{\n\t\t\t\ttype: 'category',\n\t\t\t\tdata: keys,\n\t\t\t\taxisLine: {\n\t\t\t\t\tshow: false\n\t\t\t\t},\n\t\t\t\taxisTick: {\n\t\t\t\t\tshow: false\n\t\t\t\t},\n\t\t\t\taxisLabel: {\n\t\t\t\t\tcolor: _keyColor\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t\tyAxis: [\n\t\t\t{\n\t\t\t\tshow: false,\n\t\t\t\taxisLine: {\n\t\t\t\t\tshow: true\n\t\t\t\t},\n\t\t\t\taxisTick: {\n\t\t\t\t\tshow: true\n\t\t\t\t},\n\t\t\t\ttype: 'value'\n\t\t\t}\n\t\t],\n\t\tseries: [\n\t\t\t{\n\t\t\t\tlabel: {\n\t\t\t\t\tposition: 'top',\n\t\t\t\t\tshow: true,\n\t\t\t\t\tformatter: '{c}',\n\t\t\t\t\tcolor: _color\n\t\t\t\t},\n\t\t\t\tname: name,\n\t\t\t\ttype: 'bar',\n\t\t\t\tdata: values\n\t\t\t}\n\t\t]\n\t};\n\toption = Object.assign({}, option, customOption);\n\treturn option;\n}\n\n\n//# sourceURL=webpack:///./charts/components/echarts/v1/bar.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });